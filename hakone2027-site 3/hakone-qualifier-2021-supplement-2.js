// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 101-175. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:101,time:'1:04:23',name:'小泉 謙',team:'駿河台大学'},
    {rank:102,time:'1:04:23',name:'山中 秀真',team:'城西大学'},
    {rank:103,time:'1:04:24',name:'永井 竜二',team:'駿河台大学'},
    {rank:104,time:'1:04:26',name:'高須賀 大勢',team:'法政大学'},
    {rank:105,time:'1:04:26',name:'平山 大雅',team:'筑波大学'},
    {rank:106,time:'1:04:26',name:'水谷 勇登',team:'専修大学'},
    {rank:107,time:'1:04:26',name:'森 凪也',team:'中央大学'},
    {rank:108,time:'1:04:27',name:'野村 颯斗',team:'城西大学'},
    {rank:109,time:'1:04:27',name:'山口 貴士',team:'平成国際大学'},
    {rank:110,time:'1:04:27',name:'木山 凌',team:'大東文化大学'},
    {rank:111,time:'1:04:28',name:'吉田 光汰',team:'中央学院大学'},
    {rank:112,time:'1:04:29',name:'小林 篤貴',team:'神奈川大学'},
    {rank:113,time:'1:04:29',name:'塩田 祥梧',team:'大東文化大学'},
    {rank:114,time:'1:04:29',name:'尾﨑 健斗',team:'明治大学'},
    {rank:115,time:'1:04:32',name:'伊藤 秀虎',team:'中央学院大学'},
    {rank:116,time:'1:04:33',name:'市川 繁貴',team:'東京経済大学'},
    {rank:117,time:'1:04:34',name:'野下 稜平',team:'専修大学'},
    {rank:118,time:'1:04:34',name:'山田 拓人',team:'拓殖大学'},
    {rank:119,time:'1:04:34',name:'久保田 徹',team:'大東文化大学'},
    {rank:120,time:'1:04:35',name:'漆畑 徳輝',team:'日本体育大学'},
    {rank:121,time:'1:04:36',name:'横山 佑羽',team:'専修大学'},
    {rank:122,time:'1:04:36',name:'川上 有生',team:'法政大学'},
    {rank:123,time:'1:04:36',name:'小林 政澄',team:'神奈川大学'},
    {rank:124,time:'1:04:37',name:'谷口 唯翔',team:'中央学院大学'},
    {rank:125,time:'1:04:38',name:'村越 凌太',team:'日本体育大学'},
    {rank:126,time:'1:04:38',name:'原川 凌',team:'東京経済大学'},
    {rank:127,time:'1:04:38',name:'中園 慎太朗',team:'法政大学'},
    {rank:128,time:'1:04:39',name:'芳賀 利紀',team:'中央学院大学'},
    {rank:129,time:'1:04:39',name:'外山 結',team:'育英大学'},
    {rank:130,time:'1:04:39',name:'吉田 礼志',team:'中央学院大学'},
    {rank:131,time:'1:04:39',name:'細迫 海気',team:'法政大学'},
    {rank:132,time:'1:04:41',name:'高橋 銀河',team:'神奈川大学'},
    {rank:133,time:'1:04:42',name:'西村 翔太',team:'日本大学'},
    {rank:134,time:'1:04:43',name:'成毛 志優',team:'山梨学院大学'},
    {rank:135,time:'1:04:43',name:'木村 有希',team:'慶應義塾大学'},
    {rank:136,time:'1:04:43',name:'高島 侑翔',team:'東京農業大学'},
    {rank:137,time:'1:04:44',name:'江口 清洋',team:'拓殖大学'},
    {rank:138,time:'1:04:45',name:'大谷 健斗',team:'芝浦工業大学'},
    {rank:139,time:'1:04:46',name:'大塚 稜介',team:'東京農業大学'},
    {rank:140,time:'1:04:46',name:'九嶋 大雅',team:'日本体育大学'},
    {rank:141,time:'1:04:46',name:'吉岡 拓哉',team:'専修大学'},
    {rank:142,time:'1:04:52',name:'白川 大地',team:'桜美林大学'},
    {rank:143,time:'1:04:53',name:'片川 祐大',team:'亜細亜大学'},
    {rank:144,time:'1:04:53',name:'湯本 樹',team:'上武大学'},
    {rank:145,time:'1:04:54',name:'新井 遼平',team:'拓殖大学'},
    {rank:146,time:'1:04:55',name:'森川 蒼太',team:'流通経済大学'},
    {rank:147,time:'1:04:55',name:'武田 和馬',team:'法政大学'},
    {rank:148,time:'1:04:56',name:'吉田 勇大',team:'上武大学'},
    {rank:149,time:'1:04:57',name:'村田 悠樹',team:'東京経済大学'},
    {rank:150,time:'1:04:58',name:'坪井 海門',team:'山梨学院大学'},
    {rank:151,time:'1:05:01',name:'清水 拓斗',team:'国士舘大学'},
    {rank:152,time:'1:05:02',name:'宮下 璃久',team:'城西大学'},
    {rank:153,time:'1:05:03',name:'南 美空翔',team:'専修大学'},
    {rank:154,time:'1:05:07',name:'佐々木 詩音',team:'専修大学'},
    {rank:155,time:'1:05:07',name:'綱島 辰弥',team:'国士舘大学'},
    {rank:156,time:'1:05:09',name:'大泉 真尋',team:'神奈川大学'},
    {rank:157,time:'1:05:09',name:'分須 尊紀',team:'日本体育大学'},
    {rank:158,time:'1:05:10',name:'濱田 祐知',team:'日本大学'},
    {rank:159,time:'1:05:10',name:'石部 夏希',team:'山梨学院大学'},
    {rank:160,time:'1:05:10',name:'竹蓋 草太',team:'拓殖大学'},
    {rank:161,time:'1:05:11',name:'新田 颯',team:'育英大学'},
    {rank:162,time:'1:05:11',name:'竹上 世那',team:'流通経済大学'},
    {rank:163,time:'1:05:12',name:'国増 治貴',team:'専修大学'},
    {rank:164,time:'1:05:17',name:'小川 圭斗',team:'上武大学'},
    {rank:165,time:'1:05:17',name:'石田 竜也',team:'上武大学'},
    {rank:166,time:'1:05:18',name:'松本 虎太郎',team:'東京農業大学'},
    {rank:167,time:'1:05:19',name:'波多江 隆人',team:'日本薬科大学'},
    {rank:168,time:'1:05:19',name:'漆畑 瑠人',team:'明治大学'},
    {rank:169,time:'1:05:20',name:'西川 千青',team:'大東文化大学'},
    {rank:170,time:'1:05:21',name:'北田 大起',team:'東京農業大学'},
    {rank:171,time:'1:05:21',name:'服部 友太',team:'専修大学'},
    {rank:172,time:'1:05:22',name:'貝川 裕亮',team:'慶應義塾大学'},
    {rank:173,time:'1:05:22',name:'三浦 拓朗',team:'中央大学'},
    {rank:174,time:'1:05:22',name:'小島 拓',team:'城西大学'},
    {rank:175,time:'1:05:22',name:'山本 龍神',team:'国士舘大学'}
  ];

  const norm = (v) => String(v ?? '').replace(/\s+/g, '').replace(/[髙高]/g, '高').replace(/[﨑崎]/g, '崎');
  const hasValue = (v) => v !== undefined && v !== null && String(v).trim() !== '';

  for (const row of rows) {
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

  existing.individuals.sort((a,b) => (Number(a.rank)||9999) - (Number(b.rank)||9999));
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = [];
  const src = 'https://www.kgrr.org/files/competition/57/40/kojin.pdf';
  if (!existing.supplementalSources.includes(src)) existing.supplementalSources.push(src);
})();