"""Preservation, sources, Markdown, isolation, links and public-output checks."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import hashlib, json, re, sys
from build import ROOT, SITE, read, merge_course

def facts(v,path=''):
    result=set()
    if isinstance(v,dict):
        for k,x in v.items():result.update(facts(x,path+'/'+k))
    elif isinstance(v,list):
        for x in v:result.update(facts(x,path+'[]'))
    else:result.add(hashlib.sha256((path+'|'+json.dumps(v,ensure_ascii=False,sort_keys=True)).encode()).hexdigest())
    return result

def check():
    report={}
    for number in ['882','985']:
        cfg,packets,course=merge_course(number)
        assert read(SITE/number/'course-data.json')==course,'Published data differs from merger'
        ids=[e['id'] for e in course['entries']];assert len(ids)==len(set(ids))
        assert course['course']=='CSIT'+number
        ledger=read(ROOT/f'migration/{number}-baseline.json')
        index={e['id']:e for e in course['entries']}
        for ident,required in ledger['entries'].items():
            assert ident in index,'Stable ID removed: '+ident
            assert set(required)<=facts(index[ident]),'Old content lost: '+index[ident]['term']
        assert set(ledger['metadataFacts'])<=facts({k:v for k,v in course.items() if k not in ['entries','updated']}),'Source issues or compatibility metadata lost'
        for p in packets:
            assert (ROOT/f'data/{number}/weeks/{p["week"]}.md').read_text()==(SITE/number/'weeks'/f'{p["week"]}.md').read_text()
            for raw in p['entries']:
                assert raw['id'] and raw['legacyIds'] and raw['term']
                assert raw['category'] in (['technical','reading'] if number=='882' else ['专业英语','阅读词汇'])
                if number=='882':
                    for m in raw['meanings']:
                        assert m['zh'] and m['simpleEnglish'] and m['references']
                        for r in m['references']:
                            assert r['name'] and r['location']
                            assert r.get('page') or r.get('line') or r.get('location')
                else:
                    assert raw['zh'] and raw['en'] and raw['sources']
                    for s in raw['sources']:
                        assert s['file'] and s['kind'] in ['pdf','txt']
                        assert s.get('pages') if s['kind']=='pdf' else s.get('line') and s.get('character')
        report[number]=dict(entries=len(ids),oldEntriesPreserved=len(ledger['entries']),
                            baselineExactSnapshot=hashlib.sha256(json.dumps(course,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==ledger['snapshotSHA256'],
                            weeks=cfg['weeks'],retiredEntries=len(course.get('retiredEntries',[])),
                            legacyEntries=len(course.get('legacyEntries',[])),importMappings=len(course.get('importMappings',[])),
                            sourceAndMeaningFactsPreserved=True)
    assert set(read(ROOT/'data/882/course.json')['storageKeys']).isdisjoint(read(ROOT/'data/985/course.json')['storageKeys'])
    allowed={'.html','.css','.js','.json','.md',''}
    # Scan source, rules, data and public output, not private/ignored local folders or Git internals.
    for base in [ROOT/'data',ROOT/'web',ROOT/'rules',ROOT/'migration',SITE]:
        for p in base.rglob('*'):
            if not p.is_file():continue
            assert p.suffix in allowed,'Forbidden public file: '+str(p.relative_to(ROOT))
            text=p.read_text()
            assert not re.search(r'/Users/|/private/(?:tmp|var)/|file://|[A-Za-z]:\\Users\\',text),'Local path exposed: '+str(p.relative_to(ROOT))
            if SITE in p.parents and p.suffix in ['.html','.js','.css']:assert not re.search(r'@@[A-Z_]+@@',text),'Unfilled site placeholder'
    for p in SITE.rglob('*.html'):
        for value in re.findall(r'(?:href|src)="([^"]+)"',p.read_text()):
            url=urlsplit(value)
            if url.scheme or value.startswith('#'):continue
            target=(p.parent/unquote(url.path)).resolve()
            if url.path.endswith('/'):target=target/'index.html'
            assert target.is_file(),'Broken local link: '+str(p.relative_to(SITE))+' -> '+value
    (SITE/'validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print('PASS: old field-level content, stable IDs, senses, sources, source issues and compatibility records preserved.')
    print('PASS: readable weekly JSON/MD agree, course storage keys are isolated, site links resolve, no raw materials or local paths in public files.')
    return report

if __name__=='__main__':check()
