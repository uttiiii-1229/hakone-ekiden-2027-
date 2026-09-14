// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 326-375. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:326,time:'1:08:02',name:'加賀屋 燿',team:'武蔵野学院大学'},
    {rank:327,time:'1:08:04',name:'秋山 滉貴',team:'芝浦工業大学'},
    {rank:328,time:'1:08:04',name:'稲森 勇翔',team:'亜細亜大学'},
    {rank:329,time:'1:08:06',name:'青田 楓祐',team:'関東学院大学'},
    {rank:330,time:'1:08:07',name:'松本 啓岐',team:'東京大学大学院'},
    {rank:331,time:'1:08:09',name:'高山 匠也',team:'東京農業大学'},
    {rank:332,time:'1:08:09',name:'須田 大志',team:'桜美林大学'},
    {rank:333,time:'1:08:09',name:'吉岡 祥希',team:'亜細亜大学'},
    {rank:334,time:'1:08:16',name:'田部 智暉',team:'桜美林大学'},
    {rank:335,time:'1:08:16',name:'小島 准',team:'流通経済大学'},
    {rank:336,time:'1:08:17',name:'千葉 廉也',team:'明治学院大学'},
    {rank:337,time:'1:08:19',name:'飯塚 歩',team:'明治学院大学'},
    {rank:338,time:'1:08:19',name:'岡崎 竜也',team:'平成国際大学'},
    {rank:339,time:'1:08:20',name:'瀬底 正樹',team:'武蔵野学院大学'},
    {rank:340,time:'1:08:27',name:'榎本 晃大',team:'明治学院大学'},
    {rank:341,time:'1:08:28',name:'粟江 倫太郎',team:'専修大学'},
    {rank:342,time:'1:08:29',name:'下元 圭人',team:'日本薬科大学'},
    {rank:343,time:'1:08:30',name:'長友 勇樹',team:'一橋大学'},
    {rank:344,time:'1:08:38',name:'安倍 立矩',team:'慶應義塾大学'},
    {rank:345,time:'1:08:38',name:'横山 隼人',team:'亜細亜大学'},
    {rank:346,time:'1:08:40',name:'柴田 太尊',team:'麗澤大学'},
    {rank:347,time:'1:08:48',name:'坪田 海',team:'桜美林大学'},
    {rank:348,time:'1:08:49',name:'竹原 俊太郎',team:'明治学院大学'},
    {rank:349,time:'1:08:57',name:'河谷 好晃',team:'芝浦工業大学'},
    {rank:350,time:'1:08:58',name:'齊藤 元',team:'湘南工科大学'},
    {rank:351,time:'1:09:00',name:'柴田 瀬允',team:'東京工業大学'},
    {rank:352,time:'1:09:08',name:'室井 慶太',team:'芝浦工業大学'},
    {rank:353,time:'1:09:09',name:'模 幸正',team:'桜美林大学'},
    {rank:354,time:'1:09:11',name:'榎本 正樹',team:'日本薬科大学'},
    {rank:355,time:'1:09:14',name:'松井 遼太',team:'国士舘大学'},
    {rank:356,time:'1:09:16',name:'西川 優太',team:'立正大学'},
    {rank:357,time:'1:09:21',name:'山田 龍',team:'関東学院大学'},
    {rank:358,time:'1:09:27',name:'平松 幸記',team:'立正大学'},
    {rank:359,time:'1:09:27',name:'西尾 元',team:'一橋大学'},
    {rank:360,time:'1:09:29',name:'中根 美七海',team:'東京大学'},
    {rank:361,time:'1:09:30',name:'渕本 海王',team:'育英大学'},
    {rank:362,time:'1:09:30',name:'浅海 崇志',team:'東京農業大学'},
    {rank:363,time:'1:09:33',name:'遠山 和希',team:'立正大学'},
    {rank:364,time:'1:09:34',name:'下尾 悠真',team:'日本大学'},
    {rank:365,time:'1:09:36',name:'山口 史朗',team:'立教大学'},
    {rank:366,time:'1:09:36',name:'松浦 礼穏',team:'東京経済大学'},
    {rank:367,time:'1:09:37',name:'加藤 泰斗',team:'東京大学'},
    {rank:368,time:'1:09:39',name:'中川 裕斗',team:'流通経済大学'},
    {rank:369,time:'1:09:42',name:'青木 涼哉',team:'武蔵野学院大学'},
    {rank:370,time:'1:09:43',name:'山本 勘介',team:'平成国際大学'},
    {rank:371,time:'1:09:45',name:'長谷川 嵩汰',team:'筑波大学'},
    {rank:372,time:'1:09:49',name:'市川 大輝',team:'立教大学'},
    {rank:373,time:'1:09:52',name:'盛重 完英',team:'桜美林大学'},
    {rank:374,time:'1:09:53',name:'栗山 一輝',team:'東京大学大学院'},
    {rank:375,time:'1:09:53',name:'山崎 颯太',team:'立正大学'}
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
  if (!document.querySelector('script[data-hakone-q-2021-s7]')) {
    const s = document.createElement('script');
    s.src = 'hakone-qualifier-2021-supplement-7.js';
    s.dataset.hakoneQ2021S7 = '1';
    document.head.appendChild(s);
  }
})();