// Expanded university directory: every school that appeared in Hakone 2007-2026
(() => {
  function normalizeTeam(name=''){
    const n=String(name).trim();
    if(n==='國學院大学') return '國學院大學';
    return n;
  }
  function isSelection(name=''){
    return /学生連合|学連選抜|関東学連|選抜/.test(String(name));
  }
  function hakoneUniversityStats(){
    const db=window.hakonePhase2StaticDB||{};
    const map=new Map();
    for(let year=2007;year<=2026;year++){
      const participants=new Set((db?.[year]?.[1]||[]).map(r=>normalizeTeam(r?.[2])).filter(t=>t&&!isSelection(t)));
      participants.forEach(team=>{
        if(!map.has(team)) map.set(team,{team,years:new Set(),runs:0,athletes:new Set()});
        map.get(team).years.add(year);
      });
      for(let section=1;section<=10;section++){
        (db?.[year]?.[section]||[]).forEach(r=>{
          const team=normalizeTeam(r?.[2]);
          if(!map.has(team)) return;
          map.get(team).runs++;
          const athlete=String(r?.[3]||'').replace(/[\s　]+/g,'');
          if(athlete) map.get(team).athletes.add(athlete);
        });
      }
    }
    return [...map.values()].map(x=>{
      const years=[...x.years].sort((a,b)=>a-b);
      return {
        team:x.team,
        appearances:years.length,
        years,
        first:years[0],
        latest:years[years.length-1],
        runs:x.runs,
        athleteCount:x.athletes.size
      };
    }).sort((a,b)=>b.latest-a.latest||b.appearances-a.appearances||a.team.localeCompare(b.team,'ja'));
  }
  function pbRows(team){
    return typeof expandedTopAthletes2027!=='undefined' ? (expandedTopAthletes2027[team]||[]) : [];
  }
  function pbTable(team){
    const rows=pbRows(team);
    if(!rows.length) return '<div class="notice">現在のPB詳細は未収録です。箱根出場履歴・歴代出走選手データは下記の大学プロフィールに収録しています。</div>';
    return `<div class="table-wrap compact"><table><thead><tr><th>選手</th><th>学年</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}年</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function universityDirectoryTemplate(){
    const stats=hakoneUniversityStats();
    const currentPbCount=stats.filter(s=>pbRows(s.team).length).length;
    return `<section class="container page university-directory-page">
      <div class="page-header">
        <div class="eyebrow">UNIVERSITY DATA / HAKONE 20 YEARS</div>
        <h1>大学・選手データ</h1>
        <p>2007〜2026年の20大会で箱根駅伝本戦に1度でも出場した大学をすべて収録しています。</p>
      </div>
      <div class="topic-summary">
        <div><strong>${stats.length}</strong><span>箱根出場大学</span></div>
        <div><strong>2007–2026</strong><span>対象20大会</span></div>
        <div><strong>${currentPbCount}</strong><span>現行PB詳細収録校</span></div>
      </div>
      <div class="notice"><strong>データ範囲:</strong> 全大学に箱根出場回数・出場年度・直近出場・収録区間走数・歴代出走選手数を掲載します。現行選手PBは確認できた大学から順次追加します。</div>
      <div class="university-directory-grid">
        ${stats.map(s=>`<article class="data-card university-history-card">
          <div class="university-history-head"><div><span class="topic-kicker">HAKONE HISTORY</span><h2>${s.team}</h2></div><span class="topic-badge">${s.appearances}回出場</span></div>
          <div class="university-history-stats">
            <div><span>初出場（対象期間）</span><strong>${s.first}</strong></div>
            <div><span>直近出場</span><strong>${s.latest}</strong></div>
            <div><span>収録区間走</span><strong>${s.runs}</strong></div>
            <div><span>収録選手</span><strong>${s.athleteCount}</strong></div>
          </div>
          <p class="muted university-years"><strong>出場年度:</strong> ${s.years.join('・')}</p>
          <details class="university-pb-details">
            <summary>選手データを見る</summary>
            ${pbTable(s.team)}
          </details>
        </article>`).join('')}
      </div>
    </section>`;
  }
  if(typeof templates!=='undefined') templates.teams=universityDirectoryTemplate;
  if(location.hash.replace('#','')==='teams' && typeof render==='function') render('teams');
})();