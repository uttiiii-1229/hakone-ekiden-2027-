// Official 2026 Chuo Gakuin University PB audit.
// Sources: 中央学院大学駅伝部 2026年度メンバー紹介 / 2026年度大会結果.
// Only official values that improve the 2026 JSON baseline are listed here.
(()=>{
  const team='中央学院大学';
  const updates=[
    {name:'林 愛斗',pb10000:'28:47.11'},
    {name:'米田 昂太',pb5000:'14:14.09'},
    {name:'三代田 宏太朗',pb10000:'29:14.26'},
    {name:'小川 優晴',pb10000:'29:16.78'},
    {name:'福山 裕咲',pb5000:'14:37.95'},
    {name:'松井 健人',pb5000:'14:37.25'},
    {name:'湯澤 芳優',pb5000:'14:29.17',pb10000:'29:56.93',half:'1:09:37'},
    {name:'近藤 健斗',pb5000:'14:28.09',pb10000:'30:12.98',half:'1:08:17'}
  ];
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=verified[team]||{};
  updates.forEach(u=>{
    const prev=verified[team][u.name]||['—','—','—'];
    verified[team][u.name]=[u.pb5000||prev[0],u.pb10000||prev[1],u.half||prev[2]];
  });
})();

// Official 2026 Senshu University PB audit.
// Source: 専修大学陸上競技部 2026年度大会結果. Values below are explicitly marked 自己新.
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
