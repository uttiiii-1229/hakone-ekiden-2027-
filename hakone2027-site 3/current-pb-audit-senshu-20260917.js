// Official 2026 Senshu University PB audit.
// Source: 専修大学陸上競技部 2026年度大会結果 (絆記録挑戦会 / 関東学生網走夏季記録挑戦競技会).
// Only official results explicitly marked 自己新 and improving the 2026 JSON baseline are listed.
(()=>{
  const team='専修大学';
  const updates=[
    {name:'佐藤 瑞城',pb10000:'30:23.18'},
    {name:'水津 智哉',pb10000:'29:48.88'},
    {name:'小川 恵裕',pb5000:'14:42.79'},
    {name:'下江 太翔',pb5000:'14:44.03'},
    {name:'戸津 大輝',pb5000:'14:25.80'},
    {name:'田口 萩太',pb5000:'14:26.94'}
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
