// Phase 2 static viewer: 2017-2025 Hakone section results
(() => {
  const YEARS = new Set([2025,2024,2023,2022,2021,2020,2019,2018,2017]);
  const meetMap={2025:104,2024:103,2023:102,2022:101,2021:99,2020:96,2019:95,2018:94,2017:93};
  let currentYear = 2025;

  function edition(year){ return 102-(2026-year); }
  function officialUrl(year, section){
    return `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${meetMap[year]}`;
  }

  function renderStaticSection(year, section){
    const db = window.hakonePhase2StaticDB || {};
    const rows = db?.[year]?.[section] || [];
    return `<div class="section-results">
      <div class="section-db-head">
        <div>
          <h2>第${edition(year)}回 ${year}年 箱根駅伝 ${section}区</h2>
          <p class="muted">区間順位・総合順位・大学・選手・区間タイムを静的DBから表示しています。</p>
        </div>
        <a class="primary-button" href="${officialUrl(year,section)}" target="_blank" rel="noopener">公式記録を確認</a>
      </div>
      <div class="tabs section-tabs">${Array.from({length:10},(_,i)=>`<button class="tab ${i+1===section?'active':''}" data-hakone-static-section="${i+1}">${i+1}区</button>`).join('')}</div>
      ${rows.length ? `<div class="table-wrap"><table><thead><tr><th>区間順位</th><th>総合順位</th><th>大学</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr class="${r[0]==='参考'?'reference-row':''}"><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div>` : `<div class="notice">この区間の静的DBが見つかりません。公式記録をご確認ください。</div>`}
      <div class="notice"><strong>Phase 2 静的DB:</strong> ${year}年第${edition(year)}回大会・${section}区。GitHubに保存した公式記録ベースのデータを直接表示しているため、VercelのサーバーAPIは使用していません。</div>
    </div>`;
  }

  const beforeStaticPhase2 = hakoneDetailedHistory;
  hakoneDetailedHistory = function(year){
    year = Number(year);
    if(YEARS.has(year)){
      currentYear = year;
      return renderStaticSection(year,1);
    }
    return beforeStaticPhase2(year);
  };

  document.addEventListener('click', e=>{
    const btn = e.target.closest('[data-hakone-static-section]');
    if(!btn) return;
    const section = Number(btn.dataset.hakoneStaticSection);
    const host = document.querySelector('#hakoneDetailedHistory');
    if(host) host.innerHTML = renderStaticSection(currentYear,section);
  });
})();
