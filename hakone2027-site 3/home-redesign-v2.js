// ホーム画面を、直前に作成したイラスト系ダッシュボードの雰囲気へ刷新
(() => {
  const teamMeta = {
    '早稲田大学': {short:'早稲田', cls:'waseda', mark:'W'},
    '國學院大學': {short:'國學院', cls:'kokugakuin', mark:'國'},
    '青山学院大学': {short:'青山学院', cls:'aogaku', mark:'青'},
    '中央大学': {short:'中央', cls:'chuo', mark:'C'},
    '駒澤大学': {short:'駒澤', cls:'komazawa', mark:'駒'}
  };

  function realisticRunner(x, y, s, cls, label){
    return `<g class="real-runner ${cls}" transform="translate(${x} ${y}) scale(${s})">
      <ellipse class="rr-shadow" cx="58" cy="213" rx="35" ry="7"/>
      <path class="rr-backleg" d="M58 136 C54 154 42 173 30 193 C27 199 31 204 37 201 C52 182 65 165 72 145Z"/>
      <path class="rr-backshoe" d="M28 191 C21 193 11 196 7 201 C16 205 30 205 39 201Z"/>
      <path class="rr-frontleg" d="M69 136 C78 153 91 169 107 185 C112 190 111 197 104 198 C87 186 70 172 58 151Z"/>
      <path class="rr-frontshoe" d="M103 184 C111 184 121 187 126 193 C120 198 106 200 98 196Z"/>
      <path class="rr-body" d="M42 64 C51 57 67 57 78 65 C83 83 84 103 80 128 C67 137 51 138 39 128 C36 105 37 83 42 64Z"/>
      <path class="rr-shorts" d="M39 124 C50 130 68 131 81 124 L85 145 L67 151 L58 140 L50 151 L31 146Z"/>
      <path class="rr-backarm" d="M42 73 C31 85 21 99 15 114 C13 120 17 123 22 119 C31 107 42 94 51 84Z"/>
      <circle class="rr-backhand" cx="17" cy="117" r="5"/>
      <path class="rr-frontarm" d="M77 74 C89 87 100 99 111 108 C116 112 120 108 116 103 C107 91 94 78 82 68Z"/>
      <circle class="rr-fronthand" cx="114" cy="106" r="5"/>
      <path class="rr-neck" d="M52 60 L54 50 L67 50 L70 62Z"/>
      <ellipse class="rr-face" cx="61" cy="38" rx="16" ry="19"/>
      <path class="rr-hair" d="M45 38 C44 18 55 11 68 15 C77 16 84 25 78 38 C73 30 65 28 56 30 C52 34 49 37 45 38Z"/>
      <path class="rr-hair" d="M49 23 L41 27 L47 31 L40 33 L48 37"/>
      <path class="rr-eye" d="M64 36 l7 -1"/>
      <path class="rr-tasuki" d="M45 64 L53 60 L80 118 L71 123Z"/>
      <rect class="rr-bib" x="45" y="94" width="31" height="20" rx="2"/>
      <text class="rr-bibtext" x="60.5" y="108">${label}</text>
      <g class="rr-detail">${cls==='kokugakuin'?'<path d="M40 68 L46 66 L49 124 L40 128Z"/><path d="M77 67 L72 65 L70 124 L81 128Z"/>':''}${cls==='aogaku'?'<path d="M42 67 L47 65 L49 125 L41 127Z"/><path d="M77 67 L72 65 L70 125 L80 127Z"/>':''}${cls==='chuo'?'<path d="M40 68 L46 66 L49 124 L40 128Z"/><path d="M79 68 L73 66 L70 124 L81 128Z"/>':''}${cls==='komazawa'?'<rect x="40" y="84" width="41" height="18" rx="2"/><text x="60.5" y="97">駒澤大學</text>':''}</g>
    </g>`;
  }

  function runnerScene(){
    return `<svg class="runner-scene" viewBox="0 0 660 270" role="img" aria-label="注目5校の駅伝ランナー">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bce6ff"/><stop offset="1" stop-color="#eef9ff"/></linearGradient>
        <linearGradient id="mount" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8edf8"/><stop offset="1" stop-color="#8fb8d1"/></linearGradient>
      </defs>
      <rect width="660" height="270" fill="url(#sky)"/>
      <circle cx="558" cy="45" r="25" fill="#fff" opacity=".5"/>
      <path d="M0 186 C90 145 155 150 235 181 C314 211 381 188 456 157 C522 129 592 130 660 155 L660 270 L0 270Z" fill="#d2e8f3"/>
      <path d="M27 198 L157 72 L284 198Z" fill="url(#mount)"/>
      <path d="M157 72 L128 112 L152 103 L163 113 L180 102 L194 116Z" fill="#fff"/>
      <path d="M0 230 C110 214 204 219 310 233 C414 246 531 237 660 213 L660 270 L0 270Z" fill="#9bc4d9" opacity=".6"/>
      ${realisticRunner(16,44,.88,'waseda','早稲田')}
      ${realisticRunner(128,38,.93,'kokugakuin','國學院')}
      ${realisticRunner(254,23,1.02,'aogaku','青学')}
      ${realisticRunner(390,31,.98,'chuo','中央')}
      ${realisticRunner(516,27,1.00,'komazawa','駒澤')}
    </svg>`;
  }

  function rankingRows(){
    return teams.slice().sort((a,b)=>(b.score||0)-(a.score||0)).map((t,i)=>{
      const meta=teamMeta[t.name] || {cls:'other',mark:'•'};
      const score=Number.isFinite(Number(t.score)) ? Number(t.score) : 0;
      return `<div class="home-rank-row ${meta.cls}">
        <div class="home-rank-no">${i+1}</div>
        <div class="home-rank-team"><span class="home-rank-mark">${meta.mark}</span><strong>${t.name}</strong></div>
        <div class="home-rank-meter"><span style="width:${Math.max(8,Math.min(100,score))}%"></span></div>
        <div class="home-rank-pct">${score.toFixed(1)}点</div>
      </div>`;
    }).join('');
  }

  function featuredCards(){
    return teams.filter(t=>teamMeta[t.name]).slice(0,5).map(t=>{
      const m=teamMeta[t.name];
      return `<article class="featured-school ${m.cls}" data-route="teams">
        <div class="featured-school-head"><span class="featured-school-mark">${m.mark}</span><h3>${t.name}</h3></div>
        <p>${t.note}</p>
        <div class="featured-school-tags">${t.tags.slice(0,2).map(x=>`<span>${x}</span>`).join('')}</div>
        <button data-route="teams">詳細を見る</button>
      </article>`;
    }).join('');
  }

  homeTemplate = function(){
    return `<section class="home-v2 container">
      <div class="home-v2-main">
        <section class="home-v2-hero">
          <div class="home-v2-hero-copy">
            <div class="home-v2-kicker">HAKONE EKIDEN 2027 • DATA PREDICTION</div>
            <h1>想いを襷に、未来をつなぐ。</h1>
            <h2>その一歩が、歴史をつくる。</h2>
            <p>過去10年の三大駅伝実績と最新の選手データをもとに、箱根駅伝2027の展開と優勝争いを読み解く。</p>
          </div>
          <div class="home-v2-art">${runnerScene()}</div>
        </section>

        <section class="featured-panel">
          <div class="section-heading"><div><span>★</span><h2>注目5校</h2></div><button data-route="teams">大学データを見る</button></div>
          <div class="featured-grid">${featuredCards()}</div>
        </section>

        <section class="data-status-panel">
          <div class="section-heading"><div><span>▦</span><h2>データ更新状況</h2></div></div>
          <div class="data-status-grid">
            <div class="status-card"><span>👤</span><div><small>選手データ</small><strong>現役5校を精査中</strong><em>10000m・ハーフPB</em></div></div>
            <div class="status-card"><span>🏆</span><div><small>大会データ</small><strong>過去10年分</strong><em>箱根・出雲・全日本</em></div></div>
            <div class="status-card"><span>〽</span><div><small>区間データ</small><strong>2017–2026</strong><em>サイト内DB化を順次進行</em></div></div>
            <div class="status-card next-update"><span>▣</span><div><small>予想モデル</small><strong>v0.9</strong><em>100点満点の総合戦力点</em></div></div>
          </div>
        </section>
      </div>

      <aside class="home-v2-side">
        <section class="prediction-card">
          <div class="prediction-head"><h2>🏆 総合戦力ランキング</h2><span>予想モデル v0.9</span></div>
          <div class="prediction-body">${rankingRows()}</div>
          <button class="prediction-more" data-route="prediction">詳細な戦力データを見る →</button>
        </section>

        <section class="home-news-card">
          <div class="section-heading compact"><div><span>▣</span><h2>最新アップデート</h2></div></div>
          <div class="home-news-list">
            <div><time>2026.08.28</time><span>NEW</span><strong>優勝予想表示を総合戦力点へ修正</strong></div>
            <div><time>2026.08.27</time><span>NEW</span><strong>ホームデザインを刷新</strong></div>
            <div><time>2026.08.27</time><span>NEW</span><strong>予想モデルをv0.9へ更新</strong></div>
            <div><time>2026.08</time><span>DATA</span><strong>現役選手PBデータを更新</strong></div>
          </div>
        </section>

        <section class="databook-card" data-route="history">
          <div><small>HAKONE EKIDEN 2027</small><h2>箱根駅伝<br>データブック</h2><strong>過去10年 × 選手 × 区間</strong><button data-route="history">データを見る →</button></div>
          <div class="book-icon"><span>2027</span><b>DATA</b></div>
        </section>
      </aside>
    </section>`;
  };

  if(typeof templates!=='undefined') templates.home=homeTemplate;
  if((location.hash.replace('#','')||'home')==='home' && typeof render==='function') render('home');
})();
