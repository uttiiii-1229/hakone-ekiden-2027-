// Unified Hakone section DB viewer v2
// 2017-2025: generated static DB / 2026: internal Phase1 DB
(() => {
  const YEARS = new Set([2026,2025,2024,2023,2022,2021,2020,2019,2018,2017]);
  const meetMap = {2026:106,2025:104,2024:103,2023:102,2022:101,2021:99,2020:96,2019:95,2018:94,2017:93};
  let currentYear = 2026;

  // 現行コースの区間記録（第102回大会終了時点）
  const sectionRecords = {
    1:{time:'1:00:28', athlete:'青木 瑠郁', university:'國學院大學', edition:'第102回', year:2026},
    2:{time:'1:05:09', athlete:'キムタイ', university:'城西大学', edition:'第102回', year:2026},
    3:{time:'0:59:25', athlete:'Y.ヴィンセント', university:'東京国際大学', edition:'第96回', year:2020},
    4:{time:'1:00:00', athlete:'Y.ヴィンセント', university:'東京国際大学', edition:'第99回', year:2023},
    5:{time:'1:07:16', athlete:'黒田 朝日', university:'青山学院大学', edition:'第102回', year:2026},
    6:{time:'0:56:47', athlete:'野村 昭夢', university:'青山学院大学', edition:'第101回', year:2025},
    7:{time:'1:00:43', athlete:'佐藤 圭汰', university:'駒澤大学', edition:'第101回', year:2025},
    8:{time:'1:03:45', athlete:'塩出 翔太', university:'青山学院大学', edition:'第102回', year:2026},
    9:{time:'1:07:15', athlete:'中村 唯翔', university:'青山学院大学', edition:'第98回', year:2022},
    10:{time:'1:07:31', athlete:'佐藤 圭汰', university:'駒澤大学', edition:'第102回', year:2026}
  };

  function edition(year){ return 102-(2026-year); }
  function officialUrl(year, section){
    return `https://www.hakone-ekiden.jp/record/record04.php?sec=${section}&tn=${meetMap[year]}`;
  }
  function timeSeconds(time=''){
    const p=String(time).split(':').map(Number);
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2) return p[0]*60+p[1];
    return Number.POSITIVE_INFINITY;
  }
  function rawRows(year, section){
    if(year===2026 && typeof hakone2026SectionDB!=='undefined') return hakone2026SectionDB[section]||[];
    const db=window.hakonePhase2StaticDB||{};
    return db?.[year]?.[section]||[];
  }
  function sortedRows(year, section){
    // 関東学生連合を含め、純粋にタイムの速い順で表示。
    // 公式順位は元データをそのまま保持し、学生連合は「参考」のまま。
    return [...rawRows(year,section)].sort((a,b)=>timeSeconds(a[4])-timeSeconds(b[4]));
  }
  function recordCard(section){
    const r=sectionRecords[section];
    if(!r) return '';
    return `<div class="section-record-card" style="margin:14px 0 16px;padding:14px 16px;border:1px solid #d8e5f1;border-radius:12px;background:#f6fbff;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      <strong style="color:#0b376d">🏅 ${section}区 区間記録</strong>
      <span style="font-size:20px;font-weight:900;color:#0b376d">${r.time}</span>
      <span>${r.athlete}（${r.university}）</span>
      <small style="color:#6f8196">${r.edition}・${r.year}年 / 現行コース基準</small>
    </div>`;
  }
  function renderSection(year, section){
    const rows=sortedRows(year,section);
    return `<div class="section-results">
      <div class="section-db-head">
        <div><h2>第${edition(year)}回 ${year}年 箱根駅伝 ${section}区</h2><p class="muted">関東学生連合を含めて区間タイム順に表示。公式の区間順位はそのまま掲載しています。</p></div>
        <a class="primary-button" href="${officialUrl(year,section)}" target="_blank" rel="noopener">公式記録を確認</a>
      </div>
      <div class="tabs section-tabs">${Array.from({length:10},(_,i)=>`<button class="tab ${i+1===section?'active':''}" data-hakone-unified-section="${i+1}">${i+1}区</button>`).join('')}</div>
      ${recordCard(section)}
      ${rows.length?`<div class="table-wrap"><table><thead><tr><th>区間順位</th><th>総合順位</th><th>大学</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr class="${r[0]==='参考'?'reference-row':''}"><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div>`:`<div class="notice">この区間のデータが見つかりません。公式記録をご確認ください。</div>`}
      <div class="notice"><strong>表示ルール:</strong> 表の並び順は関東学生連合を含む区間タイム順です。関東学生連合は公式順位の対象外なので、区間順位・総合順位とも「参考」と表示します。</div>
    </div>`;
  }

  hakoneDetailedHistory = function(year){
    year=Number(year);
    if(YEARS.has(year)){
      currentYear=year;
      return renderSection(year,1);
    }
    return '';
  };

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-hakone-unified-section]');
    if(!btn)return;
    const section=Number(btn.dataset.hakoneUnifiedSection);
    const host=document.querySelector('#hakoneDetailedHistory');
    if(host) host.innerHTML=renderSection(currentYear,section);
  });
})();
