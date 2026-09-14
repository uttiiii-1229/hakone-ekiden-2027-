// Kokugakuin University 2026 current-athlete PB audit.
// Primary source: Kokugakuin University Track & Field Club official member page (checked 2026-09-14).
// https://www.kokugakuin.com/member/
// Supplementary official result pages:
// https://www.kokugakuin.com/result/4083/ (2026-05-21 Kanto IC)
// https://www.kokugakuin.com/result/4123/ (2026-05-31 Donan Distance)
// https://www.kokugakuin.com/result/4157/ (2026-06-28 Nittaidai)
// https://www.kokugakuin.com/result/4192/ (2026-07-08 Hokuren DC Abashiri)
// https://www.kokugakuin.com/result/4202/ (2026-07-12 Kanto Student Abashiri)
// Only faster or previously-missing records are supplied here; resolver keeps the faster value.
(() => {
  const team='國學院大學';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '後村 光星':['—','—','1:03:16'],
    '辻原 輝':['—','28:24.68','1:00:33'],
    '永田 智基':['—','28:59.19','—'],
    '野中 恒亨':['13:28.47','—','—'],
    '村田 幸翼':['14:10.47','—','—'],
    '吉田 蔵之介':['13:57.72','—','—'],
    '浅野 結太':['—','28:47.08','1:01:12'],
    '飯國 新太':['13:51.98','28:23.35','—'],
    '海老原 慧':['14:12.15','—','—'],
    '大槻 駿斗':['—','29:22.63','—'],
    '岡村 享一':['14:04.73','—','—'],
    '佐々木 朱里':['—','—','1:04:46'],
    '添田 陽大':['14:25.25','—','—'],
    '塚本 瑞起':['14:00.82','28:53.15','—'],
    '鼻野木 悠翔':['13:46.50','28:32.24','—'],
    '髙石 樹':['13:45.29','27:57.71','—'],
    '西内 祐仁':['14:10.65','—','—'],
    '野田 顕臣':['—','28:47.16','—'],
    '古井 海成':['13:59.39','—','—'],
    '和久井 夏輝':['13:57.43','—','—'],
    '五十嵐 新太':['13:46.57','28:50.38','—'],
    '及川 颯太':['14:27.03','—','—'],
    '工藤 優唯':['—','29:56.37','—'],
    '長尾 優汰':['14:03.12','—','—'],
    '丸山 展':['14:01.44','29:41.52','—'],
    '森松 彩夢':['13:57.10','—','—']
  });

  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-14',
    verification_status:'official_pb_reverified'
  });
})();
