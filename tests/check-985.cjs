// Offline interaction model: checks state transitions without reading a browser profile.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const course=JSON.parse(fs.readFileSync('_site/985/course-data.json','utf8'));
const html=fs.readFileSync('_site/985/index.html','utf8'),app=fs.readFileSync('_site/985/app.js','utf8');
const script="const course=JSON.parse(document.getElementById('course-data').textContent);\n"+app.split('(async()=>')[0]+'\nstartVocabulary(course);';
class Element{constructor(tag){this.tag=tag;this.children=[];this.value='';this.checked=false;this.disabled=false;this.hidden=false;this.textContent='';this.dataset={};this.attributes={};this.events={};this.files=[];}append(...n){this.children.push(...n);}replaceChildren(...n){this.children=[...n];if(this.tag==='select')this.value=n[0]?.value||'';}add(n){this.append(n);}setAttribute(k,v){this.attributes[k]=v;}addEventListener(k,fn){this.events[k]=fn;}scrollIntoView(){}click(){if(!this.disabled&&this.onclick)this.onclick();}}
class Option extends Element{constructor(label,value){super('option');this.textContent=label;this.value=value;}}
const storage=new Map(),styles=new Map();let map;
function launch(){map=new Map();for(const [_,tag,id] of html.matchAll(/<([\w-]+)[^>]*\bid="([^"]+)"/g))map.set(id,new Element(tag));if(!map.has('course-data'))map.set('course-data',new Element('script'));map.get('course-data').textContent=JSON.stringify(course);vm.runInNewContext(script,{document:{getElementById:id=>map.get(id),createElement:tag=>new Element(tag),documentElement:{style:{setProperty:(k,v)=>styles.set(k,v)}}},Option,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},Blob:class{},URL:{createObjectURL:()=>'',revokeObjectURL:()=>{}},setTimeout:()=>0});}
const el=id=>map.get(id),event=id=>{const e=el(id);if(e.onchange)e.onchange();else e.events[id==='search'?'input':'change']();};
const cards=()=>el('cards').children.filter(c=>c.dataset.id),answers=()=>cards().map(c=>c.children.find(n=>n.className==='bilingual')),reveals=()=>cards().map(c=>c.children.find(n=>n.className==='reveal')),stars=()=>cards().map(c=>c.children[0].children[1]),terms=()=>cards().map(c=>c.children[0].children[0].children[0]);
const currentEntries=()=>cards().map(c=>[...course.entries,...course.retiredEntries].find(e=>e.id===c.dataset.id));
const recall=value=>{el('recall-mode').checked=value;event('recall-mode');};
launch();assert.equal(el('recall-mode').checked,false);assert(answers().every(a=>!a.hidden));assert(reveals().every(b=>b.hidden));assert.equal(styles.get('--reading-size'),'18px');
assert.deepEqual(el('week').children.map(n=>n.value),['',...course.lectures.map(l=>String(l.week))]);
for(const lecture of course.lectures){
 el('week').value=String(lecture.week);event('week');assert(cards().length>0);assert(currentEntries().every(e=>e.weeks.includes(lecture.week)));
 el('lecture').value=lecture.id;event('lecture');assert(cards().length>0);assert(currentEntries().every(e=>e.lectures.includes(lecture.id)));
 for(const category of ['专业英语','阅读词汇']){el('type').value=category;event('type');assert(cards().length>0);assert(currentEntries().every(e=>e.category===category));}
 el('reset').click();
}
if(course.lectures.some(l=>l.week===1)){
 assert(el('source-summary').textContent.includes('从第33页开始收录'));
 for(const [week,word] of [[1,'PPDIOO'],[1,'八步设计'],[2,'demultiplexing'],[2,'分用']]){
  el('week').value=String(week);event('week');el('search').value=word;event('search');assert(cards().length>0);
  recall(true);assert(answers().every(a=>a.hidden));reveals()[0].click();assert(!answers()[0].hidden);terms()[0].click();assert(answers()[0].hidden);recall(false);el('reset').click();
 }
}
assert.equal(cards().length,40);assert(!currentEntries().some(e=>e.retired));
if(course.lectures.some(l=>l.week===3)){
 const incoming=course.importMappings.filter(m=>m.week===3).map(m=>({id:m.from,term:m.term,category:course.entries.find(e=>e.id===m.to).category}));
 const mappings=course.importMappings.filter(m=>m.week===3);
 for(const row of incoming){
  const mapping=mappings.find(m=>m.from===row.id);assert(mapping,'Week3 mapping: '+row.term);
  el('week').value='3';event('week');el('lecture').value='Week3.pdf';event('lecture');el('type').value=row.category;event('type');
  el('search').value=row.term;event('search');assert(cards().some(c=>c.dataset.id===mapping.to),'Week3 English lookup: '+row.term);
  el('reset').click();
 }
 for(const word of ['差距分析','真实性','非计划停机','舒适区','1Gbps']){
  el('week').value='3';event('week');el('search').value=word;event('search');assert(cards().length>0,'Week3 Chinese/value lookup: '+word);
  recall(true);assert(answers().every(a=>a.hidden));assert(answers().every(a=>a.children.some(n=>n.tag==='details')));
  reveals()[0].click();assert(!answers()[0].hidden);terms()[0].click();assert(answers()[0].hidden);recall(false);el('reset').click();
 }
 const shared=course.entries.find(e=>e.weeks.includes(3)&&e.weeks.includes(4)&&e.term==='Requirements specification');
 el('week').value='3';event('week');el('search').value='Requirements specification';event('search');assert(cards().some(c=>c.dataset.id===shared.id));el('reset').click();
}
for(const category of ['专业英语','阅读词汇']){el('type').value=category;event('type');assert(cards().length>0);assert(currentEntries().every(e=>e.category===category));}
el('reset').click();el('week').value='5';event('week');assert(currentEntries().every(e=>e.weeks.includes(5)));
el('lecture').value='Week5.pdf';event('lecture');assert(currentEntries().every(e=>e.lectures.includes('Week5.pdf')));
el('topic').value='Flowspec与算法符号';event('topic');assert(currentEntries().every(e=>e.topics.includes('Flowspec与算法符号')));
el('reset').click();el('search').value='scheduleD maintenance';event('search');assert(cards().length>0);
el('search').value='计划维护';event('search');assert(cards().length>0);recall(true);assert(answers().every(a=>a.hidden));assert(reveals().every(b=>!b.hidden));assert(terms().every(t=>t.textContent));assert(cards().every(c=>c.children.find(n=>n.className==='source').textContent));
reveals()[0].click();assert(!answers()[0].hidden);assert.equal(reveals()[0].textContent,'隐藏解释');terms()[0].click();assert(answers()[0].hidden);assert.equal(reveals()[0].attributes['aria-expanded'],'false');
const remembered=cards()[0].dataset.id;reveals()[0].click();stars()[0].click();assert(!answers()[0].hidden);el('favorites-only').checked=true;event('favorites-only');assert.equal(cards().length,1);assert.equal(cards()[0].dataset.id,remembered);assert(!answers()[0].hidden);
el('search').value='not-a-match';event('search');assert.equal(cards().length,0);el('search').value='计划维护';event('search');assert(!answers()[0].hidden);
recall(false);assert(answers().every(a=>!a.hidden));assert(reveals().every(b=>b.hidden));recall(true);assert(answers().every(a=>a.hidden));
el('reset').click();assert.equal(el('type').value,'');assert.equal(el('week').value,'');assert.equal(el('topic').value,'');assert.equal(el('lecture').value,'');assert(el('recall-mode').checked);
el('next').click();assert(el('page-label').textContent.startsWith('2 /'));el('prev').click();assert(el('page-label').textContent.startsWith('1 /'));
for(let i=0;i<8;i++)el('font-larger').click();assert.equal(styles.get('--reading-size'),'24px');for(let i=0;i<8;i++)el('font-smaller').click();assert.equal(styles.get('--reading-size'),'16px');launch();assert.equal(styles.get('--reading-size'),'16px');assert.equal(el('recall-mode').checked,false);
// A merged old bookmark must migrate to the shared card, preserve sources, and stay removed when unchecked.
const merged=course.entries.find(e=>e.legacyIds.length>1&&e.category==='专业英语'),oldMerged=merged.legacyIds.find(id=>id!==merged.id);storage.set('CSIT985-vocabulary-favorites-v1',JSON.stringify([oldMerged]));launch();el('favorites-only').checked=true;event('favorites-only');assert.equal(cards().length,1);assert.equal(cards()[0].dataset.id,merged.id);stars()[0].click();launch();el('favorites-only').checked=true;event('favorites-only');assert.equal(cards().length,0);
// A split reading word-group retains every surviving term; a retired basic bookmark remains accessible.
const firstSplit=course.entries.find(e=>e.category==='阅读词汇'&&e.id!==e.legacyIds[0]),oldSplit=firstSplit.legacyIds[0],split=course.entries.filter(e=>e.legacyIds.includes(oldSplit)),retired=course.retiredEntries[0];storage.set('CSIT985-vocabulary-favorites-v1',JSON.stringify([oldSplit,retired.id]));launch();el('favorites-only').checked=true;event('favorites-only');assert.equal(cards().length,split.length+1);assert(currentEntries().some(e=>e.id===retired.id));assert(split.every(e=>cards().some(c=>c.dataset.id===e.id)));
(async()=>{const unknown='csit985-w4-preserve-unknown-id';await el('import-file').onchange({target:{files:[{text:async()=>JSON.stringify({course:'CSIT985',favorites:[oldMerged,unknown]})}],value:'file'}});const result=JSON.parse(storage.get('CSIT985-vocabulary-favorites-v1'));assert(result.includes(unknown)&&result.includes(merged.id)&&result.includes(retired.id));await el('import-file').onchange({target:{files:[{text:async()=>JSON.stringify({course:'other-course',favorites:['fake']})}],value:'file'}});assert.deepEqual(JSON.parse(storage.get('CSIT985-vocabulary-favorites-v1')),result);console.log('PASS: category/week/lecture/topic filters; EN/ZH search; recall button/term reveal and hide; combined recall/filter/search/favorites; merged/split/retired bookmark migration; persistence/import; reset; pagination; font controls');})().catch(e=>{console.error(e);process.exitCode=1;});
