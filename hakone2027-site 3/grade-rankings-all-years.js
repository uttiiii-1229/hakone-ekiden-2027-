// Consolidate all current PB rankings into the grade ranking page.
(() => {
  const metricLabels={pb5000:'5000m PB',pb10000:'10000m PB',half:'ハーフマラソン PB'};
  const state={scope:'all',metric:'pb5000'};

  function sec(value){
    const s=String(value||'').trim();
    if(!s||s==='—') return Number.POSITIVE_INFINITY;
    const p=s.split(':').map(Number);
    if(p.length===2&&p.every(Number.isFinite)) return p[0]*60+p[1];
    if(p.length===3&&p.every(Number.isFinite)) return p[0]*3600+p[1]*60+p[2];
    return Number.POSITIVE_INFINITY;
  }
  function gradeLabel(grade){
    const n=Number(grade)||0;
    return n?`${n}年`:'—';
  }
  function athleteRows(){
    const teams=new Set([
      ...Object.keys(window.currentAthletePbJson2026||{}),
      ...Object.keys(window.fullRosterData||{}),
      ...Object.keys(window.expandedTopAthletes2027||{}),
      ...Object.keys(window.verifiedCurrentPb2026||{})
    ]);
    const map=new Map();
    teams.forEach(team=>{
      const rows=window.currentAthletePbResolver?.currentRows?.(team)||[];
      rows.forEach(row=>{
        const name=String(row?.name||'').trim();
        if(!name) return;
        const key=`${team}|${name}`;
        map.set(key,{
          team,name,grade:Number(row.grade)||0,
          pb5000:row.pb5000||'—',pb10000:row.pb10000||'—',half:row.half||'—'
        });
      });
    });
    return [...map.values()];
  }
  function scopeLabel(){return state.scope==='all'?'全学年':`${state.scope}年生`;}
  function rankingRows(){
    const metric=state.metric;
    return athleteRows()
      .filter(row=>(state.scope==='all'||row.grade===Number(state.scope))&&Number.isFinite(sec(row[metric])))
      .sort((a,b)=>sec(a[metric])-sec(b[metric])||String(a.name).localeCompare(String(b.name),'ja'))
      .slice(0,20);
  }
  function table(){
    const rows=rankingRows();
    return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>${metricLabels[state.metric]}</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${gradeLabel(r.grade)}</td><td><strong>${r[state.metric]}</strong></td></tr>`).join('')}</tbody></table></div>`;
  }
  function panel(){
    return `<article class="data-card grade-block"><div class="grade-head"><h2>${scopeLabel()}ランキング</h2><span class="topic-badge">BEST 20</span></div><div class="tabs grade-metric-tabs"><button class="tab ${state.metric==='pb5000'?'active':''}" data-pb-rank-metric="pb5000">5000m</button><button class="tab ${state.metric==='pb10000'?'active':''}" data-pb-rank-metric="pb10000">10000m</button><button class="tab ${state.metric==='half'?'active':''}" data-pb-rank-metric="half">ハーフマラソン</button></div><div data-pb-rank-result>${table()}</div></article>`;
  }
  function template(){
    const scopes=[['all','全学年'],['1','1年生'],['2','2年生'],['3','3年生'],['4','4年生']];
    return `<section class="container page university-subpage"><div class="page-header"><div class="eyebrow">UNIVERSITY DATA / PB RANKING</div><h1>学年別PBランキング</h1><p>全学年または学年別に、現役選手の5000m・10000m・ハーフマラソンPB BEST20を比較できます。</p></div><div class="grade-selector" role="tablist" aria-label="対象学年を選択">${scopes.map(([value,label])=>`<button class="grade-selector-button ${value===state.scope?'active':''}" data-pb-rank-scope="${value}" role="tab" aria-selected="${value===state.scope}">${label}</button>`).join('')}</div><div id="pbGradeRankingPanel">${panel()}</div><div class="notice">全学年ランキングは、各大学の現行選手PBデータを同じ基準で集計し、各種目のタイム順に上位20名を表示しています。</div></section>`;
  }
  function rerenderPanel(){
    const host=document.querySelector('#pbGradeRankingPanel');
    if(host) host.innerHTML=panel();
    document.querySelectorAll('[data-pb-rank-scope]').forEach(btn=>{
      const active=btn.dataset.pbRankScope===state.scope;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-selected',String(active));
    });
  }

  document.addEventListener('click',event=>{
    const scope=event.target.closest('[data-pb-rank-scope]');
    if(scope){
      state.scope=scope.dataset.pbRankScope||'all';
      state.metric='pb5000';
      rerenderPanel();
      return;
    }
    const metric=event.target.closest('[data-pb-rank-metric]');
    if(!metric) return;
    state.metric=metric.dataset.pbRankMetric||'pb5000';
    metric.closest('.grade-block')?.querySelectorAll('[data-pb-rank-metric]').forEach(btn=>btn.classList.toggle('active',btn===metric));
    const result=document.querySelector('[data-pb-rank-result]');
    if(result) result.innerHTML=table();
  });

  if(typeof templates!=='undefined') templates['grade-rankings']=template;
  const route=location.hash.replace('#','');
  if(route==='grade-rankings'&&typeof render==='function') render('grade-rankings');
})();
