// Historical supplement: 2020 (第97回) 箱根駅伝予選会
// Team standings: all 46 teams from Nippon TV official archive.
// Individuals: official top 10 + all 12 Kanagawa University runners verified by university official page.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};

  const record = {
    year: 2020,
    eventYear: 2020,
    hakoneEdition: 97,
    teams: [
      {rank:1,time:'10:23:34',team:'順天堂大学'},
      {rank:2,time:'10:26:13',team:'中央大学'},
      {rank:3,time:'10:29:37',team:'城西大学'},
      {rank:4,time:'10:29:59',team:'神奈川大学'},
      {rank:5,time:'10:30:38',team:'国士舘大学'},
      {rank:6,time:'10:30:49',team:'日本体育大学'},
      {rank:7,time:'10:30:50',team:'山梨学院大学'},
      {rank:8,time:'10:33:31',team:'法政大学'},
      {rank:9,time:'10:33:46',team:'拓殖大学'},
      {rank:10,time:'10:33:59',team:'専修大学'},
      {rank:11,time:'10:34:17',team:'筑波大学'},
      {rank:12,time:'10:34:36',team:'中央学院大学'},
      {rank:13,time:'10:36:07',team:'麗澤大学'},
      {rank:14,time:'10:36:44',team:'上武大学'},
      {rank:15,time:'10:38:05',team:'駿河台大学'},
      {rank:16,time:'10:39:22',team:'大東文化大学'},
      {rank:17,time:'10:39:55',team:'東京農業大学'},
      {rank:18,time:'10:43:14',team:'日本大学'},
      {rank:19,time:'10:43:49',team:'慶應義塾大学'},
      {rank:20,time:'10:46:38',team:'亜細亜大学'},
      {rank:21,time:'10:48:30',team:'関東学院大学'},
      {rank:22,time:'10:48:30',team:'流通経済大学'},
      {rank:23,time:'10:49:57',team:'平成国際大学'},
      {rank:24,time:'10:50:16',team:'東京経済大学'},
      {rank:25,time:'10:51:54',team:'日本薬科大学'},
      {rank:26,time:'10:52:27',team:'明治学院大学'},
      {rank:27,time:'10:53:18',team:'武蔵野学院大学'},
      {rank:28,time:'10:54:12',team:'立教大学'},
      {rank:29,time:'10:55:11',team:'桜美林大学'},
      {rank:30,time:'11:01:16',team:'育英大学'},
      {rank:31,time:'11:02:34',team:'芝浦工業大学'},
      {rank:32,time:'11:11:09',team:'立正大学'},
      {rank:33,time:'11:35:28',team:'高崎経済大学'},
      {rank:34,time:'11:36:30',team:'東京大学'},
      {rank:35,time:'11:40:08',team:'帝京平成大学'},
      {rank:36,time:'11:46:01',team:'東京理科大学'},
      {rank:37,time:'11:49:24',team:'東京大学大学院'},
      {rank:38,time:'11:50:07',team:'湘南工科大学'},
      {rank:39,time:'11:52:09',team:'一橋大学'},
      {rank:40,time:'11:58:33',team:'学習院大学'},
      {rank:41,time:'12:05:32',team:'東京工業大学'},
      {rank:42,time:'12:09:23',team:'茨城大学'},
      {rank:43,time:'12:12:48',team:'上智大学'},
      {rank:44,time:'12:24:12',team:'埼玉大学'},
      {rank:45,time:'12:27:48',team:'東京工業大学大学院'},
      {rank:46,time:'12:32:37',team:'防衛大学校'}
    ],
    individuals: [
      {rank:1,time:'1:00:13',name:'ジョセフ ラジニ',team:'拓殖大学'},
      {rank:2,time:'1:00:21',name:'ライモイ ヴィンセント',team:'国士舘大学'},
      {rank:3,time:'1:00:23',name:'ノア キプリモ',team:'日本薬科大学'},
      {rank:4,time:'1:00:34',name:'ジェームズ ブヌカ',team:'駿河台大学'},
      {rank:5,time:'1:01:41',name:'三浦 龍司',team:'順天堂大学'},
      {rank:6,time:'1:01:43',name:'猿橋 拓己',team:'筑波大学'},
      {rank:7,time:'1:01:44',name:'池田 耀平',team:'日本体育大学'},
      {rank:8,time:'1:01:45',name:'菊地 駿弥',team:'城西大学'},
      {rank:9,time:'1:01:46',name:'西 研人',team:'筑波大学'},
      {rank:10,time:'1:01:47',name:'吉居 大和',team:'中央大学'},
      {rank:17,time:'1:02:06',name:'呑村 大樹',grade:'3',team:'神奈川大学'},
      {rank:26,time:'1:02:28',name:'井手 孝一',grade:'4',team:'神奈川大学'},
      {rank:50,time:'1:02:48',name:'高橋 銀河',grade:'1',team:'神奈川大学'},
      {rank:54,time:'1:02:51',name:'宇津野 篤',grade:'1',team:'神奈川大学'},
      {rank:68,time:'1:03:03',name:'佐々木 亮輔',grade:'1',team:'神奈川大学'},
      {rank:76,time:'1:03:06',name:'小笠原 峰士',grade:'4',team:'神奈川大学'},
      {rank:94,time:'1:03:19',name:'西方 大珠',grade:'3',team:'神奈川大学'},
      {rank:103,time:'1:03:24',name:'鈴木 玲央',grade:'2',team:'神奈川大学'},
      {rank:112,time:'1:03:27',name:'川口 慧',grade:'3',team:'神奈川大学'},
      {rank:113,time:'1:03:27',name:'横澤 清己',grade:'3',team:'神奈川大学'},
      {rank:119,time:'1:03:30',name:'古市 祐太',grade:'2',team:'神奈川大学'},
      {rank:133,time:'1:03:43',name:'安田 響',grade:'3',team:'神奈川大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/97/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/97/yosen_kojinresult/',
      'https://ekiden.kanagawa-u.ac.jp/road_to/road_to2021/yosenkai_kansenki03.html'
    ]
  };

  const existing = window.hakoneQualifierDB.years['2020'];
  if (!existing) {
    window.hakoneQualifierDB.years['2020'] = record;
    return;
  }

  if (!Array.isArray(existing.teams) || existing.teams.length === 0) {
    existing.teams = record.teams;
  } else {
    const teamKeys = new Set(existing.teams.map(x => `${x.rank}|${x.team}`));
    record.teams.forEach(x => { if (!teamKeys.has(`${x.rank}|${x.team}`)) existing.teams.push(x); });
    existing.teams.sort((a,b)=>(a.rank||999)-(b.rank||999));
  }

  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const personKeys = new Set(existing.individuals.map(x => `${x.rank}|${x.name}|${x.team}`));
  record.individuals.forEach(x => {
    const key = `${x.rank}|${x.name}|${x.team}`;
    if (!personKeys.has(key)) existing.individuals.push(x);
  });
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));
  if (!existing.source) existing.source = record.source;
  if (!existing.supplementalSources) existing.supplementalSources = record.supplementalSources;
})();
