// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 226-275. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:226,time:'1:06:15',name:'宍戸 春',team:'亜細亜大学'},
    {rank:227,time:'1:06:16',name:'樋口 翔太',team:'日本大学'},
    {rank:228,time:'1:06:16',name:'元村 航大',team:'育英大学'},
    {rank:229,time:'1:06:16',name:'水谷 耀介',team:'育英大学'},
    {rank:230,time:'1:06:16',name:'出仙 龍之介',team:'駿河台大学'},
    {rank:231,time:'1:06:16',name:'ピーター ワンジル',team:'大東文化大学'},
    {rank:232,time:'1:06:16',name:'松村 匡悟',team:'筑波大学'},
    {rank:233,time:'1:06:17',name:'鈴木 健太',team:'関東学院大学'},
    {rank:234,time:'1:06:17',name:'鈴木 輝',team:'慶應義塾大学'},
    {rank:235,time:'1:06:18',name:'大場 麻央',team:'流通経済大学'},
    {rank:236,time:'1:06:18',name:'佐藤 広夢',team:'拓殖大学'},
    {rank:237,time:'1:06:18',name:'高橋 登也',team:'流通経済大学'},
    {rank:238,time:'1:06:18',name:'古川 大翔',team:'亜細亜大学'},
    {rank:239,time:'1:06:18',name:'竹尾 奏哉',team:'東京経済大学'},
    {rank:240,time:'1:06:19',name:'松本 康汰',team:'法政大学'},
    {rank:241,time:'1:06:20',name:'丸山 翔太郎',team:'東京理科大学'},
    {rank:242,time:'1:06:21',name:'田岡 航一',team:'東京農業大学'},
    {rank:243,time:'1:06:22',name:'上本 青空',team:'上武大学'},
    {rank:244,time:'1:06:22',name:'芳口 悠大',team:'流通経済大学'},
    {rank:245,time:'1:06:23',name:'山本 蒼弥',team:'麗澤大学'},
    {rank:246,time:'1:06:23',name:'内山 祐希',team:'桜美林大学'},
    {rank:247,time:'1:06:23',name:'谷口 蓮',team:'日本薬科大学'},
    {rank:248,time:'1:06:23',name:'田中 大稀',team:'桜美林大学'},
    {rank:249,time:'1:06:26',name:'土井 拓実',team:'日本大学'},
    {rank:250,time:'1:06:26',name:'内田 賢利',team:'立教大学'},
    {rank:251,time:'1:06:26',name:'小山 晴空',team:'拓殖大学'},
    {rank:252,time:'1:06:28',name:'八木 志樹',team:'日本大学'},
    {rank:253,time:'1:06:31',name:'林 虎大朗',team:'立教大学'},
    {rank:254,time:'1:06:31',name:'吉村 颯斗',team:'東京農業大学'},
    {rank:255,time:'1:06:35',name:'長谷川 潤',team:'国士舘大学'},
    {rank:256,time:'1:06:36',name:'尾形 拓海',team:'武蔵野学院大学'},
    {rank:257,time:'1:06:39',name:'山本 羅生',team:'立教大学'},
    {rank:258,time:'1:06:40',name:'川口 航士郎',team:'山梨学院大学'},
    {rank:259,time:'1:06:40',name:'長谷川 琉斗',team:'芝浦工業大学'},
    {rank:260,time:'1:06:42',name:'砂川 大河',team:'山梨学院大学'},
    {rank:261,time:'1:06:42',name:'清水 悠雅',team:'国士舘大学'},
    {rank:262,time:'1:06:44',name:'工藤 巧夢',team:'中央学院大学'},
    {rank:263,time:'1:06:47',name:'山口 祐司',team:'麗澤大学'},
    {rank:264,time:'1:06:49',name:'池田 優斗',team:'明治学院大学'},
    {rank:265,time:'1:06:50',name:'武下 孝輔',team:'桜美林大学'},
    {rank:266,time:'1:06:51',name:'大澤 巧使',team:'麗澤大学'},
    {rank:267,time:'1:06:55',name:'牛崎 竜空',team:'立正大学'},
    {rank:268,time:'1:06:56',name:'大野 悠翔',team:'芝浦工業大学'},
    {rank:269,time:'1:06:56',name:'廣瀬 啓伍',team:'麗澤大学'},
    {rank:270,time:'1:06:56',name:'糸井 春輝',team:'中央学院大学'},
    {rank:271,time:'1:06:56',name:'稲葉 勇介',team:'桜美林大学'},
    {rank:272,time:'1:06:56',name:'山本 尊仁',team:'筑波大学'},
    {rank:273,time:'1:06:58',name:'奥田 歩凪',team:'育英大学'},
    {rank:274,time:'1:06:58',name:'奈良 大寿',team:'上智大学'},
    {rank:275,time:'1:06:59',name:'中野 魁人',team:'日本薬科大学'}
  ];

  const norm = (v) => String(v ?? '').replace(/\s+/g, '').replace(/[髙高]/g, '高').replace(/[﨑崎]/g, '崎').replace(/[・･]/g, '');
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

  // Continue loading the next verified block without requiring an index.html edit.
  if (!document.querySelector('script[data-hakone-q-2021-s5]')) {
    const s = document.createElement('script');
    s.src = 'hakone-qualifier-2021-supplement-5.js';
    s.dataset.hakoneQ2021S5 = '1';
    document.head.appendChild(s);
  }
})();