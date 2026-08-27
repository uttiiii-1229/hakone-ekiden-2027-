// 2026-08-27 襷カラー対応 + 2026箱根「継続選手のみ」評価モデル
// 2026箱根の生の総合順位は予想点に直接入れない。
// 第103回（2027年1月）に出走可能な2026箱根出走者だけを抽出し、その区間順位を評価する。

const teamVisuals2027 = {
  '青山学院大学': { sash:'フレッシュグリーン', gauge:'#25a56a', icon:'青', iconBg:'#25a56a', iconFg:'#fff' },
  '國學院大學': { sash:'古代紫（赤紫）', gauge:'#8e2b68', icon:'國', iconBg:'#8e2b68', iconFg:'#fff' },
  '中央大学': { sash:'真紅', gauge:'#c8102e', icon:'C', iconBg:'#c8102e', iconFg:'#fff' },
  '早稲田大学': { sash:'臙脂', gauge:'#8b1e3f', icon:'早', iconBg:'#8b1e3f', iconFg:'#fff' },
  '駒澤大学': { sash:'藤色', gauge:'#8f82bc', icon:'駒', iconBg:'#8f82bc', iconFg:'#fff' },
  '順天堂大学': { sash:'白地に赤ライン', gauge:'linear-gradient(90deg,#ffffff 0 40%,#d71920 40% 60%,#ffffff 60% 100%)', icon:'順', iconBg:'linear-gradient(135deg,#fff 0 43%,#d71920 43% 57%,#fff 57%)', iconFg:'#173250', iconBorder:'#d71920' },
  '創価大学': { sash:'赤・青ストライプ', gauge:'linear-gradient(90deg,#d71920 0 50%,#174ea6 50% 100%)', icon:'創', iconBg:'linear-gradient(135deg,#d71920 0 50%,#174ea6 50% 100%)', iconFg:'#fff' },
  '帝京大学': { sash:'ファイアーレッド', gauge:'#e43d30', icon:'帝', iconBg:'#e43d30', iconFg:'#fff' },
  '城西大学': { sash:'黄色', gauge:'#f1c40f', icon:'城', iconBg:'#f1c40f', iconFg:'#173250' }
};

function normalizeRunnerName(name){
  return String(name||'')
    .replace(/\s+/g,'')
    .replace(/髙/g,'高')
    .replace(/﨑/g,'崎')
    .replace(/廣/g,'広')
    .replace(/邊/g,'辺');
}

function eligibleNameSet(teamName){
  const rows = (typeof fullRosterData !== 'undefined' && fullRosterData[teamName]) || [];
  return new Set(rows.map(r=>normalizeRunnerName(r[0])));
}

function hakone2026RetainedMetrics(teamName){
  const eligible = eligibleNameSet(teamName);
  const runs=[];
  if (typeof hakone2026SectionDB === 'undefined') return {retained:0,total:0,score:0,runs:[]};
  Object.keys(hakone2026SectionDB).forEach(section=>{
    (hakone2026SectionDB[section]||[]).forEach(row=>{
      if (row[2]!==teamName || typeof row[0] !== 'number') return;
      const retained = eligible.has(normalizeRunnerName(row[3]));
      runs.push({section:Number(section),rank:Number(row[0]),name:row[3],retained});
    });
  });
  const kept=runs.filter(x=>x.retained);
  // 1位=100, 20位=5。卒業・離籍選手は0点で、2027への継続戦力としては加点しない。
  const raw=kept.reduce((sum,x)=>sum+Math.max(5,105-x.rank*5),0);
  const score=runs.length ? raw/runs.length : 0;
  return {retained:kept.length,total:runs.length,score,runs};
}

function secondsForPB(value, distance){
  if (!value || value==='—') return null;
  const p=String(value).split(':').map(Number);
  if (p.some(Number.isNaN)) return null;
  if (distance==='half') return p.length===3 ? p[0]*3600+p[1]*60+p[2] : p[0]*60+p[1];
  return p.length===2 ? p[0]*60+p[1] : p[p.length-2]*60+p[p.length-1];
}

function averagePB(teamName,index,distance){
  const rows=(typeof expandedTopAthletes2027!=='undefined' && expandedTopAthletes2027[teamName])||[];
  const vals=rows.map(r=>secondsForPB(r[index],distance)).filter(v=>v!==null);
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}

const programRaceScore2025 = {
  // 2025出雲・全日本は「チーム/プログラム力」の補助指標。個人継続実績とは分離して低ウェイト化。
  '國學院大學':96,'駒澤大学':96,'中央大学':91,'青山学院大学':87,'早稲田大学':86,
  '創価大学':73,'帝京大学':70,'順天堂大学':66,'城西大学':63
};

function minMaxScore(value, min, max, lowerIsBetter=true){
  if (value===null || !Number.isFinite(value) || min===max) return 50;
  const t=(value-min)/(max-min);
  return Math.max(0,Math.min(100,(lowerIsBetter ? 1-t : t)*100));
}

