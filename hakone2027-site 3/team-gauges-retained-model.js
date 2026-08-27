// 2026-08-27 襷カラー対応 + 継続選手評価 + 新1年生高校駅伝補正
// 2026箱根の生の総合順位は予想点に直接入れない。
// 第103回（2027年1月）に出走可能な2026箱根出走者だけを抽出し、その区間順位を評価する。
// さらに現1年生について、2025全国高校駅伝の確認済み区間実績を小さく加味する。

const teamVisuals2027 = {
  '青山学院大学': { sash:'フレッシュグリーン', gauge:'#25a56a', icon:'青', iconBg:'#25a56a', iconFg:'#fff' },
  '國學院大學': { sash:'古代紫（赤紫）', gauge:'#8e2b68', icon:'國', iconBg:'#8e2b68', iconFg:'#fff' },
  '中央大学': { sash:'真紅', gauge:'#c8102e', icon:'C', iconBg:'#c8102e', iconFg:'#fff' },
  '早稲田大学': { sash:'臙脂', gauge:'#8b1e3f', icon:'早', iconBg:'#8b1e3f', iconFg:'#fff' },
  '駒澤大学': { sash:'藤色', gauge:'#8f82bc', icon:'駒', iconBg:'#8f82bc', iconFg:'#fff' },
  // 順天堂はユーザー指定により襷色ではなく「茄子紺」を採用
  '順天堂大学': { sash:'茄子紺', gauge:'#342b4f', icon:'順', iconBg:'#342b4f', iconFg:'#fff' },
  // 創価は赤青襷だが、ゲージ視認性を優先して単色の青を採用
  '創価大学': { sash:'赤・青襷（表示色:青）', gauge:'#174ea6', icon:'創', iconBg:'#174ea6', iconFg:'#fff' },
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

// 現1年生（2026年度入学）の2025全国高校駅伝実績を補助評価。
// 区間上位ほど高評価。全国高校駅伝に出走していない/確認未了の選手がいるため、
// チーム全体を過度に下げないよう50点を中立値として、確認済み実績を中心に手動補正している。
// 特に確認できた例:
// 早稲田: 増子陽太 1区1位、新妻遼己 1区2位、本田桜二郎 1区3位、上杉敦史 1区14位。
// 中央: 栗村凌 3区1位、末田唯久海 5区3位、簡子傑 2区4位など。
// 青学: 斎藤晴樹 5区1位、大竹実吹 6区4位など。
const freshmanHighSchoolEkidenScore2025 = {
  '早稲田大学':100,
  '中央大学':95,
  '青山学院大学':88,
  '國學院大學':79,
  '駒澤大学':76,
  '順天堂大学':72,
  '創価大学':70,
  '城西大学':67,
  '帝京大学':65
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
      retained:hakone2026RetainedMetrics(name),
      freshman:freshmanHighSchoolEkidenScore2025[name] || 50
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
    // v0.7: 新1年生の高校駅伝を8%追加。その分、前年箱根・チーム実績・PBの比率を少しずつ調整。
    const total=
      p.retained.score*0.32 +
      (programRaceScore2025[name]||50)*0.13 +
      s5*0.09 +
      s10*0.17 +
      sh*0.21 +
      p.freshman*0.08;
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
    note:`2026箱根の継続出走者 ${x.metrics.retained.retained}/${x.metrics.retained.total}名の区間成績に加え、現1年生の2025全国高校駅伝実績も8%反映。`,
    tags:[`継続${x.metrics.retained.retained}名`,`新1年:${x.metrics.freshman}点`,i<3?'優勝候補':'上位候補']
  };
}));

function teamIconHtml(name){
  const v=teamVisuals2027[name]||{icon:name.slice(0,1),iconBg:'#49657f',iconFg:'#fff'};
  return `<span class="rank-team-icon" style="background:${v.iconBg};color:${v.iconFg};">${v.icon}</span>`;
}

// 全ランキング画面で単色ゲージとオリジナル識別アイコンを使う。
rankList = function(limit=teams.length){
  const rows=teams.slice(0,limit);
  return rows.map((t,i)=>{
    const v=teamVisuals2027[t.name]||{gauge:'#2878c8'};
    return `<div class="rank-item" data-team="${t.name}">
      <div class="rank-number">${i+1}</div>
      <div>
        <div class="team-name-with-icon">${teamIconHtml(t.name)}<span class="team-name">${t.name}</span></div>
        <div class="bar"><span style="width:${Math.max(8,t.score)}%;background-color:${v.gauge};background-image:none;"></span></div>
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
    .rank-item .bar>span{box-shadow:inset 0 0 0 1px rgba(0,0,0,.06);background-image:none!important}
  `;
  document.head.appendChild(style);
})();

function retainedPredictionTemplate(){
  return `<section class="container page">
    <div class="page-header"><h1>2027 箱根駅伝予想</h1><p>2026年8月27日時点。2026箱根は2027にも残る実走者だけを評価し、新1年生には2025全国高校駅伝の実績を補助要素として追加しています。</p></div>
    <div class="prediction-layout">
      <article class="panel"><div class="panel-title dark"><h3>優勝確率 試算 v0.7</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div></div></article>
      <article class="data-card"><h3>評価軸</h3><div class="weight-list">
        <div><span>2026箱根・継続選手の区間実績</span><strong>32%</strong></div>
        <div><span>2025出雲＋全日本（プログラム力）</span><strong>13%</strong></div>
        <div><span>5000m PB層</span><strong>9%</strong></div>
        <div><span>10000m PB層</span><strong>17%</strong></div>
        <div><span>ハーフPB層</span><strong>21%</strong></div>
        <div><span>現1年生・2025全国高校駅伝</span><strong>8%</strong></div>
      </div></article>
    </div>
    <div class="notice"><strong>新1年生の扱い:</strong> 2026箱根にはまだ大学生として出ていないため、2025全国高校駅伝で確認できた区間順位を8%の補助評価として追加しました。高校駅伝の出走確認がない選手を理由に大学全体を大きく減点しないよう、中立値を設けています。<br><br><strong>卒業選手の扱い:</strong> 2026箱根を走っていても、2026年度の現役名簿にいない選手は「継続選手の区間実績」には一切加点しません。</div>
  </section>`;
}
if (typeof templates!=='undefined') templates.prediction=retainedPredictionTemplate;

render(location.hash.replace('#','')||'home');
