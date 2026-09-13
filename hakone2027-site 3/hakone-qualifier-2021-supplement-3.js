// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 151-175. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
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