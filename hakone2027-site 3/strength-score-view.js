// 2026-08-27: 優勝確率表示をやめ、総合戦力点（100点満点）で順位表示する。
// 点数は既存v0.7の評価軸をそのまま合算した総合点。Softmaxによる確率変換は表示に使わない。

rankList = function(limit=teams.length){
  const rows=teams.slice(0,limit).sort((a,b)=>b.score-a.score);
  return rows.map((t,i)=>{
    const v=(typeof teamVisuals2027!=='undefined' && teamVisuals2027[t.name]) || {gauge:'#2878c8'};
    return `<div class="rank-item" data-team="${t.name}">
      <div class="rank-number">${i+1}</div>
      <div>
        <div class="team-name-with-icon">${typeof teamIconHtml==='function'?teamIconHtml(t.name):''}<span class="team-name">${t.name}</span></div>
        <div class="bar"><span style="width:${Math.max(8,Math.min(100,t.score))}%;background-color:${v.gauge};background-image:none;"></span></div>
      </div>
      <div class="percent strength-score">${t.score}<small>点</small></div>
    </div>`;
  }).join('');
};

function strengthPredictionTemplate(){
  return `<section class="container page">
    <div class="page-header">
      <h1>2027 箱根駅伝 戦力ランキング</h1>
      <p>2026年8月27日時点。各大学を100点満点の総合戦力点で比較し、点数の高い順に掲載しています。確率ではないため、大学間の実力差をそのまま見比べやすい表示です。</p>
    </div>
    <div class="prediction-layout">
      <article class="panel">
        <div class="panel-title dark"><h3>総合戦力ランキング v0.8</h3></div>
        <div class="panel-body"><div class="rank-list">${rankList()}</div></div>
      </article>
      <article class="data-card"><h3>戦力点の評価軸</h3><div class="weight-list">
        <div><span>2026箱根・継続選手の区間実績</span><strong>32点</strong></div>
        <div><span>2025出雲＋全日本（プログラム力）</span><strong>13点</strong></div>
        <div><span>5000m PB層</span><strong>9点</strong></div>
        <div><span>10000m PB層</span><strong>17点</strong></div>
        <div><span>ハーフPB層</span><strong>21点</strong></div>
        <div><span>現1年生・2025全国高校駅伝</span><strong>8点</strong></div>
      </div></article>
    </div>
    <div class="notice"><strong>戦力点の見方:</strong> 100点満点の相対的な戦力評価です。2026箱根は2027年大会にも出走可能な継続選手の区間成績だけを採用し、卒業・離籍選手の実績は除外しています。新1年生は2025全国高校駅伝の実績を8点分の補助評価として加えています。</div>
  </section>`;
}

if (typeof templates!=='undefined') templates.prediction=strengthPredictionTemplate;

(function(){
  const style=document.createElement('style');
  style.textContent=`.strength-score{white-space:nowrap}.strength-score small{font-size:.62em;margin-left:2px;font-weight:700}`;
  document.head.appendChild(style);
})();

// ホームの既存見出し「優勝確率」を「総合戦力点」に置き換える。
function patchStrengthLabels(){
  document.querySelectorAll('.panel-title h3').forEach(el=>{
    if(el.textContent.includes('優勝確率')) el.textContent=el.textContent.replace(/優勝確率\s*試算?/,'総合戦力点');
  });
  document.querySelectorAll('.quick-card strong').forEach(el=>{
    if(el.textContent.includes('2027 優勝予想')) el.textContent='2027 戦力ランキング';
  });
}

const renderBeforeStrengthScore=render;
render=function(route='home'){
  renderBeforeStrengthScore(route);
  patchStrengthLabels();
};

render(location.hash.replace('#','')||'home');
