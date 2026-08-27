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
function predictionTemplate(){return `<section class="container page"><div class="page-header"><h1>2027 箱根駅伝予想</h1><p>2026年8月時点の試算。今後の出雲・全日本・記録会で随時更新します。</p></div><div class="prediction-layout"><article class="panel"><div class="panel-title dark"><h3>優勝確率 試算 v0.3</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div></div></article><article class="data-card"><h3>現在の評価軸</h3><div class="weight-list"><div><span>2026箱根実績</span><strong>30%</strong></div><div><span>直近の全日本・出雲</span><strong>25%</strong></div><div><span>5000m PB層</span><strong>10%</strong></div><div><span>10000m PB層</span><strong>15%</strong></div><div><span>ハーフPB層</span><strong>15%</strong></div><div><span>箱根適性・駅伝実績</span><strong>5%</strong></div></div></article></div><div class="notice"><strong>重要:</strong> 2026年度4年生は第103回箱根駅伝に出場可能なため戦力に含めています。2025年度4年生など、すでに卒業した選手は除外します。</div></section>`}
function aboutTemplate(){return `<section class="container page"><div class="page-header"><h1>データと予想方法</h1><p>駅伝実績に加え、5000m・10000m・ハーフマラソンを分けて評価します。</p></div><div class="data-grid"><article class="data-card"><h3>三大駅伝</h3><p>箱根・出雲・全日本の過去10年を公式記録で照合し、特に直近大会を重く評価します。</p></article><article class="data-card"><h3>選手PB</h3><p>5000mのスピード、10000mの持続力、ハーフのロード適性を総合して各校10名を抜粋します。</p></article><article class="data-card"><h3>学年・出場資格</h3><p>第103回大会時点で出場可能な選手を対象にします。2026年度4年生は対象、すでに卒業した選手は除外します。</p></article></div></section>`}
const templates={home:homeTemplate,teams:teamsTemplate,history:historyTemplate,prediction:predictionTemplate,about:aboutTemplate};
function startCountdown(){clearInterval(countdownTimer);const el=document.querySelector('#countdown');if(!el)return;const target=new Date('2027-01-02T08:00:00+09:00');const render=()=>{const diff=Math.max(0,target-new Date());const days=Math.floor(diff/86400000),hours=Math.floor(diff/3600000)%24,mins=Math.floor(diff/60000)%60,secs=Math.floor(diff/1000)%60;el.innerHTML=[[days,'日'],[hours,'時間'],[mins,'分'],[secs,'秒']].map(([n,l])=>`<div class="time-box"><strong>${String(n).padStart(2,'0')}</strong><small>${l}</small></div>`).join('')};render();countdownTimer=setInterval(render,1000)}
function render(route='home'){const tpl=templates[route]||homeTemplate;app.innerHTML=tpl();document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.route===route));nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});if(route==='home')startCountdown();else clearInterval(countdownTimer)}
document.addEventListener('click',e=>{const target=e.target.closest('[data-route]');if(target)render(target.dataset.route)});menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});render(location.hash.replace('#','')||'home');