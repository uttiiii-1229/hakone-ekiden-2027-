// Aoyama Gakuin University 2026 current-athlete PB audit.
// Primary source: Aoyama Gakuin University Track & Field Club official member page (checked 2026-09-16).
// https://aogaku-tf.com/member/member_1.php
// Only faster or previously-missing records are supplied here; resolver keeps the faster value.
(() => {
  const team='青山学院大学';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '大藪 遙斗':['14:10.22','—','—'],
    '寺内 頼':['—','30:32.63','—'],
    '新見 春陽':['14:06.72','—','—'],
    '古川 陽樹':['13:50.55','—','—'],
    '前田 蒼空':['14:18.99','—','—'],
    '横畑 僚大':['—','33:24.28','—']
  });

  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-16',
    verification_status:'official_pb_reverified'
  });
})();
