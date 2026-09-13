// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 176-225. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:176,time:'1:05:25',name:'富永 匠海',team:'拓殖大学'},
    {rank:177,time:'1:05:25',name:'内野 李彗',team:'関東学院大学'},
    {rank:178,time:'1:05:26',name:'篠原 楓',team:'山梨学院大学'},
    {rank:179,time:'1:05:26',name:'中根 翔也',team:'流通経済大学'},
    {rank:180,time:'1:05:27',name:'小山 優輝',team:'東京経済大学'},
    {rank:181,time:'1:05:31',name:'嶌津 康平',team:'育英大学'},
    {rank:182,time:'1:05:32',name:'國井 辰磨',team:'筑波大学'},
    {rank:183,time:'1:05:33',name:'青山 澪',team:'上武大学'},
    {rank:184,time:'1:05:34',name:'森田 剛史',team:'慶應義塾大学'},
    {rank:185,time:'1:05:35',name:'前原 裕磨',team:'慶應義塾大学'},
    {rank:186,time:'1:05:37',name:'堀田 晟礼',team:'中央学院大学'},
    {rank:187,time:'1:05:38',name:'下田 大翔',team:'東京経済大学'},
    {rank:188,time:'1:05:39',name:'山本 樹',team:'立正大学'},
    {rank:189,time:'1:05:39',name:'倉田 蓮',team:'大東文化大学'},
    {rank:190,time:'1:05:40',name:'阪本 大貴',team:'駿河台大学'},
    {rank:191,time:'1:05:40',name:'安田 隼人',team:'明治学院大学'},
    {rank:192,time:'1:05:41',name:'北川 慎一郎',team:'大東文化大学'},
    {rank:193,time:'1:05:41',name:'中田 侑希',team:'城西大学'},
    {rank:194,time:'1:05:41',name:'岸本 健太郎',team:'立教大学'},
    {rank:195,time:'1:05:41',name:'倉淵 大輔',team:'亜細亜大学'},
    {rank:196,time:'1:05:41',name:'木村 吉希',team:'城西大学'},
    {rank:197,time:'1:05:42',name:'片渕 大晴',team:'城西大学'},
    {rank:198,time:'1:05:42',name:'平林 樹',team:'城西大学'},
    {rank:199,time:'1:05:44',name:'中原 優人',team:'神奈川大学'},
    {rank:200,time:'1:05:47',name:'阿部 飛雄馬',team:'東京大学大学院'},
    {rank:201,time:'1:05:50',name:'清水 拓哉',team:'慶應義塾大学'},
    {rank:202,time:'1:05:50',name:'藤井 正斗',team:'城西大学'},
    {rank:203,time:'1:05:52',name:'入江 泰世',team:'駿河台大学'},
    {rank:204,time:'1:05:53',name:'鎌形 駿也',team:'流通経済大学'},
    {rank:205,time:'1:05:53',name:'今井 隆生',team:'駿河台大学'},
    {rank:206,time:'1:05:57',name:'源川 竜也',team:'上武大学'},
    {rank:207,time:'1:06:00',name:'木實 優斗',team:'立正大学'},
    {rank:208,time:'1:06:00',name:'小島 光佑',team:'専修大学'},
    {rank:209,time:'1:06:01',name:'渡邊 悠太',team:'芝浦工業大学'},
    {rank:210,time:'1:06:01',name:'忠内 侑士',team:'立教大学'},
    {rank:211,time:'1:06:03',name:'谷口 賢',team:'日本大学'},
    {rank:212,time:'1:06:04',name:'舩田 圭吾',team:'武蔵野学院大学'},
    {rank:213,time:'1:06:05',name:'大谷 章紘',team:'大東文化大学'},
    {rank:214,time:'1:06:06',name:'斯波 岳士',team:'芝浦工業大学'},
    {rank:215,time:'1:06:08',name:'中西 真大',team:'国士舘大学'},
    {rank:216,time:'1:06:08',name:'藤田 康平',team:'湘南工科大学'},
    {rank:217,time:'1:06:09',name:'吉村 陸',team:'拓殖大学'},
    {rank:218,time:'1:06:09',name:'前田 拓海',team:'慶應義塾大学'},
    {rank:219,time:'1:06:09',name:'田中 莉生',team:'東京農業大学'},
    {rank:220,time:'1:06:09',name:'岩坂 優志',team:'日本薬科大学'},
    {rank:221,time:'1:06:10',name:'丸山 幸輝',team:'明治大学'},
    {rank:222,time:'1:06:11',name:'佐竹 勇樹',team:'大東文化大学'},
    {rank:223,time:'1:06:13',name:'守谷 陸',team:'東京経済大学'},
    {rank:224,time:'1:06:14',name:'下別府 輝',team:'東京経済大学'},
    {rank:225,time:'1:06:14',name:'河村 悠',team:'亜細亜大学'}
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

  // Continue loading the next verified block without requiring another index.html edit.
  if (!document.querySelector('script[data-hakone-q-2021-s4]')) {
    const s = document.createElement('script');
    s.src = 'hakone-qualifier-2021-supplement-4.js';
    s.dataset.hakoneQ2021S4 = '1';
    document.head.appendChild(s);
  }
})();