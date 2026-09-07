// Historical supplement: 2017 (第94回) 箱根駅伝予選会
// Team standings and individual results: meisui historical result archive.
// Cross-checks: university official pages and contemporary reporting.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};

  const record = {
    year: 2017,
    eventYear: 2017,
    hakoneEdition: 94,
    teams: [
      {rank:1,time:'10:04:58',team:'帝京大学'},
      {rank:2,time:'10:05:45',team:'大東文化大学'},
      {rank:3,time:'10:06:03',team:'中央大学'},
      {rank:4,time:'10:06:21',team:'山梨学院大学'},
      {rank:5,time:'10:06:27',team:'拓殖大学'},
      {rank:6,time:'10:07:35',team:'國學院大學'},
      {rank:7,time:'10:07:47',team:'国士舘大学'},
      {rank:8,time:'10:08:50',team:'城西大学'},
      {rank:9,time:'10:09:42',team:'上武大学'},
      {rank:10,time:'10:10:34',team:'東京国際大学'},
      {rank:11,time:'10:12:05',team:'日本大学'},
      {rank:12,time:'10:13:04',team:'創価大学'},
      {rank:13,time:'10:13:05',team:'明治大学'},
      {rank:14,time:'10:13:40',team:'専修大学'},
      {rank:15,time:'10:18:46',team:'麗澤大学'},
      {rank:16,time:'10:18:58',team:'東京農業大学'},
      {rank:17,time:'10:22:28',team:'日本薬科大学'},
      {rank:18,time:'10:22:37',team:'流通経済大学'},
      {rank:19,time:'10:23:43',team:'筑波大学'},
      {rank:20,time:'10:26:32',team:'亜細亜大学'},
      {rank:21,time:'10:28:25',team:'桜美林大学'},
      {rank:22,time:'10:30:05',team:'平成国際大学'},
      {rank:23,time:'10:31:19',team:'駿河台大学'},
      {rank:24,time:'10:31:29',team:'関東学院大学'},
      {rank:25,time:'10:36:21',team:'武蔵野学院大学'},
      {rank:26,time:'10:42:07',team:'明治学院大学'},
      {rank:27,time:'10:42:42',team:'慶應義塾大学'},
      {rank:28,time:'10:45:55',team:'東京経済大学'},
      {rank:29,time:'10:51:50',team:'立教大学'},
      {rank:30,time:'10:51:51',team:'芝浦工業大学'},
      {rank:31,time:'10:52:37',team:'東京情報大学'},
      {rank:32,time:'11:00:18',team:'東京大学'},
      {rank:33,time:'11:14:01',team:'東京理科大学'},
      {rank:34,time:'11:16:05',team:'学習院大学'},
      {rank:35,time:'11:19:33',team:'千葉大学'},
      {rank:36,time:'11:19:34',team:'上智大学'},
      {rank:37,time:'11:23:25',team:'一橋大学'},
      {rank:38,time:'11:24:36',team:'帝京平成大学'},
      {rank:39,time:'11:28:58',team:'東京学芸大学'},
      {rank:40,time:'11:29:26',team:'首都大学東京'},
      {rank:41,time:'11:30:03',team:'東京工業大学'},
      {rank:42,time:'11:30:35',team:'防衛大学校'},
      {rank:43,time:'11:33:07',team:'埼玉大学'},
      {rank:44,time:'11:37:01',team:'成城大学'},
      {rank:45,time:'11:38:09',team:'横浜国立大学'},
      {rank:46,time:'11:39:38',team:'国際武道大学'},
      {rank:47,time:'11:40:33',team:'茨城大学'},
      {rank:48,time:'11:41:32',team:'高崎経済大学'},
      {rank:49,time:'12:08:41',team:'東京大学大学院'}
    ],
    individuals: [
      {rank:1,time:'0:57:27',name:'レダマ・キサイサ',grade:'2',team:'桜美林大学'},
      {rank:2,time:'0:57:33',name:'ドミニク・ニャイロ',grade:'3',team:'山梨学院大学'},
      {rank:3,time:'0:58:11',name:'サイモン・カリウキ',grade:'3',team:'日本薬科大学'},
      {rank:4,time:'0:59:02',name:'パトリック・M・ワンブィ',grade:'3',team:'日本大学'},
      {rank:5,time:'0:59:06',name:'ムソニ・ムイル',grade:'2',team:'創価大学'},
      {rank:6,time:'0:59:10',name:'ワンブア',grade:'2',team:'武蔵野学院大学'},
      {rank:7,time:'0:59:30',name:'畔上 和弥',grade:'3',team:'帝京大学'},
      {rank:8,time:'0:59:36',name:'中山 顕',grade:'3',team:'中央大学'},
      {rank:9,time:'0:59:38',name:'林 日高',grade:'4',team:'大東文化大学'},
      {rank:10,time:'0:59:41',name:'坂本 佳太',grade:'4',team:'上武大学'}
    ],
    source: 'https://meisui.sakura.ne.jp/rikujou/archives/13029',
    supplementalSources: [
      'https://www.chuo-u.ac.jp/news/2017/10/61762/',
      'https://www.senshu-u.ac.jp/news/nid00006623.html',
      'https://www.obirin.ac.jp/sports/ekiden/topics/y_2017/7fl296000002uo0d.html',
      'https://www.nikkansports.com/sports/athletics/news/201710140000352.html'
    ],
    notes: '49校のチーム順位・合計タイムを収録。個人成績は全出場者一覧のうち上位10名を先行収録し、11位以下は継続補完対象。既存値は空欄のみ補完する。'
  };

  const existing = window.hakoneQualifierDB.years['2017'];
  if (!existing) {
    window.hakoneQualifierDB.years['2017'] = record;
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
  const normName = s => String(s||'').normalize('NFKC').replace(/[\s　・.・]/g,'').toLowerCase();
  const personKey = x => `${x.rank}|${normName(x.name)}|${x.team}`;
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
