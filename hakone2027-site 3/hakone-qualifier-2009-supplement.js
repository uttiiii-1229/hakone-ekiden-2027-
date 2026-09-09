// Historical supplement: 2009 (第86回) 箱根駅伝予選会
// Verified primarily against university official result archives.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2009, eventYear: 2009, hakoneEdition: 86,
    teams: [
      {rank:1,time:'10:03:39',team:'駒澤大学'},
      {rank:2,time:'10:05:02',team:'東京農業大学'},
      {rank:3,time:'10:08:55',team:'上武大学'},
      {rank:4,time:'10:11:01',team:'日本体育大学'},
      {rank:5,time:'10:11:20',team:'帝京大学'},
      {rank:6,time:'10:11:36',team:'城西大学'},
      {rank:7,time:'10:11:42',team:'専修大学'},
      {rank:8,time:'10:12:32',team:'青山学院大学'},
      {rank:9,time:'10:13:06',team:'東海大学'},
      {rank:10,time:'10:15:40',team:'亜細亜大学'},
      {rank:11,time:'10:18:08',team:'法政大学'},
      {rank:12,time:'10:20:01',team:'国士舘大学'},
      {rank:13,time:'10:20:35',team:'順天堂大学'},
      {rank:14,time:'10:17:52',team:'拓殖大学'},
      {rank:15,time:'10:20:13',team:'國學院大學'}
    ],
    individuals: [
      {rank:46,time:'1:00:48',name:'西山 容平',team:'拓殖大学',grade:3},
      {rank:87,time:'1:01:21',name:'谷川 智浩',team:'拓殖大学',grade:3},
      {rank:94,time:'1:01:27',name:'兼実 省伍',team:'拓殖大学',grade:1},
      {rank:111,time:'1:01:39',name:'真家 尚',team:'拓殖大学',grade:2},
      {rank:117,time:'1:01:47',name:'野本 大喜',team:'拓殖大学',grade:1},
      {rank:134,time:'1:01:56',name:'舘石 盛行',team:'拓殖大学',grade:2},
      {rank:140,time:'1:02:07',name:'那須 大地',team:'拓殖大学',grade:2},
      {rank:154,time:'1:02:15',name:'村山 徳宏',team:'拓殖大学',grade:4},
      {rank:158,time:'1:02:17',name:'甲斐 優人',team:'拓殖大学',grade:2},
      {rank:174,time:'1:02:42',name:'住本 祐樹',team:'拓殖大学',grade:3},
      {rank:182,time:'1:02:51',name:'蓮池 龍顕',team:'拓殖大学',grade:2}
    ],
    source: 'https://takushoku-alumni.jp/20091022_482',
    supplementalSources: [
      'https://www.juntendo.ac.jp/academics/faculty/hss/blog/00381.html',
      'https://www.ntv.co.jp/hakone/movies/375908rt92joix7jpfl8.html'
    ],
    notes: '2009年10月17日開催。拓殖大学学友会の大会結果で上位15校の公式最終総合順位・タイムを収録。9位以下は関東インカレポイント換算後の最終総合タイム。個人成績は同ページで順位・氏名・学年・記録が明確な拓殖大学11名のみ収録。原資料中に順位表記が不自然な1行があるため、その選手は推測補正せず保留。16位以下のチームおよび他大学個人成績は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2009'];
  if (!existing) { window.hakoneQualifierDB.years['2009'] = record; return; }
  if (!Array.isArray(existing.teams)) existing.teams = [];
  const normTeam = s => String(s||'').normalize('NFKC').replace(/國學院大学/g,'國學院大學').replace(/[\s　]/g,'');
  const teamByName = new Map(existing.teams.map(x => [normTeam(x.team), x]));
  record.teams.forEach(x => { const k=normTeam(x.team), p=teamByName.get(k); if(!p){existing.teams.push(x);teamByName.set(k,x);return;} if((p.rank==null||p.rank==='')&&x.rank!=null)p.rank=x.rank; if(!p.time&&x.time)p.time=x.time; if(!p.status&&x.status)p.status=x.status; });
  existing.teams.sort((a,b)=>(a.rank ?? 999)-(b.rank ?? 999));
  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const normName = s => String(s||'').normalize('NFKC').replace(/[\s　・.･]/g,'').toLowerCase();
  const personKey = x => `${x.rank}|${normName(x.name)}|${normTeam(x.team)}`;
  const people = new Map(existing.individuals.map(x => [personKey(x), x]));
  record.individuals.forEach(x => { const k=personKey(x), p=people.get(k); if(!p){existing.individuals.push(x);people.set(k,x);return;} if(!p.time&&x.time)p.time=x.time; if(!p.grade&&x.grade)p.grade=x.grade; });
  existing.individuals.sort((a,b)=>(a.rank ?? 9999)-(b.rank ?? 9999));
  existing.source = existing.source || record.source;
  existing.supplementalSources = Array.from(new Set([...(existing.supplementalSources||[]), ...record.supplementalSources]));
  existing.notes = existing.notes || record.notes;
})();