// 過去大会を箱根専用にし、出雲・全日本を独立ページへ分離
(() => {
  function hakoneOverview(){
    return `<section class="container page"><div class="page-header"><h1>箱根駅伝 過去大会</h1><p>箱根駅伝の総合成績・区間順位をまとめています。出雲駅伝と全日本大学駅伝はそれぞれ専用ページへ移動しました。</p></div>${historyTable('hakone','箱根駅伝・直近10大会')}<div class="notice">総合成績は第102回（2026年）まで。下の区間データでは2007〜2026年の各区間順位を確認できます。</div></section>`;
  }

  historyTemplate=function(){
    return hakoneOverview()+`<section class="container page" style="padding-top:0"><div class="page-header"><h1>箱根駅伝・全選手区間成績</h1><p>2007〜2026年の20大会を収録。年度と1〜10区を切り替えると、区間順位の直後にその区間の歴代BEST10も表示します。</p></div><div class="tabs hakone-decade-tabs">${Object.entries(hakoneDecades).map(([key,g])=>`<button class="tab ${key===activeHakoneDecade?'active':''}" data-hakone-decade="${key}">${g.label}</button>`).join('')}</div><div class="tabs" id="hakoneYearTabs">${hakoneYearTabs(activeHakoneDecade)}</div><div id="hakoneDetailedHistory">${hakoneDetailedHistory(activeHakoneYear)}${renderHakoneAlltimeTop10(1)}</div></section>`;
  };
  templates.history=historyTemplate;

  const raceState={izumo:{decade:'2016-2025',year:2025},zennihon:{decade:'2016-2025',year:2025}};
  const raceMeta={
    izumo:{title:'出雲駅伝',subtitle:'出雲全日本大学選抜駅伝競走',icon:'⚡'},
    zennihon:{title:'全日本大学駅伝',subtitle:'秩父宮賜杯 全日本大学駅伝対校選手権大会',icon:'🏃'}
  };
  function years(decade){const [a,b]=decade.split('-').map(Number);return Array.from({length:b-a+1},(_,i)=>b-i);}
  function edition(race,year){return race==='izumo'?year-1988:year-1968;}
  function getData(race,year){return window.threeEkidenStandingsDB?.[race]?.[year]||null;}
  function raceResult(race,year){
    const d=getData(race,year),m=raceMeta[race],ed=edition(race,year);
    if(!d)return `<div class="notice">${year}年のデータは登録されていません。</div>`;
    if(d.status!=='開催')return `<div class="notice"><strong>${m.title} 第${ed}回（${year}年）:</strong> ${d.status}</div>`;
    const rs=d.results||[];
    return `<div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>第${ed}回・${year}年</strong></div><div class="race-summary-card"><small>優勝</small><strong>${rs[0]?.team||'—'}</strong></div><div class="race-summary-card"><small>出場チーム</small><strong>${rs.length}チーム</strong></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${rs.map(r=>`<tr class="${r.rank==='OPN'||r.rank==='参考'?'reference-row':''}"><td><strong>${r.rank}</strong></td><td><strong>${r.team}</strong></td><td>${r.time}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function racePage(race){
    const st=raceState[race],m=raceMeta[race],ys=years(st.decade); if(!ys.includes(st.year))st.year=ys[0];
    return `<section class="container page race-page" id="race-page-${race}"><div class="page-header"><h1>${m.icon} ${m.title}</h1><p>${m.subtitle}の過去大会結果を独立して掲載。年度ごとの全出場チーム総合成績を確認できます。</p></div><div class="race-page-controls"><div class="tabs"><button class="tab ${st.decade==='2016-2025'?'active':''}" data-race-decade="2016-2025" data-race-page="${race}">2016–2025</button><button class="tab ${st.decade==='2007-2015'?'active':''}" data-race-decade="2007-2015" data-race-page="${race}">2007–2015</button></div><div class="tabs">${ys.map(y=>`<button class="tab ${y===st.year?'active':''}" data-race-year="${y}" data-race-page="${race}">${y}年</button>`).join('')}</div></div><div id="race-result-${race}">${raceResult(race,st.year)}</div></section>`;
  }
  templates.izumo=()=>racePage('izumo');
  templates.zennihon=()=>racePage('zennihon');

  function rerenderRace(race){const host=document.querySelector(`#race-page-${race}`);if(!host)return;const wrap=document.createElement('div');wrap.innerHTML=racePage(race);host.replaceWith(wrap.firstElementChild);}
  function appendAlltime(section){const host=document.querySelector('#hakoneDetailedHistory');if(!host)return;host.querySelector('.alltime-top10')?.remove();host.insertAdjacentHTML('beforeend',renderHakoneAlltimeTop10(section));}

  document.addEventListener('click',e=>{
    const sec=e.target.closest('[data-hakone-unified-section],[data-hakone-static-section],[data-hakone-section]');
    if(sec){const n=Number(sec.dataset.hakoneUnifiedSection||sec.dataset.hakoneStaticSection||sec.dataset.hakoneSection||1);appendAlltime(n);return;}
    if(e.target.closest('[data-hakone-year-v3],[data-hakone-decade]')){appendAlltime(1);return;}
    const dec=e.target.closest('[data-race-decade]');
    if(dec){const race=dec.dataset.racePage;raceState[race].decade=dec.dataset.raceDecade;raceState[race].year=years(dec.dataset.raceDecade)[0];rerenderRace(race);return;}
    const yr=e.target.closest('[data-race-year]');
    if(yr){const race=yr.dataset.racePage;raceState[race].year=Number(yr.dataset.raceYear);rerenderRace(race);}
  });

  const current=location.hash.replace('#','')||'home';
  if(['history','izumo','zennihon'].includes(current) && typeof render==='function')render(current);
})();
