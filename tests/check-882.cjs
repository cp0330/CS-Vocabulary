// Source and event-logic checks; an offline DOM harness is not a browser render.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'_site/882/index.html'),'utf8');
const data=JSON.parse(fs.readFileSync(path.join(root,'_site/882/course-data.json'),'utf8'));
const app=fs.readFileSync(path.join(root,'_site/882/app.js'),'utf8');
const scripts=[JSON.stringify(data),"const data=JSON.parse(document.getElementById('vocabulary-data').textContent);\n"+app.split('(async()=>')[0]+'\nstartVocabulary(data);'];
const messages=[],pass=s=>messages.push(s);
assert.equal(data.schemaVersion,3);assert.deepEqual([...new Set(data.entries.map(e=>e.category))].sort(),['reading','technical']);
assert.equal(new Set(data.entries.map(e=>e.id)).size,data.entries.length);assert.equal(new Set(data.entries.map(e=>e.term.toLowerCase())).size,data.entries.length);
for(const e of data.entries){assert(e.term&&e.meanings.length&&e.legacyIds.length);assert(!('level'in e)&&!('status'in e));for(const m of e.meanings){assert(m.zh&&m.simpleEnglish&&m.references.length);for(const r of m.references){assert(data.documents.some(d=>d.id===r.document));assert(r.name&&(r.page||r.line||r.location));}}}
assert(!('quiz'in data)&&!('topics'in data));assert(!html.includes('data-mode="reverse"'));assert(!html.includes('Level 1'));assert(!html.includes('细节自测'));assert(!html.includes('回忆自评'));
assert(app.includes('当前资料未给出正式定义。'));assert(!/<(?:script|link|img)[^>]*(?:src|href)="https?:/i.test(html));pass('Two categories only; no levels, quizzes, tutoring progress or external resources; unique terms and IDs');
class Element{constructor(id){this.id=id;this.value='';this.checked=false;this.hidden=false;this.textContent='';this.innerHTML='';this.handlers={};this.attrs={};}addEventListener(t,f){(this.handlers[t]??=[]).push(f);}async emit(t,target=this){for(const f of this.handlers[t]||[])await f({target});}click(){return this.emit('click');}focus(){}setAttribute(k,v){this.attrs[k]=v;}querySelector(){return null;}}
function harness(storage={}){const els=new Map([...html.matchAll(/\bid="([^"\s]+)"/g)].map(m=>[m[1],new Element(m[1])]));els.set('vocabulary-data',new Element('vocabulary-data'));els.get('vocabulary-data').textContent=scripts[0];for(const id of ['category','week','lecture'])els.get(id).value='all';const store=new Map(Object.entries(storage)),css={},exports=[];
 const document={getElementById:id=>{if(id.startsWith('entry-'))return new Element(id);assert(els.has(id),'Missing DOM ID '+id);return els.get(id);},documentElement:{style:{setProperty:(k,v)=>css[k]=v}},createElement:()=>new Element('download')};
 const sandbox={document,localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},Blob:class{constructor(parts){exports.push(JSON.parse(parts.join('')));}},URL:{createObjectURL:()=>'blob:local',revokeObjectURL:()=>{}},setTimeout:f=>f()};vm.runInNewContext(scripts[1],sandbox,{timeout:5000});
 const count=()=>Number(els.get('result-status').textContent.match(/\d+/)?.[0]||0);
 const change=async(id,value)=>{els.get(id).value=value;await els.get(id).emit(id==='search'?'input':'change');};
 const recall=async on=>{els.get('recall').checked=on;await els.get('recall').emit('change');};
 const action=async dataset=>els.get('results').emit('click',{closest:()=>({dataset})});return{els,store,css,count,change,recall,action,exports};
}
(async()=>{
 let h=harness();assert.equal(h.count(),data.entries.length);assert.equal(h.css['--size'],'18px');assert.equal(h.els.get('recall-note').hidden,true);assert(!h.els.get('results').innerHTML.includes('entry covered'));pass('Default recall off; clear 18px default; Chinese meanings visible');
 await h.change('category','reading');assert.equal(h.count(),data.entries.filter(e=>e.category==='reading').length);await h.change('week','Week9B');const c=h.count();assert(c>0&&c<data.entries.length);await h.change('lecture','P2');assert(h.count()>0&&h.count()<c);assert(h.els.get('results').innerHTML.includes('11IntroductionToTransactionProcessing_2.pdf'));await h.change('week','Week9');assert.equal(h.els.get('lecture').value,'all');assert(!h.els.get('lecture').innerHTML.includes('value="P2"'));pass('Category, week and lecture filters combine; unavailable lecture selection resets on changing week');
 if(data.documents.some(d=>d.id==='T10')){
  await h.els.get('reset').click();await h.change('week','Week10');
  const week10=data.entries.filter(e=>e.weeks.includes('Week10'));
  assert.equal(h.count(),week10.length);assert(week10.length>=69);
  assert(h.els.get('week').innerHTML.includes('Week10'));
  assert(h.els.get('lecture').innerHTML.includes('value="P2"'));
  assert(!h.els.get('lecture').innerHTML.includes('value="P1"'));
  await h.change('lecture','P2');assert.equal(h.count(),week10.length);
  const section=h.els.get('results').innerHTML;
  assert(section.includes('<small>Week10</small>'));
  assert(section.includes('CSIT882_week10-full.-transcript.txt'));
  assert(section.includes('TXT第2行 · 字符'));
  await h.change('category','reading');assert.equal(h.count(),week10.filter(e=>e.category==='reading').length);
  await h.change('category','technical');assert.equal(h.count(),week10.filter(e=>e.category==='technical').length);
  await h.change('search','shrinking phase');assert.equal(h.count(),1);
  await h.recall(true);assert(!h.els.get('results').innerHTML.includes('class="meaning"'));
  assert(!h.els.get('results').innerHTML.includes('release the logs'));
  const shrinking=week10.find(e=>e.term==='shrinking phase').id;
  await h.action({toggle:shrinking});assert(h.els.get('results').innerHTML.includes('release the logs'));
  await h.action({toggle:shrinking});assert(!h.els.get('results').innerHTML.includes('release the logs'));
  await h.recall(false);await h.change('category','all');await h.change('search','其实并非');assert.equal(h.count(),1);
  await h.change('search','');await h.change('week','Week9B');assert.equal(h.els.get('lecture').value,'P2');
  assert(!h.els.get('results').innerHTML.includes('shrinking phase'));
  pass('Week10 source-backed items preserved; reused P2 remains available in both weeks; categories, Chinese/English search, source character positions and repeated recall work');
 }
 await h.els.get('reset').click();await h.change('search','原子性');assert.equal(h.count(),1);await h.change('search','Atomicity');assert(h.count()>=1);await h.change('search','enforce');assert(h.count()>=1);await h.change('search','不存在的zzq词');assert.equal(h.count(),0);assert(h.els.get('results').innerHTML.includes('清除筛选'));await h.els.get('clear').click();assert.equal(h.count(),data.entries.length);pass('English, Chinese, full-expression and source searches; clear and empty-result feedback work');
 await h.change('search','Atomicity');await h.recall(true);let result=h.els.get('results').innerHTML;assert(result.includes('Atomicity'));assert(!result.includes('class="meaning"'));assert(!result.includes('<blockquote'));assert(!result.includes('Simple English'));assert.equal(h.els.get('source-notes').hidden,true);
 const atom=data.entries.find(e=>e.term==='Atomicity').id;await h.action({toggle:atom});result=h.els.get('results').innerHTML;assert(result.includes('class="meaning"'));assert(result.includes('Simple English'));assert(result.includes('<blockquote'));assert(result.includes('隐藏解释'));await h.action({toggle:atom});assert(!h.els.get('results').innerHTML.includes('<blockquote'));await h.action({toggle:atom});await h.change('search','原子性');assert(h.els.get('results').innerHTML.includes('class="meaning"'));await h.recall(false);assert.equal(h.els.get('source-notes').hidden,false);assert(h.els.get('results').innerHTML.includes('class="meaning"'));pass('Recall keeps English, removes meaning/definition/explanation, toggles either direction repeatedly, and restores meanings when off');
 const old=JSON.parse(fs.readFileSync(path.join(root,'tests/favorite-fixtures-882.json'),'utf8')).entries;
 const replaced=old.find(e=>e.term==='replace').id,newReplaced=data.entries.find(e=>e.term==='X replaces Y').id,excluded=old.find(e=>e.term==='sample').id;
 h=harness({'csit882-week9-vocabulary-v1':JSON.stringify({saved:[replaced,excluded],fontSize:19,self:{[replaced]:'review'}})});await h.els.get('saved-only').click();assert(h.els.get('results').innerHTML.includes('X replaces Y'));await h.recall(true);assert(h.els.get('results').innerHTML.includes('word-button'));await h.change('search','替换');assert(h.count()>0);await h.action({toggle:newReplaced});assert(h.els.get('results').innerHTML.includes('class="meaning"'));await h.action({save:atom});const persisted=JSON.parse(h.store.get('csit882-week9-vocabulary-v2'));assert(persisted.saved.includes(newReplaced)&&persisted.saved.includes(excluded)&&persisted.saved.includes(atom));assert.equal(persisted.self[replaced],'review');pass('Merged items resolve old favorite IDs; excluded IDs remain in backup; search, favorites and recall work together without changing stored learning records');
 h=harness(Object.fromEntries(h.store));await h.els.get('saved-only').click();assert(h.count()>=2);await h.els.get('larger').click();assert.equal(h.css['--size'],'20px');await h.els.get('smaller').click();assert.equal(h.css['--size'],'19px');await h.els.get('export-saved').click();assert(h.exports[0].saved.includes(excluded));assert(!('self'in h.exports[0]));pass('Favorite persistence and font size adjustment work; export contains only favorites/settings and retains excluded IDs');
 h.els.get('import-file').files=[{text:async()=>JSON.stringify({course:'CSIT882',saved:[old.find(e=>e.term==='permanently').id]})}];await h.els.get('import-file').emit('change');assert(h.els.get('transfer-note').textContent.includes('原收藏保留'));const before=h.store.get('csit882-week9-vocabulary-v2');h.els.get('import-file').files=[{text:async()=>JSON.stringify({course:'CSIT985',saved:['wrong']})}];await h.els.get('import-file').emit('change');assert.equal(h.store.get('csit882-week9-vocabulary-v2'),before);pass('Import merges old/current CSIT882 favorites and rejects other courses');
 const css=fs.readFileSync(path.join(root,'_site/882/style.css'),'utf8');assert(css.includes('@media(max-width:860px)')&&css.includes('grid-template-columns:minmax(0,1fr)')&&css.includes('overflow-wrap:anywhere'));pass('Mobile single-column and wrapping rules present; no browser visual test claimed');
 fs.writeFileSync(path.join(root,'_site/882/interface-validation.json'),JSON.stringify({checks:messages,limitations:['Checks run against the delivered script in an offline DOM harness. Real-browser visual layout and personal browser storage migration are not verified.']},null,2));console.log(messages.map(m=>'PASS: '+m).join('\n'));
})().catch(e=>{console.error(e);process.exitCode=1;});
