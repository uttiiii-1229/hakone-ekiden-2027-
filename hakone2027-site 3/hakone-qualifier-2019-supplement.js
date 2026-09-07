// Historical supplement: 2019 (第96回) 箱根駅伝予選会
// Team standings: official Nippon TV archive / Hakone official corrected results.
// Individuals: official corrected personal-result PDF top 10, including grades.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};

  const record = {
    year: 2019,
    eventYear: 2019,
    hakoneEdition: 96,
    teams: [
      {rank:1,time:'10:47:29',team:'東京国際大学'},
      {rank:2,time:'10:50:55',team:'神奈川大学'},
      {rank:3,time:'10:51:09',team:'日本体育大学'},
      {rank:4,time:'10:51:42',team:'明治大学'},
      {rank:5,time:'10:51:43',team:'創価大学'},
      {rank:6,time:'10:53:18',team:'筑波大学'},
      {rank:7,time:'10:54:29',team:'日本大学'},
      {rank:8,time:'10:55:21',team:'国士舘大学'},
      {rank:9,time:'10:55:26',team:'早稲田大学'},
      {rank:10,time:'10:56:46',team:'中央大学'},
      {rank:11,time:'10:57:12',team:'麗澤大学'},
      {rank:12,time:'10:58:44',team:'駿河台大学'},
      {rank:13,time:'11:00:16',team:'上武大学'},
      {rank:14,time:'11:01:57',team:'専修大学'},
      {rank:15,time:'11:02:27',team:'城西大学'},
      {rank:16,time:'11:05:05',team:'東京農業大学'},
      {rank:17,time:'11:06:14',team:'山梨学院大学'},
      {rank:18,time:'11:06:22',team:'大東文化大学'},
      {rank:19,time:'11:10:57',team:'流通経済大学'},
      {rank:20,time:'11:16:21',team:'東京経済大学'},
      {rank:21,time:'11:16:28',team:'武蔵野学院大学'},
      {rank:22,time:'11:19:52',team:'亜細亜大学'},
      {rank:23,time:'11:23:49',team:'立教大学'},
      {rank:24,time:'11:24:26',team:'明治学院大学'},
      {rank:25,time:'11:25:34',team:'日本薬科大学'},
      {rank:26,time:'11:27:13',team:'関東学院大学'},
      {rank:27,time:'11:28:47',team:'慶應義塾大学'},
      {rank:28,time:'11:30:55',team:'桜美林大学'},
      {rank:29,time:'11:38:29',team:'平成国際大学'},
      {rank:30,time:'11:49:54',team:'育英大学'},
      {rank:31,time:'11:50:16',team:'芝浦工業大学'},
      {rank:32,time:'11:53:54',team:'東京大学'},
      {rank:33,time:'12:05:05',team:'東京理科大学'},
      {rank:34,time:'12:05:44',team:'一橋大学'},
      {rank:35,time:'12:09:27',team:'帝京平成大学'},
      {rank:36,time:'12:16:06',team:'学習院大学'},
      {rank:37,time:'12:28:15',team:'東京工業大学'},
      {rank:38,time:'12:33:06',team:'東京工業大学大学院'},
      {rank:39,time:'12:34:25',team:'東京学芸大学'},
      {rank:40,time:'12:40:17',team:'防衛大学校'},
      {rank:41,time:'12:45:52',team:'東京大学大学院'},
      {rank:42,time:'12:49:27',team:'上智大学'}
    ],
    individuals: [
      {rank:1,time:'1:01:01',name:'レダマ キサイサ',grade:'4',team:'桜美林大学'},
      {rank:2,time:'1:01:37',name:'ライモイ ヴィンセント',grade:'2',team:'国士舘大学'},
      {rank:3,time:'1:02:23',name:'イエゴン ヴィンセントキベット',grade:'1',team:'東京国際大学'},
      {rank:4,time:'1:02:33',name:'チャールズ ドゥング',grade:'1',team:'日本大学'},
      {rank:5,time:'1:02:34',name:'伊藤 達彦',grade:'4',team:'東京国際大学'},
      {rank:6,time:'1:03:12',name:'荻久保 寛也',grade:'4',team:'城西大学'},
      {rank:7,time:'1:03:19',name:'米満 怜',grade:'4',team:'創価大学'},
      {rank:8,time:'1:03:26',name:'ジェームズ ブヌカ',grade:'2',team:'駿河台大学'},
      {rank:9,time:'1:03:28',name:'手嶋 杏丞',grade:'2',team:'明治大学'},
      {rank:10,time:'1:03:38',name:'ボニフェス ムルア',grade:'1',team:'山梨学院大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/96/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/96/yosen_kojinresult/',
      'https://www.hakone-ekiden.jp/topics/b4d40fade40e8b7f99fafe8ed3c9a261ae78f12c.html',
      'https://www.hakone-ekiden.jp/storage/topics/213/file/result_parsonal.pdf',
      'https://www.hakone-ekiden.jp/storage/topics/213/file/result_total.pdf'
    ],
    notes: '高崎経済大学は公式総合結果で順位・合計タイムが「－」のため、推測せず未収録。'
  };

  const existing = window.hakoneQualifierDB.years['2019'];
  if (!existing) {
    window.hakoneQualifierDB.years['2019'] = record;
    return;
  }

  if (!Array.isArray(existing.teams)) existing.teams = [];
  const teamKeys = new Set(existing.teams.map(x => `${x.rank}|${x.team}`));
  record.teams.forEach(x => {
    const key = `${x.rank}|${x.team}`;
    if (!teamKeys.has(key)) existing.teams.push(x);
  });
  existing.teams.sort((a,b)=>(a.rank||999)-(b.rank||999));

  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const personKeys = new Set(existing.individuals.map(x => `${x.rank}|${x.name}|${x.team}`));
  record.individuals.forEach(x => {
    const key = `${x.rank}|${x.name}|${x.team}`;
    if (!personKeys.has(key)) existing.individuals.push(x);
  });
  existing.individuals.sort((a,b)=>(a.rank||9999)-(b.rank||9999));

  if (!existing.source) existing.source = record.source;
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = record.supplementalSources;
  if (!existing.notes) existing.notes = record.notes;
})();
