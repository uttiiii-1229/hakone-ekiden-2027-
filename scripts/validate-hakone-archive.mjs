import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root='hakone2027-site 3/';
const handlers={};
const hosts={'#hakoneDetailedHistory':{querySelector:()=>null,insertAdjacentHTML(){}},'#hakone-overall-result':{}};
const document={addEventListener:(k,h)=>(handlers[k]??=[]).push(h),querySelector:s=>hosts[s],getElementById:()=>true};
const ctx=vm.createContext({document,templates:{},location:{hash:''},historyTemplate:()=>'',renderHakoneAlltimeTop10:()=>'',setTimeout:fn=>fn()});
ctx.window=ctx;
for(const name of ['hakone-section-results','hakone-phase2-static-db','hakone-archive-1994-1999','hakone-section-db-view-v2','race-pages-v1']){
 vm.runInContext(fs.readFileSync(root+name+'.js','utf8'),ctx,{filename:name});
}
const winners=[['山梨学院大学','10:59:13'],['山梨学院大学','11:03:46'],['中央大学','11:04:15'],['神奈川大学','11:14:02'],['神奈川大学','11:01:43'],['順天堂大学','11:07:47']];
const seconds=t=>t.split(':').reduce((n,x)=>n*60+Number(x),0);
let rowCount=0,dnfCount=0;
for (let year=1994;year<=1999;year++){
 const rs=ctx.hakoneOfficialOverallDB[year].results, sections=ctx.hakonePhase2StaticDB[year];
 assert.equal(rs.length,year===1994?20:15);
 assert.deepEqual([rs[0].team,rs[0].time],winners[year-1994]);
 assert.equal(Object.keys(sections).length,10);
 for(const rows of Object.values(sections)){
  assert.equal(rows.length,rs.length);
  assert.equal(new Set(rows.map(r=>r[2])).size,rs.length);
  rowCount+=rows.length;
  dnfCount+=rows.filter(r=>r[0]==='棄権').length;
 }
 for(const team of rs){
  const legs=Object.values(sections).map(rows=>rows.find(r=>r[2]===team.team));
  assert.ok(legs.every(Boolean));
  for(const [key,start,end] of [['time',0,10],['outwardTime',0,5],['returnTime',5,10]]){
   if(team[key])assert.equal(legs.slice(start,end).reduce((n,r)=>n+seconds(r[4]),0),seconds(team[key]));
  }
 }
}
assert.equal(rowCount,950);
assert.equal(dnfCount,3);
const pick=(type,attr,target)=>handlers[type].forEach(handler=>handler({target:{closest:qs=>qs.includes(attr)?target:null}}));
const html=ctx.templates.history();
assert.equal([...html.matchAll(/<option value="1994"/g)].length,2);
pick('change','[data-hakone-overall-year-select]',{value:'1994'});
assert.match(hosts['#hakone-overall-result'].innerHTML,/10:59:13/);
assert.match(hosts['#hakone-overall-result'].innerHTML,/ステファン マヤカ/);
pick('change','[data-hakone-year-select]',{value:'1994'});
pick('click','[data-hakone-unified-section]',{dataset:{hakoneUnifiedSection:'2'}});
assert.match(hosts['#hakoneDetailedHistory'].innerHTML,/ステファン マヤカ[\s\S]*1:07:34/);
assert.match(hosts['#hakoneDetailedHistory'].innerHTML,/sec=2&tn=70/);
assert.equal(ctx.hakonePhase2StaticDB[1996][4].find(r=>r[2]==='神奈川大学')[0],'棄権');
assert.equal(ctx.hakonePhase2StaticDB[1996][5].find(r=>r[2]==='神奈川大学')[1],'—');
console.log({editions:6,rowCount,dnfCount});
