// Historical supplement: 2022 (第99回) 箱根駅伝予選会
// Source priority: 桜美林大学公式 (2022-10-18).
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2022']) window.hakoneQualifierDB.years['2022'] = { year: 2022, eventYear: 2022, hakoneEdition: 99, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2022'];
  if (!Array.isArray(existing.teams)) existing.teams = [];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const norm = (v) => String(v ?? '').normalize('NFKC').replace(/\s+/g,'').replace(/[髙高]/g,'高').replace(/[﨑崎]/g,'崎').replace(/[・･]/g,'');
  const has = (v) => v !== undefined && v !== null && String(v).trim() !== '';
  const teamRow = {rank:27, team:'桜美林大学', time:'11:08:23'};
  const foundTeam = existing.teams.find(x => norm(x.team || x.name) === norm(teamRow.team));
  if (!foundTeam) existing.teams.push(teamRow); else {
    if (!has(foundTeam.rank)) foundTeam.rank = teamRow.rank;
    if (!has(foundTeam.time)) foundTeam.time = teamRow.time;
  }
  const rows = [
    {rank:3,name:'ネルソン・マンデラ・ンビディ',team:'桜美林大学',grade:'1',time:'1:02:03'},
    {rank:107,name:'稲葉 勇介',team:'桜美林大学',grade:'2',time:'1:04:44'},
    {rank:155,name:'白川 大地',team:'桜美林大学',grade:'4',time:'1:05:23'},
    {rank:242,name:'武下 孝輔',team:'桜美林大学',grade:'3',time:'1:06:39'},
    {rank:246,name:'盛重 完英',team:'桜美林大学',grade:'4',time:'1:06:43'},
    {rank:315,name:'田部 智暉',team:'桜美林大学',grade:'2',time:'1:07:48'},
    {rank:327,name:'志村 紘佑',team:'桜美林大学',grade:'1',time:'1:08:02'},
    {rank:340,name:'富永 恭平',team:'桜美林大学',grade:'1',time:'1:08:27'},
    {rank:364,name:'池田 聖',team:'桜美林大学',grade:'4',time:'1:09:10'},
    {rank:371,name:'都 翔',team:'桜美林大学',grade:'3',time:'1:09:24'},
    {rank:388,name:'北原 佑都',team:'桜美林大学',grade:'2',time:'1:10:00'}
  ];
  for (const row of rows) {
    const found = existing.individuals.find(x => (Number(x.rank) === row.rank) || (norm(x.name) === norm(row.name) && norm(x.team) === norm(row.team)));
    if (!found) existing.individuals.push(row); else for (const f of ['rank','name','team','grade','time']) if (!has(found[f]) && has(row[f])) found[f] = row[f];
  }
  existing.teams.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  existing.individuals.sort((a,b)=>(Number(a.rank)||9999)-(Number(b.rank)||9999));
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources=[];
  const src='https://www.obirin.ac.jp/sports/ekiden/topics/y_2022/amhute000005qaie.html';
  if (!existing.supplementalSources.includes(src)) existing.supplementalSources.push(src);

  // Continue with the next verified 2022 supplement without replacing confirmed values.
  if (typeof document !== 'undefined' && !document.querySelector('script[data-hq-2022-s2]')) {
    const s=document.createElement('script');
    s.src='hakone-qualifier-2022-supplement-2.js';
    s.dataset.hq2022S2='1';
    document.head.appendChild(s);
  }
})();