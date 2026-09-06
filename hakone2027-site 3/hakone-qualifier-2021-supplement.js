// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Team standings: 41 teams. Individual results: verified top 10 with grades.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const existing = window.hakoneQualifierDB.years['2021'];
  const record = {
    year: 2021,
    eventYear: 2021,
    hakoneEdition: 98,
    teams: [
      {rank:1,time:'10:33:22',team:'明治大学'},
      {rank:2,time:'10:37:38',team:'中央大学'},
      {rank:3,time:'10:39:32',team:'日本体育大学'},
      {rank:4,time:'10:41:15',team:'山梨学院大学'},
      {rank:5,time:'10:41:57',team:'神奈川大学'},
      {rank:6,time:'10:42:12',team:'法政大学'},
      {rank:7,time:'10:43:08',team:'中央学院大学'},
      {rank:8,time:'10:44:47',team:'駿河台大学'},
      {rank:9,time:'10:44:58',team:'専修大学'},
      {rank:10,time:'10:45:41',team:'国士舘大学'},
      {rank:11,time:'10:46:36',team:'拓殖大学'},
      {rank:12,time:'10:48:08',team:'大東文化大学'},
      {rank:13,time:'10:48:14',team:'筑波大学'},
      {rank:14,time:'10:49:29',team:'上武大学'},
      {rank:15,time:'10:49:32',team:'城西大学'},
      {rank:16,time:'10:53:07',team:'立教大学'},
      {rank:17,time:'10:53:21',team:'流通経済大学'},
      {rank:18,time:'10:53:27',team:'東京農業大学'},
      {rank:19,time:'10:54:30',team:'慶應義塾大学'},
      {rank:20,time:'10:54:36',team:'東京経済大学'},
      {rank:21,time:'10:57:50',team:'日本大学'},
      {rank:22,time:'11:00:38',team:'亜細亜大学'},
      {rank:23,time:'11:01:13',team:'日本薬科大学'},
      {rank:24,time:'11:04:59',team:'武蔵野学院大学'},
      {rank:25,time:'11:05:36',team:'芝浦工業大学'},
      {rank:26,time:'11:05:48',team:'育英大学'},
      {rank:27,time:'11:08:11',team:'関東学院大学'},
      {rank:28,time:'11:08:38',team:'麗澤大学'},
      {rank:29,time:'11:09:33',team:'桜美林大学'},
      {rank:30,time:'11:22:04',team:'明治学院大学'},
      {rank:31,time:'11:25:09',team:'立正大学'},
      {rank:32,time:'11:30:51',team:'平成国際大学'},
      {rank:33,time:'11:40:14',team:'湘南工科大学'},
      {rank:34,time:'11:46:23',team:'東京大学'},
      {rank:35,time:'11:58:14',team:'一橋大学'},
      {rank:36,time:'12:08:30',team:'帝京平成大学'},
      {rank:37,time:'12:09:31',team:'東京大学大学院'},
      {rank:38,time:'12:11:03',team:'東京工業大学'},
      {rank:39,time:'12:21:32',team:'高崎経済大学'},
      {rank:40,time:'記録なし',team:'東京理科大学'},
      {rank:41,time:'記録なし',team:'上智大学'}
    ],
    individuals: [
      {rank:1,time:'1:01:23',name:'ワンジク チャールズカマウ',grade:'2',team:'武蔵野学院大学'},
      {rank:2,time:'1:01:41',name:'サムソン ディランゴ',grade:'1',team:'流通経済大学'},
      {rank:3,time:'1:01:47',name:'ノア キプリモ',grade:'3',team:'日本薬科大学'},
      {rank:4,time:'1:01:49',name:'ライモイ ヴィンセント',grade:'4',team:'国士舘大学'},
      {rank:5,time:'1:01:52',name:'ジョセフ ラジニ',grade:'3',team:'拓殖大学'},
      {rank:6,time:'1:02:15',name:'ジェームズ ブヌカ',grade:'4',team:'駿河台大学'},
      {rank:7,time:'1:02:15',name:'ポール オニエゴ',grade:'4',team:'山梨学院大学'},
      {rank:8,time:'1:02:46',name:'栗原 啓吾',grade:'4',team:'中央学院大学'},
      {rank:9,time:'1:02:47',name:'加藤 大誠',grade:'3',team:'明治大学'},
      {rank:10,time:'1:02:49',name:'髙瀨 桂',grade:'3',team:'専修大学'}
    ],
    source: 'https://hashirou.com/article/page/hakone-ekiden-preliminary-2021',
    supplementalSources: [
      'https://genkimanman.com/halfmarathon/hakoneyosen/hakoneyosen2021.html',
      'https://4years.asahi.com/article/14467832'
    ]
  };
  if (!existing) {
    window.hakoneQualifierDB.years['2021'] = record;
  } else {
    if (!Array.isArray(existing.teams) || existing.teams.length === 0) existing.teams = record.teams;
    if (!Array.isArray(existing.individuals) || existing.individuals.length === 0) existing.individuals = record.individuals;
    if (!existing.source) existing.source = record.source;
  }
})();
