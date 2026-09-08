// 明治大学 2026年度 現役長距離PB監査 — 2026-09-09
// Sources: 明治大学体育会競走部 2026年度公式競技結果。
// Only PBs explicitly marked PB / 初 in official results are considered, and only faster
// values than the current site baseline are merged. Missing values are never inferred.
(() => {
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  const meta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};

  verified['明治大学']=Object.assign(verified['明治大学']||{}, {
    // 第327回日本体育大学長距離競技会 2026-04-11: 30:45.45 PB
    '小松 映智':['—','30:45.45','—'],
    // ホクレン・ディスタンスチャレンジ2026 網走大会 2026-07-12: 29:45.19 PB
    '大江 秀弥':['—','29:45.19','—']
  });

  meta['明治大学']={
    season:2026,
    asOf:'2026-09-09',
    source:'明治大学体育会競走部 2026年度公式競技結果（第327回日体大長距離競技会／ホクレンDC網走）'
  };
})();
