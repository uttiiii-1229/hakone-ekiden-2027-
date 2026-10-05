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
    '青山学院大学':['折田 壮太','小河原 陽琉','飯田 翔大','黒田 然','鳥井 健太','平松 享祐'],
    '國學院大學':['辻原 輝','鼻野木 悠翔','野中 恒亨','浅野 結太','飯國 新太','髙石 樹'],
    '順天堂大学':['井上 朋哉','池間 凛斗','吉岡 大翔','永原 颯磨','山本 悠','荒牧 琢登'],
    '早稲田大学':['増子 陽太','本田 桜二郎','山口 竣平','新妻 遼己','鈴木 琉胤','吉倉 ナヤブ直希'],
    '中央大学':['栗村 凌','濵口 大和','岡田 開成','三宅 悠斗','佐藤 大介','藤田 大智'],
    '駒澤大学':['桑田 駿介','池谷 陸斗','谷中 晴','植阪 嶺児','小山 翔也','安原 海晴'],
    '城西大学':['柴田 侑','山本 聖也','ルト アロン','小林 竜輝','橋本 健市','中島 巨翔'],
    '創価大学':['村上 遵世','菅野 元太','スティーブン ムチーニ','織橋 巧','山口 翔輝','小池 莉希'],
    '帝京大学':['松尾 航希','松井 一','楠岡 由浩','小林 咲冴','原 悠太','廣田 陸'],
    '日本大学':['首藤 海翔','山口 聡太','シャドラック キップケメイ','石川 悠斗','長澤 辰朗','橋本 櫂知']
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
function izumoPredictionTemplate(){
  const orderRows=Object.entries(izumoPrediction2026.orders).map(([team,names])=>`<tr><td><button type="button" class="entry-team-button" data-izumo-team="${team}" aria-expanded="false" aria-controls="izumo-entry-${Object.keys(izumoPrediction2026.orders).indexOf(team)}">${team}<small>エントリー10名</small></button></td>${names.map((n,i)=>`<td><small>${i+1}区</small><br><strong>${n}</strong></td>`).join('')}</tr><tr id="izumo-entry-${Object.keys(izumoPrediction2026.orders).indexOf(team)}" class="izumo-entry-row" hidden><td colspan="7"><div class="izumo-entry-panel"><h3>${team} 登録10名</h3><p>公式チームエントリー／2026年10月5日確認。区間は当サイトの予想です。</p><ol class="izumo-entry-list">${izumoEntries2026[team].map(p=>`<li><strong>${p.name}</strong><span>${p.grade}年</span><small>${names.includes(p.name)?`${names.indexOf(p.name)+1}区予想`:'区間未配置（予想）'}</small></li>`).join('')}</ol><a href="https://www.izumo-ekiden.jp/assets/pdf/orderlist-sokuhou.pdf" target="_blank" rel="noopener noreferrer">公式エントリー一覧（速報版）</a></div></td></tr>`).join('');
  return `<section class="container page"><div class="page-header"><h1>2026 出雲駅伝予想</h1><p>10月5日更新。公式エントリーと選手紹介、9月27日のトラック・ロード結果を確認した暫定予想。出雲の経験を25%で評価し、登録10名から区間を予想しています。</p></div>
  <div class="prediction-layout"><article class="panel"><div class="panel-title dark"><h3>総合順位予想</h3></div><div class="panel-body"><div class="rank-list">${izumoPrediction2026.ranking.map((t,i)=>`<div class="rank-item"><div class="rank-number">${i+1}</div><div><div class="team-name">${t}</div></div></div>`).join('')}</div></div></article>
  <article class="data-card"><h3>予想の評価軸</h3><div class="weight-list"><div><span>5000m上位6名・スピード</span><strong>30%</strong></div><div><span>10000m上位層</span><strong>15%</strong></div><div><span>2026トラック実績・直近状態</span><strong>20%</strong></div><div><span>直近3〜5年の出雲実績・現役選手の出雲経験</span><strong>25%</strong></div><div><span>区間配置・アンカー力</span><strong>10%</strong></div></div><p>出雲は6区間45.1kmで、1区8.0km・2区5.8km・3区8.5km・4区6.2km・5区6.4km・6区10.2km。短距離区間が多いため5000mを重視しつつ、出雲特有の高速展開への対応力を評価するため、直近の出雲実績・現役選手の出雲経験を25%まで引き上げています。</p></article></div>
  <article class="history-block"><h2>関東10大学 区間予想</h2><p>大学名をクリックすると、登録10名・学年・予想区間を表示します。</p><div class="table-wrap"><table><thead><tr><th>大学</th><th>1区 8.0km</th><th>2区 5.8km</th><th>3区 8.5km</th><th>4区 6.2km</th><th>5区 6.4km</th><th>6区 10.2km</th></tr></thead><tbody>${orderRows}</tbody></table></div></article>
  <article class="data-card"><h2>今回の見直しと注目点</h2><ul>
<li><strong>中央・早稲田を優勝候補に継続：</strong>中央は岡田・藤田・濵口・三宅に栗村を加えたスピードの厚さ、早稲田は山口・鈴木・増子の5000m13分20秒前後の層を評価。吉倉の9月27日ロード5km13分38秒も配置判断の材料にしています。</li>
<li><strong>國學院を5位から3位へ：</strong>直近の出雲経験を再評価。昨年4区で区間新の辻原を1区に置き、野中を3区、髙石を6区に配置する案へ変更。新人を1区に置く前回案より、序盤の経験と終盤の持続力を重視しました。</li>
<li><strong>創価を6位から4位へ：</strong>9月27日ロード5kmの小池13分26秒・ムチーニ13分25秒・織橋13分36秒を評価。小池を6区、ムチーニを3区に据える案を継続。一方、村上の同日トラック5000m13分54秒89も考慮し、序盤の確実性は課題としています。</li>
<li><strong>駒澤の2区を池谷に変更：</strong>9月27日の5000m13分47秒09（PB）を評価。上岡も13分53秒20（PB）を記録しており、短い区間の代替候補。鈴木大翔との最終比較は当日の状態次第です。</li>
<li><strong>日本・帝京の直近ロードも確認：</strong>キップケメイの5km13分15秒、帝京の松尾13分40秒・原13分53秒を参考に、現在の配置を継続。ロード5kmの記録をトラック5000mのPBとして扱うことはしません。</li>
<li><strong>アイビーリーグ選抜は5位へ：</strong>ブランクスらのトラック能力は高く評価しつつ、6名の組合せ・出雲のロード適応に不確実性があるため幅を持って見ています。</li>
</ul><p>上位6チームは区間配置と当日の状態で入れ替わると見ています。7位以下は今回確認した情報だけでは大きく動かす根拠が不足するため、前回の順序を維持。順位は評価軸に沿った編集上の予想で、確定順位や統計的な勝率ではありません。</p>
<h3>確認した情報</h3><ul><li><a href="https://www.izumo-ekiden.jp/runner/index.html" target="_blank" rel="noopener noreferrer">出雲駅伝公式：エントリー・10月5日更新の選手紹介</a></li><li><a href="https://komazawa-ekiden.com/results/" target="_blank" rel="noopener noreferrer">駒澤大学公式：9月27日日体大競技会</a></li><li><a href="https://soka-ekiden.com/play/" target="_blank" rel="noopener noreferrer">創価大学公式：9月27日の日体大・ADIZERO 5K・The Road of WASEDA結果</a></li></ul></article>
<div class="notice"><strong>確認範囲：</strong>2026年10月5日現在公開されている登録情報と、上記で確認できた直近結果を反映。健康状態や未公表の結果は推測していません。区間配置は公式区間エントリーとは別の予想です。登録10名のうち区間未配置の4名も、実際の補欠が確定したことを示すものではありません。</div></section>`;
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
