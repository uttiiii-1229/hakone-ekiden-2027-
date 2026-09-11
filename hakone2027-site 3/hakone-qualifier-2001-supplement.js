// Historical supplement: 2001 (第78回) 箱根駅伝予選会
// Primary source: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2001, eventYear: 2001, hakoneEdition: 78,
    teams: [
      {rank:1,time:'10:07:45',team:'早稲田大学'},{rank:2,time:'10:09:44',team:'日本体育大学'},{rank:3,time:'10:12:33',team:'亜細亜大学'},
      {rank:4,time:'10:13:16',team:'東海大学'},{rank:5,time:'10:14:43',team:'専修大学'},{rank:6,time:'10:15:28',team:'関東学院大学'},
      {rank:7,time:'10:16:10',team:'拓殖大学'},{rank:8,time:'10:16:19',team:'東洋大学'},{rank:9,time:'10:17:25',team:'中央学院大学'},
      {rank:10,time:'10:18:43',team:'國學院大學'},{rank:11,time:'10:18:51',team:'平成国際大学'},{rank:12,time:'10:22:13',team:'国士舘大学'},
      {rank:13,time:'10:22:19',team:'東京農業大学'},{rank:14,time:'10:30:01',team:'創価大学'},{rank:15,time:'10:31:45',team:'青山学院大学'},
      {rank:16,time:'10:40:08',team:'明治大学'},{rank:17,time:'10:48:32',team:'筑波大学'},{rank:18,time:'10:49:41',team:'流通経済大学'},
      {rank:19,time:'10:59:28',team:'慶應義塾大学'},{rank:20,time:'11:03:57',team:'国際武道大学'},{rank:21,time:'11:19:19',team:'東京大学'},
      {rank:22,time:'11:28:20',team:'東京学芸大学'},{rank:23,time:'11:36:04',team:'防衛大学校'},{rank:24,time:'11:41:27',team:'東京理科大学'},
      {rank:25,time:'11:48:34',team:'立教大学'},{rank:26,time:'11:50:03',team:'千葉商科大学'},{rank:27,time:'11:51:12',team:'東京都立大学'},
      {rank:28,time:'11:52:00',team:'学習院大学'},{rank:29,time:'11:53:38',team:'茨城大学'},{rank:30,time:'12:01:58',team:'東京工業大学'},
      {rank:31,time:'12:05:34',team:'一橋大学'},{rank:32,time:'12:08:33',team:'成蹊大学'},{rank:33,time:'12:30:29',team:'上智大学'}
    ],
    individuals: [
      {rank:1,time:'59:03',name:'ジョン・カーニー',team:'平成国際大学'},
      {rank:2,time:'59:19',name:'坂斉 亨',team:'国士舘大学'},
      {rank:3,time:'59:23',name:'佐藤 信介',team:'日本体育大学'},
      {rank:4,time:'59:26',name:'原田 正彦',team:'早稲田大学'},
      {rank:5,time:'59:28',name:'フランシス・ムヒア',team:'平成国際大学'},
      {rank:6,time:'59:35',name:'秋葉 啓太',team:'関東学院大学'},
      {rank:7,time:'59:42',name:'藤原 新',team:'拓殖大学'},
      {rank:8,time:'59:46',name:'堀口 貴志',team:'国士舘大学'},
      {rank:9,time:'59:59',name:'石川 末廣',team:'東洋大学'},
      {rank:10,time:'59:59',name:'森村 哲',team:'早稲田大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/78/yosen_sougouresult/',
    supplementalSources: ['https://www.ntv.co.jp/hakone/backnumber/78/yosen_kojinresult/'],
    notes: '2001年10月20日開催の第78回箱根駅伝予選会。日本テレビ公式掲載の総合1〜33位と個人成績上位10名を収録。公式本文は34校392名出場とするが総合表は33位までのため、未掲載1校は推測で追加しない。学年は公式予選会ページで確認できないため未設定。既存確認済み値を空データで上書きしない。'
  };
  const existing = window.hakoneQualifierDB.years['2001'];
  if (!existing) { window.hakoneQualifierDB.years['2001'] = record; return; }
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