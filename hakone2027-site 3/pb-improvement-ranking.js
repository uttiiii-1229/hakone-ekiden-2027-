// PB improvement ranking: automatic meet-DB extraction plus verified 2026 PB progression supplements.
(() => {
  const metricDefs={
    pb5000:{label:'5000m',min:13*60,max:14*60,event:/5000m/i},
    pb10000:{label:'10000m',min:27*60,max:29*60,event:/10000m/i},
    half:{label:'ハーフマラソン',min:60*60,max:64*60,event:/ハーフ|half/i}
  };
  const state={metric:'pb5000',team:'all'};

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
  function eventMetric(name=''){
    const s=String(name);
    if(/女子/.test(s))return null;
    if(metricDefs.half.event.test(s))return 'half';
    if(metricDefs.pb10000.event.test(s))return 'pb10000';
    if(metricDefs.pb5000.event.test(s))return 'pb5000';
    return null;
  }
  function currentAthletes(){
    const teams=Object.keys(window.currentAthletePbJson2026||{});
    const canonical=new Map(teams.map(team=>[norm(team),team]));
    const athletes=new Map();
    teams.forEach(team=>{
      const rows=window.currentAthletePbResolver?.currentRows?.(team)||[];
      rows.forEach(row=>{
        const key=`${norm(team)}|${norm(row?.name)}`;
        athletes.set(key,{team,name:String(row?.name||'').trim(),grade:Number(row?.grade)||0,pb5000:row?.pb5000||'—',pb10000:row?.pb10000||'—',half:row?.half||'—'});
      });
    });
    return {teams,canonical,athletes};
  }
  function inTargetRange(metric,seconds){
    const def=metricDefs[metric];
    return !!def&&seconds!=null&&seconds>=def.min&&seconds<def.max;
  }
  function automaticRows(context){
    const {canonical,athletes}=context;
    const best={2025:new Map(),2026:new Map()};
    const meets=window.universityMeetResultsAutoDB?.meets||{};
    Object.values(meets).forEach(meet=>{
      const year=Number(meet?.year);
      if(year!==2025&&year!==2026)return;
      Object.entries(meet?.events||{}).forEach(([eventName,event])=>{
        const metric=eventMetric(eventName); if(!metric)return;
        const rows=Array.isArray(event)?event:(event?.rows||[]);
        rows.forEach(row=>{
          const team=canonical.get(norm(row?.[2])); if(!team)return;
          const athleteKey=`${norm(team)}|${norm(row?.[1])}`;
          const athlete=athletes.get(athleteKey); if(!athlete)return;
          const t=sec(row?.[4]); if(t==null)return;
          const key=`${athleteKey}|${metric}`;
          const current=best[year].get(key);
          if(!current||t<current.seconds){
            best[year].set(key,{seconds:t,time:String(row?.[4]),meet:String(meet?.name||'大会名未登録'),team,athlete:athlete.name,grade:athlete.grade,metric});
          }
        });
      });
    });
    const out=[];
    best[2026].forEach((after,key)=>{
      const before=best[2025].get(key); if(!before||after.seconds>=before.seconds)return;
      if(!inTargetRange(after.metric,after.seconds))return;
      const athlete=athletes.get(`${norm(after.team)}|${norm(after.athlete)}`); if(!athlete)return;
      const currentPb=sec(athlete[after.metric]); if(currentPb==null)return;
      const tolerance=after.metric==='half'?1.1:0.06;
      if(Math.abs(currentPb-after.seconds)>tolerance)return;
      out.push({...after,beforeTime:before.time,beforeSeconds:before.seconds,currentPb:athlete[after.metric],improvement:before.seconds-after.seconds,source:'サイト内2025/2026大会DB'});
    });
    return out;
  }
  function verifiedRows(context){
    const {teams,canonical,athletes}=context;
    const teamSet=new Set(teams.map(norm));
    return (window.pbImprovementVerified2026||[]).map(item=>{
      const canonicalTeam=canonical.get(norm(item.team))||item.team;
      if(!teamSet.has(norm(canonicalTeam)))return null;
      const beforeSeconds=sec(item.before),afterSeconds=sec(item.after);
      if(beforeSeconds==null||afterSeconds==null||afterSeconds>=beforeSeconds||!inTargetRange(item.metric,afterSeconds))return null;
      const athlete=athletes.get(`${norm(canonicalTeam)}|${norm(item.name)}`);
      return {
        metric:item.metric,team:canonicalTeam,athlete:athlete?.name||item.name,grade:athlete?.grade||0,
        seconds:afterSeconds,currentPb:item.after,beforeTime:item.before,beforeSeconds,
        improvement:beforeSeconds-afterSeconds,meet:item.meet||'2026年度大会',source:item.source||'確認済み外部資料',verified:true
      };
    }).filter(Boolean);
  }
  function deriveRows(){
    const context=currentAthletes();
    const map=new Map();
    automaticRows(context).forEach(row=>map.set(`${norm(row.team)}|${norm(row.athlete)}|${row.metric}`,row));
    // Explicitly verified progression wins over automatic inference for the same athlete/event.
    verifiedRows(context).forEach(row=>map.set(`${norm(row.team)}|${norm(row.athlete)}|${row.metric}`,row));
    return {rows:[...map.values()],teams:context.teams};
  }
  function qualifiedRows(metric=state.metric){
    return deriveRows().rows.filter(r=>r.metric===metric).sort((a,b)=>b.improvement-a.improvement||a.seconds-b.seconds||a.athlete.localeCompare(b.athlete,'ja'));
  }
  function rankingTable(){
    const rows=qualifiedRows().slice(0,20);
    if(!rows.length)return `<div class="notice">現在確認できる更新データがまだありません。</div>`;
    return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>更新前PB</th><th>更新後PB</th><th>短縮幅</th><th>更新確認大会</th><th>確認元</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.athlete}</strong></td><td>${r.team}</td><td>${gradeLabel(r.grade)}</td><td>${r.beforeTime}</td><td><strong>${r.currentPb}</strong></td><td><strong>${deltaLabel(r.improvement)}</strong></td><td>${r.meet}</td><td>${r.source||'—'}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function metricPanel(){
    const def=metricDefs[state.metric];
    const all=qualifiedRows();
    return `<article class="data-card pb-improvement-card"><div class="grade-head"><h2>${def.label} PB更新幅</h2><span class="topic-badge">BEST 20</span></div><div class="pb-improvement-condition">対象: ${state.metric==='pb5000'?'更新後PBが13分台（更新前も13分台可）':state.metric==='pb10000'?'更新後PBが27分台・28分台':'更新後PBが1時間00分台〜1時間03分台'} / 確認済み ${all.length}件</div>${rankingTable()}</article>`;
  }
  function universityPanel(){
    const {rows,teams}=deriveRows();
    const selected=state.team==='all'?'all':state.team;
    const teamRows=selected==='all'?rows:rows.filter(r=>r.team===selected);
    const sorted=teamRows.slice().sort((a,b)=>a.team.localeCompare(b.team,'ja')||a.metric.localeCompare(b.metric)||b.improvement-a.improvement);
    const body=sorted.length?`<div class="table-wrap"><table><thead><tr><th>種目</th><th>選手</th><th>学年</th><th>更新前PB</th><th>更新後PB</th><th>短縮幅</th><th>更新確認大会</th><th>確認元</th></tr></thead><tbody>${sorted.map(r=>`<tr><td><strong>${metricDefs[r.metric].label}</strong></td><td>${r.athlete}</td><td>${gradeLabel(r.grade)}</td><td>${r.beforeTime}</td><td>${r.currentPb}</td><td><strong>${deltaLabel(r.improvement)}</strong></td><td>${r.meet}</td><td>${r.source||'—'}</td></tr>`).join('')}</tbody></table></div>`:`<div class="notice">この大学では、現在確認済みの条件対象PB更新データがありません。</div>`;
    return `<article class="data-card pb-improvement-university"><div class="grade-head"><h2>大学別PB更新情報</h2><span class="topic-badge">自動抽出＋確認済み補完</span></div><div class="year-select-control"><label for="pbImprovementTeam">大学</label><select id="pbImprovementTeam" class="year-select" data-pb-improvement-team><option value="all" ${selected==='all'?'selected':''}>すべての大学</option>${teams.sort((a,b)=>a.localeCompare(b,'ja')).map(team=>`<option value="${team}" ${team===selected?'selected':''}>${team}</option>`).join('')}</select></div><div data-pb-improvement-university-result>${body}</div></article>`;
  }
  function template(){
    return `<section class="container page university-subpage"><div class="page-header"><div class="eyebrow">UNIVERSITY DATA / PB IMPROVEMENT</div><h1>PB更新幅ランキング</h1><p>2026年度にPBを更新したことを確認できる現役選手を、更新幅の大きい順で表示します。</p></div><div class="university-note"><strong>対象条件:</strong> 5000mは更新後13分台、10000mは27分台・28分台、ハーフは1時間00分台〜1時間03分台。更新前もすでに基準タイム内だった選手を含みます。サイト内2025/2026大会DBから自動抽出したデータに、公式結果・大学公式・記録DB等で更新前後を確認できた2026年度PB更新を補完しています。確認できない記録は推測で追加しません。</div><div class="tabs grade-metric-tabs pb-improvement-tabs"><button class="tab ${state.metric==='pb5000'?'active':''}" data-pb-improvement-metric="pb5000">5000m</button><button class="tab ${state.metric==='pb10000'?'active':''}" data-pb-improvement-metric="pb10000">10000m</button><button class="tab ${state.metric==='half'?'active':''}" data-pb-improvement-metric="half">ハーフマラソン</button></div><div id="pbImprovementRanking">${metricPanel()}</div>${universityPanel()}</section>`;
  }

  document.addEventListener('click',event=>{
    const btn=event.target.closest('[data-pb-improvement-metric]'); if(!btn)return;
    state.metric=btn.dataset.pbImprovementMetric||'pb5000';
    document.querySelectorAll('[data-pb-improvement-metric]').forEach(b=>b.classList.toggle('active',b===btn));
    const host=document.querySelector('#pbImprovementRanking'); if(host)host.innerHTML=metricPanel();
  });
  document.addEventListener('change',event=>{
    const sel=event.target.closest('[data-pb-improvement-team]'); if(!sel)return;
    state.team=sel.value||'all';
    const card=sel.closest('.pb-improvement-university');
    if(card){const wrap=document.createElement('div');wrap.innerHTML=universityPanel();card.replaceWith(wrap.firstElementChild);}
  });

  if(typeof templates!=='undefined')templates.pbupdates=template;
  if(location.hash.replace('#','')==='pbupdates'&&typeof render==='function')render('pbupdates');

  if(!document.getElementById('pbImprovementStyle')){
    const style=document.createElement('style'); style.id='pbImprovementStyle';
    style.textContent='.pb-improvement-condition{margin:0 0 12px;color:#5c6d7c;font-size:.88rem}.pb-improvement-tabs{margin-bottom:16px}.pb-improvement-card+.pb-improvement-university{margin-top:18px}.pb-improvement-card table,.pb-improvement-university table{min-width:1040px}@media(max-width:760px){.pb-improvement-card table,.pb-improvement-university table{min-width:920px}}';
    document.head.appendChild(style);
  }
})();