function recalcPrediction2027(){
  const names=Object.keys(teamVisuals2027);
  const pb={};
  names.forEach(name=>{
    pb[name]={
      m5:averagePB(name,2,'track'),
      m10:averagePB(name,3,'track'),
      half:averagePB(name,4,'half'),
      retained:hakone2026RetainedMetrics(name)
    };
  });
  const ranges={};
  ['m5','m10','half'].forEach(k=>{
    const vals=names.map(n=>pb[n][k]).filter(v=>v!==null);
    ranges[k]=[Math.min(...vals),Math.max(...vals)];
  });
  const computed=names.map(name=>{
    const p=pb[name];
    const s5=minMaxScore(p.m5,...ranges.m5);
    const s10=minMaxScore(p.m10,...ranges.m10);
    const sh=minMaxScore(p.half,...ranges.half);
    // 2026箱根は「総合5位なら○点」のようには使わず、2027にも残る実走者の区間成績だけを35%評価。
    const total=p.retained.score*0.35 + (programRaceScore2025[name]||50)*0.15 + s5*0.10 + s10*0.18 + sh*0.22;
    return {name,total,metrics:p};
  }).sort((a,b)=>b.total-a.total);
  const exp=computed.map(x=>Math.exp((x.total-80)/10));
  const sum=exp.reduce((a,b)=>a+b,0);
  computed.forEach((x,i)=>x.chance=exp[i]/sum*100);
  return computed;
}

const retainedModel2027 = recalcPrediction2027();
const oldTeamMap = new Map(teams.map(t=>[t.name,t]));
teams.splice(0,teams.length,...retainedModel2027.map((x,i)=>{
  const old=oldTeamMap.get(x.name)||{};
  return {
    ...old,
    name:x.name,
    chance:Number(x.chance.toFixed(1)),
    score:Math.round(x.total),
    note:`2026箱根の継続出走者 ${x.metrics.retained.retained}/${x.metrics.retained.total}名を個人区間成績として評価。卒業・離籍選手の区間実績は2027予想点から除外。`,
    tags:[`継続${x.metrics.retained.retained}名`,`襷:${teamVisuals2027[x.name].sash}`,i<3?'優勝候補':'上位候補']
  };
}));

function teamIconHtml(name){
  const v=teamVisuals2027[name]||{icon:name.slice(0,1),iconBg:'#49657f',iconFg:'#fff'};
  const border=v.iconBorder?`border:2px solid ${v.iconBorder};`:'';
  return `<span class="rank-team-icon" style="background:${v.iconBg};color:${v.iconFg};${border}">${v.icon}</span>`;
}

// 全ランキング画面で襷色ゲージとオリジナル識別アイコンを使う。
rankList = function(limit=teams.length){
  const rows=teams.slice(0,limit);
  return rows.map((t,i)=>{
    const v=teamVisuals2027[t.name]||{gauge:'#2878c8'};
    return `<div class="rank-item" data-team="${t.name}">
      <div class="rank-number">${i+1}</div>
      <div>
        <div class="team-name-with-icon">${teamIconHtml(t.name)}<span class="team-name">${t.name}</span></div>
        <div class="bar"><span style="width:${Math.max(8,t.score)}%;background:${v.gauge}"></span></div>
      </div>
      <div class="percent">${t.chance.toFixed(1)}%</div>
    </div>`;
  }).join('');
};

(function addTeamVisualCss(){
  const style=document.createElement('style');
  style.textContent=`
    .team-name-with-icon{display:flex;align-items:center;gap:8px;margin-bottom:6px}
    .team-name-with-icon .team-name{margin:0}
    .rank-team-icon{width:25px;height:25px;flex:0 0 25px;border-radius:8px;display:inline-grid;place-items:center;font-size:12px;font-weight:900;box-shadow:0 2px 7px rgba(20,45,70,.13)}
    .rank-item .bar{background:#edf2f6;border:1px solid rgba(30,60,90,.06)}
    .rank-item .bar>span{box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}
  `;
  document.head.appendChild(style);
})();

// 予想ページも新モデル説明へ更新。
function retainedPredictionTemplate(){
  return `<section class="container page">
    <div class="page-header"><h1>2027 箱根駅伝予想</h1><p>2026年8月27日時点。2026箱根は「2027にも残る実走者の区間成績」に分解し、卒業・離籍選手の実績を除外して再計算しています。</p></div>
    <div class="prediction-layout">
      <article class="panel"><div class="panel-title dark"><h3>優勝確率 試算 v0.6</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div></div></article>
      <article class="data-card"><h3>評価軸</h3><div class="weight-list">
        <div><span>2026箱根・継続選手の区間実績</span><strong>35%</strong></div>
        <div><span>2025出雲＋全日本（プログラム力）</span><strong>15%</strong></div>
        <div><span>5000m PB層</span><strong>10%</strong></div>
        <div><span>10000m PB層</span><strong>18%</strong></div>
        <div><span>ハーフPB層</span><strong>22%</strong></div>
      </div></article>
    </div>
    <div class="notice"><strong>卒業選手の扱い:</strong> 2026箱根を走っていても、2026年度の現役名簿にいない選手は「継続選手の区間実績」35%には一切加点しません。したがって2026箱根の生の総合順位そのものは予想点に直接使用していません。</div>
  </section>`;
}
if (typeof templates!=='undefined') templates.prediction=retainedPredictionTemplate;

// 最終スクリプトとして読み込まれた時点の画面を再描画。
render(location.hash.replace('#','')||'home');
