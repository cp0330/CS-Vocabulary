// Exercise the delivered async data loader, including load failures.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{for(const number of ['882','985']){
 const app=fs.readFileSync(`_site/${number}/app.js`,'utf8'),loader=app.slice(app.indexOf('(async()=>'));
 const expected=JSON.parse(fs.readFileSync(`_site/${number}/course-data.json`,'utf8'));
 let loaded=null,url=null,status={textContent:'',setAttribute(k,v){this[k]=v;}};
 await vm.runInNewContext(loader,{fetch:async u=>{url=u;return{ok:true,json:async()=>expected};},startVocabulary:d=>loaded=d,document:{getElementById:()=>status}});
 assert.equal(loaded,expected);assert.match(url,/^\.\/course-data\.json\?v=[a-f0-9]{12}$/);
 loaded=null;await vm.runInNewContext(loader,{fetch:async()=>({ok:false}),startVocabulary:d=>loaded=d,document:{getElementById:()=>status}});
 assert.equal(loaded,null);assert.equal(status.role,'alert');assert(status.textContent.includes('暂时未能加载'));
 }
 console.log('PASS: external course-data loading, cache version and visible error handling for both courses.');
})().catch(e=>{console.error(e);process.exitCode=1;});
