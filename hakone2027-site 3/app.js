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
      "増子 陽太": "5000m13分20秒35で有力。4区の最重要代替。直近ロードを確認できた新妻を第一案にしたが、逆転可能。",
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
function izumoPredictionTemplate(){
  const orderRows=Object.entries(izumoPrediction2026.orders).map(([team,names])=>`<tr><td><button type="button" class="entry-team-button" data-izumo-team="${team}" aria-expanded="false" aria-controls="izumo-entry-${Object.keys(izumoPrediction2026.orders).indexOf(team)}">${team}<small>エントリー10名</small></button></td>${names.map((n,i)=>`<td><small>${i+1}区</small><br><strong>${n}</strong></td>`).join('')}</tr><tr id="izumo-entry-${Object.keys(izumoPrediction2026.orders).indexOf(team)}" class="izumo-entry-row" hidden><td colspan="7"><div class="izumo-entry-panel"><h3>${team} 登録10名</h3><p>公式チームエントリー／2026年10月5日確認。区間は当サイトの予想です。</p><ol class="izumo-entry-list">${izumoEntries2026[team].map(p=>`<li><strong>${p.name}</strong><span>${p.grade}年</span><small>${names.includes(p.name)?`${names.indexOf(p.name)+1}区予想`:'区間未配置（予想）'}</small><p>${names.includes(p.name)?izumoSelectionAudit2026[team].selected[names.indexOf(p.name)]:izumoSelectionAudit2026[team].excluded[p.name]}</p></li>`).join('')}</ol><a href="https://www.izumo-ekiden.jp/assets/pdf/orderlist-sokuhou.pdf" target="_blank" rel="noopener noreferrer">公式エントリー一覧（速報版）</a></div></td></tr>`).join('');
  return `<section class="container page"><div class="page-header"><h1>2026 出雲駅伝予想</h1><p>10月5日再検証。登録10名全員を比較し、前年の同区間実績・直近ロード・長い区間への対応をもとに予想を見直しました。工藤慎作を早稲田の6区第一候補に変更。</p></div>
  <div class="prediction-layout"><article class="panel"><div class="panel-title dark"><h3>総合順位予想</h3></div><div class="panel-body"><div class="rank-list">${izumoPrediction2026.ranking.map((t,i)=>`<div class="rank-item"><div class="rank-number">${i+1}</div><div><div class="team-name">${t}</div></div></div>`).join('')}</div></div></article>
  <article class="data-card"><h3>選考・配置の考え方</h3><p>この順位・区間表は、確認した資料を比較して組んだ編集上の予想です。数式で算出した順位ではありません。前回の「30%・25%」等の表示は実際の計算と結びついていなかったため、取り下げました。</p><ol><li>登録10名を全員比較し、出走6名と選外4名の理由を残す。</li><li>6区10.2kmは前年の同区間実績、10000m・ロードの持続力、直近の状態を先に比較する。</li><li>1区は集団走・出雲経験、2区は速度、3区は8.5kmの主力配置、4・5区は残る戦力の配分を考える。</li><li>前年の卒業選手の力を現在の戦力に加えない。前年経験のない選手は「未確認」として扱う。</li></ol><p>PBは現在の調子を保証しません。未掲載の記録、欠場、主将という肩書だけで採否を決めず、公式区間発表までは複数案を残します。</p></article></div>
  <article class="history-block"><h2>関東10大学 区間予想</h2><p>大学名をクリックすると、登録10名・学年・予想区間を表示します。</p><div class="table-wrap"><table><thead><tr><th>大学</th><th>1区 8.0km</th><th>2区 5.8km</th><th>3区 8.5km</th><th>4区 6.2km</th><th>5区 6.4km</th><th>6区 10.2km</th></tr></thead><tbody>${orderRows}</tbody></table></div></article>
  <article class="data-card"><h2>登録10名の選考・アンカー配置の検証</h2><p>各大学について、前回案の弱点、6区の第一候補、代替案を掲載。大学名を開いた登録10名一覧には、一人ずつ選考理由も表示しています。健康状態が未公表の選手を、不調や故障と推測して除外していません。</p>
${Object.entries(izumoSelectionAudit2026).map(([team,a])=>`<details class="history-block"><summary><strong>${team}：6区 ${izumoPrediction2026.orders[team][5]}</strong></summary><p><strong>前回案の問題：</strong>${a.issue}</p><p><strong>今回のアンカー判断：</strong>${a.anchor}</p><p><strong>代替案・不確実性：</strong>${a.alternative}</p><p><a href="https://www.izumo-ekiden.jp/runner/team/${a.no}.html" target="_blank" rel="noopener noreferrer">2026公式選手紹介・掲載PB</a> ／ <a href="https://iuau.jp/ev2025/msenbatu/37izumo_result.pdf" target="_blank" rel="noopener noreferrer">2025出雲公式結果</a></p></details>`).join('')}
<h3>直近状態を確認した資料</h3><ul><li><a href="https://www.waseda.jp/inst/athletic/news/2026/09/29/61267/" target="_blank" rel="noopener noreferrer">早稲田大学公式：9月27日の工藤の2本走</a> ／ <a href="https://wasedasports-sousupo.com/news/trackandfield/athletics/298868/" target="_blank" rel="noopener noreferrer">取材記事・全組結果</a></li><li><a href="https://komazawa-ekiden.com/results/" target="_blank" rel="noopener noreferrer">駒澤大学公式：9月27日の池谷・上岡・鈴木らの結果</a></li><li><a href="https://soka-ekiden.com/play/" target="_blank" rel="noopener noreferrer">創価大学公式：9月27日のロード5km・トラック5000m</a></li></ul>
<p><strong>順位の扱い：</strong>中央・早稲田・國學院・創価を上位候補とする順序は維持。今回は選手選考と区間配分の根拠を修正しました。工藤を加えた早稲田はアンカーの評価を改善していますが、この変更だけで総合1位と断定することはしません。アイビーリーグや関東外の順位は追加の直近情報が限られる暫定評価で、今回の10大学の検証と同じ深さで確認できたものではありません。</p></article>
<div class="notice"><strong>情報と予想の区別：</strong>掲載実績はリンク先の確認できた事実、区間の採用理由・代替案・順位は当サイトの推定です。公式区間エントリーや当日の出走を確定するものではありません。ロード5kmはトラック5000m PBと分けています。</div></section>`;
}


