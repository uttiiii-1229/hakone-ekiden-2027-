import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root='hakone2027-site 3/';
const read=name=>fs.readFileSync(root+name,'utf8');
const window={};
const handlers={};
const host={innerHTML:''};
const detail={hidden:true,dataset:{},firstElementChild:{innerHTML:''}};
const document={
  addEventListener:(type,fn)=>(handlers[type]??=[]).push(fn),
  querySelector:s=>s==='#allAthleteResults'?host:s.startsWith('[data-all-athlete-detail=')?detail:null,
};
const ctx=vm.createContext({window,document,CSS:{escape:x=>x},location:{hash:''}});
for(const file of ['hakone-phase2-static-db','three-ekiden-sections-db','foreign-name-normalizer','current-roster-official-20260907','current-athlete-pb-json-20260908','university-meet-results-auto','university-meet-results-20261102','university-meet-results-20261116','current-athlete-pb-resolver','athlete-directory-identity']){
  vm.runInContext(read(file+'.js'),ctx,{filename:file});
}
const code=read('all-athlete-directory-v2.js').replace('={template,refresh,pbFor};','={template,refresh,pbFor,allPlayers,rowsByRace,current};');
vm.runInContext(code,ctx,{filename:'all-athlete-directory-v2'});
const directory=window.allAthleteDirectoryV2;
const compact=s=>s.replace(/\s+/g,'');
const find=(name,team)=>directory.allPlayers.find(p=>compact(p.name)===name&&p.team===team);
const counts=p=>['hakone','izumo','zennihon'].map(r=>new Set(p.runs[r].map(x=>x.year)).size);
const tate=find('館澤亨次','東海大学');
assert.deepEqual(counts(tate),[4,3,3]);
assert.deepEqual(Array.from(tate.runs.hakone,r=>[r.year,r.section,r.rank,r.time]),[[2017,5,13,'1:15:54'],[2018,8,2,'1:06:17'],[2019,4,2,'1:02:37'],[2020,6,1,'0:57:17']]);
assert.equal(find('館沢亨次','東海大学'),undefined);
assert.equal(find('石丸修那','創価大学').runs.hakone.length,1);
assert.equal(find('石丸惇那','創価大学').runs.hakone.length,3);
assert.equal(find('吉岡智輝','順天堂大学').runs.zennihon.length,1);
assert.equal(find('吉岡幸輝','順天堂大学').runs.hakone.length,1);
const akiyoshi=find('秋吉拓真','東京大学');
assert.equal(akiyoshi.runs.hakone.length,2);
assert.ok(akiyoshi.runs.hakone.every(r=>r.entryTeam==='関東学生連合'&&r.reference));
assert.equal(find('日高拓夢','帝京大学').runs.zennihon.length,1);
assert.equal(find('京川大真','大阪経済大学').runs.zennihon.length,4);
assert.deepEqual(counts(find('シャドラックキップケメイ','日本大学')),[3,1,2]);
assert.equal(find('ブライアンキピエゴ','山梨学院大学').runs.hakone.length,2);
assert.equal(find('ソロモンムトゥク','山梨学院大学').runs.hakone.length,1);
assert.equal(find('イェゴンヴィンセント','東京国際大学').runs.hakone.length,4);
assert.equal(find('ライモイヴィンセント','国士舘大学').runs.hakone.length,4);
assert.equal(window.athleteDirectoryIdentity.resolve('館沢 亨次','東海大学',2026),null);
assert.equal(window.athleteDirectoryIdentity.resolve('館沢 亨次','別大学',2016),null);
assert.equal(directory.pbFor('館澤 亨次','他大学'),null);
const current=directory.allPlayers.filter(p=>p.current2026);
assert.equal(current.length,directory.current.size);
const uniq=new Set(directory.allPlayers.map(p=>p.key));
assert.equal(uniq.size,directory.allPlayers.length);
let bad=[];
for(const p of directory.allPlayers) for(const [race,rows] of Object.entries(p.runs)){
  if(rows.length!==new Set(rows.map(r=>r.year)).size)bad.push([p.name,p.team,race,rows.map(r=>r.year)]);
}
assert.deepEqual(bad,[]);
const numRows=Object.values(directory.rowsByRace).reduce((n,rs)=>n+rs.length,0);
const sourceRows=Object.values(window.hakonePhase2StaticDB).flatMap(Object.values).flat().length+
  Object.values(window.threeEkidenSectionsDB).flatMap(Object.values).flatMap(y=>Object.values(y.sections||{})).flat().length;
assert.equal(numRows,sourceRows);
assert.equal(numRows,directory.allPlayers.reduce((n,p)=>n+p.totalRuns,0));
for(const form of ['館澤亨次','館沢亨次']){
  handlers.input.at(-1)({target:{closest:()=>({value:form})}});
  assert.match(host.innerHTML,/1名/);
  assert.match(host.innerHTML,/館澤 亨次[\s\S]*?東海大学<\/td><td>4回<\/td><td>3回<\/td><td>3回/);
}
handlers.click.at(-1)({target:{closest:()=>({dataset:{allAthletePlayer:tate.key},setAttribute(){}})}});
assert.equal(detail.hidden,false);
assert.match(detail.firstElementChild.innerHTML,/57:17/);
console.log({raceRows:numRows,profiles:uniq.size,current:current.length,trackLinks:directory.allPlayers.reduce((n,p)=>n+p.track.length,0)});
