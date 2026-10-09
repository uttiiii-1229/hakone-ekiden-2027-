const historyData = {
  hakone: [
    {year:2026, edition:'第102回', winner:'青山学院大学', time:'10:37:34', top3:'青山学院大学 / 國學院大學 / 順天堂大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2025, edition:'第101回', winner:'青山学院大学', time:'10:41:19', top3:'青山学院大学 / 駒澤大学 / 國學院大學', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2024, edition:'第100回', winner:'青山学院大学', time:'10:41:25', top3:'青山学院大学 / 駒澤大学 / 城西大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2023, edition:'第99回', winner:'駒澤大学', time:'10:47:11', top3:'駒澤大学 / 中央大学 / 青山学院大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2022, edition:'第98回', winner:'青山学院大学', time:'10:43:42', top3:'青山学院大学 / 順天堂大学 / 駒澤大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2021, edition:'第97回', winner:'駒澤大学', time:'10:56:04', top3:'駒澤大学 / 創価大学 / 東洋大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2020, edition:'第96回', winner:'青山学院大学', time:'10:45:23', top3:'青山学院大学 / 東海大学 / 國學院大學', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2019, edition:'第95回', winner:'東海大学', time:'10:52:09', top3:'東海大学 / 青山学院大学 / 東洋大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2018, edition:'第94回', winner:'青山学院大学', time:'10:57:39', top3:'青山学院大学 / 東洋大学 / 早稲田大学', official:'https://www.hakone-ekiden.jp/record/'},
    {year:2017, edition:'第93回', winner:'青山学院大学', time:'11:04:10', top3:'青山学院大学 / 東洋大学 / 早稲田大学', official:'https://www.hakone-ekiden.jp/record/'}
  ],
  izumo: [
    {year:2025, edition:'第37回', winner:'國學院大學', time:'2:09:12', top3:'國學院大學 / 早稲田大学 / 創価大学', official:'https://www.izumo-ekiden.jp/37/record/record.html'},
    {year:2024, edition:'第36回', winner:'國學院大學', time:'2:09:24', top3:'國學院大學 / 駒澤大学 / 青山学院大学', official:'https://www.izumo-ekiden.jp/36/record/record.html'},
    {year:2023, edition:'第35回', winner:'駒澤大学', time:'2:07:51', top3:'駒澤大学 / 城西大学 / 國學院大學', official:'https://www.izumo-ekiden.jp/35/record/record.html'},
    {year:2022, edition:'第34回', winner:'駒澤大学', time:'2:08:32', top3:'駒澤大学 / 國學院大學 / 中央大学', official:'https://www.izumo-ekiden.jp/34/record/record.html'},
    {year:2021, edition:'第33回', winner:'東京国際大学', time:'2:12:10', top3:'東京国際大学 / 青山学院大学 / 東洋大学', official:'https://www.izumo-ekiden.jp/33/record/record.html'},
    {year:2020, edition:'第32回', winner:'大会中止', time:'—', top3:'大会中止', official:'https://www.izumo-ekiden.jp/'},
    {year:2019, edition:'第31回', winner:'國學院大學', time:'2:09:58', top3:'國學院大學 / 駒澤大学 / 東洋大学', official:'https://www.izumo-ekiden.jp/31/record/record.html'},
    {year:2018, edition:'第30回', winner:'青山学院大学', time:'2:11:58', top3:'青山学院大学 / 東洋大学 / 東海大学', official:'https://www.izumo-ekiden.jp/30/record/record.html'},
    {year:2017, edition:'第29回', winner:'東海大学', time:'2:11:59', top3:'東海大学 / 青山学院大学 / 日本体育大学', official:'https://www.izumo-ekiden.jp/29/record/record.html'},
    {year:2016, edition:'第28回', winner:'青山学院大学', time:'2:10:09', top3:'青山学院大学 / 山梨学院大学 / 東海大学', official:'https://www.izumo-ekiden.jp/28/record/record.html'}
  ],
  zennihon: [
    {year:2025, edition:'第57回', winner:'駒澤大学', time:'5:06:53', top3:'駒澤大学 / 中央大学 / 青山学院大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2024, edition:'第56回', winner:'國學院大學', time:'5:09:56', top3:'國學院大學 / 駒澤大学 / 青山学院大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2023, edition:'第55回', winner:'駒澤大学', time:'5:09:00', top3:'駒澤大学 / 青山学院大学 / 國學院大學', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2022, edition:'第54回', winner:'駒澤大学', time:'5:06:47', top3:'駒澤大学 / 國學院大學 / 青山学院大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2021, edition:'第53回', winner:'駒澤大学', time:'5:12:58', top3:'駒澤大学 / 青山学院大学 / 順天堂大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2020, edition:'第52回', winner:'駒澤大学', time:'5:11:08', top3:'駒澤大学 / 東海大学 / 明治大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2019, edition:'第51回', winner:'東海大学', time:'5:13:15', top3:'東海大学 / 青山学院大学 / 駒澤大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2018, edition:'第50回', winner:'青山学院大学', time:'5:13:11', top3:'青山学院大学 / 東海大学 / 東洋大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2017, edition:'第49回', winner:'神奈川大学', time:'5:12:49', top3:'神奈川大学 / 東海大学 / 青山学院大学', official:'https://daigaku-ekiden.com/datafile/'},
    {year:2016, edition:'第48回', winner:'青山学院大学', time:'5:15:15', top3:'青山学院大学 / 早稲田大学 / 山梨学院大学', official:'https://daigaku-ekiden.com/datafile/'}
  ]
};

const athleteData = {
  '青山学院大学': [
    ['折田 壮太','13:28.78','27:43.92','1:02:51'],['飯田 翔大','13:34.20','27:51.51','1:03:18'],['鳥井 健太','13:36.73','28:10.02','1:02:23'],
    ['佐藤 愛斗','13:44.48','27:55.93','1:01:57'],['平松 享祐','13:46.06','28:25.01','1:02:04'],['小河原 陽琉','13:44.47','28:37.01','1:02:14'],
    ['安島 莉玖','13:48.45','28:19.81','1:02:16'],['黒田 然','13:55.10','28:24.00','1:02:22'],['上野山 拳士朗','13:52.93','28:20.82','1:02:27'],['椙山 一颯','13:47.73','29:21.25','1:01:23']
  ],
  '國學院大學': [
    ['野中 恒亨','13:28.47','27:36.64','1:00:51'],['辻原 輝','13:35.30','28:24.68','1:00:51'],['後村 光星','13:47.46','28:30.39','1:03:43'],
    ['田中 愛睦','13:58.56','28:42.68','1:02:04'],['吉田 蔵之介','14:17.85','29:04.52','1:02:01'],['浅野 結太','13:47.17','28:51.33','1:01:27'],
    ['飯國 新太','13:54.89','28:39.28','1:01:51'],['尾熊 迅斗','13:57.11','28:35.45','1:01:46'],['髙石 樹','13:58.23','27:57.71','1:00:53'],['野田 顕臣','14:09.88','29:08.36','1:01:29']
  ],
  '中央大学': [
    ['岡田 開成','13:19.44','27:37.06','1:01:11'],['本間 颯','13:32.77','27:45.05','1:02:45'],['藤田 大智','13:34.30','27:40.50','1:03:21'],
    ['佐藤 大介','13:34.57','28:10.82','1:00:40'],['三宅 悠斗','13:28.66','27:44.45','1:01:11'],['濵口 大和','13:26.23','27:53.85','1:02:25'],
    ['柴田 大地','13:43.77','28:47.65','1:01:00'],['鈴木 耕太郎','13:47.38','28:37.51','1:02:28'],['七枝 直','13:49.99','28:15.58','1:03:17'],['田原 琥太郎','14:10.91','28:28.11','1:02:06']
  ],
  '駒澤大学': [
    ['桑田 駿介','13:39.47','28:12.02','1:00:48'],['安原 海晴','13:52.85','28:45.66','1:01:41'],['村上 響','14:00.88','29:13.89','1:01:46'],
    ['菅谷 希弥','13:59.13','28:55.55','1:01:12'],['谷中 晴','13:49.71','31:53.55','1:00:57'],['植阪 嶺児','14:00.93','28:29.30','1:02:28'],
    ['小山 翔也','13:41.99','29:24.72','1:02:38'],['新谷 倖生','14:07.65','29:19.62','1:02:11'],['牟田 凜太','13:51.66','28:54.11','1:02:08'],['篠 和真','13:55.79','29:01.62','1:05:17']
  ]
};

const teams = [
  {name:'青山学院大学', chance:28.5, score:91, note:'箱根3連覇中。5000m・10000m・ハーフの上位層も厚い', tags:['箱根実績','層の厚さ','長距離']},
  {name:'國學院大學', chance:25.0, score:88, note:'出雲2連覇。野中・辻原を中心にロード適性が高い', tags:['出雲2連覇','10000m','ハーフ']},
  {name:'中央大学', chance:20.0, score:84, note:'5000m・10000mの高速層に加え、60〜61分台のハーフ勢も充実', tags:['スピード','エース層','伸びしろ']},
  {name:'駒澤大学', chance:18.0, score:81, note:'全日本優勝。桑田を軸にロード型の選手層を再構築', tags:['全日本優勝','伝統','再構築']},
  {name:'早稲田大学', chance:4.5, score:71, note:'直近全日本5位。上位争いへの底上げに期待', tags:['安定','復路','成長']},
  {name:'その他', chance:4.0, score:68, note:'創価・順天堂・帝京・城西なども候補', tags:['混戦','ダークホース']}
];

if('scrollRestoration' in history) history.scrollRestoration='manual';
function resetPageTop(){document.documentElement.scrollTop=0;document.body.scrollTop=0;window.scrollTo({top:0,left:0,behavior:'auto'});}
const app = document.querySelector('#app');
const nav = document.querySelector('#mainNav');
const menuButton = document.querySelector('#menuButton');
let countdownTimer;

function runnerSvg(){return `<svg viewBox="0 0 230 300" aria-hidden="true"><circle class="dark" cx="145" cy="32" r="20"/><path class="skin" d="M134 51c-15 20-17 37-10 55l-18 58 14 4 24-53 24 7 14-12-8-16-30-15 12-21z"/><path class="accent" d="M127 58c12-8 27-9 42 2l5 45-28 13-26-21z"/><path class="kit" d="M141 62l13 4 3 50-14 5-11-49z"/><path class="skin" d="M126 93 83 131l8 10 49-30zm38 7 40 35-8 11-45-31z"/><path class="accent" d="M143 116l24 4 11 71-17 4-21-56-10 55-17-3 7-76z"/><path class="skin" d="m160 190 19 59-13 5-27-52zm-31 0-13 62-14-2 5-67z"/><path class="dark" d="m166 247 29 10-2 9-35-2zm-51 2 9 4-12 27-35 1 1-9 24-6z"/></svg>`}
function rankList(){return teams.map((t,i)=>`<div class="rank-item"><div class="rank-number">${i+1}</div><div><div class="team-name">${t.name}</div><div class="bar"><span style="width:${t.score}%"></span></div></div><div class="percent">${t.chance}%</div></div>`).join('')}
function homeTemplate(){return `<section class="hero"><div class="container hero-inner"><div class="hero-copy"><div class="eyebrow">Data update 2026.08.27</div><h1>箱根駅伝 2027</h1><h2>三大駅伝×選手PBで予想する。</h2><p>公式記録で再照合した三大駅伝実績と、5000m・10000m・ハーフマラソンの自己ベストを組み合わせた予想データベース。</p></div><div class="hero-runner">${runnerSvg()}</div></div></section>
<section class="container quick-links"><button class="quick-card" data-route="prediction"><span class="quick-icon">🏆</span><span><strong>2027 優勝予想</strong><small>試算モデル v0.3</small></span><span class="quick-arrow">›</span></button><button class="quick-card" data-route="teams"><span class="quick-icon">▦</span><span><strong>大学・選手データ</strong><small>5000m / 10000m / ハーフPB</small></span><span class="quick-arrow">›</span></button><button class="quick-card" data-route="history"><span class="quick-icon">▥</span><span><strong>過去10年</strong><small>総合成績を公式記録で再照合</small></span><span class="quick-arrow">›</span></button><button class="quick-card" data-route="about"><span class="quick-icon">↗</span><span><strong>分析方法</strong><small>予想ロジック</small></span><span class="quick-arrow">›</span></button></section>
<section class="container dashboard"><article class="panel"><div class="panel-title dark"><h3>🏆 2027 優勝確率 試算</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div><div class="panel-actions"><button class="primary-button" data-route="prediction">分析を見る →</button></div></div></article><article class="panel"><div class="panel-title"><h3>▦ 注目4校の戦力</h3><button class="primary-button" data-route="teams">選手を見る</button></div><div class="panel-body pickup-grid">${teams.slice(0,4).map((t,i)=>`<div class="team-card"><div class="team-row"><div class="crest">${['A','K','C','K'][i]}</div><div><h4>${t.name}</h4><p>${t.note}</p></div></div><div class="tags">${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div></div>`).join('')}</div></article><aside class="sidebar"><article class="panel countdown"><div class="panel-body"><h3>▲ 第103回 箱根駅伝まで</h3><div class="countdown-grid" id="countdown"></div></div></article><article class="panel"><div class="panel-title"><h3>📣 データ更新</h3></div><div class="panel-body news-list"><div class="news-item"><div class="news-meta">2026.08.27</div><strong>三大駅伝の総合成績・上位3校を公式記録で再照合</strong></div><div class="news-item"><div class="news-meta">選手PB</div><strong>注目4校を各10名、5000m・10000m・ハーフで再選定</strong></div><div class="news-item"><div class="news-meta">出場資格</div><strong>2026年度4年生も第103回大会の対象として評価</strong></div></div></article></aside></section>`}
function athleteTable(name){const data=athleteData[name]||[]; if(!data.length)return '<p class="muted">選手PBデータは次回更新予定です。</p>'; return `<div class="table-wrap compact"><table><thead><tr><th>選手</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>${data.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>`}
function teamsTemplate(){return `<section class="container page"><div class="page-header"><h1>大学・選手データ</h1><p>2027年大会を見据え、2026年度在籍選手から5000m・10000m・ハーフの実績を総合して各校10名を抜粋しています。</p></div>${teams.slice(0,4).map(t=>`<article class="team-detail"><div class="team-detail-head"><div><h2>${t.name}</h2><p>${t.note}</p></div><div class="score-pill">戦力指数 ${t.score}</div></div>${athleteTable(t.name)}</article>`).join('')}<div class="notice">2026年度4年生は2027年1月2〜3日の第103回箱根駅伝に出場可能なため候補に含めています。PBは公開情報を再確認し、未確認値は無理に補完しません。</div></section>`}
function historyTable(key,title){return `<article class="history-block"><h2>${title}</h2><div class="table-wrap"><table><thead><tr><th>年</th><th>大会</th><th>優勝</th><th>記録</th><th>総合上位3校</th><th>区間順位</th></tr></thead><tbody>${historyData[key].map(r=>`<tr><td>${r.year}</td><td>${r.edition}</td><td><strong>${r.winner}</strong></td><td>${r.time}</td><td>${r.top3}</td><td><a href="${r.official}" target="_blank" rel="noopener">公式区間記録で確認 ↗</a></td></tr>`).join('')}</tbody></table></div></article>`}
function historyTemplate(){return `<section class="container page"><div class="page-header"><h1>過去10年・三大駅伝</h1><p>箱根駅伝は2017〜2026、出雲・全日本は2016〜2025を公式記録ベースで再照合。総合上位3校を掲載し、区間順位は各大会公式記録へ直結しています。</p></div>${historyTable('hakone','箱根駅伝')}${historyTable('izumo','出雲駅伝')}${historyTable('zennihon','全日本大学駅伝')}<div class="notice">区間順位は誤転記を避けるため、各年の公式記録を参照する方式に変更しました。2020年の出雲駅伝（第32回）は大会中止です。</div></section>`}

const izumoPrediction2026 = {
  updated:'2026-10-05',
  ranking:['中央大学','早稲田大学','國學院大學','創価大学','アイビーリーグ選抜','青山学院大学','順天堂大学','駒澤大学','城西大学','帝京大学','日本大学','京都産業大学','関西大学','皇學館大学','広島経済大学','札幌学院大学','信州大学','金沢学院大学','第一工科大学','北海道大学','東北学連選抜'],
  orders:{
  "青山学院大学": [
    "小河原 陽琉",
    "鳥井 健太",
    "飯田 翔大",
    "黒田 然",
    "平松 享祐",
    "折田 壮太"
  ],
  "國學院大學": [
    "辻原 輝",
    "尾熊 迅斗",
    "野中 恒亨",
    "浅野 結太",
    "飯國 新太",
    "髙石 樹"
  ],
  "順天堂大学": [
    "池間 凛斗",
    "永原 颯磨",
    "吉岡 大翔",
    "井上 朋哉",
    "荒牧 琢登",
    "山本 悠"
  ],
  "早稲田大学": [
    "吉倉 ナヤブ直希",
    "本田 桜二郎",
    "山口 竣平",
    "新妻 遼己",
    "鈴木 琉胤",
    "工藤 慎作"
  ],
  "中央大学": [
    "岡田 開成",
    "栗村 凌",
    "濵口 大和",
    "三宅 悠斗",
    "佐藤 大介",
    "藤田 大智"
  ],
  "駒澤大学": [
    "谷中 晴",
    "池谷 陸斗",
    "桑田 駿介",
    "安原 海晴",
    "小山 翔也",
    "植阪 嶺児"
  ],
  "城西大学": [
    "山本 聖也",
    "小林 竜輝",
    "ルト アロン",
    "大場 崇義",
    "橋本 健市",
    "柴田 侑"
  ],
  "創価大学": [
    "織橋 巧",
    "菅野 元太",
    "スティーブン ムチーニ",
    "村上 遵世",
    "山口 翔輝",
    "小池 莉希"
  ],
  "帝京大学": [
    "楠岡 由浩",
    "原 悠太",
    "松井 一",
    "小林 咲冴",
    "松尾 航希",
    "廣田 陸"
  ],
  "日本大学": [
    "首藤 海翔",
    "山口 聡太",
    "シャドラック キップケメイ",
    "石川 悠斗",
    "長澤 辰朗",
    "橋本 櫂知"
  ]
}
};
const izumoEntries2026 = {
  "青山学院大学": [
    {
      "name": "平松 享祐",
      "grade": 4
    },
    {
      "name": "鳥井 健太",
      "grade": 4
    },
    {
      "name": "飯田 翔大",
      "grade": 3
    },
    {
      "name": "小河原 陽琉",
      "grade": 3
    },
    {
      "name": "折田 壮太",
      "grade": 3
    },
    {
      "name": "黒田 然",
      "grade": 3
    },
    {
      "name": "石川 浩輝",
      "grade": 2
    },
    {
      "name": "櫨元 優馬",
      "grade": 2
    },
    {
      "name": "前川 竜之将",
      "grade": 2
    },
    {
      "name": "古川 陽樹",
      "grade": 1
    }
  ],
  "國學院大學": [
    {
      "name": "野中 恒亨",
      "grade": 4
    },
    {
      "name": "田中 愛睦",
      "grade": 4
    },
    {
      "name": "辻原 輝",
      "grade": 4
    },
    {
      "name": "浅野 結太",
      "grade": 3
    },
    {
      "name": "飯國 新太",
      "grade": 3
    },
    {
      "name": "尾熊 迅斗",
      "grade": 3
    },
    {
      "name": "鼻野木 悠翔",
      "grade": 3
    },
    {
      "name": "髙石 樹",
      "grade": 2
    },
    {
      "name": "和久井 夏輝",
      "grade": 2
    },
    {
      "name": "五十嵐 新太",
      "grade": 1
    }
  ],
  "順天堂大学": [
    {
      "name": "荒牧 琢登",
      "grade": 4
    },
    {
      "name": "小林 侑世",
      "grade": 4
    },
    {
      "name": "古川 達也",
      "grade": 4
    },
    {
      "name": "吉岡 大翔",
      "grade": 4
    },
    {
      "name": "池間 凛斗",
      "grade": 3
    },
    {
      "name": "今井 悠貴",
      "grade": 3
    },
    {
      "name": "永原 颯磨",
      "grade": 3
    },
    {
      "name": "山本 悠",
      "grade": 3
    },
    {
      "name": "井上 朋哉",
      "grade": 2
    },
    {
      "name": "佐藤 賢仁",
      "grade": 1
    }
  ],
  "早稲田大学": [
    {
      "name": "工藤 慎作",
      "grade": 4
    },
    {
      "name": "山口 竣平",
      "grade": 3
    },
    {
      "name": "吉倉 ナヤブ直希",
      "grade": 3
    },
    {
      "name": "佐々木 哲",
      "grade": 2
    },
    {
      "name": "鈴木 琉胤",
      "grade": 2
    },
    {
      "name": "堀野 正太",
      "grade": 2
    },
    {
      "name": "上杉 敦史",
      "grade": 1
    },
    {
      "name": "新妻 遼己",
      "grade": 1
    },
    {
      "name": "本田 桜二郎",
      "grade": 1
    },
    {
      "name": "増子 陽太",
      "grade": 1
    }
  ],
  "中央大学": [
    {
      "name": "藤田 大智",
      "grade": 4
    },
    {
      "name": "佐藤 蓮",
      "grade": 4
    },
    {
      "name": "柴田 大地",
      "grade": 4
    },
    {
      "name": "岡田 開成",
      "grade": 3
    },
    {
      "name": "佐藤 大介",
      "grade": 3
    },
    {
      "name": "並川 颯太",
      "grade": 3
    },
    {
      "name": "濵口 大和",
      "grade": 2
    },
    {
      "name": "三宅 悠斗",
      "grade": 2
    },
    {
      "name": "簡 子傑",
      "grade": 1
    },
    {
      "name": "栗村 凌",
      "grade": 1
    }
  ],
  "駒澤大学": [
    {
      "name": "小山 翔也",
      "grade": 4
    },
    {
      "name": "植阪 嶺児",
      "grade": 4
    },
    {
      "name": "安原 海晴",
      "grade": 4
    },
    {
      "name": "桑田 駿介",
      "grade": 3
    },
    {
      "name": "谷中 晴",
      "grade": 3
    },
    {
      "name": "上岡 煌",
      "grade": 2
    },
    {
      "name": "池谷 陸斗",
      "grade": 1
    },
    {
      "name": "今村 仁",
      "grade": 1
    },
    {
      "name": "後藤 颯星",
      "grade": 1
    },
    {
      "name": "鈴木 大翔",
      "grade": 1
    }
  ],
  "城西大学": [
    {
      "name": "中島 巨翔",
      "grade": 4
    },
    {
      "name": "小田 伊織",
      "grade": 4
    },
    {
      "name": "柴田 侑",
      "grade": 4
    },
    {
      "name": "大場 崇義",
      "grade": 3
    },
    {
      "name": "小林 竜輝",
      "grade": 3
    },
    {
      "name": "橋本 健市",
      "grade": 3
    },
    {
      "name": "正岡 優翔",
      "grade": 3
    },
    {
      "name": "村尾 恭輔",
      "grade": 2
    },
    {
      "name": "山本 聖也",
      "grade": 1
    },
    {
      "name": "ルト アロン",
      "grade": 1
    }
  ],
  "創価大学": [
    {
      "name": "織橋 巧",
      "grade": 4
    },
    {
      "name": "小池 莉希",
      "grade": 4
    },
    {
      "name": "スティーブン ムチーニ",
      "grade": 4
    },
    {
      "name": "榎木 凜太朗",
      "grade": 3
    },
    {
      "name": "山口 翔輝",
      "grade": 3
    },
    {
      "name": "ソロモン ムトゥク",
      "grade": 3
    },
    {
      "name": "内田 涼太",
      "grade": 1
    },
    {
      "name": "菅野 元太",
      "grade": 1
    },
    {
      "name": "田村 幸太",
      "grade": 1
    },
    {
      "name": "村上 遵世",
      "grade": 1
    }
  ],
  "帝京大学": [
    {
      "name": "浅川 侑大",
      "grade": 4
    },
    {
      "name": "浅野 智仁",
      "grade": 4
    },
    {
      "name": "楠岡 由浩",
      "grade": 4
    },
    {
      "name": "原 悠太",
      "grade": 4
    },
    {
      "name": "廣田 陸",
      "grade": 4
    },
    {
      "name": "小林 咲冴",
      "grade": 3
    },
    {
      "name": "設楽 琉惺",
      "grade": 3
    },
    {
      "name": "松井 一",
      "grade": 3
    },
    {
      "name": "雪田 圭将",
      "grade": 2
    },
    {
      "name": "松尾 航希",
      "grade": 1
    }
  ],
  "日本大学": [
    {
      "name": "山口 聡太",
      "grade": 4
    },
    {
      "name": "天野 啓太",
      "grade": 4
    },
    {
      "name": "シャドラック キップケメイ",
      "grade": 4
    },
    {
      "name": "石川 悠斗",
      "grade": 3
    },
    {
      "name": "長澤 辰朗",
      "grade": 3
    },
    {
      "name": "橋本 櫂知",
      "grade": 3
    },
    {
      "name": "安濃 佑真",
      "grade": 2
    },
    {
      "name": "岸端 悠友",
      "grade": 2
    },
    {
      "name": "川野 陸翔",
      "grade": 1
    },
    {
      "name": "首藤 海翔",
      "grade": 1
    }
  ]
};
const izumoSelectionAudit2026 = {
  "早稲田大学": {
    "no": "07",
    "issue": "工藤を選外にし、吉倉を6区へ置く根拠が不足していた。5000mの速い新人を多く選ぶ一方、昨年のアンカー実績と工藤の直近ロードを選考に反映できていなかった。",
    "anchor": "工藤を6区第一候補へ。2025年出雲6区29分48秒・区間3位。9月27日はロード5kmを13分51秒、13分44秒で2本走り、両組1着。単発の5000m PBより、10.2kmの実績と直近の走りを優先する判断。",
    "alternative": "吉倉の6区案は代替として残るが、今回は昨年1区経験と9月27日13分38秒を生かして1区。4区の新妻と増子は僅差の選考で、新妻の9月27日13分44秒を確認できたため第一案は新妻とする。増子を能力不足とは評価しない。",
    "selected": [
      "昨年1区の経験＋9月27日ロード13分38秒。集団走と終盤の切替を評価。",
      "5000m13分32秒61と中距離のスピードを短い2区で生かす案。ロードの確実性は未確定。",
      "5000m13分17秒19・10000m27分59秒47。3区の持続的な高速走を期待。",
      "9月27日ロード13分44秒・6着。PBだけでなく直近のロード確認を選考材料にする。",
      "昨年3区区間5位。5000m13分20秒64の力を5区に置いて終盤へつなぐ。",
      "前年同区間3位と直近の2本走を重視。第一候補。"
    ],
    "excluded": {
      "増子 陽太": "5000m13分20秒35で有力。8月U20世界選手権欠場の報道後、現在の状態は未確認。故障継続とは断定せず、9月27日のロードを確認できた新妻を第一案とする。復帰・練習情報が確認できれば再比較。",
      "佐々木 哲": "昨年4区区間6位の経験あり。4・5区の代替。新妻の直近ロードと鈴木の走力を優先。障害種目の成績だけでロード力は決めない。",
      "堀野 正太": "昨年5区区間7位、9月27日ロード13分56秒。出雲経験は評価しつつ、今回は鈴木を5区へ。",
      "上杉 敦史": "9月27日ロード13分55秒は評価。前半区間の控え候補。PBの遅さだけで除外せず、経験と直近比較で選外。"
    }
  },
  "青山学院大学": {
    "no": "04",
    "issue": "平松を6区にした際、10000mで上回る折田・飯田・鳥井との比較が不足。前年の1・2区経験も配置に生かせていなかった。",
    "anchor": "6区を平松から折田へ。登録者の10000mで折田27分43秒92、飯田27分51秒51、鳥井28分10秒02、平松28分25秒01。折田の持続力を6区に生かす推定。前年2区10位もリスクとして残し、復調を確定とはしない。",
    "alternative": "飯田6区・折田3区も有力。平松6区を否定する材料はないが、今回確認した数字だけで平松を第一候補とする根拠は弱い。",
    "selected": [
      "前年1区区間6位。同区間の経験を優先。",
      "10000m28分10秒02、5000m13分36秒73。短い2区で序盤をつなぐ案。",
      "10000m27分51秒51。前年3区10位のリスクを含め、同区間での改善を期待する推定。",
      "10000m28分24秒38。平地区間も記録で評価し、山適性だけを採用理由にしない。",
      "5000m13分34秒05。前回6区から短い5区へ。",
      "10000m27分43秒92で登録者最上位。6区への対応を期待。"
    ],
    "excluded": {
      "石川 浩輝": "5000m13分47秒76。4区の有力代替。10000mが未掲載でも能力不足とはせず、今回は黒田の持続力の確認を優先。",
      "櫨元 優馬": "5000m13分52秒05。短い区間候補。今回は上位6名の記録と経験を優先。",
      "前川 竜之将": "10000m28分36秒55。4・5区候補だが、黒田・平松との比較で第一案は選外。",
      "古川 陽樹": "5000m13分50秒55。短区間の候補。大学駅伝の情報が限られ、出走否定の判断ではない。"
    }
  },
  "國學院大學": {
    "no": "05",
    "issue": "前年2区を走った尾熊を選外にした理由がなく、鼻野木の5000mが速いことだけで2区を選んでいた。",
    "anchor": "髙石6区を継続。10000m27分57秒71を持つ。より速い野中27分36秒64も6区最有力候補だが、昨年3区区間2位の役割を残し、3区と6区の両方に主力を置く案。",
    "alternative": "野中6区・髙石3区も同程度に有力。辻原を昨年区間新の4区へ戻す案もある。辻原1区は経験者で序盤を固めるための推定で、監督の発言としては扱わない。",
    "selected": [
      "昨年4区区間新。5000m13分35秒30。経験者を1区に置く案。",
      "昨年2区区間6位。同区間経験を鼻野木との比較に反映して復帰。",
      "昨年3区区間2位・10000m27分36秒64。エース区間の役割を継続。",
      "5000m13分47秒17。4区で速度を生かす案。",
      "10000m28分23秒35。6区との配分を考えて5区。",
      "10000m27分57秒71。野中を3区に置く場合のアンカー第一候補。"
    ],
    "excluded": {
      "田中 愛睦": "10000m28分42秒68。中盤の安定候補。浅野のスピード・飯國の持続力を第一案では優先。",
      "鼻野木 悠翔": "5000m13分46秒50で尾熊より速い。2・4区の有力代替。昨年の出走経験を比較して尾熊を第一案。",
      "和久井 夏輝": "5000m13分57秒43。短区間候補だが、第一案の経験・記録を優先。",
      "五十嵐 新太": "5000m13分46秒57。4区代替。1年生の情報不足を不調とは扱わず、経験者優先の配置。"
    }
  },
  "順天堂大学": {
    "no": "06",
    "issue": "荒牧を6区に置く際、10000m・5000mとも上回る山本との比較が不足していた。",
    "anchor": "6区を荒牧から山本へ。山本10000m28分19秒16・5000m13分34秒52、荒牧28分46秒25・13分54秒39。吉岡は28分08秒02でさらに有力だが、3区に残して二つの長めの区間へ主力を配分。",
    "alternative": "吉岡6区・山本3区も有力。登録PBは測定時点が異なり、現状の調子そのものではない。前年大会に出場していないため、出雲の実走経験を水増ししない。",
    "selected": [
      "10000m28分29秒80・5000m13分34秒44。1区の持続的な速度を期待。",
      "5000m13分43秒03。10000mの数字だけで評価を下げず、短い2区へ。",
      "5000m13分22秒99・10000m28分08秒02。3区に最上位の主力を配置。",
      "5000m13分38秒67。前回1区から4区へ。",
      "10000m28分46秒25。主将という肩書だけで6区にせず、5区の候補へ。",
      "10000m28分19秒16。吉岡を3区に置く場合のアンカー候補。"
    ],
    "excluded": {
      "小林 侑世": "10000m28分57秒33。中盤候補だが、今回は上位の記録と短区間の速度を優先。",
      "古川 達也": "10000m28分45秒40で荒牧と近い。5区代替。選外の差は小さく、状態次第で逆転。",
      "今井 悠貴": "5000m13分56秒04。短区間の控え候補。第一案では井上・永原のスピードを優先。",
      "佐藤 賢仁": "5000m13分56秒14。新人の短区間候補だが、現時点で上位6名の選考を覆す根拠を確認できていない。"
    }
  },
  "中央大学": {
    "no": "08",
    "issue": "6区の藤田は有力だが、昨年1区区間賞の岡田を3区、新人栗村を1区に置く経験面の比較が不足していた。",
    "anchor": "藤田6区は継続。10000m27分40秒50で、岡田27分37秒06と近い。岡田を昨年区間賞の1区へ戻し、3区に濵口27分53秒85を置くことで前半と終盤を両立する案。",
    "alternative": "岡田6区・栗村1区・藤田3区も有力。1区の前年実績を重視して第一案を変更。3区は濵口と三宅27分44秒45の入替も考えられる。",
    "selected": [
      "昨年1区区間賞。同区間での実績を優先。",
      "5000m13分21秒99。新人のスピードを短い2区で生かす。",
      "10000m27分53秒85、5000m13分26秒23。前年2区11位のリスクも明示し3区を予想。",
      "10000m27分44秒45。3区の代替にもなる主力を4区に置く。",
      "昨年5区区間3位。今回も同区間を第一案。",
      "10000m27分40秒50。岡田を1区に置く案のアンカー。"
    ],
    "excluded": {
      "佐藤 蓮": "5000m13分40秒96。4・5区の候補。三宅の持続力と佐藤大介の同区間経験を優先。",
      "柴田 大地": "5000m13分43秒77。中盤代替。今回は上位6名の速度・経験を優先。",
      "並川 颯太": "10000m28分08秒56で長めの区間候補。第一案の上位4名には及ばず、中盤の代替として比較。",
      "簡 子傑": "5000m13分39秒61。2・4区候補。栗村の速度と三宅の持続力を第一案では優先。"
    }
  },
  "駒澤大学": {
    "no": "09",
    "issue": "前年1区区間2位の谷中を3区へ回す理由と、安原を6区にする比較が不足していた。",
    "anchor": "6区を安原から植阪へ。10000m植阪28分23秒41、安原28分42秒95。登録最上位の桑田28分07秒63は3区に置き、二つの長めの区間に主力を分ける。実走で植阪が必ず上回るという意味ではない。",
    "alternative": "桑田6区・植阪3区も有力。池谷と鈴木大翔の2区争いは、池谷の9月27日13分47秒09を判断材料にする。",
    "selected": [
      "昨年1区区間2位。今回も1区を第一案に戻す。",
      "9月27日5000m13分47秒09のPB。短い2区の候補。",
      "10000m28分07秒63。昨年3区9位のリスクを含め、主力区間への配置を予想。",
      "10000m28分42秒95。前回6区から4区へ。",
      "5000m13分41秒99。短区間の速度を評価し5区。",
      "10000m28分23秒41。桑田を3区に置く場合の6区候補。"
    ],
    "excluded": {
      "上岡 煌": "9月27日5000m13分53秒20のPB。2・4・5区の代替。直近PBだけで即採用せず選出者と比較。",
      "今村 仁": "5000m13分48秒83。短区間代替。9月27日13分50秒39も確認し、僅差の候補として残す。",
      "後藤 颯星": "5000m14分13秒97。今回の選出者より速度の確認材料が少ない。状態は未確認。",
      "鈴木 大翔": "5000m13分46秒10で池谷と近い。9月27日は13分55秒79。2区の重要な代替として残す。"
    }
  },
  "城西大学": {
    "no": "10",
    "issue": "中島を6区に置く一方、10000m・5000mとも登録者最上位の柴田との比較と、大場の選考が不足していた。",
    "anchor": "6区を中島から柴田へ。柴田10000m28分05秒07・5000m13分22秒46、中島28分40秒21・14分05秒72。最長区間の走力を優先し、新人山本を1区に置く代償も明示。",
    "alternative": "柴田1区・中島6区も経験重視の有力案。新人山本1区はリスクがあり、柴田を6区へ回す案の確度は中程度。ルトの10000m未掲載を長距離不適性と断定しない。",
    "selected": [
      "5000m13分50秒88。柴田を6区に置く場合の1区案。大学駅伝の経験不足がリスク。",
      "昨年2区区間5位。同区間経験を生かす。",
      "5000m13分52秒88。留学生という理由だけで絶対視せず、3区の暫定候補。",
      "5000m13分53秒69。中島との比較で短い区間の速度を優先し新規採用。",
      "10000m28分50秒21。中盤のつなぎを期待。",
      "登録者最上位の5000m・10000m。最長区間へ主力を配置。"
    ],
    "excluded": {
      "中島 巨翔": "10000m28分40秒21。6区の有力代替。主将という理由で固定せず柴田と比較。",
      "小田 伊織": "昨年4区区間9位。中盤の経験候補だが、今回は大場の5000mを優先。",
      "正岡 優翔": "5000m14分05秒01。4・5区候補だが選出者の記録を優先。",
      "村尾 恭輔": "5000m14分08秒48。経験・直近状態の確認材料が限られ第一案は選外。"
    }
  },
  "創価大学": {
    "no": "11",
    "issue": "前年1区区間4位の織橋を4区、新人村上を1区へ置いた経験面の比較が不足していた。",
    "anchor": "小池6区を継続。10000m27分52秒43、9月27日ロード5km13分26秒。ムチーニ27分34秒32はより速いが、昨年3区区間5位の役割を残して前半・終盤に主力を分ける。",
    "alternative": "ムチーニ6区・小池3区も有力。小池の昨年2区4位を生かす案もある。9月27日のロードとトラックは別種目として評価。",
    "selected": [
      "昨年1区区間4位、9月27日ロード13分36秒。同区間経験を優先し1区へ。",
      "5000m13分46秒97、9月27日ロード13分47秒。短い2区候補。",
      "昨年3区区間5位・10000m27分34秒32。エース区間に継続。",
      "5000m13分39秒46。9月27日は13分54秒89。新人の1区負担を避ける配置案。",
      "昨年5区区間4位。同区間経験を優先。",
      "10000m27分52秒43＋直近ロード13分26秒で6区候補。"
    ],
    "excluded": {
      "榎木 凜太朗": "9月27日ロード13分53秒。中盤代替。掲載5000m PBだけで過小評価せず比較に含める。",
      "ソロモン ムトゥク": "10000m28分18秒59で有力な代替。今回はムチーニの27分34秒32と9月27日ロード13分25秒を優先。ソロモンの同日ロードは13分58秒。",
      "内田 涼太": "5000m13分53秒40。短区間候補だが、菅野・村上の速度と確認できた直近結果を優先。",
      "田村 幸太": "9月27日5000m13分59秒84。中盤代替。山口の出雲経験を第一案では優先。"
    }
  },
  "帝京大学": {
    "no": "12",
    "issue": "昨年1区区間3位の楠岡を3区、新人松尾を1区へ置いた比較が不足していた。",
    "anchor": "廣田6区を継続。10000m28分37秒73で楠岡27分52秒09に次ぐ。楠岡を昨年好走した1区へ置き、6区に次位の持続力を配分。浅川28分46秒73・松井28分48秒22も比較対象。",
    "alternative": "楠岡6区・松尾1区も有力。3区の松井と6区の廣田の入替は状態次第。今回の変更は楠岡の前年1区経験を優先した案。",
    "selected": [
      "昨年1区区間3位、10000m27分52秒09。同区間経験を優先。",
      "5000m13分50秒41、9月27日ロード13分53秒。短い2区の候補。",
      "10000m28分48秒22。楠岡を1区へ置く場合の3区案。",
      "昨年3区区間11位。長い区間の経験を踏まえ4区候補とする。",
      "9月27日ロード13分40秒。新人の1区負担より中盤の速度を生かす案。",
      "10000m28分37秒73。楠岡を1区に置く場合のアンカー候補。"
    ],
    "excluded": {
      "浅川 侑大": "10000m28分46秒73。3・6区の重要代替。主将という理由で自動採用せず、松井・廣田と比較。",
      "浅野 智仁": "9月27日ロード14分08秒。中盤の安定候補だが、原・松尾の直近速度を優先。",
      "設楽 琉惺": "10000m29分09秒45。中盤代替。第一案の速度・経験を優先。",
      "雪田 圭将": "掲載PBだけでロードの評価を断定しないが、選出者を上回る直近結果を今回は確認できていない。"
    }
  },
  "日本大学": {
    "no": "13",
    "issue": "橋本6区は5000mだけでは選びづらいが、10000m28分35秒32で日本人登録者最上位。前回はこの理由が掲載されていなかった。",
    "anchor": "橋本6区を継続。10000m28分35秒32で長澤28分43秒42、山口28分46秒60、天野28分47秒19より速い。キップケメイ27分20秒05は3区に置いて追い上げ力を生かす案。",
    "alternative": "キップケメイ6区・橋本3区も有力。橋本の現在の状態は未確認なので、PBだけで6区確定とはしない。天野の9月27日5000m14分00秒61も比較に追加。",
    "selected": [
      "5000m13分44秒74。短い区間以外の大学ロード経験は未確認で、1区起用に不確実性あり。",
      "5000m13分59秒36・10000m28分46秒60。経験者を2区へ。",
      "10000m27分20秒05、9月27日ロード13分15秒。3区で主力として起用。",
      "10000m28分59秒47。中盤区間の候補。",
      "10000m28分43秒42、9月27日5000m13分59秒60。中盤の持続力候補。",
      "日本人登録者で10000m最上位の28分35秒32。6区第一案を継続。"
    ],
    "excluded": {
      "天野 啓太": "10000m28分47秒19、9月27日5000m14分00秒61。石川・長澤と僅差で4・5区の重要代替。",
      "安濃 佑真": "10000m29分37秒42。今回は上位層の記録を優先。健康・調子を推測しない。",
      "岸端 悠友": "10000m29分21秒15。中盤代替。第一案の速度・持続力を優先。",
      "川野 陸翔": "5000m14分37秒60。9月27日のDNSを故障とは断定せず、確認できた記録で比較。"
    }
  }
};
const ekidenCourse2026 = {"izumo": [[8, "浜山公園周辺に起伏。その後は平坦な区間。", "集団の位置取りとペース変化に対応し、終盤まで脚を残せる選手。"], [5.8, "最短区間。神立橋を越えて緩やかな下りが続く。", "5000mの速度をロードで出せる選手。下りで力まず、受け取った差に惑わされないこと。"], [8.5, "田園地帯を進み斐伊川を渡る。風の影響を受けやすい。", "10000mの持続力がある主力。単独走や向かい風でも出力を保てる選手。"], [6.2, "国道431号を西へ。短めの平坦な田園区間。", "速い巡航を続けられる選手。主力を後半に残す場合も、ここで大きく失わない層が必要。"], [6.4, "細かなアップダウンが続き、アンカー前の差を作る。", "起伏でリズムを崩さず、登りの後も速度を戻せる選手。平地PBだけでは適性を断定しない。"], [10.2, "最長区間。大社方面を経て出雲ドームへ。", "10kmロードの持続力と勝負への対応力。追走でも先頭でもペースを配分できる選手。"]], "zennihon": [[9.5, "熱田神宮から名古屋市港区へ。全区間で最短。橋・高架を含む。", "集団走と終盤の加速に強い選手。序盤から無理に差を作るより、流れに対応する力。"], [11.1, "港区から長島へ。国道23号の橋を越え、細かな起伏がある。", "10000mの速度と起伏への対応を兼ねる主力。出雲2区より5.3km長く、短距離の速さだけでは選ばない。"], [11.9, "長島から四日市へ。揖斐長良大橋など河川を渡る。", "橋の登り下りでも巡航を保てる選手。単独になっても約12kmを押せる持続力。"], [11.8, "四日市から鈴鹿へ。市街地を通り中盤へつなぐ。", "10000mの力を約12kmへ延ばせる選手。前半の主力配置後も差を広げられる層が欲しい。"], [12.4, "鈴鹿から津市河芸町へ。前半終了後の12km台区間。", "速い入りに偏らず一定のペースを保てる選手。後半の長距離担当を残しながら中盤を守る。"], [12.8, "津市河芸町から藤方へ。7区直前の区間。", "単独で12.8kmを走れる安定した選手。前を追い過ぎて終盤に落ちない配分を重視。"], [17.6, "津市藤方から松阪へ。ここから距離が大きく延びる。", "ハーフや長いロードで実績がある主力。5000mの速さより後半まで続く巡航と配分。"], [19.7, "松阪から伊勢神宮へ。最長区間で終盤は登りを含む。", "約20kmのロード実績と余力。単独走、逆転・逃げ切り、終盤の起伏に対応できる選手。"]]};
function courseGuide2026(race){
 const rows=ekidenCourse2026[race],isIzumo=race==='izumo';
 return `<article class="data-card"><h2>各区間の特徴と向いている選手</h2><p>コースの特徴は大会公式資料を確認。向いている選手像と配置への使い方は当サイトの分析です。風向き・気温は当日の条件で変わります。</p><div class="table-wrap"><table><thead><tr><th>区間・距離</th><th>コースの特徴</th><th>向いている選手・配置の考え方</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><th>${i+1}区 ${r[0].toFixed(1)}km</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div><p><a href="${isIzumo?'https://www.izumo-ekiden.jp/course/':'https://daigaku-ekiden.com/about/'}" target="_blank" rel="noopener noreferrer">大会公式コース資料</a>${isIzumo?'':' ／ <a href="https://daigaku-ekiden.com/about/files/map.pdf" target="_blank" rel="noopener noreferrer">コース・高低図</a>'}</p></article>`;
}
const recentAthleteForm2026 = {"工藤慎作": ["9/27", "ロード5km 13:51・13:44、両組1着。", "https://www.waseda.jp/inst/athletic/news/2026/09/29/61267/"], "吉倉ナヤブ直希": ["9/27", "ロード5km 13:38。夏の練習について取材発言あり。", "https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/"], "山口竣平": ["9/27", "ロード5km 13:49。工藤と同じ組で2着。", "https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/"], "新妻遼己": ["9/27", "ロード5km 13:44。直近ロードを選考材料にした。", "https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/"], "堀野正太": ["9/27", "ロード5km 13:56。短いロードの実戦を確認。", "https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/"], "上杉敦史": ["9/27", "ロード5km 13:55。出走の事実を確認。", "https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/"], "増子陽太": ["8月", "U20世界選手権5000m欠場の報道。現在の回復・練習状態は未確認。", "https://the-ans.jp/news/714525/"], "本田桜二郎": ["8月", "U20世界選手権3000m銅メダル。秋のロード状態を保証するものではない。", "https://the-ans.jp/news/714525/"], "池谷陸斗": ["9/27", "トラック5000m 13:47.09 PB。短区間候補として評価。", "https://komazawa-ekiden.com/results/"], "上岡大和": ["9/27", "トラック5000m 13:53.20 PB。短区間の代替候補。", "https://komazawa-ekiden.com/results/"], "鈴木大翔": ["9/27", "トラック5000m 13:55.79。PB更新ではないが出走を確認。", "https://komazawa-ekiden.com/results/"], "今村仁": ["9/27", "トラック5000m 13:50.39。出走を確認。", "https://komazawa-ekiden.com/results/"], "小池莉希": ["9/27", "ロード5km 13:26。速度の仕上がりを示す材料。", "https://soka-ekiden.com/play/"], "スティーブンムチーニ": ["9/27", "ロード5km 13:25。3区の主力配置を支える材料。", "https://soka-ekiden.com/play/"], "織橋巧": ["9/27", "ロード5km 13:36。1区候補として直近走を確認。", "https://soka-ekiden.com/play/"], "山口翔輝": ["9/27", "ロード5km 13:54。前年出雲5区実績と併せて評価。", "https://soka-ekiden.com/play/"], "菅野元太": ["9/27", "ロード5km 13:47。短区間第一案を維持。", "https://soka-ekiden.com/play/"], "村上遵世": ["9/27", "トラック5000m 13:54.89。PBとは分けて比較。", "https://soka-ekiden.com/play/"], "ソロモン": ["9/27", "ロード5km 13:58。直近だけでムチーニより上とは置かない。", "https://soka-ekiden.com/play/"], "田村幸太": ["9/27", "トラック5000m 13:59.84。中盤の代替候補。", "https://soka-ekiden.com/play/"], "原悠太": ["9/27", "ロード5km 13:53。2・4区候補の状態を確認。", "https://soka-ekiden.com/play/"], "松尾航希": ["9/27", "ロード5km 13:40。短い区間の第一案を支える材料。", "https://soka-ekiden.com/play/"], "シャドラックキップケメイ": ["9/27", "ロード5km 13:15。主力区間に置く理由を補強。", "https://soka-ekiden.com/play/"], "宮崎優": ["7/12", "士別ハーフ1:02:22、優勝・PB。秋の状態は未確認。", "https://sites.google.com/toyo.jp/tetsukon/試合結果/2026年度"], "日数谷隼人": ["7/12", "10000m 28:38.84。秋の主力としては追加確認が必要。", "https://www.cgu.ac.jp/club/sports/ekiden/result/"], "林愛斗": ["7/12", "10000m 28:47.11 PB。中盤候補の根拠。", "https://www.cgu.ac.jp/club/sports/ekiden/result/"], "前原颯斗": ["7/12", "士別ハーフ1:06:58。PBと直近走を分け、長区間の確信度を下げる。", "https://www.cgu.ac.jp/club/sports/ekiden/result/"], "稲見峻": ["7/12", "士別ハーフ1:06:52。秋の復調を未確認とする。", "https://www.cgu.ac.jp/club/sports/ekiden/result/"]};
const predictionName2026=n=>String(n).normalize('NFKC').replace(/[\s　・]+/g,'').replace(/濱/g,'濵');
function athleteForm2026(name){
 const f=recentAthleteForm2026[predictionName2026(name)];
 return f?`<span>確認した近況：${f[0]} ${f[1]}</span> <a href="${f[2]}" target="_blank" rel="noopener noreferrer">出典</a>`:'<span>秋の個人状態：今回確認した資料では未確認。PB・過去実績を使う暫定配置。</span>';
}
function formCoverage2026(){return `<article class="data-card"><h2>近況情報の確認範囲（10月5日）</h2><p>出走記録は、その日に走ったことの証拠です。ロード5kmとトラック5000mは別に扱い、長距離区間の適性や故障の有無まで断定しません。練習目的・調整段階が異なるレースのタイムを単純比較しません。</p><ul><li>青学：10月4日更新の取材記事で9月15〜23日の選抜合宿と主将の発言を確認。個人全員の好調さまでは確定しない。<a href="https://www.redbull.com/jp-ja/izumo-ekiden-aogaku-ekiden" target="_blank" rel="noopener noreferrer">取材記事</a></li><li>國學院：9月27日の公式結果・選手コメントは主に登録10名以外の選手。チーム全体の成果を登録選手の個人状態に置き換えない。<a href="https://www.kokugakuin.com/result/4229/" target="_blank" rel="noopener noreferrer">公式結果</a></li><li>中央：9月20日の学内記録会は天候不良による大会中止。個人の欠場・故障として扱わない。<a href="https://chuo-tf.com/official-record-meeting/" target="_blank" rel="noopener noreferrer">公式日程</a></li><li>大東文化：9月27日のロード結果は主力8名とは別の選手。主力の状態を推測しない。<a href="https://dbu-ekiden.com/news/2026/adizero-5k-tokyo-challenge-2026-results/" target="_blank" rel="noopener noreferrer">公式結果</a></li><li>X：中央の公式アカウントによる9月27日結果への検索掲載を確認したが、投稿本文・対象選手を直接照合できない情報は個人評価に採用しない。YouTube：予想動画を検索したが、映像・発言を直接確認できず、動画タイトルだけで故障や好不調を判断しない。</li></ul><p>順天堂・城西・帝京・日本の全員、全日本のみの大学の多くは秋の個人情報が限られます。「未確認」を表示し、欠場理由の未公表を不調と扱いません。正式発表で判断が変わる暫定案です。</p></article>`;}

const izumoOfficialOrder2026 = {
  "publishedAt": "2026-10-09 09:30",
  "status": "暫定",
  "source": "https://www.izumo-ekiden.jp/assets/pdf/orderlist_pre.pdf",
  "teams": {
    "青山学院大学": {
      "runners": [
        "石川 浩輝",
        "鳥井 健太",
        "飯田 翔大",
        "小河原 陽琉",
        "黒田 然",
        "前川 竜之将"
      ],
      "reserves": [
        "平松 享祐",
        "古川 陽樹"
      ]
    },
    "國學院大學": {
      "runners": [
        "浅野 結太",
        "鼻野木 悠翔",
        "辻原 輝",
        "尾熊 迅斗",
        "飯國 新太",
        "髙石 樹"
      ],
      "reserves": [
        "野中 恒亨",
        "五十嵐 新太"
      ]
    },
    "順天堂大学": {
      "runners": [
        "小林 侑世",
        "吉岡 大翔",
        "井上 朋哉",
        "佐藤 賢仁",
        "古川 達也",
        "山本 悠"
      ],
      "reserves": [
        "池間 凛斗",
        "永原 颯磨"
      ]
    },
    "早稲田大学": {
      "runners": [
        "吉倉 ナヤブ直希",
        "本田 桜二郎",
        "鈴木 琉胤",
        "新妻 遼己",
        "山口 竣平",
        "工藤 慎作"
      ],
      "reserves": [
        "上杉 敦史",
        "増子 陽太"
      ]
    },
    "中央大学": {
      "runners": [
        "藤田 大智",
        "岡田 開成",
        "三宅 悠斗",
        "濵口 大和",
        "柴田 大地",
        "栗村 凌"
      ],
      "reserves": [
        "佐藤 蓮",
        "並川 颯太"
      ]
    },
    "駒澤大学": {
      "runners": [
        "鈴木 大翔",
        "上岡 煌",
        "谷中 晴",
        "小山 翔也",
        "安原 海晴",
        "桑田 駿介"
      ],
      "reserves": [
        "植阪 嶺児",
        "池谷 陸斗"
      ]
    },
    "城西大学": {
      "runners": [
        "山本 聖也",
        "柴田 侑",
        "ルト アロン",
        "橋本 健市",
        "小林 竜輝",
        "中島 巨翔"
      ],
      "reserves": [
        "小田 伊織",
        "大場 崇義"
      ]
    },
    "創価大学": {
      "runners": [
        "菅野 元太",
        "織橋 巧",
        "スティーブン ムチーニ",
        "村上 遵世",
        "山口 翔輝",
        "小池 莉希"
      ],
      "reserves": [
        "榎木 凜太朗",
        "田村 幸太"
      ]
    },
    "帝京大学": {
      "runners": [
        "松尾 航希",
        "小林 咲冴",
        "楠岡 由浩",
        "浅川 侑大",
        "廣田 陸",
        "原 悠太"
      ],
      "reserves": [
        "浅野 智仁",
        "設楽 琉惺"
      ]
    },
    "日本大学": {
      "runners": [
        "天野 啓太",
        "山口 聡太",
        "シャドラック キップケメイ",
        "首藤 海翔",
        "長澤 辰朗",
        "橋本 櫂知"
      ],
      "reserves": [
        "石川 悠斗",
        "岸端 悠友"
      ]
    }
  }
};
const izumoRankingAfterEntry2026 = {
  "updated": "2026-10-09",
  "ranking": [
    "早稲田大学",
    "中央大学",
    "國學院大學",
    "創価大学",
    "アイビーリーグ選抜",
    "青山学院大学",
    "駒澤大学",
    "順天堂大学",
    "城西大学",
    "帝京大学",
    "日本大学",
    "京都産業大学",
    "関西大学",
    "皇學館大学",
    "広島経済大学",
    "札幌学院大学",
    "信州大学",
    "金沢学院大学",
    "第一工科大学",
    "北海道大学",
    "東北学連選抜",
    "中国四国学連選抜"
  ],
  "notes": {
    "早稲田大学": "2位→1位。鈴木琉胤が3区、山口竣平が5区となり、工藤慎作の6区につながる後半の構成を高く評価。吉倉の1区経験、本田・新妻の短区間での速度も生かせる。1年生2人の初出雲での対応が鍵。",
    "中央大学": "1位→2位。藤田大智・岡田開成の1〜2区で先行し、三宅悠斗・濵口大和へつなぐ攻撃的な配置。最長6区は栗村凌の初出雲となるため、終盤の経験を備える早稲田を僅かに上に置く。序盤で十分な差を作れば優勝候補。",
    "國學院大學": "3位を維持。辻原輝の3区と髙石樹の6区に、浅野・鼻野木・尾熊・飯國を配した厚い構成。ただし野中恒亨は補員で、主力全員が走る前提にはしない。野中への当日変更があれば、優勝争いでの評価を再び引き上げる余地がある。",
    "創価大学": "4位を維持。菅野元太が1区、織橋巧が2区へ入れ替わり、3区ムチーニ、6区小池莉希は予想通り。9月のロード実績を持つ主力が重要区間に入り、上位3校を追う。菅野が1区の集団を離れずにつなげるかが鍵。",
    "アイビーリーグ選抜": "5位を維持。Bendtsen・Shorten・Hackettを前半、Iversonを最長6区に配置。補員のBlanksを出走前提にはせず、発表された6人で評価。速い巡航と出雲の位置取り・中継への対応次第では上位争いに加わる。",
    "青山学院大学": "6位を維持。鳥井健太の2区、飯田翔大の3区に小河原陽琉の4区が続く。1区石川浩輝、6区前川竜之将の配置を踏まえ、箱根の総合力をそのまま出雲の優勝評価にはしない。補員平松享祐への変更と序盤の展開で上位浮上を狙う。",
    "駒澤大学": "8位→7位。3区谷中晴、6区桑田駿介で長い区間を担い、小山翔也・安原海晴を4〜5区へ置く構成を評価。鈴木大翔・上岡煌の1〜2区で主力へつなげれば浮上できる。池谷陸斗と植阪嶺児は補員として扱う。",
    "順天堂大学": "7位→8位。吉岡大翔を2区、井上朋哉を3区、山本悠を6区に配置。池間凛斗・永原颯磨は補員となり、予想で置いた主力全員を出走前提にはできない。小林侑世の1区と佐藤賢仁の4区で差を抑えられれば駒澤との順位は逆転しうる。",
    "城西大学": "9位を維持。山本聖也の1区とルト・アロンの3区を軸に、6区は中島巨翔。柴田侑を2区、小林竜輝を5区へ配し、予想より前後の役割が明確になった。3区で作る貯金を4〜6区まで守れるかを重視。",
    "帝京大学": "10位を維持。松尾航希の1区から小林咲冴、3区楠岡由浩へつなぐ配置。浅川侑大・廣田陸・原悠太が後半を担い、長めの区間に上級生を置く。松尾が集団を保って楠岡へ渡せれば城西に迫る。",
    "日本大学": "11位を維持。天野啓太・山口聡太が前半を運び、3区キップケメイで押し上げる構成。4区首藤海翔、5区長澤辰朗、6区橋本櫂知でその貯金を残せるかが焦点。留学生1人の力だけで総合順位を上げない。",
    "中国四国学連選抜": "今回順位予想に追加。木戸颯から角南祐行までの公式6人を反映。地域選抜チームの予想は、大学単独チームとは別の不確実性がある。"
  }
};
function izumoOfficialRole2026(team,name){
 const order=izumoOfficialOrder2026.teams[team];
 const section=order.runners.indexOf(name);
 return section>=0?`${section+1}区`:order.reserves.includes(name)?'補員':'区間エントリー外';
}
function izumoPredictionTemplate(){
  const orderRows=Object.entries(izumoPrediction2026.orders).map(([team,names],index)=>{
    const official=izumoOfficialOrder2026.teams[team];
    return `<tr class="izumo-comparison-prediction"><th rowspan="2" scope="rowgroup"><button type="button" class="entry-team-button" data-izumo-team="${team}" aria-expanded="false" aria-controls="izumo-entry-${index}">${team}<small>登録10名・補員を見る ▾</small></button></th><th scope="row"><span class="izumo-row-label">予想</span><small>10/5時点</small></th>${names.map(n=>`<td><strong>${n}</strong></td>`).join('')}</tr>
    <tr class="izumo-comparison-official"><th scope="row"><span class="izumo-row-label">公式エントリー</span><small>10/9発表・暫定</small></th>${official.runners.map((n,i)=>`<td class="${n!==names[i]?'izumo-order-different':''}"><strong>${n}</strong>${n!==names[i]?'<small class="izumo-order-diff-label">予想と異なる</small>':''}</td>`).join('')}</tr>
    <tr id="izumo-entry-${index}" class="izumo-entry-row" hidden><td colspan="8"><div class="izumo-entry-panel"><h3>${team} 登録10名</h3><p><strong>公式補員：</strong>${official.reserves.join('・')}</p><ol class="izumo-entry-list">${izumoEntries2026[team].map(p=>`<li><strong>${p.name}</strong><span>${p.grade}年</span><small>予想：${names.includes(p.name)?`${names.indexOf(p.name)+1}区`:'区間未配置'} ／ 公式：${izumoOfficialRole2026(team,p.name)}</small><p>${names.includes(p.name)?izumoSelectionAudit2026[team].selected[names.indexOf(p.name)]:izumoSelectionAudit2026[team].excluded[p.name]}</p>${names.includes(p.name)?`<p>予想区間の適性：${ekidenCourse2026.izumo[names.indexOf(p.name)][2]}</p>`:''}<p>${athleteForm2026(p.name)}</p></li>`).join('')}</ol><a href="${izumoOfficialOrder2026.source}" target="_blank" rel="noopener noreferrer">公式区間エントリー（暫定）</a> ／ <a href="https://www.izumo-ekiden.jp/assets/pdf/orderlist-sokuhou.pdf" target="_blank" rel="noopener noreferrer">公式チーム登録一覧</a></div></td></tr>`;
  }).join('');
  return `<section class="container page"><div class="page-header"><h1>2026 出雲駅伝予想</h1><p>10月9日更新。発表前の区間予想と、公式区間エントリーを2行で比較できます。</p></div>
  <article class="data-card"><h3>区間エントリー発表後の順位予想</h3><p>10月9日発表の暫定オーダーで走る6人を基準に更新。発表前の順位も残し、配置による評価の変化を比較できます。</p><p>補員からの当日変更はまだ確定していないため、主力が必ず交代で入るとは想定していません。</p></article>
  <article class="panel"><div class="panel-title dark"><h3>総合順位予想 · 10月9日更新</h3></div><div class="panel-body"><div class="table-wrap"><table><thead><tr><th>更新後</th><th>大学・チーム</th><th>発表前</th><th>配置を踏まえた見立て</th></tr></thead><tbody>${izumoRankingAfterEntry2026.ranking.map((t,i)=>{const before=izumoPrediction2026.ranking.indexOf(t)+1;return `<tr><td><strong>${i+1}位</strong></td><th scope="row">${t}</th><td>${before?before+'位':'—'}</td><td style="white-space:normal;min-width:230px">${izumoRankingAfterEntry2026.notes[t]||'区間発表後も発表前の順位評価を維持。'}</td></tr>`;}).join('')}</tbody></table></div></div></article>
  ${courseGuide2026('izumo')}<article class="history-block"><h2>関東10大学 区間予想と公式エントリー</h2><p>色の付いた区間は予想と異なる配置です。公式オーダーは10月9日9:30発行の暫定版。レース結果は10月12日の開催後に確定します。</p><div class="table-wrap izumo-comparison-wrap"><table class="izumo-comparison-table"><thead><tr><th>大学</th><th>表示</th><th>1区 8.0km</th><th>2区 5.8km</th><th>3区 8.5km</th><th>4区 6.2km</th><th>5区 6.4km</th><th>6区 10.2km</th></tr></thead><tbody>${orderRows}</tbody></table></div></article>
<p class="izumo-order-note">公式区間エントリーは当日のメンバー変更前の配置です。予想は発表前の内容を残しています。<a href="${izumoOfficialOrder2026.source}" target="_blank" rel="noopener noreferrer">公式オーダー表（暫定）</a></p></section>`;
}


const zennihonPrediction2026={
 updated:'2026-10-05',
 ranking:['駒澤大学','中央大学','青山学院大学','國學院大學','早稲田大学','創価大学','順天堂大学','帝京大学','日本大学','東洋大学','東海大学','大東文化大学','山梨学院大学','中央学院大学','神奈川大学'],
 teams:['駒澤大学','中央大学','青山学院大学','國學院大學','早稲田大学','帝京大学','創価大学','順天堂大学','日本大学','東海大学','大東文化大学','神奈川大学','東洋大学','中央学院大学','山梨学院大学']
};
const zennihonOrders2026 = {"駒澤大学": ["谷中 晴", "池谷 陸斗", "牟田 凜太", "小山 翔也", "安原 海晴", "植阪 嶺児", "菅谷 希弥", "桑田 駿介"], "中央大学": ["岡田 開成", "栗村 凌", "濵口 大和", "三宅 悠斗", "並川 颯太", "藤田 大智", "佐藤 大介", "本間 颯"], "青山学院大学": ["小河原 陽琉", "鳥井 健太", "飯田 翔大", "黒田 然", "平松 享祐", "佐藤 愛斗", "椙山 一颯", "折田 壮太"], "國學院大學": ["尾熊 迅斗", "鼻野木 悠翔", "飯國 新太", "浅野 結太", "田中 愛睦", "辻原 輝", "髙石 樹", "野中 恒亨"], "早稲田大学": ["吉倉 ナヤブ直希", "本田 桜二郎", "鈴木 琉胤", "新妻 遼己", "堀野 正太", "佐々木 哲", "山口 竣平", "工藤 慎作"], "帝京大学": ["小林 咲冴", "楠岡 由浩", "原 悠太", "松井 一", "松尾 航希", "佐藤 誠悟", "廣田 陸", "浅川 侑大"], "創価大学": ["織橋 巧", "菅野 元太", "村上 遵世", "山口 翔輝", "田村 幸太", "榎木 凜太朗", "小池 莉希", "スティーブン ムチーニ"], "順天堂大学": ["池間 凛斗", "吉岡 大翔", "永原 颯磨", "井上 朋哉", "荒牧 琢登", "松尾 和真", "古川 達也", "山本 悠"], "日本大学": ["首藤 海翔", "山口 聡太", "石川 悠斗", "天野 啓太", "岸端 悠友", "長澤 辰朗", "橋本 櫂知", "シャドラック キップケメイ"], "東海大学": ["矢口 陽太", "永本 脩", "檜垣 蒼", "可児 悠貴", "平井 璃空", "松山 優太", "中野 純平", "南坂 柚汰"], "大東文化大学": ["中澤 真大", "エヴァンス・キプロップ", "鈴木 要", "藤原 幹大", "清水 雄翔", "松浦 輝仁", "棟方 一楽", "大濱 逞真"], "神奈川大学": ["滝本 朗史", "上田 航大", "平川 瑠星", "大岩 蓮", "三原 涼雅", "近藤 大智", "新妻 玲旺", "花井 創"], "東洋大学": ["田中 純", "林 柚杏", "迎 暖人", "内堀 勇", "濱中 尊", "薄根 大河", "宮崎 優", "松井 海斗"], "中央学院大学": ["日数谷 隼人", "林 愛斗", "米田 昂太", "長部 虎太郎", "長友 英吾", "三代田 宏太朗", "前原 颯斗", "市川 大世"], "山梨学院大学": ["占部 大和", "松岡 一星", "田原 匠真", "宮地 大哉", "大杉 亮太朗", "阿部 紘也", "和田 瑛登", "ブライアン キピエゴ"]};
const zennihonNotes2026 = {"駒澤大学": "出雲の登録6名だけで8区間を埋めない。菅谷・桑田を長区間、池谷を速度区間へ。池谷の9月PBは確認できるが、17km適性に転用しない。", "中央大学": "岡田の1区を維持し、濵口・三宅で前半を押す。佐藤大介の長いロード、本間の長距離担当案を比較。出雲非登録の本間を全日本にも不在と決めつけない。", "青山学院大学": "出雲の短区間構成から8名へ拡張。椙山のハーフ、折田の10000mを後半に配分する案。合宿取材だけでは長区間での現在の仕上がりを断定しない。", "國學院大學": "辻原・髙石・野中の長距離層を6〜8区へ。出雲3区の野中を全日本でも3区に固定しない。9月27日の別選手の成績は選考8名の状態と分ける。", "早稲田大学": "工藤を最長8区へ。7区山口は10000mの持続力からの推定で、17.6kmの確信度は工藤より低い。鈴木を3区、新妻を4区、経験のある堀野・佐々木を中盤へ。増子の現状確認後は2〜6区を再比較。", "帝京大学": "昨年全日本2区の区間記録保持者・楠岡を2区へ置く。出雲5区候補の松尾は全日本では距離が倍近くなるため条件付き。長区間はハーフ・ロードの確認を優先。", "創価大学": "小池の速度を出雲6区だけに固定せず7区、ムチーニを8区へ。両者の9月ロードは好材料だが、5kmの結果だけで約20kmの仕上がりを断定しない。", "順天堂大学": "吉岡を早い段階の2区、山本を8区へ。永原の古い10000m記録だけで距離不適とせず3区に置く暫定案。松尾・古川を含め長距離層を再比較。", "日本大学": "キップケメイを最長8区へ。首藤は短い1区、10000mが確認できる山口・石川・天野を前半から中盤に置く。ロード13:15は速度の証拠で、長距離の状態は別途必要。", "東海大学": "南坂のハーフ1:01:45を8区、中野の10000m28:19.39を7区に配分。永本の5000m13:34.17を2区へ。主力の秋の個人状態は未確認。", "大東文化大学": "大濱のハーフ1:00:48、棟方1:00:53を7・8区へ。キプロップを2区として前後に戦力を分ける。9月ロードに主力が載っていないことを故障と解釈しない。", "神奈川大学": "花井のハーフ1:01:41、新妻玲旺1:02:16を長区間に置く。10000mだけなら上田・平川も有力だが、ハーフとの役割分担を採る。秋の個人状態は未確認。", "東洋大学": "松井のハーフ1:01:44を8区、7月士別1:02:22の宮崎を7区へ。宮崎の実戦は確認できるが、他の選手まで好調と扱わない。正式登録と秋の状態を待つ条件付き案。", "中央学院大学": "7月10000m28:38.84の日数谷を1区、PB更新の林を2区へ。前原の7月ハーフ1:06:58を留保として明記し7区は条件付き。稲見への変更も7月1:06:52だけでは改善と断定できない。", "山梨学院大学": "キピエゴの10000m27:42.76・ハーフ1:00:16を8区、和田の1:01:35を7区へ配分。秋の状態は未確認で、出走人数を正式登録と取り違えない。"};
function zennihonPredictionTemplate(){
 const resolver=window.currentAthletePbResolver;
 const rowFor=(team,name)=>(resolver?.currentRows?.(team)||[]).find(r=>predictionName2026(r.name)===predictionName2026(name));
 const orderRows=zennihonPrediction2026.teams.map(team=>`<tr><td><button type="button" class="entry-team-button" data-zen-analysis="zen-audit-${zennihonPrediction2026.teams.indexOf(team)}"><strong>${team}</strong><small>配置理由を見る</small></button></td>${zennihonOrders2026[team].map((name,i)=>`<td><small>${i+1}区</small><br><strong>${name}</strong></td>`).join('')}</tr>`).join('');
 return `<section class="container page"><div class="page-header"><h1>2026 全日本大学駅伝予想</h1><p>10月5日 全8区間を再検討。関東15大学の第一案です。正式登録前の候補配置で、出雲の登録10名と全日本の登録候補は区別しています。</p></div>
 <article class="data-card"><h2>関東15大学の順位予想</h2><p>関東出場校内の暫定順位です。</p><details><summary>順位予想を見る</summary><ol>${zennihonPrediction2026.ranking.map(t=>`<li>${t}</li>`).join('')}</ol></details></article>
 ${courseGuide2026('zennihon')}
 <article class="history-block"><h2>関東出場15大学 区間予想</h2><p>大学名から全8区間の採用理由・近況・不確実性へ移動できます。</p><div class="table-wrap"><table><thead><tr><th>大学</th>${ekidenCourse2026.zennihon.map((r,i)=>`<th>${i+1}区 ${r[0].toFixed(1)}km</th>`).join('')}</tr></thead><tbody>${orderRows}</tbody></table></div></article>
 <article class="data-card"><h2>全区間の配置理由と確認した近況</h2><p>PB欄はサイト内2026年度データ。直近結果とは区別します。個人の起伏適性・現在の練習状態を確認できない場合、確定した適性と扱いません。</p>
 ${zennihonPrediction2026.teams.map((team,j)=>`<details class="history-block" id="zen-audit-${j}"><summary><strong>${team}：全8区間の分析</strong></summary><p>${zennihonNotes2026[team]}</p><div class="table-wrap"><table><thead><tr><th>区間・候補</th><th>配置に使った記録と判断</th><th>個人の近況</th></tr></thead><tbody>${zennihonOrders2026[team].map((name,i)=>{const r=rowFor(team,name);return `<tr><th>${i+1}区 ${name}</th><td>${r?`5000m ${r.pb5000||'未確認'} ／ 10000m ${r.pb10000||'未確認'} ／ ハーフ ${r.half||'未確認'}`:'現在のPB一覧との照合未完了。出雲公式登録・大学資料を優先する条件付き候補。'}<p>${ekidenCourse2026.zennihon[i][2]} この役割への配置は上記記録と大学別の戦力配分からの推定。</p>${i>=6&&(!r||!r.half||r.half==='—')?'<p>長いロードの記録が不足：距離対応は特に要確認。</p>':''}</td><td>${athleteForm2026(name)}</td></tr>`}).join('')}</tbody></table></div></details>`).join('')}
 <p><a href="https://daigaku-ekiden.com/yosenkai/index.html" target="_blank" rel="noopener noreferrer">2026大会公式・地区選考会</a> ／ <a href="https://www.cgu.ac.jp/club/sports/ekiden/result/" target="_blank" rel="noopener noreferrer">中央学院公式結果</a> ／ <a href="https://sites.google.com/toyo.jp/tetsukon/試合結果/2026年度" target="_blank" rel="noopener noreferrer">東洋公式結果</a></p></article>
 <div class="notice"><strong>予想と事実：</strong>区間配置は10月5日時点の暫定案。正式エントリー、出雲での走り、10月のロード・記録会で変わり得ます。未出走・DNS・結果欄に名前がないことを、故障継続や不調の確定材料にしません。</div></section>`;
}

function predictionTemplate(){return `<section class="container page"><div class="page-header"><h1>2027 箱根駅伝予想</h1><p>2026年8月時点の試算。今後の出雲・全日本・記録会で随時更新します。</p></div><div class="prediction-layout"><article class="panel"><div class="panel-title dark"><h3>優勝確率 試算 v0.3</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div></div></article><article class="data-card"><h3>現在の評価軸</h3><div class="weight-list"><div><span>2026箱根実績</span><strong>30%</strong></div><div><span>直近の全日本・出雲</span><strong>25%</strong></div><div><span>5000m PB層</span><strong>10%</strong></div><div><span>10000m PB層</span><strong>15%</strong></div><div><span>ハーフPB層</span><strong>15%</strong></div><div><span>箱根適性・駅伝実績</span><strong>5%</strong></div></div></article></div><div class="notice"><strong>重要:</strong> 2026年度4年生は第103回箱根駅伝に出場可能なため戦力に含めています。2025年度4年生など、すでに卒業した選手は除外します。</div></section>`}
function aboutTemplate(){return `<section class="container page"><div class="page-header"><h1>データと予想方法</h1><p>駅伝実績に加え、5000m・10000m・ハーフマラソンを分けて評価します。</p></div><div class="data-grid"><article class="data-card"><h3>三大駅伝</h3><p>箱根・出雲・全日本の過去10年を公式記録で照合し、特に直近大会を重く評価します。</p></article><article class="data-card"><h3>選手PB</h3><p>5000mのスピード、10000mの持続力、ハーフのロード適性を総合して各校10名を抜粋します。</p></article><article class="data-card"><h3>学年・出場資格</h3><p>第103回大会時点で出場可能な選手を対象にします。2026年度4年生は対象、すでに卒業した選手は除外します。</p></article></div></section>`}
const templates={home:homeTemplate,teams:teamsTemplate,history:historyTemplate,prediction:predictionTemplate,'izumo-prediction':izumoPredictionTemplate,'zennihon-prediction':zennihonPredictionTemplate,about:aboutTemplate};
function startCountdown(){clearInterval(countdownTimer);const el=document.querySelector('#countdown');if(!el)return;const target=new Date('2027-01-02T08:00:00+09:00');const render=()=>{const diff=Math.max(0,target-new Date());const days=Math.floor(diff/86400000),hours=Math.floor(diff/3600000)%24,mins=Math.floor(diff/60000)%60,secs=Math.floor(diff/1000)%60;el.innerHTML=[[days,'日'],[hours,'時間'],[mins,'分'],[secs,'秒']].map(([n,l])=>`<div class="time-box"><strong>${String(n).padStart(2,'0')}</strong><small>${l}</small></div>`).join('')};render();countdownTimer=setInterval(render,1000)}
function render(route='home'){const tpl=templates[route]||homeTemplate;app.innerHTML=tpl();document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.route===route));nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');resetPageTop();if(route==='home')startCountdown();else clearInterval(countdownTimer)}
document.addEventListener('click',e=>{const target=e.target.closest('[data-route]');if(target)render(target.dataset.route)});menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});const initialRoute=location.hash.replace('#','')||'home';if(initialRoute!=='home')render(initialRoute);
window.addEventListener('pageshow',()=>resetPageTop());

// Expand official entries in place without leaving the section prediction.
document.addEventListener('click', e => {
  const button = e.target.closest('[data-izumo-team]');
  if (!button) return;
  const row = document.getElementById(button.getAttribute('aria-controls'));
  if (!row) return;
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  row.hidden = expanded;
});

document.addEventListener("click",e=>{const b=e.target.closest("[data-zen-analysis]");if(!b)return;const d=document.getElementById(b.dataset.zenAnalysis);if(d){d.open=true;d.scrollIntoView({behavior:"smooth",block:"start"});}});