const zennihonPrediction2026={
 updated:'2026-09-27',
 ranking:['駒澤大学','中央大学','青山学院大学','國學院大學','早稲田大学','創価大学','順天堂大学','帝京大学','日本大学','東洋大学','東海大学','大東文化大学','山梨学院大学','中央学院大学','神奈川大学'],
 teams:['駒澤大学','中央大学','青山学院大学','國學院大學','早稲田大学','帝京大学','創価大学','順天堂大学','日本大学','東海大学','大東文化大学','神奈川大学','東洋大学','中央学院大学','山梨学院大学']
};
function zennihonPredictionTemplate(){
 const resolver=window.currentAthletePbResolver;
 const sec=v=>resolver?.timeSeconds?resolver.timeSeconds(v):null;
 const score=r=>{const t10=sec(r.pb10000),h=sec(r.half),t5=sec(r.pb5000);return (t10??1900)*0.50+(h??4200)*0.35+(t5??900)*0.15;};
 const forecast=zennihonPrediction2026.teams.map(team=>{
   let rows=resolver?.currentRows?resolver.currentRows(team):[];
   rows=rows.filter(r=>r&&r.name).sort((a,b)=>score(a)-score(b)).slice(0,8);
   // 全日本は前半のスピード区間と7・8区の長距離を分離。上位2名を7・8区へ回す暫定配置。
   const order=rows.length>=8?[rows[3],rows[5],rows[4],rows[6],rows[7],rows[2],rows[1],rows[0]]:rows;
   return [team,order];
 });
 const orderRows=forecast.map(([team,rows])=>`<tr><td><strong>${team}</strong></td>${Array.from({length:8},(_,i)=>`<td><small>${i+1}区</small><br><strong>${rows[i]?.name||'未定'}</strong></td>`).join('')}</tr>`).join('');
 return `<section class="container page"><div class="page-header"><h1>2026 全日本大学駅伝予想</h1><p>9月27日時点の暫定予想。関東の出場15大学を対象に、PB・2026年の状態・全日本実績・長距離区間への適性を評価しています。</p></div>
 <div class="prediction-layout"><article class="panel"><div class="panel-title dark"><h3>関東15大学 順位予想</h3></div><div class="panel-body"><div class="rank-list">${zennihonPrediction2026.ranking.map((t,i)=>`<div class="rank-item"><div class="rank-number">${i+1}</div><div><div class="team-name">${t}</div></div></div>`).join('')}</div></div></article>
 <article class="data-card"><h3>予想の評価軸</h3><div class="weight-list"><div><span>10000m・ハーフの選手層</span><strong>30%</strong></div><div><span>2026年トラック・直近状態</span><strong>20%</strong></div><div><span>直近3〜5年の全日本実績</span><strong>25%</strong></div><div><span>5000mスピード</span><strong>10%</strong></div><div><span>7・8区の長距離対応と選手層</span><strong>15%</strong></div></div><p>全日本は8区間106.8km。出雲より距離が長いため、5000m単独の比重を下げ、10000m・ハーフと7〜8区を走り切れる層の厚さを重くしています。</p></article></div>
 <article class="history-block"><h2>関東出場15大学 区間予想</h2><div class="table-wrap"><table><thead><tr><th>大学</th>${Array.from({length:8},(_,i)=>`<th>${i+1}区</th>`).join('')}</tr></thead><tbody>${orderRows}</tbody></table></div></article>
 <div class="notice"><strong>暫定版:</strong> 本大会の正式エントリー・区間エントリー前のため、現在の2026年度在籍選手PBデータから8名を抽出して配置しています。出雲、10月の記録会、正式エントリー発表後に更新します。</div></section>`;
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
