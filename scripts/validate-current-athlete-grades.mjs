import fs from 'node:fs';
import vm from 'node:vm';

const ROOT='hakone2027-site 3';
const read=n=>fs.readFileSync(`${ROOT}/${n}`,'utf8');

function extractObject(text,marker){
  const mi=text.indexOf(marker);
  if(mi<0) throw new Error('marker not found: '+marker);
  const start=text.indexOf('{',mi+marker.length);
  let depth=0, quote='', esc=false;
  for(let i=start;i<text.length;i++){
    const ch=text[i];
    if(quote){
      if(esc){esc=false;continue}
      if(ch==='\\'){esc=true;continue}
      if(ch===quote) quote='';
      continue;
    }
    if(ch==="'"||ch==='"'||ch==='`'){quote=ch;continue}
    if(ch==='{') depth++;
    if(ch==='}' && --depth===0) return text.slice(start,i+1);
  }
  throw new Error('unterminated object: '+marker);
}

const fullRoster=(new Function('return ('+extractObject(read('full-rosters-v2.js'),'const fullRosterData = ')+')'))();
const expanded=(new Function('return ('+extractObject(read('expanded-athletes-ranking.js'),'const expandedTopAthletes2027 = ')+')'))();

const context={
  console,
  window:{},
  fullRosterData:fullRoster,
  expandedTopAthletes2027:expanded,
};
context.window.fullRosterData=fullRoster;
context.window.expandedTopAthletes2027=expanded;
vm.createContext(context);

for(const name of [
  'current-pb-official-overrides-20260907.js',
  'university-pb-expansion-20260907.js',
  'university-pb-expansion-remaining-20260907.js',
  'university-meet-results-auto.js',
  'current-roster-official-20260907.js',
  'current-athlete-grade-db-2026.js',
  'current-athlete-pb-resolver.js'
]){
  vm.runInContext(read(name),context,{filename:name});
}

const grade=context.window.currentAthleteGradeResolver2026;
const verified=context.window.verifiedCurrentPb2026||{};
const resolver=context.window.currentAthletePbResolver;
if(!grade||!resolver) throw new Error('grade/PB resolver not initialized');

const normTeam=s=>String(s||'').replace('國學院大学','國學院大學');
const missingVerified=[];
for(const [team,athletes] of Object.entries(verified)){
  for(const name of Object.keys(athletes||{})){
    if(!/^[1-4]$/.test(String(grade.get(team,name)||''))){
      missingVerified.push([team,name]);
    }
  }
}

const teams=new Set([
  ...Object.keys(verified),
  ...Object.keys(context.window.currentRosterOfficial2026||{}),
  ...Object.keys(context.window.fullRosterData||{}),
  ...Object.keys(context.window.expandedTopAthletes2027||{})
].map(normTeam));

const missingVisible=[];
let visibleCount=0;
for(const team of teams){
  for(const row of resolver.currentRows(team)){
    visibleCount++;
    if(!/^[1-4]$/.test(String(row.grade||''))) missingVisible.push([team,row.name,row.grade||'']);
  }
}

if(missingVerified.length){
  console.error('Verified PB athletes missing 2026 grade:',missingVerified);
  throw new Error(`${missingVerified.length} verified PB athletes have no 2026 grade`);
}
if(missingVisible.length){
  console.error('Visible current athletes missing grade:',missingVisible);
  throw new Error(`${missingVisible.length} visible current athletes have no grade`);
}
console.log(`Current grade coverage passed: ${visibleCount} visible athletes; all verified PB athletes graded.`);
