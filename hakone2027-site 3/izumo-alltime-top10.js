// 出雲駅伝 各区間歴代BEST10ビュー（第37回・2025年まで）
(() => {
  const izumoAlltimeTop10 = {
    race:'出雲全日本大学選抜駅伝競走',
    shortName:'出雲駅伝',
    updatedThrough:{edition:37,year:2025},
    sections:[
      {section:1,distanceKm:8.0,records:[]},
      {section:2,distanceKm:5.8,records:[]},
      {section:3,distanceKm:8.5,records:[]},
      {section:4,distanceKm:6.2,records:[]},
      {section:5,distanceKm:6.4,records:[]},
      {section:6,distanceKm:10.2,records:[]}
    ]
  };
  window.izumoAlltimeTop10 = izumoAlltimeTop10;

  function sectionButtons(active=1){
    return izumoAlltimeTop10.sections.map(s=>`<button type="button" class="tab ${s.section===active?'active':''}" data-izumo-top10-section="${s.section}">${s.section}区</button>`).join('');
  }

  function recordsTable(sectionNo){
    const s=izumoAlltimeTop10.sections.find(x=>x.section===sectionNo)||izumoAlltimeTop10.sections[0];
    const rows=s.records||[];
    const body=rows.length
      ? `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>記録</th><th>年</th><th>大会</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.rank}</strong></td><td><strong>${r.name}</strong></td><td>${r.university}</td><td>${r.grade?`${r.grade}年`:'—'}</td><td><strong>${r.time}</strong></td><td>${r.year}</td><td>第${r.edition}回</td></tr>`).join('')}</tbody></table></div>`
      : `<div class="notice"><strong>${s.section}区のBEST10記録は未登録です。</strong><br>区間距離 ${s.distanceKm.toFixed(1)}km。今回受け取ったデータでは records が空配列のため、順位・選手名・記録は表示していません。</div>`;
    return `<div class="izumo-top10-section"><div class="section-db-head"><div><h2>${s.section}区 歴代BEST10</h2><p class="muted">${s.distanceKm.toFixed(1)}km / 第${izumoAlltimeTop10.updatedThrough.edition}回（${izumoAlltimeTop10.updatedThrough.year}年）まで</p></div></div>${body}</div>`;
  }

  function alltimeBlock(active=1){
    return `<section class="race-alltime-section" id="izumoAlltimeTop10"><div class="page-header" style="margin-top:34px"><h1>出雲駅伝 各区間・歴代BEST10</h1><p>1〜6区の歴代上位記録を区間別に確認できます。更新基準は第37回（2025年）までです。</p></div><div class="tabs" id="izumoTop10Tabs">${sectionButtons(active)}</div><div id="izumoTop10Result">${recordsTable(active)}</div></section>`;
  }

  const originalIzumoTemplate = templates.izumo;
  templates.izumo = function(){
    return originalIzumoTemplate() + `<section class="container page" style="padding-top:0">${alltimeBlock(1)}</section>`;
  };

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-izumo-top10-section]');
    if(!btn)return;
    const section=Number(btn.dataset.izumoTop10Section)||1;
    document.querySelectorAll('[data-izumo-top10-section]').forEach(x=>x.classList.toggle('active',Number(x.dataset.izumoTop10Section)===section));
    const host=document.querySelector('#izumoTop10Result');
    if(host)host.innerHTML=recordsTable(section);
  });

  if((location.hash.replace('#','')||'home')==='izumo' && typeof render==='function') render('izumo');
})();
