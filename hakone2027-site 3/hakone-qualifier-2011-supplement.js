// Historical supplement: 2011 (第88回) 箱根駅伝予選会
// Team and individual results: 日本テレビ 箱根駅伝公式 第88回予選会結果.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2011, eventYear: 2011, hakoneEdition: 88,
    teams: [
      {rank:1,time:'10:12:08',team:'上武大学'},
      {rank:2,time:'10:12:43',team:'山梨学院大学'},
      {rank:3,time:'10:13:38',team:'国士舘大学'},
      {rank:4,time:'10:13:58',team:'東京農業大学'},
      {rank:5,time:'10:14:03',team:'神奈川大学'},
      {rank:6,time:'10:14:18',team:'帝京大学'},
      {rank:7,time:'10:13:55',team:'城西大学'},
      {rank:8,time:'10:15:22',team:'中央学院大学'},
      {rank:9,time:'10:16:14',team:'順天堂大学'},
      {rank:10,time:'10:16:43',team:'法政大学'},
      {rank:11,time:'10:16:58',team:'日本大学'},
      {rank:12,time:'10:18:07',team:'専修大学'},
      {rank:13,time:'10:20:12',team:'亜細亜大学'},
      {rank:14,time:'10:21:34',team:'大東文化大学'},
      {rank:15,time:'10:28:17',team:'流通経済大学'},
      {rank:16,time:'10:29:44',team:'創価大学'},
      {rank:17,time:'10:30:39',team:'松蔭大学'},
      {rank:18,time:'10:32:24',team:'麗澤大学'},
      {rank:19,time:'10:34:14',team:'平成国際大学'},
      {rank:20,time:'10:44:50',team:'関東学院大学'},
      {rank:21,time:'10:49:33',team:'武蔵野学院大学'},
      {rank:22,time:'10:50:01',team:'東京経済大学'},
      {rank:23,time:'10:59:47',team:'慶應義塾大学'},
      {rank:24,time:'11:01:59',team:'東京学芸大学'},
      {rank:25,time:'11:07:04',team:'東京大学'},
      {rank:26,time:'11:10:03',team:'筑波大学'},
      {rank:27,time:'11:10:37',team:'駿河台大学'},
      {rank:28,time:'11:13:35',team:'国際武道大学'},
      {rank:29,time:'11:18:15',team:'立教大学'},
      {rank:30,time:'11:26:31',team:'学習院大学'},
      {rank:31,time:'11:39:36',team:'横浜国立大学'},
      {rank:32,time:'11:41:08',team:'千葉大学'},
      {rank:33,time:'11:41:17',team:'東京理科大学'},
      {rank:34,time:'11:42:56',team:'明治学院大学'},
      {rank:35,time:'11:43:57',team:'首都大学東京'},
      {rank:36,time:'11:49:27',team:'防衛大学校'},
      {rank:37,time:'11:56:44',team:'高崎経済大学'},
      {rank:38,time:'12:05:30',team:'山梨大学'},
      {rank:39,time:'12:27:41',team:'文教大学'},
      {rank:null,time:null,team:'筑波大学大学院',status:'記録なし'}
    ],
    individuals: [
      {rank:1,time:'0:59:26',name:'O・コスマス',team:'山梨学院大学'},
      {rank:2,time:'0:59:28',name:'佐藤 佑輔',team:'日本大学'},
      {rank:3,time:'1:00:04',name:'伊藤 正樹',team:'国士舘大学'},
      {rank:4,time:'1:00:15',name:'ガンドゥ・ベンジャミン',team:'日本大学'},
      {rank:5,time:'1:00:16',name:'宮川 尚人',team:'亜細亜大学'},
      {rank:6,time:'1:00:16',name:'藤井 啓介',team:'中央学院大学'},
      {rank:7,time:'1:00:21',name:'田村 優宝',team:'日本大学'},
      {rank:8,time:'1:00:26',name:'蛯名 聡勝',team:'帝京大学'},
      {rank:9,time:'1:00:28',name:'氏原 健介',team:'上武大学'},
      {rank:10,time:'1:00:31',name:'佐藤 舜',team:'上武大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/88/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/88/yosen_kojinresult/',
      'https://ekiden.kanagawa-u.ac.jp/road_to/road_to2012/yosenkai_kansenki03.html'
    ],
    notes: '日本テレビ箱根駅伝公式アーカイブで全39校の最終総合順位・タイムと筑波大学大学院の「記録なし」を収録。7〜9位は当時の関東インカレポイント併用による最終総合順位・タイム。個人成績は公式掲載の上位10名を先行収録。学年は公式ページで確認できないため推測せず未設定。11位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2011'];
  if (!existing) { window.hakoneQualifierDB.years['2011'] = record; return; }
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