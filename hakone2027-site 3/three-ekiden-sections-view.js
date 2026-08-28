// Izumo / All-Japan section standings viewer
(() => {
  const sectionCount={izumo:6,zennihon:8};
  const labels={izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const currentSection={izumo:1,zennihon:1};

  function currentYear(page){
    const active=page.querySelector('[data-race-year].active');
    return Number(active?.dataset.raceYear||0);
  }
  function sectionRows(race,year,section){
    return window.threeEkidenSectionsDB?.[race]?.[year]?.sections?.[section]||[];
  }
  function renderTable(race,year,section){
    const yearData=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!yearData)return `<div class="notice">${year}年の区間順位データを読み込めませんでした。</div>`;
    if(yearData.status!=='開催')return `<div class="notice">${year}年は${yearData.status}です。</div>`;
    const rows=sectionRows(race,year,section);
    if(!rows.length)return `<div class="notice">${year}年 ${section}区の区間順位データは現在確認中です。</div>`;
    return `<div class="section-db-head" style="margin-top:16px"><div><h2>${labels[race]} ${year}年 ${section}区 区間順位</h2><p class="muted">公式大会記録をもとに、全出場選手の区間順位を掲載しています。</p></div></div><div class="table-wrap"><table><thead><tr><th>区間順位</th><th>大学・チーム</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr class="${r.rank==='OPN'||r.rank==='参考'?'reference-row':''}"><td><strong>${r.rank}</strong></td><td><strong>${r.team}</strong></td><td>${r.athlete}</td><td>${r.time}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function block(race,page){
    const year=currentYear(page); if(!year)return '';
    const count=sectionCount[race];
    const sec=Math.min(currentSection[race],count);
    return `<section class="three-ekiden-sections" data-three-sections="${race}" style="margin-top:28px"><div class="page-header"><h2>各区間順位</h2><p>${year}年大会の区間別成績。区間タブで切り替えられます。</p></div><div class="tabs section-tabs">${Array.from({length:count},(_,i)=>`<button class="tab ${i+1===sec?'active':''}" data-three-section-race="${race}" data-three-section="${i+1}">${i+1}区</button>`).join('')}</div><div class="three-section-result">${renderTable(race,year,sec)}</div></section>`;
  }
  function ensure(race){
    const page=document.querySelector(`#race-page-${race}`); if(!page)return;
    const existing=page.querySelector(`[data-three-sections="${race}"]`);
    const html=block(race,page); if(!html)return;
    if(existing){
      const year=Number(existing.querySelector('h2')?.nextElementSibling?.textContent?.match(/(20\d{2})/)?.[1]||0);
      if(year===currentYear(page))return;
      existing.outerHTML=html;
    }else page.insertAdjacentHTML('beforeend',html);
  }
  function ensureAll(){ensure('izumo');ensure('zennihon');}

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-three-section-race]');
    if(btn){
      const race=btn.dataset.threeSectionRace,sec=Number(btn.dataset.threeSection);currentSection[race]=sec;
      const page=document.querySelector(`#race-page-${race}`);if(!page)return;
      const host=page.querySelector(`[data-three-sections="${race}"]`);if(host)host.outerHTML=block(race,page);
      return;
    }
    if(e.target.closest('[data-race-year],[data-race-decade]')) setTimeout(ensureAll,0);
  });
  new MutationObserver(ensureAll).observe(document.querySelector('#app'),{childList:true,subtree:true});
  ensureAll();
})();
