// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 376-425. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:376,time:'1:09:56',name:'横田 健剛',team:'東京理科大学'},
    {rank:377,time:'1:10:00',name:'座間 武尊',team:'明治学院大学'},
    {rank:378,time:'1:10:04',name:'小笠原 大智',team:'平成国際大学'},
    {rank:379,time:'1:10:06',name:'西村 幸樹',team:'日本薬科大学'},
    {rank:380,time:'1:10:09',name:'松江 剛琉',team:'湘南工科大学'},
    {rank:381,time:'1:10:10',name:'川村 大輔',team:'平成国際大学'},
    {rank:382,time:'1:10:11',name:'笠井 大輝',team:'高崎経済大学'},
    {rank:383,time:'1:10:14',name:'西河 豪志',team:'帝京平成大学'},
    {rank:384,time:'1:10:15',name:'遠山 奨悟',team:'育英大学'},
    {rank:385,time:'1:10:16',name:'松元 響',team:'麗澤大学'},
    {rank:386,time:'1:10:17',name:'日向野 駿',team:'立正大学'},
    {rank:387,time:'1:10:19',name:'寺田 航大',team:'立正大学'},
    {rank:388,time:'1:10:20',name:'吉川 大智',team:'湘南工科大学'},
    {rank:389,time:'1:10:22',name:'河合 紀舟',team:'育英大学'},
    {rank:390,time:'1:10:24',name:'緒方 俊亮',team:'東京農業大学'},
    {rank:391,time:'1:10:28',name:'秋山 侃樹',team:'武蔵野学院大学'},
    {rank:392,time:'1:10:30',name:'佐藤 碧',team:'平成国際大学'},
    {rank:393,time:'1:10:33',name:'久田 淳司',team:'東京大学'},
    {rank:394,time:'1:10:37',name:'菅原 良太',team:'平成国際大学'},
    {rank:395,time:'1:10:38',name:'水口 翔太',team:'明治学院大学'},
    {rank:396,time:'1:10:42',name:'宮本 龍二',team:'一橋大学'},
    {rank:397,time:'1:10:57',name:'有田 達輝',team:'明治学院大学'},
    {rank:398,time:'1:10:58',name:'瀬川 莉玖',team:'東京大学'},
    {rank:399,time:'1:10:58',name:'加藤 悠生',team:'東京大学'},
    {rank:400,time:'1:10:59',name:'大野 成輝',team:'東京工業大学'},
    {rank:401,time:'1:11:01',name:'黒澤 瑛紀',team:'慶應義塾大学'},
    {rank:402,time:'1:11:07',name:'大倉 綾介',team:'平成国際大学'},
    {rank:403,time:'1:11:09',name:'山﨑 健聖',team:'帝京平成大学'},
    {rank:404,time:'1:11:10',name:'鬼頭 壮平',team:'東京大学'},
    {rank:405,time:'1:11:17',name:'西堀 伶於',team:'立正大学'},
    {rank:406,time:'1:11:24',name:'坂本 清弥',team:'東京理科大学'},
    {rank:407,time:'1:11:24',name:'寺田 倖太朗',team:'一橋大学'},
    {rank:408,time:'1:11:25',name:'櫻井 悠人',team:'明治学院大学'},
    {rank:409,time:'1:11:26',name:'熊澤 諒哉',team:'湘南工科大学'},
    {rank:410,time:'1:11:28',name:'椛澤 勇樹',team:'湘南工科大学'},
    {rank:411,time:'1:11:28',name:'西田 大晟',team:'東京大学'},
    {rank:412,time:'1:11:34',name:'坂田 陽朗',team:'立正大学'},
    {rank:413,time:'1:11:42',name:'山口 翔一',team:'桜美林大学'},
    {rank:414,time:'1:11:45',name:'島貫 聖吾',team:'帝京平成大学'},
    {rank:415,time:'1:11:45',name:'馬場 裕斗',team:'上智大学'},
    {rank:416,time:'1:11:45',name:'大迫 一樹',team:'亜細亜大学'},
    {rank:417,time:'1:11:49',name:'上田 陽向',team:'上武大学'},
    {rank:418,time:'1:11:51',name:'清﨑 佑',team:'一橋大学'},
    {rank:419,time:'1:11:54',name:'森山 功稀',team:'帝京平成大学'},
    {rank:420,time:'1:11:55',name:'渡辺 龍平',team:'高崎経済大学'},
    {rank:421,time:'1:11:55',name:'久保 周斗',team:'一橋大学'},
    {rank:422,time:'1:11:56',name:'越川 剛暉',team:'東京大学'},
    {rank:423,time:'1:12:08',name:'上野 海斗',team:'育英大学'},
    {rank:424,time:'1:12:15',name:'金山 裕生',team:'東京大学'},
    {rank:425,time:'1:12:21',name:'岡田 拓巳',team:'帝京平成大学'}
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

  // Continue loading the final verified ranked block without requiring an index.html edit.
  if (!document.querySelector('script[data-hakone-q-2021-s8]')) {
    const s = document.createElement('script');
    s.src = 'hakone-qualifier-2021-supplement-8.js';
    s.dataset.hakoneQ2021S8 = '1';
    document.head.appendChild(s);
  }
})();