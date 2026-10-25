// All-Japan section rankings: TOP10 / TOP20, through the 57th race (2025).
(() => {
  const data=window.zennihonAlltimeDB;
  if(!data)return;
  // Preserve the existing public handle for other page modules.
  window.zennihonAlltimeTop10=data;
  const state={section:1,limit:10};
  const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  function sectionButtons(){return data.sections.map(s=>`<button type="button" class="tab ${s.section===state.section?'active':''}" data-zennihon-top10-section="${s.section}" aria-pressed="${s.section===state.section}">${s.section}区</button>`).join('');}
  function recordsTable(){
    const s=data.sections.find(x=>x.section===state.section)||data.sections[0],rows=s.records.filter(r=>r.rank<=state.limit);
    return `<div class="zennihon-top10-section"><div class="section-db-head"><div><h2>${s.section}区 歴代TOP${state.limit}</h2><p class="muted">${s.distanceKm.toFixed(1)}km · 第${s.firstEdition}回（${s.firstYear}年）〜第${data.updatedThrough.edition}回（${data.updatedThrough.year}年）</p></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>記録</th><th>年</th><th>大会</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.rank}</strong></td><td><strong>${esc(r.name)}</strong></td><td>${esc(r.university)}</td><td>${r.grade?esc(r.grade)+'年':'—'}</td><td><strong>${esc(r.time)}</strong></td><td><a href="${esc(r.source)}" target="_blank" rel="noopener noreferrer">${r.year}</a></td><td>第${r.edition}回</td></tr>`).join('')}</tbody></table></div><p class="muted" style="font-size:.8rem;line-height:1.7">同タイムは同順位です。${state.limit}位と同タイムの選手も全員掲載するため、${state.limit}人を超える場合があります。年をタップすると出典を開きます。</p></div>`;
  }
  function alltimeBlock(){return `<section class="race-alltime-section" id="zennihonAlltimeTop10"><div class="page-header" style="margin-top:34px"><h1>全日本大学駅伝 各区間・歴代ランキング</h1><p>${esc(data.rankingRule)}</p></div><div class="tabs" role="group" aria-label="表示順位" style="margin:16px 0">${[10,20].map(n=>`<button type="button" class="tab ${state.limit===n?'active':''}" data-zennihon-top-limit="${n}" aria-pressed="${state.limit===n}">TOP${n}</button>`).join('')}</div><div class="tabs" id="zennihonTop10Tabs" style="flex-wrap:wrap">${sectionButtons()}</div><div id="zennihonTop10Result">${recordsTable()}</div><details><summary style="cursor:pointer;padding:12px 0;min-height:44px">集計対象と出典</summary><p>1〜7区は距離変更後の第50回以降。8区は公式の歴代記録と同じ第24回以降の19.7km区間を集計しています。オープン参加・学連選抜は順位対象から除外しています。</p><a href="${data.courseSource}" target="_blank" rel="noopener noreferrer">大会公式・過去の大会／区間距離変更</a><p>成績は公式成績表・放送局の大会資料と公開記録アーカイブを参照しています。各記録の出典は年のリンクから確認できます。</p></details></section>`;}
  const previous=templates.zennihon;
  templates.zennihon=function(){return previous()+`<section class="container page" style="padding-top:0">${alltimeBlock()}</section>`;};
  document.addEventListener('click',e=>{
    const sectionButton=e.target.closest('[data-zennihon-top10-section]'),limitButton=e.target.closest('[data-zennihon-top-limit]');
    if(!sectionButton&&!limitButton)return;
    if(sectionButton)state.section=Number(sectionButton.dataset.zennihonTop10Section)||1;
    if(limitButton)state.limit=Number(limitButton.dataset.zennihonTopLimit)===20?20:10;
    document.querySelectorAll('[data-zennihon-top10-section]').forEach(b=>{const active=Number(b.dataset.zennihonTop10Section)===state.section;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    document.querySelectorAll('[data-zennihon-top-limit]').forEach(b=>{const active=Number(b.dataset.zennihonTopLimit)===state.limit;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    const host=document.querySelector('#zennihonTop10Result');if(host)host.innerHTML=recordsTable();
  });
  if((location.hash.replace('#','')||'home')==='zennihon'&&typeof render==='function')render('zennihon');
})();
