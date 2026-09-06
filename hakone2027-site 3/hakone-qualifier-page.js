// Hakone qualifier historical database + 2027 qualifier prediction
(() => {
  const qualifierState={year:2025,openTeam:null};
  const years=Array.from({length:26},(_,i)=>2025-i);
  const normalizeTeam=s=>String(s||'').replace('國學院大学','國學院大學').trim();
  const predicted=[
    {rank:1,team:'中央学院大学',chance:96,note:'2026箱根11位。前回予選会1位で層の安定感を最上位評価。'},
    {rank:2,team:'東海大学',chance:94,note:'2026箱根12位。前回予選会5位で上位通過圏を維持。'},
    {rank:3,team:'神奈川大学',chance:91,note:'2026箱根13位。前回予選会7位、ロード型の層を評価。'},
    {rank:4,team:'東洋大学',chance:89,note:'2026箱根14位。本戦経験値が高く、予選会では上位候補。'},
    {rank:5,team:'日本体育大学',chance:87,note:'2026箱根15位。前回予選会9位、予選会への対応力を評価。'},
    {rank:6,team:'東京国際大学',chance:84,note:'2026箱根16位。留学生を含む上位層の走力を評価。'},
    {rank:7,team:'山梨学院大学',chance:82,note:'2026箱根17位。前回予選会3位でハーフ適性が高い。'},
    {rank:8,team:'東京農業大学',chance:76,note:'2026箱根18位。前回予選会6位、10人のまとめる力を評価。'},
    {rank:9,team:'大東文化大学',chance:72,note:'2026箱根19位。前回予選会8位で通過実績を評価。'},
    {rank:10,team:'立教大学',chance:62,note:'2026箱根20位。前回予選会10位でボーダー上だが経験を評価。'}
  ];
  const bubble=[
    {team:'法政大学',chance:58,note:'前回予選会11位、立教との差17秒。最大のボーダー候補。'},
    {team:'明治大学',chance:44,note:'前回予選会12位。PB更新が進めば通過圏に入る余地。'},
    {team:'専修大学',chance:37,note:'前回予選会13位。上位10名の底上げが鍵。'}
  ];

  function data(year){return window.hakoneQualifierDB?.years?.[year]||null;}
  function teamIndividuals(year,team){
    const d=data(year); if(!d)return [];
    return (d.individuals||[]).filter(x=>normalizeTeam(x.team)===normalizeTeam(team)).sort((a,b)=>a.rank-b.rank);
  }
  function teamDetail(year,team){
    const rows=teamIndividuals(year,team);
    if(!rows.length)return '<div class="notice qualifier-team-empty">個人成績は現在バックフィル中です。確認できた年度から順次追加しています。</div>';
    return `<div class="qualifier-team-detail"><h3>${team} 個人成績</h3><div class="table-wrap"><table><thead><tr><th>個人順位</th><th>選手</th><th>学年</th><th>記録</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.rank}</strong></td><td><strong>${r.name}</strong></td><td>${r.grade||'—'}</td><td>${r.time||'—'}</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function result(year){
    const d=data(year);
    if(!d)return `<div class="notice"><strong>${year}年:</strong> データ取得中です。公式・公開アーカイブを照合しながら順次反映します。</div>`;
    const teams=d.teams||[];
    return `<div class="race-page-summary"><div class="race-summary-card"><small>開催年</small><strong>${year}年</strong></div><div class="race-summary-card"><small>対象箱根</small><strong>第${d.hakoneEdition||year-1923}回</strong></div><div class="race-summary-card"><small>参加チーム</small><strong>${teams.length||'—'}</strong></div><div class="race-summary-card"><small>通過校</small><strong>上位10校</strong></div></div>
      <div class="table-wrap qualifier-team-table"><table><thead><tr><th>順位</th><th>大学</th><th>合計タイム</th><th>結果</th></tr></thead><tbody>
      ${teams.map(t=>`<tr><td><strong>${t.rank}</strong></td><td><button class="qualifier-team-button" data-qualifier-team="${String(t.team).replace(/"/g,'&quot;')}">${t.team}</button></td><td>${t.time||'—'}</td><td>${t.rank<=10?'<span class="qualifier-pass">通過</span>':'—'}</td></tr><tr class="qualifier-team-detail-row" data-qualifier-detail="${String(t.team).replace(/"/g,'&quot;')}" hidden><td colspan="4">${teamDetail(year,t.team)}</td></tr>`).join('')}
      </tbody></table></div>`;
  }
  function page(){
    return `<section class="container page race-page qualifier-page"><div class="page-header"><div class="eyebrow">HAKONE QUALIFIER / DATABASE</div><h1>箱根駅伝予選会</h1><p>2000年から最新年までのチーム順位・合計タイムを収録し、大学名をタップすると各大学の個人成績を確認できます。</p></div>
      <div class="year-select-control"><label for="qualifierYearSelect">年度</label><select class="year-select" id="qualifierYearSelect" data-qualifier-year><option value="" disabled>年を選択</option>${years.map(y=>`<option value="${y}" ${y===qualifierState.year?'selected':''}>${y}年</option>`).join('')}</select></div>
      <div id="qualifierResult">${result(qualifierState.year)}</div>
      <div class="notice"><strong>収録方針:</strong> チーム順位・合計タイムに加え、個人結果まで保存します。古い年度は公開アーカイブを取得し、確認できたデータから順次埋めています。</div></section>`;
  }

  function predictionPage(){
    return `<section class="container page qualifier-prediction-page"><div class="page-header"><div class="eyebrow">PREDICTION / HAKONE QUALIFIER 2027</div><h1>2027 箱根駅伝予選会予想</h1><p>第103回箱根駅伝の予選会で通過する10校を、2026箱根本戦・直近予選会・PB/ハーフ実績を軸に暫定予想します。</p></div>
      <div class="notice"><strong>暫定版:</strong> 2026年9月時点。正式エントリー、秋の記録会、故障・欠場情報が出るたびに更新します。</div>
      <div class="qualifier-prediction-list">${predicted.map(x=>`<article class="data-card qualifier-prediction-card"><div class="qualifier-prediction-rank">${x.rank}</div><div><h2>${x.team}</h2><p>${x.note}</p></div><div class="qualifier-probability"><strong>${x.chance}%</strong><span>通過確率</span></div></article>`).join('')}</div>
      <article class="data-card qualifier-bubble"><h2>ボーダー候補</h2>${bubble.map(x=>`<div><strong>${x.team}</strong><span>${x.chance}%</span><p>${x.note}</p></div>`).join('')}</article>
      <div class="notice"><strong>現時点の通過予想10校:</strong> ${predicted.map(x=>x.team).join('・')}</div></section>`;
  }

  if(typeof templates!=='undefined'){
    templates.qualifier=page;
    templates['qualifier-prediction']=predictionPage;
  }
  document.addEventListener('change',e=>{
    const sel=e.target.closest('[data-qualifier-year]');
    if(!sel)return;
    qualifierState.year=Number(sel.value);
    const host=document.querySelector('#qualifierResult');
    if(host)host.innerHTML=result(qualifierState.year);
  });
  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-qualifier-team]');
    if(!btn)return;
    const key=btn.dataset.qualifierTeam;
    const row=[...document.querySelectorAll('[data-qualifier-detail]')].find(x=>x.dataset.qualifierDetail===key);
    if(!row)return;
    row.hidden=!row.hidden;
  });

  const route=location.hash.replace('#','');
  if(['qualifier','qualifier-prediction'].includes(route)&&typeof render==='function')render(route);
})();