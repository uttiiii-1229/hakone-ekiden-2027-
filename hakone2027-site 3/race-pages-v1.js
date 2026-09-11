// 過去大会を箱根専用にし、出雲・全日本を独立ページへ分離
(() => {
  const hakoneOverallState={year:2026};
  const raceState={izumo:{year:2025},zennihon:{year:2025}};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  const raceMeta={izumo:{title:'出雲駅伝',subtitle:'出雲全日本大学選抜駅伝競走',icon:'⚡'},zennihon:{title:'全日本大学駅伝',subtitle:'秩父宮賜杯 全日本大学駅伝対校選手権大会',icon:'🏃'}};

  function normalizeTeam(name=''){
    const n=String(name).trim();
    return ['國學院大學學','國學院大学','國學院大','国学院大学','国学院大'].includes(n)?'國學院大學':n;
  }
  function teamKey(name=''){
    return normalizeTeam(name).normalize('NFKC').replace(/[\s　]+/g,'').replace(/大學/g,'大学').replace(/大学$/,'').replace(/大$/,'');
  }
  function esc(v=''){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function cleanAthlete(name=''){const s=String(name).trim();return s.replace(/\s*\([1-5]\)\s*.*$/,'').trim()||s;}
  function rankLabel(v){return (v===null||v===undefined||v==='')?'—':v;}
  function hakoneOverallYears(){return Array.from({length:27},(_,i)=>2026-i);}
  function years(){return Array.from({length:19},(_,i)=>2025-i);}
  function edition(race,year){return race==='izumo'?year-1988:year-1968;}
  function hakoneOfficial(year){return window.hakoneOfficialOverallDB?.[year]||null;}
  function getData(race,year){return window.threeEkidenStandingsDB?.[race]?.[year]||null;}

  function sectionRows(race,year,team){
    const key=teamKey(team),out=[];
    if(race==='hakone'){
      const db=window.hakonePhase2StaticDB?.[year]||{};
      for(let sec=1;sec<=10;sec++){
        const hit=(db?.[sec]||[]).find(r=>teamKey(r?.[2])===key);
        if(hit) out.push({section:sec,athlete:hit?.[3]||'—',rank:hit?.[0],time:hit?.[4]||'—'});
      }
      return out;
    }
    const db=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!db||db.status!=='開催') return out;
    for(let sec=1;sec<=sectionCounts[race];sec++){
      const hit=(db?.sections?.[sec]||[]).find(r=>teamKey(r?.team)===key);
      if(hit) out.push({section:sec,athlete:cleanAthlete(hit?.athlete||'—'),rank:hit?.rank,time:hit?.time||'—'});
    }
    return out;
  }
  function teamButton(race,year,team){
    return `<button type="button" class="race-team-detail-button" data-race-team-detail="${encodeURIComponent(team)}" data-race-kind="${race}" data-race-year="${year}" aria-expanded="false">${esc(normalizeTeam(team))}</button>`;
  }
  function detailRow(race,year,team,colspan){
    const rows=sectionRows(race,year,team);
    const body=rows.length?`<div class="race-team-detail"><div class="race-team-detail-head"><strong>${esc(normalizeTeam(team))}</strong><span>${year}年 区間別成績</span></div><div class="table-wrap"><table class="race-team-detail-table"><thead><tr><th>区間</th><th>選手</th><th>区間順位</th><th>タイム</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.section}区</strong></td><td>${esc(r.athlete)}</td><td>${esc(rankLabel(r.rank))}</td><td>${esc(r.time||'—')}</td></tr>`).join('')}</tbody></table></div></div>`:`<div class="race-team-detail"><strong>${esc(normalizeTeam(team))}</strong><div class="notice">この大会の区間別選手データを確認できませんでした。</div></div>`;
    return `<tr class="race-team-detail-row" hidden><td colspan="${colspan}">${body}</td></tr>`;
  }

  function hakoneOverallResult(year){
    const d=hakoneOfficial(year);
    if(!d)return `<div class="notice">${year}年の総合・往路・復路データは登録されていません。</div>`;
    if(d.status!=='開催')return `<div class="notice"><strong>第${d.edition}回（${year}年）:</strong> ${d.status}</div>`;
    const rs=d.results||[];
    const winner=rs.find(r=>r.rank===1)||rs[0];
    const rows=rs.map(r=>{const ref=r.rank==='参考'||r.outwardRank==='参考'||r.returnRank==='参考';return `<tr class="${ref?'reference-row':''}"><td><strong>${rankLabel(r.rank)}</strong></td><td>${teamButton('hakone',year,r.team)}</td><td>${r.time||'—'}</td><td>${rankLabel(r.outwardRank)}</td><td>${r.outwardTime||'—'}</td><td>${rankLabel(r.returnRank)}</td><td>${r.returnTime||'—'}</td></tr>${detailRow('hakone',year,r.team,7)}`;}).join('');
    return `<div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>第${d.edition}回・${year}年</strong></div><div class="race-summary-card"><small>総合優勝</small><strong>${normalizeTeam(winner?.team||'—')}</strong></div><div class="race-summary-card"><small>総合タイム</small><strong>${winner?.time||'—'}</strong></div><div class="race-summary-card"><small>出場チーム</small><strong>${rs.length}チーム</strong></div></div><div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th><th>往路順位</th><th>往路タイム</th><th>復路順位</th><th>復路タイム</th></tr></thead><tbody>${rows}</tbody></table></div><div class="notice">大学名をタップすると、その大会の各区間の選手・区間順位・タイムを表示します。</div>`;
  }
  function hakoneOverallBlock(){
    const ys=hakoneOverallYears();
    return `<section class="container page"><div class="page-header"><h1>箱根駅伝 過去大会</h1><p>年度を選ぶと、その大会に出場した全大学・チームの総合成績、往路成績、復路成績をまとめて確認できます。</p></div><div class="year-select-control"><label for="hakoneOverallYearSelect">年度</label><select class="year-select" id="hakoneOverallYearSelect" data-hakone-overall-year-select><option value="" disabled>年を選択</option>${ys.map(y=>`<option value="${y}" ${y===hakoneOverallState.year?'selected':''}>${y}年</option>`).join('')}</select></div><div id="hakone-overall-result">${hakoneOverallResult(hakoneOverallState.year)}</div></section>`;
  }

  historyTemplate=function(){
    return hakoneOverallBlock()+`<section class="container page" style="padding-top:0"><div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2000〜2026年の27大会を収録。年度と1〜10区を切り替えると、区間順位の直後にその区間の歴代BEST10も表示します。</p></div>${hakoneYearSelect()}<div id="hakoneDetailedHistory">${hakoneDetailedHistory(activeHakoneYear)}${renderHakoneAlltimeTop10(1)}</div></section>`;
  };
  templates.history=historyTemplate;

  function raceResult(race,year){
    const d=getData(race,year),m=raceMeta[race],ed=edition(race,year);
    if(!d)return `<div class="notice">${year}年のデータは登録されていません。</div>`;
    if(d.status!=='開催')return `<div class="notice"><strong>${m.title} 第${ed}回（${year}年）:</strong> ${d.status}</div>`;
    const rs=d.results||[];
    const rows=rs.map(r=>`<tr class="${r.rank==='OPN'||r.rank==='参考'?'reference-row':''}"><td><strong>${r.rank}</strong></td><td>${teamButton(race,year,r.team)}</td><td>${r.time}</td></tr>${detailRow(race,year,r.team,3)}`).join('');
    return `<div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>第${ed}回・${year}年</strong></div><div class="race-summary-card"><small>優勝</small><strong>${normalizeTeam(rs[0]?.team||'—')}</strong></div><div class="race-summary-card"><small>出場チーム</small><strong>${rs.length}チーム</strong></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${rows}</tbody></table></div><div class="notice">大学名をタップすると、その大会の各区間の選手・区間順位・タイムを表示します。</div>`;
  }
  function racePage(race){
    const st=raceState[race],m=raceMeta[race],ys=years();
    return `<section class="container page race-page" id="race-page-${race}"><div class="page-header"><h1>${m.icon} ${m.title}</h1><p>${m.subtitle}の過去大会結果を独立して掲載。年度ごとの全出場チーム総合成績を確認できます。</p></div><div class="year-select-control"><label for="${race}YearSelect">年度</label><select class="year-select" id="${race}YearSelect" data-race-year-select data-race-page="${race}"><option value="" disabled>年を選択</option>${ys.map(y=>`<option value="${y}" ${y===st.year?'selected':''}>${y}年</option>`).join('')}</select></div><div id="race-result-${race}">${raceResult(race,st.year)}</div></section>`;
  }
  templates.izumo=()=>racePage('izumo');
  templates.zennihon=()=>racePage('zennihon');

  function rerenderRace(race){const host=document.querySelector(`#race-page-${race}`);if(!host)return;const wrap=document.createElement('div');wrap.innerHTML=racePage(race);host.replaceWith(wrap.firstElementChild);}
  function rerenderHakoneOverall(){const host=document.querySelector('#hakone-overall-result');if(host)host.innerHTML=hakoneOverallResult(hakoneOverallState.year);}
  function appendAlltime(section){const host=document.querySelector('#hakoneDetailedHistory');if(!host)return;host.querySelector('.alltime-top10')?.remove();host.insertAdjacentHTML('beforeend',renderHakoneAlltimeTop10(section));}

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-race-team-detail]');
    if(btn){
      const table=btn.closest('table');
      table?.querySelectorAll('[data-race-team-detail][aria-expanded="true"]').forEach(other=>{if(other!==btn){other.setAttribute('aria-expanded','false');const r=other.closest('tr')?.nextElementSibling;if(r?.classList.contains('race-team-detail-row'))r.hidden=true;}});
      const row=btn.closest('tr')?.nextElementSibling;
      if(row?.classList.contains('race-team-detail-row')){const open=btn.getAttribute('aria-expanded')!=='true';btn.setAttribute('aria-expanded',String(open));row.hidden=!open;}
      return;
    }
    const sec=e.target.closest('[data-hakone-unified-section],[data-hakone-static-section],[data-hakone-section]');
    if(sec){const n=Number(sec.dataset.hakoneUnifiedSection||sec.dataset.hakoneStaticSection||sec.dataset.hakoneSection||1);appendAlltime(n);}
  });
  document.addEventListener('change',e=>{
    const hov=e.target.closest('[data-hakone-overall-year-select]');
    if(hov){hakoneOverallState.year=Number(hov.value);rerenderHakoneOverall();return;}
    const hsec=e.target.closest('[data-hakone-year-select]');
    if(hsec){setTimeout(()=>appendAlltime(1),0);return;}
    const rsel=e.target.closest('[data-race-year-select]');
    if(rsel){const race=rsel.dataset.racePage;raceState[race].year=Number(rsel.value);rerenderRace(race);}
  });

  if(!document.getElementById('raceTeamDetailStyle')){
    const s=document.createElement('style');s.id='raceTeamDetailStyle';
    s.textContent='.race-team-detail-button{border:0;background:transparent;padding:2px 0;color:#174f7d;font:inherit;font-weight:800;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.race-team-detail-button[aria-expanded="true"]{color:#0b376d}.race-team-detail-row>td{padding:0!important;background:#f7fafc}.race-team-detail{padding:14px 16px}.race-team-detail-head{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;margin-bottom:8px}.race-team-detail-head span{font-size:.72rem;color:#718190}.race-team-detail-table{min-width:520px}@media(max-width:760px){.race-team-detail{padding:10px 8px}.race-team-detail-table{min-width:500px}.race-team-detail-button{text-align:left}}';
    document.head.appendChild(s);
  }

  const current=location.hash.replace('#','')||'home';
  if(['history','izumo','zennihon'].includes(current) && typeof render==='function')render(current);
})();
