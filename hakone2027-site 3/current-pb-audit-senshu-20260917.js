// Official 2026 Senshu University PB audit.
// Sources:
// - 専修大学陸上競技部「部内ランキング」(2026-09-22確認)
// - 専修大学陸上競技部 2026年度大会結果
// - 専修大学陸上競技部「全日本予選会 最終エントリー」(foreign-name identity/current roster confirmation)
// Only university-official PB/ranking values or results explicitly marked 自己新/PB are applied.
// Missing values are never inferred. The resolver keeps a faster existing verified PB when present.
(()=>{
  const team='専修大学';
  const updates=[
    // Official team ranking (current athletes)
    {name:'ダンカン マイナ',pb5000:'13:31.54',pb10000:'27:52.97',half:'1:01:46'},
    {name:'ガユ サミュエル',pb5000:'13:33.78',pb10000:'28:27.88'},
    {name:'大西 裕翔',pb5000:'14:03.88',pb10000:'29:22.93'},
    {name:'上山 詩樹',pb5000:'14:04.59',pb10000:'28:44.27',half:'1:01:41'},
    {name:'水津 智哉',pb5000:'14:07.30',pb10000:'29:48.88'},
    {name:'大濵 優輝',pb5000:'14:07.48',pb10000:'29:14.98'},
    {name:'西 広翔',pb5000:'14:08.36',pb10000:'29:21.54'},
    {name:'江口 怜臣',pb5000:'14:08.67'},
    {name:'向田 泰誠',pb5000:'14:10.73'},
    {name:'坂元 南紬太',pb5000:'14:15.34'},
    {name:'丹 柊太郎',pb10000:'28:58.64',half:'1:01:56'},
    {name:'西岳 政宗',pb10000:'29:12.37'},
    {name:'和田 晴之',pb10000:'29:13.59',half:'1:03:16'},
    {name:'田口 萩太',pb5000:'14:26.94',pb10000:'29:24.65',half:'1:02:48'},
    {name:'平松 龍青',half:'1:02:05'},
    {name:'具志堅 一斗',half:'1:02:14'},
    {name:'安斎 陸久',half:'1:02:20'},
    {name:'佐藤 陸',half:'1:02:35'},
    {name:'中西 慶士郎',half:'1:03:04'},

    // 2026 official results explicitly marked 自己新
    {name:'佐藤 瑞城',pb10000:'30:23.18'},
    {name:'小川 恵裕',pb5000:'14:42.79'},
    {name:'下江 太翔',pb5000:'14:44.03'},
    {name:'戸津 大輝',pb5000:'14:25.80'}
  ];
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=verified[team]||{};
  updates.forEach(u=>{
    const prev=verified[team][u.name]||['—','—','—'];
    verified[team][u.name]=[u.pb5000||prev[0],u.pb10000||prev[1],u.half||prev[2]];
  });
})();

// Official 2026 Josai University PB audit.
// Source: 城西大学 TEAM JOSAI 男子駅伝部公式・歴代記録表 (2026-09-20確認).
// These are current 2026 athletes and records explicitly listed by the university.
(()=>{
  const team='城西大学';
  const updates=[
    {name:'柴田 侑',pb5000:'13:22.46',pb10000:'28:05.07'},
    {name:'中島 巨翔',half:'1:01:24'}
  ];
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=verified[team]||{};
  updates.forEach(u=>{
    const prev=verified[team][u.name]||['—','—','—'];
    verified[team][u.name]=[u.pb5000||prev[0],u.pb10000||prev[1],u.half||prev[2]];
  });
})();
