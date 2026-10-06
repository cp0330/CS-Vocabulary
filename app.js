function unpackCourse(data){
 if(data.format!=='csit985-shared-values-v1'||!Array.isArray(data.nodes))throw Error('Invalid vocabulary data');
 const values=[];
 for(const node of data.nodes){
  let value=node;
  if(Array.isArray(node)){
   if(node[0]===0){value={};for(let i=1;i<node.length;i+=2)value[values[node[i]]]=values[node[i+1]];}
   else if(node[0]===1)value=node.slice(1).map(i=>values[i]);
   else throw Error('Invalid shared value');
  }
  values.push(value);
 }
 return values[data.root];
}
function startVocabulary(course){
/* VOCABULARY_RUNTIME_START */
'use strict';

const entries=course.entries,retiredEntries=course.retiredEntries||[],allEntries=[...entries,...retiredEntries];
const $=id=>document.getElementById(id),storageKey='CSIT985-vocabulary-favorites-v1',preferencesKey='CSIT985-vocabulary-reading-v1';
let favorites=new Set(),page=1,recallMode=false,fontSize=18;const pageSize=40,revealed=new Set();
const aliases=new Map();for(const e of entries)for(const id of e.legacyIds||[e.id]){if(!aliases.has(id))aliases.set(id,new Set());aliases.get(id).add(e.id);}
const activeIds=new Set(entries.map(e=>e.id));
function migrateFavorites(ids){const next=new Set(ids);for(const [old,targets] of aliases){if(!ids.has(old))continue;targets.forEach(id=>next.add(id));if(!activeIds.has(old))next.delete(old);}return next;}
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(saved)){const previous=new Set(saved.filter(x=>typeof x==='string'));favorites=migrateFavorites(previous);if(JSON.stringify([...favorites])!==JSON.stringify([...previous]))localStorage.setItem(storageKey,JSON.stringify([...favorites]));}}catch(e){$('save-status').textContent='未读取浏览器收藏，可使用导入／导出。';}
try{const saved=JSON.parse(localStorage.getItem(preferencesKey)||'null');if(saved&&[16,18,20,22,24].includes(saved.fontSize))fontSize=saved.fontSize;}catch(e){}
function save(){try{localStorage.setItem(storageKey,JSON.stringify([...favorites]));$('save-status').textContent='收藏已保存';}catch(e){$('save-status').textContent='本次收藏可用，可导出保存。';}}
function applyFontSize(){document.documentElement.style.setProperty('--reading-size',fontSize+'px');$('font-size').textContent=fontSize+'px';$('font-smaller').disabled=fontSize<=16;$('font-larger').disabled=fontSize>=24;}
function changeFontSize(step){fontSize=Math.max(16,Math.min(24,fontSize+step));applyFontSize();try{localStorage.setItem(preferencesKey,JSON.stringify({fontSize}));}catch(e){}}
$('font-smaller').onclick=()=>changeFontSize(-2);$('font-larger').onclick=()=>changeFontSize(2);applyFontSize();
$('recall-mode').checked=false;$('recall-mode').onchange=()=>{recallMode=$('recall-mode').checked;revealed.clear();$('recall-hint').hidden=!recallMode;render();};
function sourceText(s){return s.kind==='pdf'?`${s.file} PDF页${s.pages.join(',')} / 幻灯片${s.slides.join(',')}${s.figure?'（图表）':''}`:`${s.file} 原始L${s.line}，本行字符${s.character}起`;}
function fillOptions(id,items,all){const element=$(id),previous=element.value;element.replaceChildren(new Option(all,''));items.forEach(item=>element.add(new Option(item.label,item.value)));if(items.some(item=>item.value===previous))element.value=previous;}
function pool(){return $('favorites-only').checked?allEntries:entries;}

fillOptions('week',[...new Set(course.lectures.map(l=>l.week))].sort((a,b)=>a-b).map(w=>({value:String(w),label:'Week'+w})),'全部周次');
$('course-summary').textContent=course.lectures.map(l=>`Week${l.week} · ${l.title}`).join('　/　');
$('source-summary').textContent=course.lectures.map(l=>`Week${l.week}：${l.title}，PDF共${l.pdfPages}页${l.scopeStart>1?'，从第'+l.scopeStart+'页开始收录':''}`).join('；')+'。周次已按标题与内容核对。';

