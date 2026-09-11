// Historical supplement: 2002 (第79回) 箱根駅伝予選会
// Primary source: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績・第79回出場校選手一覧）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2002, eventYear: 2002, hakoneEdition: 79,
    teams: [
      {rank:1,time:'10:10:20',team:'東海大学'},{rank:2,time:'10:11:18',team:'東洋大学'},{rank:3,time:'10:12:11',team:'法政大学'},
      {rank:4,time:'10:14:09',team:'日本大学'},{rank:5,time:'10:16:59',team:'中央学院大学'},{rank:6,time:'10:17:28',team:'日本体育大学'},
      {rank:7,time:'10:18:06',team:'拓殖大学'},{rank:8,time:'10:18:31',team:'國學院大學'},{rank:9,time:'10:23:41',team:'関東学院大学'},
      {rank:10,time:'10:25:29',team:'専修大学'},{rank:11,time:'10:30:59',team:'城西大学'},{rank:12,time:'10:35:19',team:'国士舘大学'},
      {rank:13,time:'10:37:00',team:'平成国際大学'},{rank:14,time:'10:39:45',team:'東京農業大学'},{rank:15,time:'10:39:57',team:'創価大学'},
      {rank:16,time:'10:41:17',team:'明治大学'},{rank:17,time:'10:47:42',team:'青山学院大学'},{rank:18,time:'10:51:10',team:'筑波大学'},
      {rank:19,time:'10:52:29',team:'国際武道大学'},{rank:20,time:'10:55:51',team:'流通経済大学'},{rank:21,time:'11:11:23',team:'慶應義塾大学'},
      {rank:22,time:'11:20:50',team:'東京大学'},{rank:23,time:'11:34:46',team:'東京理科大学'},{rank:24,time:'11:35:09',team:'東京学芸大学'},
      {rank:25,time:'11:54:23',team:'千葉商科大学'},{rank:26,time:'11:56:05',team:'防衛大学校'},{rank:27,time:'12:03:50',team:'一橋大学'},
      {rank:28,time:'12:10:53',team:'上智大学'},{rank:29,time:'12:12:35',team:'学習院大学'},{rank:30,time:'12:19:08',team:'東京都立大学'},
      {rank:31,time:'12:21:23',team:'東京工業大学'},{rank:32,time:'12:30:57',team:'文教大学'}
    ],
    individuals: [
      {rank:1,time:'59:47',name:'土井 洋志',team:'法政大学'},
      {rank:2,time:'59:54',name:'福山 良祐',team:'中央学院大学',grade:4},
      {rank:3,time:'59:56',name:'尾田 賢典',team:'関東学院大学',grade:4},
      {rank:4,time:'1:00:03',name:'三行 幸一',team:'東洋大学',grade:3},
      {rank:5,time:'1:00:06',name:'秦 玲',team:'國學院大學',grade:3},
      {rank:6,time:'1:00:10',name:'清水 将也',team:'日本大学',grade:4},
      {rank:7,time:'1:00:19',name:'河野 孝行',team:'東海大学',grade:3},
      {rank:8,time:'1:00:22',name:'永富 和真',team:'東洋大学',grade:3},
      {rank:9,time:'1:00:25',name:'清水 智也',team:'日本大学',grade:4},
      {rank:10,time:'1:00:28',name:'重成 英彰',team:'明治大学',grade:4}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/79/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/79/yosen_kojinresult/',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/chuogakuin.html',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/kantogakuin.html',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/toyo.html',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/kokugakuin.html',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/nihon.html',
      'https://www.ntv.co.jp/hakone/backnumber/79/team/senbatsu.html',
      'https://www.ntv.co.jp/hakone/backnumber/78/team/tokai.html'
    ],
    notes: '2002年10月19日開催の第79回箱根駅伝予選会。日本テレビ公式の総合表に掲載された1〜32位を収録（公式本文は参加34校・396名と記載するが、残る2校は総合表に掲載されないため推測で追加しない）。7位以下は関東インカレポイント反映後の公式最終総合タイムを採用。個人成績は公式掲載の上位10名。学年は第79回本大会の公式選手一覧等で同一年度に確認できた選手のみ設定し、土井洋志は確認不足のため未設定。河野孝行は第78回本大会で2年と確認できるため、2002年10月時点は3年として収録。既存の確認済み値は空データで上書きしない。'
  };
  const existing = window.hakoneQualifierDB.years['2002'];
  if (!existing) { window.hakoneQualifierDB.years['2002'] = record; return; }
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