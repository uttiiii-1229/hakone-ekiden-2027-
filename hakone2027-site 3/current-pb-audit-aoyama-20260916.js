// Aoyama Gakuin University 2026 current-athlete PB audit.
// Primary source: Aoyama Gakuin University Track & Field Club official member page (checked 2026-09-16).
// Additional official source: JAAF 110th Japan Championships 5000m entry/results documents (2026).
// Only faster or previously-missing records are supplied here; resolver keeps the faster value.
(() => {
  const team='青山学院大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '小河原 陽琉':['13:31.99','—','—'],
    '大藪 遙斗':['13:54.96','—','—'],
    '寺内 頼':['—','30:32.63','—'],
    '新見 春陽':['13:47.81','—','—'],
    '古川 陽樹':['13:50.55','—','—'],
    '前田 蒼空':['13:55.70','—','—'],
    '横畑 僚大':['—','33:24.28','—'],
    '佐藤 愛斗':['13:39.10','—','—'],
    '松田 祐真':['13:49.55','—','—'],
    '松田 煌希':['13:43.82','—','—'],
    '中村 海斗':['13:45.61','—','—'],
    '上野山 拳士朗':['13:49.68','—','—'],
    '藤岡 孝太郎':['13:55.34','—','—'],
    '神邑 亮佑':['13:57.60','—','—']
  });

  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-26',
    verification_status:'official_pb_reverified'
  });
})();

// Waseda University 2026 official PB audit.
// Source: Waseda University Track & Field official competition results; only PB / 自己新記録 entries.
// This mirrors current-pb-audit-waseda-20260919.js so the verified values are loaded by the production bundle.
(() => {
  const team='早稲田大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '山口 竣平':['13:17.19','27:59.47','—'],
    '吉倉 ナヤブ直希':['13:37.61','28:13.07','—'],
    '本田 桜二郎':['13:32.61','—','—'],
    '増子 陽季':['—','29:36.19','—'],
    '辻 陽介':['—','31:25.69','—']
  });
})();

// University of Tsukuba 2026 current-athlete PB audit.
// Primary source: University of Tsukuba Track & Field Club official result report,
// 105th Kanto Intercollegiate Championships day 4 (2026-05-24), explicitly marked PB.
(() => {
  const team='筑波大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '小林 晴琉':['14:06.50','—','—']
  });

  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-24',
    verification_status:'official_pb_reverified'
  });
})();
