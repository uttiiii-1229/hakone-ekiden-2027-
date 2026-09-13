// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 276-325. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:276,time:'1:06:59',name:'長井 隆星',team:'筑波大学'},
    {rank:277,time:'1:06:59',name:'上原 大和',team:'関東学院大学'},
    {rank:278,time:'1:06:59',name:'関 颯介',team:'東京経済大学'},
    {rank:279,time:'1:07:04',name:'平川 豪流',team:'関東学院大学'},
    {rank:280,time:'1:07:06',name:'根岸 賢',team:'拓殖大学'},
    {rank:281,time:'1:07:11',name:'後藤 謙昌',team:'立教大学'},
    {rank:282,time:'1:07:13',name:'工藤 大和',team:'麗澤大学'},
    {rank:283,time:'1:07:14',name:'山平 怜生',team:'中央大学'},
    {rank:284,time:'1:07:15',name:'成田 龍之介',team:'城西大学'},
    {rank:285,time:'1:07:15',name:'友村 俊介',team:'武蔵野学院大学'},
    {rank:286,time:'1:07:15',name:'守角 隼',team:'法政大学'},
    {rank:287,time:'1:07:17',name:'海村 蓮',team:'上武大学'},
    {rank:288,time:'1:07:20',name:'田中 龍之介',team:'関東学院大学'},
    {rank:289,time:'1:07:24',name:'佐々木 雄一',team:'明治学院大学'},
    {rank:290,time:'1:07:24',name:'立崎 哲大',team:'芝浦工業大学'},
    {rank:291,time:'1:07:24',name:'福本 陽樹',team:'武蔵野学院大学'},
    {rank:292,time:'1:07:25',name:'金 悠斗',team:'駿河台大学'},
    {rank:293,time:'1:07:26',name:'内藤 拓海',team:'慶應義塾大学'},
    {rank:294,time:'1:07:26',name:'宇都木 秀太',team:'麗澤大学'},
    {rank:295,time:'1:07:26',name:'長谷川 瑠',team:'流通経済大学'},
    {rank:296,time:'1:07:27',name:'奥谷 研祐',team:'湘南工科大学'},
    {rank:297,time:'1:07:28',name:'伊藤 颯吾',team:'東京工業大学'},
    {rank:298,time:'1:07:29',name:'矢板 慈生',team:'日本薬科大学'},
    {rank:299,time:'1:07:37',name:'鈴木 涼太',team:'関東学院大学'},
    {rank:300,time:'1:07:38',name:'藤川 雅之',team:'育英大学'},
    {rank:301,time:'1:07:38',name:'安田 響',team:'神奈川大学'},
    {rank:302,time:'1:07:40',name:'藤原 潤乃佑',team:'筑波大学'},
    {rank:303,time:'1:07:41',name:'箱田 優馬',team:'明治学院大学'},
    {rank:304,time:'1:07:41',name:'今野 純',team:'麗澤大学'},
    {rank:305,time:'1:07:41',name:'森屋 源太',team:'関東学院大学'},
    {rank:306,time:'1:07:41',name:'今野 元揮',team:'麗澤大学'},
    {rank:307,time:'1:07:44',name:'黒澤 明',team:'武蔵野学院大学'},
    {rank:308,time:'1:07:45',name:'船越 陸',team:'日本大学'},
    {rank:309,time:'1:07:47',name:'大塚 弘翔',team:'日本薬科大学'},
    {rank:310,time:'1:07:48',name:'神尾 祐樹',team:'芝浦工業大学'},
    {rank:311,time:'1:07:49',name:'小林 将吾',team:'東京工業大学'},
    {rank:312,time:'1:07:49',name:'設永 凱暉',team:'日本薬科大学'},
    {rank:313,time:'1:07:49',name:'山本 航己',team:'関東学院大学'},
    {rank:314,time:'1:07:50',name:'海老原 優大',team:'芝浦工業大学'},
    {rank:315,time:'1:07:50',name:'河南 颯汰',team:'立正大学'},
    {rank:316,time:'1:07:52',name:'廣田 海心',team:'麗澤大学'},
    {rank:317,time:'1:07:53',name:'吉岡 竜希',team:'亜細亜大学'},
    {rank:318,time:'1:07:53',name:'新井 今生人',team:'平成国際大学'},
    {rank:319,time:'1:07:55',name:'三木 雄介',team:'日本大学'},
    {rank:320,time:'1:07:55',name:'原田 愛星',team:'日本大学'},
    {rank:321,time:'1:07:58',name:'樋田 侑司',team:'東京経済大学'},
    {rank:322,time:'1:07:59',name:'道岡 聖',team:'東京大学'},
    {rank:323,time:'1:07:59',name:'銘苅 春史',team:'武蔵野学院大学'},
    {rank:324,time:'1:07:59',name:'鎌田 虎太郎',team:'湘南工科大学'},
    {rank:325,time:'1:08:01',name:'穴澤 友崇',team:'平成国際大学'}
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
})();