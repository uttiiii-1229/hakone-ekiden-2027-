// Two-mode PB page: current-season improvement + university-era growth (5000m).
(() => {
  if(typeof templates==='undefined'||typeof templates.pbupdates!=='function')return;
  const seasonTemplate=templates.pbupdates;
  const state=window.pbGrowthModeState=window.pbGrowthModeState||{mode:'season',team:'all'};

  function norm(v=''){
    return String(v).normalize('NFKC').replace(/[\s　]+/g,'').replace(/大學/g,'大学').trim();
  }
  function sec(v){
    const s=String(v||'').trim();
    if(!s||s==='—')return null;
    const p=s.split(':').map(Number);
    if(p.some(n=>!Number.isFinite(n)))return null;
    if(p.length===2)return p[0]*60+p[1];
    if(p.length===3)return p[0]*3600+p[1]*60+p[2];
    return null;
  }
  function deltaLabel(v){
    if(!Number.isFinite(v))return '—';
    return v>=60?`${Math.floor(v/60)}分${(v%60).toFixed(2)}秒`:`${v.toFixed(2)}秒`;
  }
  function gradeLabel(v){const n=Number(v)||0;return n?`${n}年`:'—';}
  function currentContext(){
    const teams=Object.keys(window.currentAthletePbJson2026||{});
    const canonical=new Map(teams.map(team=>[norm(team),team]));
    const athletes=new Map();
    teams.forEach(team=>{
      const rows=window.currentAthletePbResolver?.currentRows?.(team)||[];
      rows.forEach(row=>athletes.set(`${norm(team)}|${norm(row?.name)}`,{
        team,name:String(row?.name||'').trim(),grade:Number(row?.grade)||0,current:row?.pb5000||'—'
      }));
    });
    return {teams,canonical,athletes};
  }
  function growthRows(){
    const {canonical,athletes}=currentContext();
    return (window.pbGrowth5000Verified2026||[]).map(item=>{
      const team=canonical.get(norm(item.team))||item.team;
      const athlete=athletes.get(`${norm(team)}|${norm(item.name)}`);
      const highSchool=sec(item.highSchoolPb);
      const current=sec(athlete?.current||item.currentPb);
      if(highSchool==null||current==null||current>=highSchool)return null;
      return {
        team,name:athlete?.name||item.name,grade:athlete?.grade||Number(item.grade)||0,
        highSchoolPb:item.highSchoolPb,currentPb:athlete?.current||item.currentPb,
        improvement:highSchool-current,source:item.source||'確認済み公開記録'
      };
    }).filter(Boolean).sort((a,b)=>b.improvement-a.improvement||sec(a.currentPb)-sec(b.currentPb)||a.name.localeCompare(b.name,'ja'));
  }
  function growthRanking(){
    const rows=growthRows().slice(0,20);
    if(!rows.length)return `<div class="notice">高校時代5000m PBは確認元をそろえながら順次追加中です。未確認の記録は推測でランキングに入れません。</div>`;
    return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>高校時代PB</th><th>現在PB</th><th>短縮幅</th><th>確認元</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${gradeLabel(r.grade)}</td><td>${r.highSchoolPb}</td><td><strong>${r.currentPb}</strong></td><td><strong>${deltaLabel(r.improvement)}</strong></td><td>${r.source}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function growthUniversityPanel(){
    const {teams}=currentContext();
    const selected=state.team==='all'?'all':state.team;
    const rows=growthRows().filter(r=>selected==='all'||r.team===selected);
    const body=rows.length?`<div class="table-wrap"><table><thead><tr><th>選手</th><th>学年</th><th>高校時代PB</th><th>現在PB</th><th>短縮幅</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.name}</strong></td><td>${gradeLabel(r.grade)}</td><td>${r.highSchoolPb}</td><td>${r.currentPb}</td><td><strong>${deltaLabel(r.improvement)}</strong></td></tr>`).join('')}</tbody></table></div>`:`<div class="notice">この大学は、現在確認済みの高校時代5000m PBデータがありません。</div>`;
    return `<article class="data-card pb-growth-university"><div class="grade-head"><h2>大学別 成長データ</h2><span class="topic-badge">5000m</span></div><div class="year-select-control"><label for="pbGrowthTeam">大学</label><select id="pbGrowthTeam" class="year-select" data-pb-growth-team><option value="all" ${selected==='all'?'selected':''}>すべての大学</option>${teams.sort((a,b)=>a.localeCompare(b,'ja')).map(team=>`<option value="${team}" ${team===selected?'selected':''}>${team}</option>`).join('')}</select></div>${body}</article>`;
  }
  function growthTemplate(){
    const count=growthRows().length;
    return `<section class="container page university-subpage"><div class="page-header"><div class="eyebrow">UNIVERSITY DATA / PB GROWTH</div><h1>大学入学後の成長ランキング</h1><p>高校時代の5000m PBから現在PBまで、大学入学後にどれだけタイムを縮めたかを比較します。</p></div><div class="university-note"><strong>集計基準:</strong> 高校在学中に確認できる5000m PBを「高校時代PB」とし、現在の5000m PBとの差を短縮幅として集計します。10000m・ハーフは高校時代に記録を持たない選手が多いため、このランキングでは5000mのみを対象にします。確認できない高校PBは推測で補完しません。</div><article class="data-card pb-growth-card"><div class="grade-head"><h2>5000m 大学入学後成長幅</h2><span class="topic-badge">BEST 20</span></div><div class="pb-improvement-condition">確認済み ${count}件</div>${growthRanking()}</article>${growthUniversityPanel()}</section>`;
  }
  function modeTabs(){
    return `<div class="container pb-mode-switch" role="tablist" aria-label="PBランキングの種類"><button class="tab ${state.mode==='season'?'active':''}" data-pb-page-mode="season" role="tab" aria-selected="${state.mode==='season'}">今年度PB更新幅</button><button class="tab ${state.mode==='growth'?'active':''}" data-pb-page-mode="growth" role="tab" aria-selected="${state.mode==='growth'}">大学入学後の成長（5000m）</button></div>`;
  }
  function template(){
    return `${modeTabs()}${state.mode==='growth'?growthTemplate():seasonTemplate()}`;
  }

  document.addEventListener('click',event=>{
    const btn=event.target.closest('[data-pb-page-mode]');
    if(!btn)return;
    state.mode=btn.dataset.pbPageMode==='growth'?'growth':'season';
    state.team='all';
    if(typeof render==='function')render('pbupdates');
  });
  document.addEventListener('change',event=>{
    const sel=event.target.closest('[data-pb-growth-team]');
    if(!sel)return;
    state.team=sel.value||'all';
    if(typeof render==='function')render('pbupdates');
  });

  templates.pbupdates=template;
  if(location.hash.replace('#','')==='pbupdates'&&typeof render==='function')render('pbupdates');

  if(!document.getElementById('pbGrowthModeStyle')){
    const style=document.createElement('style');
    style.id='pbGrowthModeStyle';
    style.textContent='.pb-mode-switch{display:flex;gap:8px;flex-wrap:wrap;padding-top:18px}.pb-growth-card+.pb-growth-university{margin-top:18px}.pb-growth-card table,.pb-growth-university table{min-width:760px}@media(max-width:760px){.pb-mode-switch{padding-top:12px}.pb-mode-switch .tab{flex:1 1 160px}.pb-growth-card table,.pb-growth-university table{min-width:680px}}';
    document.head.appendChild(style);
  }
})();
