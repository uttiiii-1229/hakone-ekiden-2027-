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
for(const file of ['hakone-phase2-static-db','hakone-archive-1994-1999','three-ekiden-sections-db','foreign-name-normalizer','current-roster-official-20260907','current-athlete-pb-json-20260908','university-meet-results-auto','university-meet-results-20261102','university-meet-results-20261116','current-athlete-pb-resolver','athlete-directory-identity']){
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
const hamaguchi=find('濵口大和','中央大学');
assert.ok(hamaguchi.current2026);
assert.equal(hamaguchi.pb.pb10000,'27:53.85');
assert.deepEqual(counts(hamaguchi),[0,2,0]);
assert.deepEqual(Array.from(hamaguchi.runs.izumo,r=>[r.year,r.section,r.rank,r.time]),[[2025,2,11,'17:13'],[2026,4,6,'17:29']]);
assert.ok(hamaguchi.track.length>0);
for(const [name,team,count] of [
  ['山﨑草太','中央大学',[1,0,0]],
  ['川﨑颯','筑波大学',[1,0,0]],
  ['小山洋生','筑波大学',[1,0,0]],
  ['𣘺本櫂知','日本大学',[0,1,1]],
  ['榅山一颯','青山学院大学',[0,0,2]]
]){
  const p=find(name,team);
  assert.ok(p.current2026,name);
  assert.deepEqual(counts(p),count,name);
}
assert.deepEqual(counts(find('メクボジョブモグス','山梨学院大学')),[4,1,4]);
assert.equal(find('増子陽季','早稲田大学').runs.zennihon.length,0);
assert.equal(find('増子陽太','早稲田大学').runs.zennihon.length,1);

const current=directory.allPlayers.filter(p=>p.current2026);
// Discover current roster vs. race-only duplicates missed by production aliases.
// These folded characters only generate audit candidates; the site uses explicit
// aliases, so similar-looking names are not automatically merged.
const comparable=new Map();
for(const variants of '沢澤 崎﨑 高髙 辺邊邉 斉齊斎齋 浜濱濵 広廣 島嶋 国國 館舘 真眞 龍竜 桜櫻 吉𠮷 瀬瀨 橋𣘺 栄榮 祐祐 塚塚 徳德 縄繩 渕淵 増增 桑桒 塩鹽 豊豐 円圓 昂昻 凛凜 藏蔵'.split(' ')){
  for (const variant of variants)comparable.set(variant,variants[0]);
}
const byCandidate=new Map();
for(const p of directory.allPlayers){
  const n=[...p.name.normalize('NFKC').replace(/[\s・]/g,'')].map(c=>comparable.get(c)||c).join('');
  const key=p.team+'|'+n;
  if(!byCandidate.has(key))byCandidate.set(key,[]);
  byCandidate.get(key).push(p);
}
const rosterSplits=[...byCandidate.values()].filter(ps=>ps.length>1 && ps.some(p=>p.current2026) &&
  ps.some(p=>!p.current2026 && Object.values(p.runs).flat().some(r=>r.year>=2023)));
assert.deepEqual(rosterSplits.map(ps=>ps.map(p=>p.name)),[]);
for(const name of ['濵口大和','濱口大和','浜口大和']){
  handlers.input.at(-1)({target:{closest:()=>({value:name})}});
  assert.match(host.innerHTML,/1名/);
  assert.match(host.innerHTML,/濵口 大和[\s\S]*?中央大学<\/td><td>0回<\/td><td>2回<\/td><td>0回/);
}
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
