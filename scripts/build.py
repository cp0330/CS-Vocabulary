"""Deterministic weekly merge, Markdown export and GitHub Pages build. Stdlib only."""
from pathlib import Path
import copy, hashlib, html, json, re, shutil

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'_site'

def read(p):return json.loads(p.read_text())
def write(p,text):
    p.parent.mkdir(parents=True,exist_ok=True)
    if not p.exists() or p.read_text()!=text:p.write_text(text)
def dump(p,v):write(p,json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def digest(s):return hashlib.sha256(s.encode()).hexdigest()[:12]
def unique(items):
    result=[]
    for v in items:
        if v not in result:result.append(copy.deepcopy(v))
    return result
def clean(e):return {k:copy.deepcopy(v) for k,v in e.items() if not k.startswith('_') and k!='mergeKey'}
def identity(e):return e.get('mergeKey') or e['category']+'|'+re.sub(r'\s+',' ',e['term'].strip()).casefold()

def merge_882(a,b):
    if a==b:return a
    for k in ['weeks','lectures','aliases','legacyIds']:a[k]=unique(a.get(k,[])+b.get(k,[]))
    for incoming in b['meanings']:
        # Conditions and explanations are part of a sense, never discard them to deduplicate.
        base={k:v for k,v in incoming.items() if k not in ['references','definitions','excerpts','rawSources','usageNotes','contexts']}
        match=next((m for m in a['meanings'] if {k:v for k,v in m.items() if k not in ['references','definitions','excerpts','rawSources','usageNotes','contexts']}==base),None)
        if match is None:a['meanings'].append(copy.deepcopy(incoming))
        else:
            for k in ['references','definitions','excerpts','rawSources','usageNotes']:
                if k in incoming:match[k]=unique(match.get(k,[])+incoming[k])
            if 'contexts' in match or 'contexts' in incoming:
                match['contexts']=unique(match.get('contexts',[{'week':match['week'],'lecture':match['lecture']}])+incoming.get('contexts',[{'week':incoming['week'],'lecture':incoming['lecture']}]))
    return a

def merge_985(a,b):
    if a==b:return a
    for k in ['weeks','lectures','lectureTitles','topics','legacyIds','originals','sources','occurrences','definitionStatusHistory']:
        if k in a or k in b:a[k]=unique(a.get(k,[])+b.get(k,[]))
    if any(a.get(k)!=b.get(k) for k in ['en','zh','basis','structure','definitionStatus','formalDefinition']):
        # The original display remains stable; a new sense/use keeps every differing field.
        occurrence={k:copy.deepcopy(v) for k,v in b.items() if k not in ['id','legacyIds','weeks','lectures','lectureTitles','topics','category','type','occurrences']}
        a['occurrences']=unique(a['occurrences']+[occurrence])
    return a

def merge_course(number):
    cfg=read(ROOT/f'data/{number}/course.json')
    packets=[]
    for week in cfg['weeks']:
        p=read(ROOT/f'data/{number}/weeks/{week}.json')
        assert p['course']==cfg['course'] and p['week']==week,week
        packets.append(p)
    candidates=sorted([e for p in packets for e in p['entries']],key=lambda e:e.get('_order',10**9))
    merged={}
    for raw in candidates:
        e=clean(raw);key=identity(raw)
        target=cfg['stableIds'].get(key,e['id'])
        assert e['term'] and e['category'] and e['id']
        incoming_id=e['id'];e['id']=target
        e['legacyIds']=unique(e.get('legacyIds',[incoming_id])+([incoming_id] if incoming_id!=target else []))
        if key not in merged:merged[key]=e
        else:
            assert merged[key]['category']==e['category'],'Cannot merge different categories'
            merged[key]=(merge_882 if number=='882' else merge_985)(merged[key],e)
    course=copy.deepcopy(cfg['metadata']);course['entries']=list(merged.values())
    if number=='882':
        course['issues']=[clean(i) for i in sorted([i for p in packets for i in p.get('issues',[])],key=lambda i:i.get('_order',10**9))]
    else:
        course['notes']={str(int(re.search(r'\d+',p['week'])[0])):p.get('notes',[]) for p in packets}
        for field in ['legacyEntries','retiredEntries','importMappings']:
            course[field]=unique(clean(e) for e in sorted([e for p in packets for e in p.get(field,[])],key=lambda e:e.get('_order',10**9)))
    return cfg,packets,course

def ref882(r):return r['name']+' · '+r['location']
def ref985(r):
    if r['kind']=='pdf':return r['file']+' · PDF页'+','.join(map(str,r['pages']))+' / 幻灯片'+','.join(map(str,r['slides']))+('（图表）' if r.get('figure') else '')
    return r['file']+f" · TXT原始L{r['line']}，本行字符{r['character']}起"+('；搜索“'+r['anchor']+'”' if r.get('anchor') else '')
def paragraph(label,text):return [('**'+label+'：** '+str(text)).rstrip(),'']
def quote(text):return ['> '+str(text).replace('\n','\n> '),'']

def md_entry(e,number):
    out=['### '+e['term'],'']+paragraph('稳定ID',e['id'])+paragraph('类别',e['category'])
    if number=='882':
        for m in e['meanings']:
            out+=paragraph('中文解释',m['zh'])+paragraph('简单英文（整理解释）',m['simpleEnglish'])+paragraph('必要说明',m['note'])+paragraph('说明依据',m['basis'])
            for d in m['definitions']:out+=paragraph('课件原文定义',d['label'])+quote(d['text'])+paragraph('定义来源','；'.join(map(ref882,d['references'])))
            if not m['definitions']:out+=paragraph('定义状态','当前资料未给出正式定义；原文原则／描述另列。')
            for q in m['excerpts']:out+=paragraph('原文短句／描述',q['label'])+quote(q['text'])+paragraph('原文来源','；'.join(map(ref882,q['references'])))
            for u in m.get('usageNotes',[]):
                out+=paragraph('补充语境',u['zh'])+paragraph('补充说明',u.get('note',''))
                if u.get('simpleEnglish'):out+=paragraph('补充英文',u['simpleEnglish'])
                if u.get('references'):out+=paragraph('补充来源','；'.join(map(ref882,u['references'])))
            out+=paragraph('全部来源','；'.join(map(ref882,m['references'])))
    else:
        out+=paragraph('中文解释',e['zh'])+paragraph('简单英文（整理解释）',e['en'])+paragraph('说明依据',e['basis'])
        if e.get('definitionStatus'):out+=paragraph('定义状态',e['definitionStatus'])
        elif not e.get('formalDefinition'):out+=paragraph('定义状态','当前资料未给出正式定义')
        for q in e.get('originals',[]):out+=paragraph('资料原文',q['role'])+quote(q['text'])+paragraph('原文来源',ref985(q['source']))
        for o in e.get('occurrences',[]):
            out+=paragraph('语境',f"Week{o['week']} · {o.get('term',e['term'])}")+paragraph('语境英文',o['en'])+paragraph('语境中文',o['zh'])+paragraph('语境依据',o['basis'])
            if o.get('structure'):out+=paragraph('使用结构',o['structure'])
            for q in o.get('originals',[]):out+=paragraph('语境原文',q['role'])+quote(q['text'])+paragraph('语境原文来源',ref985(q['source']))
            out+=paragraph('语境来源','；'.join(map(ref985,o['sources'])))
        if e.get('structure'):out+=paragraph('使用结构',e['structure'])
        out+=paragraph('全部来源','；'.join(map(ref985,e['sources'])))
    return out

def weekly_md(packet,number):
    out=[f"# {packet['course']} {packet['week']} 词汇",'',
         '由本周可读JSON自动生成。原文与整理说明分开；跨周条目保留全部来源和不同义项。原PDF及完整录音TXT不在网站中。','',
         '## 重要疑点与来源限制','']
    for i in packet.get('issues',[]):out+=['### '+i['title'],'']+paragraph('位置',i['source'])+paragraph('说明',i['detail'])
    for n in packet.get('notes',[]):out+=paragraph('位置','PDF页'+','.join(map(str,n['pages'])) if n['pages'] else 'TXT')+paragraph('说明',n['text'])
    for cat in (['technical','reading'] if number=='882' else ['专业英语','阅读词汇']):
        out+=['## '+{'technical':'专业英语','reading':'阅读词汇'}.get(cat,cat),'']
        for e in packet['entries']:
            if e['category']==cat:out+=md_entry(e,number)
    if packet.get('retiredEntries'):
        out+=['## 旧收藏保留项（不进入网页默认列表）','']
        for e in packet['retiredEntries']:out+=md_entry(e,number)
    if packet.get('legacyEntries'):
        out+=['## 历史词组兼容说明','']
        for e in packet['legacyEntries']:
            out+=['### '+e['term'],'']+paragraph('旧ID',e['id'])+paragraph('中文',e['zh'])+paragraph('简单英文',e['en'])+paragraph('来源','；'.join(map(ref985,e['sources'])))
    return '\n'.join(out)

def build():
    # Publish only freshly generated allowlisted site files, never the repository tree.
    if SITE.exists():shutil.rmtree(SITE)
    SITE.mkdir()
    write(SITE/'.nojekyll','')
    write(SITE/'index.html',(ROOT/'index.html').read_text())
    write(SITE/'style.css',(ROOT/'web/style.css').read_text())
    summary={}
    for number in ['882','985']:
        cfg,packets,course=merge_course(number)
        text=json.dumps(course,ensure_ascii=False,indent=2)+'\n'
        app=(ROOT/f'web/{number}/app.js').read_text().replace('@@DATA_HASH@@',digest(text))
        css=(ROOT/f'web/{number}/style.css').read_text()
        links='<ul>'+''.join(f'<li>{html.escape(p["week"])} · <a href="./weeks/{p["week"]}.json">JSON</a> · <a href="./weeks/{p["week"]}.md">词汇 MD</a></li>' for p in packets)+'</ul>'
        page=(ROOT/f'web/{number}/index.html').read_text().replace('@@WEEK_LINKS@@',links).replace('@@APP_HASH@@',digest(app)).replace('@@CSS_HASH@@',digest(css))
        for name,value in [('index.html',page),('app.js',app),('style.css',css),('course-data.json',text)]:write(SITE/number/name,value)
        for packet in packets:
            week=packet['week'];md=weekly_md(packet,number)
            write(ROOT/f'data/{number}/weeks/{week}.md',md)
            write(SITE/f'{number}/weeks/{week}.md',md)
            dump(SITE/f'{number}/weeks/{week}.json',packet)
        summary[number]=dict(entries=len(course['entries']),weeks=cfg['weeks'],retiredEntries=len(course.get('retiredEntries',[])),legacyEntries=len(course.get('legacyEntries',[])),importMappings=len(course.get('importMappings',[])))
    dump(SITE/'build-summary.json',summary)
    print(json.dumps(summary,ensure_ascii=False,indent=2))

if __name__=='__main__':build()
