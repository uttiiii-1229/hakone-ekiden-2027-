// Ensure live race result pages always expose team -> section drilldown after all route templates have loaded.
(() => {
  const routeRace={history:'hakone',izumo:'izumo',zennihon:'zennihon'};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  function normTeam(name=''){
    return String(name).normalize('NFKC').replace(/[\s　]+/g,'').replace(/大學/g,'大学').replace(/大学$/,'').replace(/大$/,'');
  }
  function displayTeam(name=''){
    const n=String(name).trim();
    return ['國學院大學學','國學院大学','國學院大','国学院大学','国学院大'].includes(n)?'國學院大學':n;
  }
  function esc(v=''){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function cleanAthlete(name=''){
    const s=String(name).trim();
    return s.replace(/\s*\([1-5]\)\s*.*$/,'').trim()||s;
  }
  function currentRace(){return routeRace[location.hash.replace('#','')||'home']||null;}
  function currentYear(race){
    if(race==='hakone') return Number(document.querySelector('[data-hakone-overall-year-select]')?.value||2026);
    return Number(document.querySelector(`[data-race-year-select][data-race-page="${race}"]`)?.value||2025);
  }
  function sectionRows(race,year,team){
    const key=normTeam(team),out=[];
    if(race==='hakone'){
      const db=window.hakonePhase2StaticDB?.[year]||{};
      for(let sec=1;sec<=10;sec++){
        const hit=(db?.[sec]||[]).find(r=>normTeam(r?.[2])===key);
        if(hit) out.push({section:sec,athlete:hit?.[3]||'—',rank:hit?.[0],time:hit?.[4]||'—'});
      }
      return out;
    }
    const db=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!db||db.status!=='開催') return out;
    for(let sec=1;sec<=sectionCounts[race];sec++){
      const hit=(db?.sections?.[sec]||[]).find(r=>normTeam(r?.team)===key);
      if(hit) out.push({section:sec,athlete:cleanAthlete(hit?.athlete||'—'),rank:hit?.rank,time:hit?.time||'—'});
    }
    return out;
  }
  function detailHtml(race,year,team){
    const rows=sectionRows(race,year,team);
    if(!rows.length) return `<div class="live-team-drilldown"><strong>${esc(displayTeam(team))}</strong><div class="notice">この大会の区間別選手データを確認できませんでした。</div></div>`;
    return `<div class="live-team-drilldown"><div class="live-team-drilldown-head"><strong>${esc(displayTeam(team))}</strong><span>${year}年 区間別成績</span></div><div class="table-wrap"><table class="live-team-drilldown-table"><thead><tr><th>区間</th><th>選手</th><th>区間順位</th><th>タイム</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.section}区</strong></td><td>${esc(r.athlete)}</td><td>${r.rank??'—'}</td><td>${esc(r.time||'—')}</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function patchTable(table,race,year){
    if(!table||table.dataset.liveTeamDrilldown==='1') return;
    const head=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim());
    const teamIndex=head.findIndex(t=>/大学・チーム|大学/.test(t));
    if(teamIndex<0) return;
    const rows=[...table.querySelectorAll('tbody>tr')].filter(tr=>!tr.classList.contains('live-team-detail-row'));
    rows.forEach((tr,i)=>{
      const td=tr.children?.[teamIndex]; if(!td) return;
      const team=td.textContent.trim(); if(!team) return;
      td.innerHTML=`<button type="button" class="live-team-drilldown-button" data-live-team="${encodeURIComponent(team)}" data-live-race="${race}" data-live-year="${year}" aria-expanded="false">${esc(displayTeam(team))}</button>`;
      const detail=document.createElement('tr');
      detail.className='live-team-detail-row'; detail.hidden=true;
      detail.innerHTML=`<td colspan="${tr.children.length}">${detailHtml(race,year,team)}</td>`;
      tr.insertAdjacentElement('afterend',detail);
    });
    table.dataset.liveTeamDrilldown='1';
  }
  function patch(){
    const race=currentRace(); if(!race) return;
    const year=currentYear(race);
    const host=race==='hakone'?document.querySelector('#hakone-overall-result'):document.querySelector(`#race-result-${race}`);
    if(!host) return;
    host.querySelectorAll('table').forEach(t=>patchTable(t,race,year));
  }
  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-live-team]'); if(!btn) return;
    const table=btn.closest('table'); if(!table) return;
    table.querySelectorAll('[data-live-team][aria-expanded="true"]').forEach(other=>{if(other!==btn){other.setAttribute('aria-expanded','false');const r=other.closest('tr')?.nextElementSibling;if(r?.classList.contains('live-team-detail-row'))r.hidden=true;}});
    const row=btn.closest('tr')?.nextElementSibling; if(!row?.classList.contains('live-team-detail-row')) return;
    const open=btn.getAttribute('aria-expanded')!=='true'; btn.setAttribute('aria-expanded',String(open)); row.hidden=!open;
  });
  document.addEventListener('change',e=>{if(e.target.matches('[data-hakone-overall-year-select],[data-race-year-select]'))setTimeout(patch,0);});
  window.addEventListener('hashchange',()=>setTimeout(patch,0));
  let queued=false;
  new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;patch();});}).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
  if(!document.getElementById('liveTeamDrilldownStyle')){
    const s=document.createElement('style');s.id='liveTeamDrilldownStyle';s.textContent='.live-team-drilldown-button{border:0;background:transparent;padding:2px 0;color:#174f7d;font:inherit;font-weight:800;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.live-team-drilldown-button[aria-expanded="true"]{color:#0b376d}.live-team-detail-row>td{padding:0!important;background:#f7fafc}.live-team-drilldown{padding:14px 16px}.live-team-drilldown-head{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;margin-bottom:8px}.live-team-drilldown-head strong{color:#123f68}.live-team-drilldown-head span{font-size:.72rem;color:#718190}.live-team-drilldown-table{min-width:520px}@media(max-width:760px){.live-team-drilldown{padding:10px 8px}.live-team-drilldown-table{min-width:500px}.live-team-drilldown-button{text-align:left}}';document.head.appendChild(s);
  }
  patch();
})();
