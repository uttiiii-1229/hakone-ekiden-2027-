// 過去大会を箱根専用にし、出雲・全日本を独立ページへ分離
(() => {
  const hakoneOverallState={year:2026};
  function normalizeTeam(name=''){
    const n=String(name).trim();
    return ['國學院大學學','國學院大学','國學院大','国学院大学','国学院大'].includes(n)?'國學院大學':n;
  }

  function hakoneOverallYears(){
    return Array.from({length:27},(_,i)=>2026-i);
  }

  function hakoneOfficial(year){
    return window.hakoneOfficialOverallDB?.[year]||null;
  }

  function rankLabel(v){
    return (v===null||v===undefined||v==='')?'—':v;
  }

  function hakoneOverallResult(year){
    const d=hakoneOfficial(year);
    if(!d)return `<div class="notice">${year}年の総合・往路・復路データは登録されていません。</div>`;
    if(d.status!=='開催')return `<div class="notice"><strong>第${d.edition}回（${year}年）:</strong> ${d.status}</div>`;
    const rs=d.results||[];
    const winner=rs.find(r=>r.rank===1)||rs[0];
    return `<div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>第${d.edition}回・${year}年</strong></div><div class="race-summary-card"><small>総合優勝</small><strong>${normalizeTeam(winner?.team||'—')}</strong></div><div class="race-summary-card"><small>総合タイム</small><strong>${winner?.time||'—'}</strong></div><div class="race-summary-card"><small>出場チーム</small><strong>${rs.length}チーム</strong></div></div><div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th><th>往路順位</th><th>往路タイム</th><th>復路順位</th><th>復路タイム</th></tr></thead><tbody>${rs.map(r=>{const ref=r.rank==='参考'||r.outwardRank==='参考'||r.returnRank==='参考';return `<tr class="${ref?'reference-row':''}"><td><strong>${rankLabel(r.rank)}</strong></td><td><strong>${normalizeTeam(r.team)}</strong></td><td>${r.time||'—'}</td><td>${rankLabel(r.outwardRank)}</td><td>${r.outwardTime||'—'}</td><td>${rankLabel(r.returnRank)}</td><td>${r.returnTime||'—'}</td></tr>`;}).join('')}</tbody></table></div><div class="notice">総合順位だけでなく、各大学の往路順位・往路タイム・復路順位・復路タイムも同じ表で確認できます。棄権・参考記録は公式記録の表記を維持しています。</div>`;
  }

  function hakoneOverallBlock(){
    const st=hakoneOverallState;
    const ys=hakoneOverallYears();
    return `<section class="container page"><div class="page-header"><h1>箱根駅伝 過去大会</h1><p>年度を選ぶと、その大会に出場した全大学・チームの総合成績、往路成績、復路成績をまとめて確認できます。</p></div><div class="year-select-control"><label for="hakoneOverallYearSelect">年度</label><select class="year-select" id="hakoneOverallYearSelect" data-hakone-overall-year-select><option value="" disabled>年を選択</option>${ys.map(y=>`<option value="${y}" ${y===st.year?'selected':''}>${y}年</option>`).join('')}</select></div><div id="hakone-overall-result">${hakoneOverallResult(st.year)}</div></section>`;
  }

  function hakoneOverview(){
    return hakoneOverallBlock();
  }

  historyTemplate=function(){
    return hakoneOverview()+`<section class="container page" style="padding-top:0"><div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2000〜2026年の27大会を収録。年度と1〜10区を切り替えると、区間順位の直後にその区間の歴代BEST10も表示します。</p></div>${hakoneYearSelect()}<div id="hakoneDetailedHistory">${hakoneDetailedHistory(activeHakoneYear)}${renderHakoneAlltimeTop10(1)}</div></section>`;
  };
  templates.history=historyTemplate;

  const raceState={izumo:{year:2025},zennihon:{year:2025}};
  const raceMeta={
    izumo:{title:'出雲駅伝',subtitle:'出雲全日本大学選抜駅伝競走',icon:'⚡'},
    zennihon:{title:'全日本大学駅伝',subtitle:'秩父宮賜杯 全日本大学駅伝対校選手権大会',icon:'🏃'}
  };
  function years(){return Array.from({length:19},(_,i)=>2025-i);}
  function edition(race,year){return race==='izumo'?year-1988:year-1968;}
  function getData(race,year){return window.threeEkidenStandingsDB?.[race]?.[year]||null;}
  function raceResult(race,year){
    const d=getData(race,year),m=raceMeta[race],ed=edition(race,year);
    if(!d)return `<div class="notice">${year}年のデータは登録されていません。</div>`;
    if(d.status!=='開催')return `<div class="notice"><strong>${m.title} 第${ed}回（${year}年）:</strong> ${d.status}</div>`;
    const rs=d.results||[];
    return `<div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>第${ed}回・${year}年</strong></div><div class="race-summary-card"><small>優勝</small><strong>${normalizeTeam(rs[0]?.team||'—')}</strong></div><div class="race-summary-card"><small>出場チーム</small><strong>${rs.length}チーム</strong></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${rs.map(r=>`<tr class="${r.rank==='OPN'||r.rank==='参考'?'reference-row':''}"><td><strong>${r.rank}</strong></td><td><strong>${normalizeTeam(r.team)}</strong></td><td>${r.time}</td></tr>`).join('')}</tbody></table></div>`;
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

  const current=location.hash.replace('#','')||'home';
  if(['history','izumo','zennihon'].includes(current) && typeof render==='function')render(current);
})();
