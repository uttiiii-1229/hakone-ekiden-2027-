// 2026-08-27 v0.9
// ① PBの極端なmin-max差を圧縮
// ② 優勝確率へのSoftmax変換は使わず、100点満点の戦力点で比較
// ③ 箱根経験・山適性を独立評価として追加

function clampScore(v,min=0,max=100){return Math.max(min,Math.min(max,v));}

// PBは9校内の最速=100/最遅=0ではなく、箱根上位校の実用レンジを基準に緩やかに採点。
function benchmarkPBScore(sec, elite, standard){
  if(sec===null || !Number.isFinite(sec)) return 62;
  // elite以上でも100点、standard以下でも55点。差を45点幅に圧縮して過大評価を防ぐ。
  const score=55 + ((standard-sec)/(standard-elite))*45;
  return clampScore(score,55,100);
}

function hakoneExperienceMountainScore(teamName){
  const m=hakone2026RetainedMetrics(teamName);
  const kept=(m.runs||[]).filter(r=>r.retained);
  const retainedCountScore=clampScore((m.retained/10)*100,0,100);

  // 5・6区の継続選手がいれば実際の区間順位を山適性として評価。
  const mountain=kept.filter(r=>r.section===5 || r.section===6);
  let mountainScore=50; // 継続山経験がない場合は中立点。ゼロ扱いにはしない。
  if(mountain.length){
    mountainScore=mountain.reduce((sum,r)=>sum+clampScore(105-r.rank*5,5,100),0)/mountain.length;
  }

  // 箱根経験の厚み60%、山経験40%。
  const total=retainedCountScore*0.60 + mountainScore*0.40;
  return {score:total,retainedCountScore,mountainScore,retained:m.retained,totalRunners:m.total};
}

function recalcStrengthV09(){
  const names=Object.keys(teamVisuals2027);
  return names.map(name=>{
    const retained=hakone2026RetainedMetrics(name);
    const expMountain=hakoneExperienceMountainScore(name);
    const avg5=averagePB(name,2,'track');
    const avg10=averagePB(name,3,'track');
    const avgHalf=averagePB(name,4,'half');

    // 上位10名平均を想定した基準。旧min-maxより学校間の差を圧縮する。
    const s5=benchmarkPBScore(avg5,810,855);       // 13:30〜14:15
    const s10=benchmarkPBScore(avg10,1680,1770);   // 28:00〜29:30
    const sh=benchmarkPBScore(avgHalf,3690,3840);  // 61:30〜64:00
    const freshman=(freshmanHighSchoolEkidenScore2025[name]||50);
    const program=(programRaceScore2025[name]||50);

    // 合計100点。
    const total=
      retained.score*0.25 +       // 2026箱根・継続選手の区間実績
      expMountain.score*0.15 +    // 箱根経験の厚み + 5/6区山適性
      program*0.10 +              // 2025出雲・全日本のプログラム力
      s5*0.08 +                   // 5000m
      s10*0.15 +                  // 10000m
      sh*0.20 +                   // ハーフ
      freshman*0.07;              // 現1年生・2025全国高校駅伝

    return {name,total,retained,expMountain,s5,s10,sh,freshman,program};
  }).sort((a,b)=>b.total-a.total);
}

const strengthModelV09=recalcStrengthV09();
const prevTeamMapV09=new Map(teams.map(t=>[t.name,t]));
teams.splice(0,teams.length,...strengthModelV09.map((x,i)=>{
  const old=prevTeamMapV09.get(x.name)||{};
  return {
    ...old,
    name:x.name,
    score:Number(x.total.toFixed(1)),
    chance:undefined,
    note:`継続箱根${x.retained.retained}/${x.retained.total}名、箱根経験・山適性${x.expMountain.score.toFixed(1)}点。PBは極端な相対評価をやめ、基準タイム方式で圧縮評価。`,
    tags:[`箱根継続${x.retained.retained}名`,`山/経験 ${x.expMountain.score.toFixed(0)}`,i<3?'優勝候補':'上位候補']
  };
}));

// 戦力点表示。既存の大学色・アイコンをそのまま使用。
rankList=function(limit=teams.length){
  const rows=teams.slice(0,limit).sort((a,b)=>b.score-a.score);
  return rows.map((t,i)=>{
    const v=(typeof teamVisuals2027!=='undefined'&&teamVisuals2027[t.name])||{gauge:'#2878c8'};
    return `<div class="rank-item" data-team="${t.name}">
      <div class="rank-number">${i+1}</div>
      <div>
        <div class="team-name-with-icon">${typeof teamIconHtml==='function'?teamIconHtml(t.name):''}<span class="team-name">${t.name}</span></div>
        <div class="bar"><span style="width:${Math.max(8,Math.min(100,t.score))}%;background-color:${v.gauge};background-image:none;"></span></div>
      </div>
      <div class="percent strength-score">${t.score.toFixed(1)}<small>点</small></div>
    </div>`;
  }).join('');
};

function strengthPredictionTemplateV09(){
  return `<section class="container page">
    <div class="page-header">
      <h1>2027 箱根駅伝 戦力ランキング</h1>
      <p>2026年8月27日時点。PB評価の極端な差を抑え、2026箱根の継続選手実績に加えて「箱根経験の厚み」と「5・6区の山適性」を独立評価した100点満点の戦力ランキングです。</p>
    </div>
    <div class="prediction-layout">
      <article class="panel"><div class="panel-title dark"><h3>総合戦力ランキング v0.9</h3></div><div class="panel-body"><div class="rank-list">${rankList()}</div></div></article>
      <article class="data-card"><h3>戦力点の評価軸</h3><div class="weight-list">
        <div><span>2026箱根・継続選手の区間実績</span><strong>25点</strong></div>
        <div><span>箱根経験の厚み＋5・6区の山適性</span><strong>15点</strong></div>
        <div><span>2025出雲＋全日本（プログラム力）</span><strong>10点</strong></div>
        <div><span>5000m PB層</span><strong>8点</strong></div>
        <div><span>10000m PB層</span><strong>15点</strong></div>
        <div><span>ハーフPB層</span><strong>20点</strong></div>
        <div><span>現1年生・2025全国高校駅伝</span><strong>7点</strong></div>
      </div></article>
    </div>
    <div class="notice"><strong>v0.9の変更点:</strong> PBは9校内の最速・最遅を0〜100へ引き伸ばす方式をやめ、上位校の実用的な基準タイム帯で55〜100点に圧縮しました。また、2026箱根の継続出走者数と、継続する5・6区経験者の区間順位から「箱根経験・山適性」を15点分追加しています。卒業・離籍選手は2026箱根の継続評価には入りません。</div>
  </section>`;
}
if(typeof templates!=='undefined') templates.prediction=strengthPredictionTemplateV09;

// ホーム側の表示も新しい点数・順序へ更新。
render(location.hash.replace('#','')||'home');
