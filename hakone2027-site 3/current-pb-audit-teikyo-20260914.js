// Teikyo University 2026 current-roster / PB audit.
// Roster source: Teikyo University Ekiden Club official member pages, checked 2026-09-14.
// Staff/manager-only entries are excluded from the long-distance athlete roster.
// PB values below are records verified from official team results/news or official federation results.
(() => {
  const team='帝京大学';
  const rosters=window.currentRosterOfficial2026=window.currentRosterOfficial2026||{};
  const rosterMeta=window.currentRosterOfficialMeta2026=window.currentRosterOfficialMeta2026||{};

  rosters[team]=[
    // 4年
    ['浅川 侑大','4'],['浅野 智仁','4'],['井上 寛大','4'],['大西 柊太朗','4'],['賀山 亮成','4'],
    ['楠岡 由浩','4'],['國安 一翔','4'],['佐伯 知哉','4'],['高橋 賢太','4'],['谷口 颯太','4'],
    ['西森 市直','4'],['花井 日友雅','4'],['原 悠太','4'],['廣田 陸','4'],['森 陽輝','4'],
    // 3年
    ['小林 咲冴','3'],['斎藤 翔真','3'],['酒井 走和','3'],['佐藤 誠悟','3'],['設楽 琉惺','3'],
    ['髙田 滉翔','3'],['辻本 桜寿','3'],['西田 龍希亜','3'],['松井 一','3'],['森 陸飛','3'],
    ['耒田 晴登','3'],['渡邊 莉玖','3'],
    // 2年
    ['石田 崇人','2'],['岩﨑 晟斗','2'],['岩崎 輝翔','2'],['大堀 陽士','2'],['清田 知希','2'],
    ['都築 由弥','2'],['西岡 裕喜','2'],['吹越 秀翔','2'],['本多 巧樹','2'],['雪田 圭将','2'],['渡辺 柊色','2'],
    // 1年
    ['井口 虹太','1'],['宇都宮 駿','1'],['落合 智優','1'],['金子 遼','1'],['國谷 直','1'],
    ['倉橋 征己','1'],['齋藤 星弥','1'],['佐々木 蓮斗','1'],['檀上 翔','1'],['中村 漣','1'],
    ['福島 命','1'],['松尾 航希','1'],['水谷 奏翔','1'],['三谷 大輝','1'],['安田 塙史','1'],['山本 隼士','1']
  ];
  rosterMeta[team]={season:2026,asOf:'2026-09-20',source:'帝京大学駅伝競走部公式 部員紹介'};

  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};
  verified[team]=Object.assign({},verified[team]||{}, {
    '浅川 侑大':['14:08.42','30:22.66','—'],
    '井上 寛大':['—','29:54.28','—'],
    // 2026-06-12 第110回日本選手権5000m予選2組1着。JAAF公式結果 13:26.92。
    '楠岡 由浩':['13:26.92','27:52.09','—'],
    '高橋 賢太':['—','31:53.84','—'],
    '谷口 颯太':['13:52.08','—','—'],
    '西森 市直':['—','31:05.97','—'],
    '花井 日友雅':['14:13.18','30:06.15','—'],
    '原 悠太':['13:50.41','28:48.14','—'],
    '森 陽輝':['—','29:38.53','—'],
    '酒井 走和':['14:14.73','—','—'],
    '設楽 琉惺':['—','31:07.66','—'],
    '髙田 滉翔':['14:37.92','—','—'],
    '西田 龍希亜':['14:28.57','—','—'],
    '松井 一':['—','28:54.52','—'],
    '森 陸飛':['14:55.24','31:26.46','—'],
    '耒田 晴登':['14:52.02','30:07.96','—'],
    '岩崎 輝翔':['14:36.89','—','—']
  });

  const db=window.currentAthletePbJson2026=window.currentAthletePbJson2026||{};
  const oldRows=Array.isArray(db[team])?db[team]:[];
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const oldByName=new Map(oldRows.map(r=>[norm(r?.name),r]));
  db[team]=rosters[team].map(([name,grade])=>{
    const old=oldByName.get(norm(name))||{};
    return {
      name,
      grade:Number(grade)||grade,
      pb5000:old.pb5000||null,
      pb10000:old.pb10000||null,
      half:old.half||null
    };
  });

  const meta=window.currentAthletePbJsonMeta2026=window.currentAthletePbJsonMeta2026||{};
  meta[team]=Object.assign({},meta[team]||{}, {
    season:2026,
    data_as_of:'2026-09-20',
    verification_status:'official_roster_and_pb_reverified',
    athlete_count:rosters[team].length
  });
})();
