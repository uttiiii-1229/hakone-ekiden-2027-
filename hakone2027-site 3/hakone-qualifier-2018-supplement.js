// Historical supplement: 2018 (第95回) 箱根駅伝予選会
// Team standings: Nippon TV official Hakone archive.
// Individuals: official Nippon TV top 10; grades cross-checked against contemporary result coverage.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};

  const record = {
    year: 2018,
    eventYear: 2018,
    hakoneEdition: 95,
    teams: [
      {rank:1,time:'10:29:58',team:'駒澤大学'},
      {rank:2,time:'10:36:58',team:'順天堂大学'},
      {rank:3,time:'10:39:16',team:'神奈川大学'},
      {rank:4,time:'10:40:38',team:'國學院大學'},
      {rank:5,time:'10:41:06',team:'明治大学'},
      {rank:6,time:'10:41:15',team:'東京国際大学'},
      {rank:7,time:'10:42:16',team:'大東文化大学'},
      {rank:8,time:'10:42:55',team:'中央大学'},
      {rank:9,time:'10:45:39',team:'国士舘大学'},
      {rank:10,time:'10:46:27',team:'山梨学院大学'},
      {rank:11,time:'10:46:51',team:'上武大学'},
      {rank:12,time:'10:48:41',team:'麗澤大学'},
      {rank:13,time:'10:48:54',team:'亜細亜大学'},
      {rank:14,time:'10:49:23',team:'専修大学'},
      {rank:15,time:'10:50:39',team:'創価大学'},
      {rank:16,time:'10:53:49',team:'東京農業大学'},
      {rank:17,time:'10:55:23',team:'筑波大学'},
      {rank:18,time:'10:58:24',team:'駿河台大学'},
      {rank:19,time:'11:04:55',team:'日本薬科大学'},
      {rank:20,time:'11:05:45',team:'明治学院大学'},
      {rank:21,time:'11:06:16',team:'桜美林大学'},
      {rank:22,time:'11:07:46',team:'流通経済大学'},
      {rank:23,time:'11:07:51',team:'関東学院大学'},
      {rank:24,time:'11:08:23',team:'武蔵野学院大学'},
      {rank:25,time:'11:11:44',team:'平成国際大学'},
      {rank:26,time:'11:15:01',team:'慶應義塾大学'},
      {rank:27,time:'11:16:56',team:'東京経済大学'},
      {rank:28,time:'11:24:36',team:'立教大学'},
      {rank:29,time:'11:43:18',team:'東京大学'},
      {rank:30,time:'11:44:29',team:'東京理科大学'},
      {rank:31,time:'11:51:39',team:'帝京平成大学'},
      {rank:32,time:'11:58:51',team:'東京情報大学'},
      {rank:33,time:'12:00:17',team:'学習院大学'},
      {rank:34,time:'12:02:29',team:'一橋大学'},
      {rank:35,time:'12:04:45',team:'高崎経済大学'},
      {rank:36,time:'12:08:08',team:'東京工業大学'},
      {rank:37,time:'12:12:20',team:'防衛大学校'},
      {rank:38,time:'12:17:59',team:'首都大学東京'},
      {rank:null,time:null,team:'上智大学'}
    ],
    individuals: [
      {rank:1,time:'1:00:44',name:'レダマ・キサイサ',grade:'3',team:'桜美林大学'},
      {rank:2,time:'1:01:22',name:'塩尻 和也',grade:'4',team:'順天堂大学'},
      {rank:3,time:'1:01:49',name:'ライモイ・ヴィンセント',grade:'1',team:'国士舘大学'},
      {rank:4,time:'1:01:50',name:'ドミニク・ニャイロ',grade:'4',team:'山梨学院大学'},
      {rank:5,time:'1:01:50',name:'片西 景',grade:'4',team:'駒澤大学'},
      {rank:6,time:'1:01:57',name:'堀尾 謙介',grade:'4',team:'中央大学'},
      {rank:7,time:'1:02:02',name:'浦野 雄平',grade:'3',team:'國學院大學'},
      {rank:8,time:'1:02:16',name:'阿部 弘輝',grade:'3',team:'明治大学'},
      {rank:9,time:'1:02:22',name:'ジェームズ・ブヌカ',grade:'1',team:'駿河台大学'},
      {rank:10,time:'1:02:23',name:'サイモン・カリウキ',grade:'4',team:'日本薬科大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/95/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/95/yosen_kojinresult/',
      'https://www.nikkansports.com/sports/athletics/news/201810120000418.html',
      'https://www.obirin.ac.jp/info/year_2018/r11i8i0000029lu5.html'
    ],
    notes: '上智大学は公式総合結果で順位・合計タイムが空欄のため、推測せず null で保持。個人成績はまず公式掲載上位10名を収録し、11位以下は今後補完する。'
  };

  const existing = window.hakoneQualifierDB.years['2018'];
  if (!existing) {
    window.hakoneQualifierDB.years['2018'] = record;
    return;
  }

  if (!Array.isArray(existing.teams)) existing.teams = [];
  const teamByName = new Map(existing.teams.map(x => [x.team, x]));
  record.teams.forEach(x => {
    const prev = teamByName.get(x.team);
    if (!prev) {
      existing.teams.push(x);
      teamByName.set(x.team, x);
      return;
    }
    if ((prev.rank == null || prev.rank === '') && x.rank != null) prev.rank = x.rank;
    if (!prev.time && x.time) prev.time = x.time;
  });
  existing.teams.sort((a,b)=>(a.rank ?? 999)-(b.rank ?? 999));

  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const personKey = x => `${x.rank}|${String(x.name||'').replace(/[\s　・]/g,'')}|${x.team}`;
  const people = new Map(existing.individuals.map(x => [personKey(x), x]));
  record.individuals.forEach(x => {
    const key = personKey(x);
    const prev = people.get(key);
    if (!prev) {
      existing.individuals.push(x);
      people.set(key, x);
      return;
    }
    if (!prev.time && x.time) prev.time = x.time;
    if (!prev.grade && x.grade) prev.grade = x.grade;
  });
  existing.individuals.sort((a,b)=>(a.rank ?? 9999)-(b.rank ?? 9999));

  if (!existing.source) existing.source = record.source;
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = record.supplementalSources;
  if (!existing.notes) existing.notes = record.notes;
})();