function refreshSelectors(){const rows=pool().filter(e=>!$('week').value||e.weeks.includes(Number($('week').value)));fillOptions('lecture',course.lectures.filter(l=>!$('week').value||l.week===Number($('week').value)).map(l=>({value:l.id,label:`Week${l.week} · ${l.title}`})),'全部课件');const scoped=rows.filter(e=>!$('lecture').value||e.lectures.includes($('lecture').value));fillOptions('topic',[...new Set(scoped.flatMap(e=>e.topics))].map(t=>({value:t,label:t})),'全部主题');}
refreshSelectors();
const index=new Map(allEntries.map(e=>[e.id,[e.term,e.en,e.zh,e.structure||'',...(e.topics||[]),e.category,...(e.lectureTitles||[]),...(e.originals||[]).map(q=>q.text),...(e.occurrences||[]).flatMap(o=>[o.term||'',o.en,o.zh,o.structure||'']),...e.sources.map(s=>sourceText(s)+' '+(s.anchor||''))].join(' ').toLocaleLowerCase()]));
function filtered(){const q=$('search').value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);return pool().filter(e=>(!$('week').value||e.weeks.includes(Number($('week').value)))&&(!$('lecture').value||e.lectures.includes($('lecture').value))&&(!$('topic').value||e.topics.includes($('topic').value))&&(!$('type').value||e.category===$('type').value)&&(!$('favorites-only').checked||favorites.has(e.id))&&q.every(word=>index.get(e.id).includes(word)));}
function textNode(tag,text,cls){const n=document.createElement(tag);n.textContent=text;if(cls)n.className=cls;return n;}
function details(summary){const n=document.createElement('details');n.append(textNode('summary',summary));return n;}
function render(){const rows=filtered(),pages=Math.max(1,Math.ceil(rows.length/pageSize));page=Math.min(page,pages);$('cards').replaceChildren();$('count').textContent=rows.length?`匹配 ${rows.length} 项`:'没有匹配词条';
 if(!rows.length)$('cards').append(textNode('p','可调整搜索、类别、周次或课件筛选。','empty'));
 for(const e of rows.slice((page-1)*pageSize,page*pageSize)){
  const card=document.createElement('article');card.className='card';card.dataset.id=e.id;
  const head=document.createElement('div');head.className='cardhead';const heading=document.createElement('h2'),term=textNode('button',e.term,'term-button');term.type='button';term.disabled=!recallMode;heading.append(term);head.append(heading);
  const star=textNode('button',favorites.has(e.id)?'★':'☆','star');star.type='button';star.setAttribute('aria-pressed',String(favorites.has(e.id)));star.setAttribute('aria-label',(favorites.has(e.id)?'取消收藏：':'收藏：')+e.term);star.onclick=()=>{if(favorites.has(e.id))favorites.delete(e.id);else favorites.add(e.id);save();render();};head.append(star);card.append(head);
  const tags=document.createElement('div');tags.className='tags';[e.category,...e.lectureTitles].forEach(t=>tags.append(textNode('span',t,'tag')));card.append(tags);
  if(e.retired)card.append(textNode('p','原收藏保留项 · 不进入默认列表','archive-label'));
  const answer=document.createElement('div');answer.className='bilingual';answer.id='explanation-'+e.id;answer.hidden=recallMode&&!revealed.has(e.id);answer.append(textNode('p',e.zh,'meaning'));
  if(e.category==='专业英语')answer.append(textNode('p',e.definitionStatus||'当前资料未给出正式定义','definition-status'));
  if(e.originals&&e.originals.length){const originals=details(e.category==='专业英语'?'课件原文（定义、名称或说明）':'资料中的用法片段');for(const q of e.originals){originals.append(textNode('p',q.role+' · '+sourceText(q.source),'context-label'),textNode('blockquote',q.text,'original-text'));}answer.append(originals);}
  const supplement=details('整理解释与补充说明');
  const occurrences=e.occurrences&&e.occurrences.length?e.occurrences:[e];
  for(const o of occurrences){if(occurrences.length>1)supplement.append(textNode('p',`Week${o.week} · ${o.term}`,'context-label'));supplement.append(textNode('p',o.en,'en'));if(o.zh!==e.zh)supplement.append(textNode('p',o.zh,'zh'));if(o.structure)supplement.append(textNode('p','用法结构：'+o.structure,'word-pattern'));supplement.append(textNode('p','说明依据：'+o.basis+'；以上为整理解释，课件原句另列。','context-label'));}answer.append(supplement);
  // Retain full earlier grouped notes for existing favorites, without cluttering the default list.
  if($('favorites-only').checked&&!e.retired){const previous=(course.legacyEntries||[]).filter(old=>(e.legacyIds||[]).includes(old.id)&&old.term!==e.term);if(previous.length){const archive=details('原收藏词组说明');for(const old of previous)archive.append(textNode('p',old.term,'context-label'),textNode('p',old.zh),textNode('p',old.en,'en'),textNode('p',old.sources.map(sourceText).join('；'),'source'));answer.append(archive);}}
  const reveal=textNode('button',revealed.has(e.id)?'隐藏解释':'查看解释','reveal');reveal.type='button';reveal.hidden=!recallMode;
  function syncAnswer(){answer.hidden=recallMode&&!revealed.has(e.id);reveal.textContent=answer.hidden?'查看解释':'隐藏解释';for(const b of [reveal,term]){b.setAttribute('aria-controls',answer.id);b.setAttribute('aria-expanded',String(!answer.hidden));}}
  function toggleAnswer(){if(!recallMode)return;if(revealed.has(e.id))revealed.delete(e.id);else revealed.add(e.id);syncAnswer();}reveal.onclick=toggleAnswer;term.onclick=toggleAnswer;syncAnswer();
  card.append(reveal,answer,textNode('p',e.sources.map(sourceText).join('；'),'source'));$('cards').append(card);
 }
 $('page-label').textContent=`${page} / ${pages}`;$('prev').disabled=page<=1;$('next').disabled=page>=pages;
}
['search','type','topic'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',()=>{page=1;render();}));
$('week').onchange=()=>{refreshSelectors();page=1;render();};$('lecture').onchange=()=>{refreshSelectors();page=1;render();};$('favorites-only').addEventListener('change',()=>{refreshSelectors();page=1;render();});
$('reset').onclick=()=>{$('search').value='';$('week').value='';$('lecture').value='';$('topic').value='';$('type').value='';$('favorites-only').checked=false;refreshSelectors();page=1;render();};
$('prev').onclick=()=>{page--;render();$('count').scrollIntoView({block:'start'});};$('next').onclick=()=>{page++;render();$('count').scrollIntoView({block:'start'});};
$('export').onclick=()=>{const blob=new Blob([JSON.stringify({course:'CSIT985',version:1,favorites:[...favorites]},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='CSIT985-favorites.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('import').onclick=()=>$('import-file').click();$('import-file').onchange=async event=>{const file=event.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.course!=='CSIT985'||!Array.isArray(data.favorites)||data.favorites.some(id=>typeof id!=='string'||!id.startsWith('csit985-w')))throw Error('invalid');favorites=migrateFavorites(new Set([...favorites,...data.favorites]));save();render();$('save-status').textContent='收藏已合并导入';}catch(e){$('save-status').textContent='请导入CSIT985收藏文件，现有收藏已保留。';}finally{event.target.value='';}};
for(const [week,notes] of Object.entries(course.notes)){const wrap=document.createElement('div');wrap.append(textNode('h2','Week'+week));const ul=document.createElement('ul');notes.forEach(n=>ul.append(textNode('li',(n.pages.length?'PDF页'+n.pages.join(',')+' / 同号幻灯片：':'TXT：')+n.text)));wrap.append(ul);$('notes').append(wrap);}
render();

/* VOCABULARY_RUNTIME_END */
}
(async()=>{
 try{
  const response=await fetch('./course-data.json?v=ecde67a92812');
  if(!response.ok)throw Error('Vocabulary download failed');
  const course=unpackCourse(await response.json());
  startVocabulary(course);
 }catch(error){
  const count=document.getElementById('count');
  count.textContent='词汇暂时未能加载，请刷新页面后重试。';
  count.setAttribute('role','alert');
 }
})();
