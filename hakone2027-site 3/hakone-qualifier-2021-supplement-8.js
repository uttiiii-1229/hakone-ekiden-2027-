// Historical supplement: 2021 (第98回) 箱根駅伝予選会
// Official KGRR individual results, ranks 426-475. Grades are intentionally omitted unless separately verified.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  if (!window.hakoneQualifierDB.years['2021']) window.hakoneQualifierDB.years['2021'] = { year: 2021, eventYear: 2021, hakoneEdition: 98, teams: [], individuals: [] };
  const existing = window.hakoneQualifierDB.years['2021'];
  if (!Array.isArray(existing.individuals)) existing.individuals = [];

  const rows = [
    {rank:426,time:'1:12:23',name:'出淵 文也',team:'高崎経済大学'},
    {rank:427,time:'1:12:33',name:'小野 浩輝',team:'帝京平成大学'},
    {rank:428,time:'1:12:40',name:'金子 皓希',team:'平成国際大学'},
    {rank:429,time:'1:12:45',name:'森田 雄貴',team:'東京理科大学'},
    {rank:430,time:'1:12:50',name:'長谷川 光',team:'湘南工科大学'},
    {rank:431,time:'1:12:55',name:'髙橋 理久',team:'高崎経済大学'},
    {rank:432,time:'1:13:01',name:'中村 駿太',team:'東京工業大学'},
    {rank:433,time:'1:13:04',name:'北林 拓也',team:'帝京平成大学'},
    {rank:434,time:'1:13:05',name:'西澤 航大',team:'東京理科大学'},
    {rank:435,time:'1:13:10',name:'金川 亮太',team:'一橋大学'},
    {rank:436,time:'1:13:17',name:'島田 淳志',team:'高崎経済大学'},
    {rank:437,time:'1:13:20',name:'大久保 友貴',team:'帝京平成大学'},
    {rank:438,time:'1:13:24',name:'奥山 樹',team:'一橋大学'},
    {rank:439,time:'1:13:25',name:'小森 康太郎',team:'東京大学大学院'},
    {rank:440,time:'1:13:29',name:'柳田 旭潤',team:'湘南工科大学'},
    {rank:441,time:'1:13:38',name:'石嵜 寛之',team:'上智大学'},
    {rank:442,time:'1:13:42',name:'下津 諒晏',team:'上智大学'},
    {rank:443,time:'1:13:44',name:'宮本 力',team:'一橋大学'},
    {rank:444,time:'1:13:48',name:'小河 弘樹',team:'東京大学'},
    {rank:445,time:'1:13:58',name:'江本 健太',team:'帝京平成大学'},
    {rank:446,time:'1:14:07',name:'戸髙 裕太',team:'一橋大学'},
    {rank:447,time:'1:14:11',name:'裏野 凌央',team:'東京工業大学'},
    {rank:448,time:'1:14:25',name:'松尾 凌雅',team:'湘南工科大学'},
    {rank:449,time:'1:14:26',name:'武藤 佳暉',team:'上智大学'},
    {rank:450,time:'1:14:40',name:'岡部 耕平',team:'東京理科大学'},
    {rank:451,time:'1:14:44',name:'内藤 航平',team:'東京工業大学'},
    {rank:452,time:'1:15:02',name:'八重樫 宙夢',team:'高崎経済大学'},
    {rank:453,time:'1:15:16',name:'小田 勇希',team:'高崎経済大学'},
    {rank:454,time:'1:15:54',name:'新田 魁洲',team:'東京大学大学院'},
    {rank:455,time:'1:16:00',name:'大庭 帆貴',team:'東京大学大学院'},
    {rank:456,time:'1:16:12',name:'重盛 克彦',team:'上智大学'},
    {rank:457,time:'1:16:14',name:'遠藤 正陽',team:'東京大学大学院'},
    {rank:458,time:'1:16:20',name:'永森 誠也',team:'上智大学'},
    {rank:459,time:'1:16:38',name:'向田 修大',team:'東京工業大学'},
    {rank:460,time:'1:16:43',name:'渡邉 建太',team:'高崎経済大学'},
    {rank:461,time:'1:16:49',name:'藤井 信介',team:'高崎経済大学'},
    {rank:462,time:'1:17:00',name:'助川 皓洸',team:'東京大学'},
    {rank:463,time:'1:17:01',name:'鈴木 清太郎',team:'高崎経済大学'},
    {rank:464,time:'1:17:01',name:'北見 嶺',team:'東京理科大学'},
    {rank:465,time:'1:18:07',name:'森 基哉',team:'東京工業大学'},
    {rank:466,time:'1:18:11',name:'遠藤 佳輝',team:'東京理科大学'},
    {rank:467,time:'1:18:12',name:'服部 尚輝',team:'帝京平成大学'},
    {rank:468,time:'1:19:06',name:'林 弘健',team:'東京工業大学'},
    {rank:469,time:'1:19:12',name:'石堂 爽空',team:'帝京平成大学'},
    {rank:470,time:'1:19:13',name:'青木 心海',team:'上智大学'},
    {rank:471,time:'1:19:51',name:'柄澤 拓也',team:'東京大学大学院'},
    {rank:472,time:'1:19:56',name:'松野下 大智',team:'高崎経済大学'},
    {rank:473,time:'1:20:10',name:'古賀 淳平',team:'東京大学大学院'},
    {rank:474,time:'1:21:14',name:'池田 竜馬',team:'帝京平成大学'},
    {rank:475,time:'1:22:45',name:'照永 詩恩',team:'東京理科大学'}
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