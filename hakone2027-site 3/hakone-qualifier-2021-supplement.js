// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Team standings: 41 teams. Individual results: official KGRR results, ranks 1-100; grades retained only where previously verified.
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
      {rank:10,time:'1:02:49',name:'髙瀨 桂',grade:'3',team:'専修大学'},
      {rank:11,time:'1:02:50',name:'チャールズ ドゥング',team:'日本大学'},
      {rank:12,time:'1:02:50',name:'鈴木 聖人',team:'明治大学'},
      {rank:13,time:'1:02:51',name:'吉居 大和',team:'中央大学'},
      {rank:14,time:'1:02:52',name:'高槻 芳照',team:'東京農業大学'},
      {rank:15,time:'1:02:55',name:'藤本 珠輝',team:'日本体育大学'},
      {rank:16,time:'1:02:58',name:'福谷 颯太',team:'筑波大学'},
      {rank:17,time:'1:02:58',name:'児玉 真輝',team:'明治大学'},
      {rank:18,time:'1:02:59',name:'櫛田 佳希',team:'明治大学'},
      {rank:19,time:'1:03:00',name:'斎藤 俊輔',team:'立教大学'},
      {rank:20,time:'1:03:01',name:'手嶋 杏丞',team:'明治大学'},
      {rank:21,time:'1:03:01',name:'松倉 唯斗',team:'山梨学院大学'},
      {rank:22,time:'1:03:02',name:'中山 雄太',team:'日本薬科大学'},
      {rank:23,time:'1:03:04',name:'ダンカン キサイサ',team:'専修大学'},
      {rank:24,time:'1:03:09',name:'村上 航大',team:'上武大学'},
      {rank:25,time:'1:03:09',name:'橋本 大輝',team:'明治大学'},
      {rank:26,time:'1:03:14',name:'小澤 大輝',team:'明治大学'},
      {rank:27,time:'1:03:16',name:'木山 達哉',team:'山梨学院大学'},
      {rank:28,time:'1:03:17',name:'並木 寧音',team:'東京農業大学'},
      {rank:29,time:'1:03:23',name:'巻田 理空',team:'神奈川大学'},
      {rank:30,time:'1:03:25',name:'荻原 陸斗',team:'国士舘大学'},
      {rank:31,time:'1:03:27',name:'鎌田 航生',team:'法政大学'},
      {rank:32,time:'1:03:28',name:'阿部 陽樹',team:'中央大学'},
      {rank:33,time:'1:03:29',name:'砂岡 拓磨',team:'城西大学'},
      {rank:34,time:'1:03:29',name:'中山 凜斗',team:'立教大学'},
      {rank:35,time:'1:03:30',name:'竹井 祐貴',team:'亜細亜大学'},
      {rank:36,time:'1:03:30',name:'手島 駿',team:'中央大学'},
      {rank:37,time:'1:03:31',name:'合田 椋',team:'拓殖大学'},
      {rank:38,time:'1:03:32',name:'小泉 樹',team:'法政大学'},
      {rank:39,time:'1:03:34',name:'諸星 颯大',team:'育英大学'},
      {rank:40,time:'1:03:34',name:'中澤 雄大',team:'中央大学'},
      {rank:41,time:'1:03:35',name:'木榑 杏祐',team:'国士舘大学'},
      {rank:42,time:'1:03:36',name:'盛本 聖也',team:'日本体育大学'},
      {rank:43,time:'1:03:38',name:'吉本 光希',team:'中央学院大学'},
      {rank:44,time:'1:03:38',name:'杉山 魁声',team:'筑波大学'},
      {rank:45,time:'1:03:39',name:'大川 歩夢',team:'東京経済大学'},
      {rank:46,time:'1:03:40',name:'大野 陽人',team:'大東文化大学'},
      {rank:47,time:'1:03:41',name:'田島 公太郎',team:'慶應義塾大学'},
      {rank:48,time:'1:03:41',name:'門田 雄誠',team:'亜細亜大学'},
      {rank:49,time:'1:03:42',name:'小林 竜也',team:'筑波大学'},
      {rank:50,time:'1:03:47',name:'ダニエル カヨウキ',team:'桜美林大学'},
      {rank:51,time:'1:03:48',name:'鈴木 康也',team:'麗澤大学'},
      {rank:52,time:'1:03:48',name:'西方 大珠',team:'神奈川大学'},
      {rank:53,time:'1:03:49',name:'山﨑 諒介',team:'神奈川大学'},
      {rank:54,time:'1:03:50',name:'清野 太成',team:'駿河台大学'},
      {rank:55,time:'1:03:50',name:'渡辺 一輝',team:'上武大学'},
      {rank:56,time:'1:03:50',name:'清家 陸',team:'法政大学'},
      {rank:57,time:'1:03:51',name:'宮下 資大',team:'流通経済大学'},
      {rank:58,time:'1:03:51',name:'佐藤 慎巴',team:'日本体育大学'},
      {rank:59,time:'1:03:51',name:'皆川 和範',team:'筑波大学'},
      {rank:60,time:'1:03:52',name:'内田 隼太',team:'法政大学'},
      {rank:61,time:'1:03:52',name:'田井野 悠介',team:'中央大学'},
      {rank:62,time:'1:03:53',name:'杉浦 慧',team:'慶應義塾大学'},
      {rank:63,time:'1:03:53',name:'川田 啓仁',team:'中央学院大学'},
      {rank:64,time:'1:03:53',name:'厚浦 大地',team:'関東学院大学'},
      {rank:65,time:'1:03:55',name:'宇津野 篤',team:'神奈川大学'},
      {rank:66,time:'1:03:55',name:'名村 樹哉',team:'日本体育大学'},
      {rank:67,time:'1:03:56',name:'大内 宏樹',team:'日本体育大学'},
      {rank:68,time:'1:03:56',name:'横澤 清己',team:'神奈川大学'},
      {rank:69,time:'1:03:56',name:'伊藤 太貴',team:'筑波大学'},
      {rank:70,time:'1:03:56',name:'谷口 辰煕',team:'大東文化大学'},
      {rank:71,time:'1:03:57',name:'加藤 広之',team:'日本体育大学'},
      {rank:72,time:'1:03:57',name:'杉本 龍陽',team:'明治大学'},
      {rank:73,time:'1:03:57',name:'岡嶋 翼',team:'日本体育大学'},
      {rank:74,time:'1:03:57',name:'湯浅 仁',team:'中央大学'},
      {rank:75,time:'1:03:58',name:'杉 彩文海',team:'明治大学'},
      {rank:76,time:'1:03:58',name:'東海林 宏一',team:'中央大学'},
      {rank:77,time:'1:03:59',name:'安藤 圭佑',team:'立教大学'},
      {rank:78,time:'1:03:59',name:'助川 拓海',team:'中央大学'},
      {rank:79,time:'1:03:59',name:'桐山 剛',team:'拓殖大学'},
      {rank:80,time:'1:04:02',name:'松川 雅虎',team:'芝浦工業大学'},
      {rank:81,time:'1:04:03',name:'山本 唯翔',team:'城西大学'},
      {rank:82,time:'1:04:03',name:'中野 翔太',team:'中央大学'},
      {rank:83,time:'1:04:03',name:'高田 尚暉',team:'山梨学院大学'},
      {rank:84,time:'1:04:04',name:'伊東 大暉',team:'山梨学院大学'},
      {rank:85,time:'1:04:04',name:'町田 康誠',team:'駿河台大学'},
      {rank:86,time:'1:04:05',name:'新山 舜心',team:'駿河台大学'},
      {rank:87,time:'1:04:10',name:'関口 絢太',team:'立教大学'},
      {rank:88,time:'1:04:10',name:'古川 大晃',team:'東京大学大学院'},
      {rank:89,time:'1:04:11',name:'落合 葵斗',team:'神奈川大学'},
      {rank:90,time:'1:04:12',name:'辻野 大輝',team:'武蔵野学院大学'},
      {rank:91,time:'1:04:12',name:'大畑 怜士',team:'日本体育大学'},
      {rank:92,time:'1:04:15',name:'西村 暉',team:'上武大学'},
      {rank:93,time:'1:04:15',name:'若山 岳',team:'日本大学'},
      {rank:94,time:'1:04:17',name:'宗像 直輝',team:'法政大学'},
      {rank:95,time:'1:04:17',name:'蟹江 翔太',team:'大東文化大学'},
      {rank:96,time:'1:04:17',name:'福井 大夢',team:'国士舘大学'},
      {rank:97,time:'1:04:19',name:'新本 駿',team:'山梨学院大学'},
      {rank:98,time:'1:04:19',name:'松井 尚希',team:'中央学院大学'},
      {rank:99,time:'1:04:21',name:'田尻 健',team:'駿河台大学'},
      {rank:100,time:'1:04:22',name:'三代 和弥',team:'国士舘大学'}
    ],
    source: 'https://www.kgrr.org/competition/?id=57',
    supplementalSources: [
      'https://www.kgrr.org/files/competition/57/40/kojin.pdf',
      'https://hashirou.com/article/page/hakone-ekiden-preliminary-2021',
      'https://genkimanman.com/halfmarathon/hakoneyosen/hakoneyosen2021.html',
      'https://4years.asahi.com/article/14467832'
    ]
  };

  const norm = (v) => String(v ?? '').replace(/\s+/g, '').replace(/[髙高]/g, '高');
  const hasValue = (v) => v !== undefined && v !== null && String(v).trim() !== '';

  if (!existing) {
    window.hakoneQualifierDB.years['2021'] = record;
    return;
  }

  if (!Array.isArray(existing.teams)) existing.teams = [];
  const teamKeys = new Set(existing.teams.map(x => `${Number(x.rank)||''}|${norm(x.team)}`));
  for (const row of record.teams) {
    const key = `${Number(row.rank)||''}|${norm(row.team)}`;
    const found = existing.teams.find(x => `${Number(x.rank)||''}|${norm(x.team)}` === key);
    if (!found) {
      existing.teams.push(row);
      teamKeys.add(key);
    } else {
      if (!hasValue(found.time) && hasValue(row.time)) found.time = row.time;
      if (!hasValue(found.team) && hasValue(row.team)) found.team = row.team;
    }
  }

  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  for (const row of record.individuals) {
    const found = existing.individuals.find(x =>
      Number(x.rank) === Number(row.rank) && norm(x.name) === norm(row.name) && norm(x.team) === norm(row.team)
    );
    if (!found) {
      existing.individuals.push(row);
    } else {
      for (const field of ['time','name','team','grade']) {
        if (!hasValue(found[field]) && hasValue(row[field])) found[field] = row[field];
      }
    }
  }
  existing.teams.sort((a,b) => (Number(a.rank)||9999) - (Number(b.rank)||9999));
  existing.individuals.sort((a,b) => (Number(a.rank)||9999) - (Number(b.rank)||9999));
  if (!existing.source) existing.source = record.source;
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = [];
  for (const src of record.supplementalSources) if (!existing.supplementalSources.includes(src)) existing.supplementalSources.push(src);
})();
