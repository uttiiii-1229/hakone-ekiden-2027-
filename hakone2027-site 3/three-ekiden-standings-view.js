// Full standings viewer: Hakone / Izumo / All-Japan, 2007-2026
(() => {
  const raceNames={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  function normalizeTeam(name=''){
    const n=String(name).trim();
    return ['國學院大學學','國學院大学','國學院大','国学院大学','国学院大'].includes(n)?'國學院大學':n;
  }
  function teamKey(name=''){
    return normalizeTeam(name).normalize('NFKC').replace(/[\s　]+/g,'').replace(/大學/g,'大学').replace(/大学$/,'').replace(/大$/,'');
  }
  function esc(value=''){
    return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function cleanAthlete(name=''){
    const s=String(name).trim();
    const stripped=s.replace(/\s*\([1-5]\)\s*.*$/,'').trim();
    return stripped||s;
  }
  const hakoneViews={overall:'総合成績',outward:'往路成績',return:'復路成績',detail:'総合・往路・復路'};
  let currentRace='hakone';
  let currentDecade='2017-2026';
  let currentYear=2026;
  let currentHakoneView='overall';

  function timeSeconds(time=''){
    const p=String(time).split(':').map(Number);
    if(p.length===3&&p.every(Number.isFinite)) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2&&p.every(Number.isFinite)) return p[0]*60+p[1];
    return null;
  }
  function fmt(sec){
    if(!Number.isFinite(sec)) return '—';
    const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;
    return h?`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`:`${m}:${String(s).padStart(2,'0')}`;
  }
  function fallbackHakoneResults(year){
    const db=window.hakonePhase2StaticDB||{};
    const yearDb=db?.[year];
    if(!yearDb) return [];
    const totals=new Map(),refs=new Set();
    for(let section=1;section<=10;section++){
      for(const row of yearDb[section]||[]){
        const sec=timeSeconds(row[4]);
        if(sec===null) continue;
        totals.set(row[2],(totals.get(row[2])||0)+sec);
        if(row[0]==='参考') refs.add(row[2]);
      }
    }
    const comp=[...totals.entries()].filter(([team])=>!refs.has(team)).sort((a,b)=>a[1]-b[1]);
    const rows=comp.map(([team,total],i)=>({rank:i+1,team,time:fmt(total)}));
    for(const team of refs) rows.push({rank:'参考',team,time:fmt(totals.get(team))});
    return rows;
  }
  function hakoneResults(year){
    const official=window.hakoneOfficialOverallDB?.[year];
    if(official?.results?.length) return official.results;
    return fallbackHakoneResults(year);
  }
  function externalResults(race,year){
    return window.threeEkidenStandingsDB?.[race]?.[year]||null;
  }
  function edition(race,year){
    if(race==='hakone') return year-1924;
    if(race==='izumo') return year-1988;
    return year-1968;
  }
  function yearsFor(decade){
    const [a,b]=decade.split('-').map(Number);
    return Array.from({length:b-a+1},(_,i)=>b-i);
  }
  function rowClass(rank){
    return rank==='OPN'||rank==='参考'||rank==='棄権'||rank==='失格'?'reference-row':'';
  }
  function rankText(rank){
    return rank===''||rank==null?'—':rank;
  }
  function timeText(time){
    return time||'—';
  }
  function sectionRows(race,year,team){
    const key=teamKey(team);
    const out=[];
    if(race==='hakone'){
      const db=window.hakonePhase2StaticDB?.[year]||{};
      for(let section=1;section<=10;section++){
        const hit=(db?.[section]||[]).find(r=>teamKey(r?.[2])===key);
        if(hit) out.push({section,athlete:hit?.[3]||'—',rank:hit?.[0],time:hit?.[4]||'—'});
      }
      return out;
    }
    const db=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!db||db.status!=='開催') return out;
    for(let section=1;section<=sectionCounts[race];section++){
      const hit=(db?.sections?.[section]||[]).find(r=>teamKey(r?.team)===key);
      if(hit) out.push({section,athlete:cleanAthlete(hit?.athlete||'—'),rank:hit?.rank,time:hit?.time||'—'});
    }
    return out;
  }
  function teamSectionDetail(race,year,team){
    const rows=sectionRows(race,year,team);
    if(!rows.length) return `<div class="standings-team-detail"><strong>${esc(normalizeTeam(team))}</strong><div class="notice">この大会の区間別選手データを確認できませんでした。</div></div>`;
    return `<div class="standings-team-detail"><div class="standings-team-detail-head"><strong>${esc(normalizeTeam(team))}</strong><span>${raceNames[race]} ${year}年 区間別成績</span></div><div class="table-wrap"><table class="standings-section-table"><thead><tr><th>区間</th><th>選手</th><th>区間順位</th><th>タイム</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.section}区</strong></td><td>${esc(r.athlete)}</td><td>${esc(rankText(r.rank))}</td><td>${esc(timeText(r.time))}</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function teamButton(team){
    return `<button type="button" class="standings-team-button" data-standings-team="${encodeURIComponent(team)}" aria-expanded="false">${esc(normalizeTeam(team))}</button>`;
  }
  function resultRows(results,race,year,mode='overall'){
    return results.map((r,i)=>{
      const rank=mode==='outward'?r.outwardRank:mode==='return'?r.returnRank:r.rank;
      let main='';
      if(mode==='outward') main=`<td><strong>${rankText(r.outwardRank)}</strong></td><td>${teamButton(r.team)}</td><td>${timeText(r.outwardTime)}</td>`;
      else if(mode==='return') main=`<td><strong>${rankText(r.returnRank)}</strong></td><td>${teamButton(r.team)}</td><td>${timeText(r.returnTime)}</td>`;
      else if(mode==='detail') main=`<td><strong>${rankText(r.rank)}</strong></td><td>${teamButton(r.team)}</td><td>${timeText(r.time)}</td><td>${rankText(r.outwardRank)}</td><td>${timeText(r.outwardTime)}</td><td>${rankText(r.returnRank)}</td><td>${timeText(r.returnTime)}</td>`;
      else main=`<td><strong>${rankText(r.rank)}</strong></td><td>${teamButton(r.team)}</td><td>${timeText(r.time)}</td>`;
      const colspan=mode==='detail'?7:3;
      return `<tr class="${rowClass(rank)}">${main}</tr><tr class="standings-team-detail-row" data-team-detail-row="${i}" hidden><td colspan="${colspan}">${teamSectionDetail(race,year,r.team)}</td></tr>`;
    }).join('');
  }
  function hakoneTable(results,year){
    if(currentHakoneView==='outward'){
      return `<div class="table-wrap"><table><thead><tr><th>往路順位</th><th>大学・チーム</th><th>往路タイム</th></tr></thead><tbody>${resultRows(results,'hakone',year,'outward')}</tbody></table></div>`;
    }
    if(currentHakoneView==='return'){
      return `<div class="table-wrap"><table><thead><tr><th>復路順位</th><th>大学・チーム</th><th>復路タイム</th></tr></thead><tbody>${resultRows(results,'hakone',year,'return')}</tbody></table></div>`;
    }
    if(currentHakoneView==='detail'){
      return `<div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th><th>往路順位</th><th>往路タイム</th><th>復路順位</th><th>復路タイム</th></tr></thead><tbody>${resultRows(results,'hakone',year,'detail')}</tbody></table></div>`;
    }
    return `<div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${resultRows(results,'hakone',year,'overall')}</tbody></table></div>`;
  }
  function resultBlock(race,year){
    const ed=edition(race,year);
    let status='開催',results=[];
    if(race==='hakone') {
      const d=window.hakoneOfficialOverallDB?.[year];
      if(d){status=d.status||'開催';results=d.results||[];}
      else results=hakoneResults(year);
    } else {
      const d=externalResults(race,year);
      if(d){status=d.status; results=d.results||[];}
      else if(year===2026){status='未開催';}
    }
    if(status!=='開催') return `<div class="notice"><strong>${raceNames[race]} 第${ed}回（${year}年）:</strong> ${status}</div>`;
    if(!results.length) return `<div class="notice">${year}年の総合成績DBを読み込めませんでした。</div>`;
    if(race==='hakone'){
      const title=hakoneViews[currentHakoneView]||'総合成績';
      return `<div class="section-db-head" style="margin-top:16px"><div><h2>箱根駅伝 第${ed}回（${year}年）${title}</h2><p class="muted">大学名をタップすると、その大会の各区間の選手・区間順位・タイムを確認できます。</p></div></div>${hakoneTable(results,year)}`;
    }
    return `<div class="section-db-head" style="margin-top:16px"><div><h2>${raceNames[race]} 第${ed}回（${year}年）総合成績</h2><p class="muted">大学名をタップすると、その大会の各区間の選手・区間順位・タイムを確認できます。</p></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${resultRows(results,race,year,'overall')}</tbody></table></div>`;
  }
  function shell(){
    const years=yearsFor(currentDecade);
    if(!years.includes(currentYear)) currentYear=years[0];
    return `<section class="container page" id="threeEkidenStandings" style="padding-top:0"><div class="page-header"><h1>三大駅伝・全出場校総合成績</h1><p>箱根駅伝・出雲駅伝・全日本大学駅伝の2007〜2026年を収録。総合順位の大学名から各区間の選手成績を展開できます。</p></div><div class="tabs">${Object.entries(raceNames).map(([k,v])=>`<button class="tab ${k===currentRace?'active':''}" data-three-race="${k}">${v}</button>`).join('')}</div>${currentRace==='hakone'?`<div class="tabs" style="margin-top:10px">${Object.entries(hakoneViews).map(([k,v])=>`<button class="tab ${k===currentHakoneView?'active':''}" data-hakone-view="${k}">${v}</button>`).join('')}</div>`:''}<div class="tabs" style="margin-top:10px"><button class="tab ${currentDecade==='2017-2026'?'active':''}" data-three-decade="2017-2026">2017–2026</button><button class="tab ${currentDecade==='2007-2016'?'active':''}" data-three-decade="2007-2016">2007–2016</button></div><div class="tabs" style="margin-top:10px">${years.map(y=>`<button class="tab ${y===currentYear?'active':''}" data-three-year="${y}">${y}年</button>`).join('')}</div><div id="threeEkidenResult">${resultBlock(currentRace,currentYear)}</div></section>`;
  }

  if(!document.getElementById('standingsTeamDetailStyles')){
    const style=document.createElement('style');
    style.id='standingsTeamDetailStyles';
    style.textContent=`.standings-team-button{border:0;background:transparent;padding:3px 0;color:#174f7d;font:inherit;font-weight:800;text-decoration:underline;text-decoration-color:#9ab9d1;text-underline-offset:3px;cursor:pointer}.standings-team-button:hover,.standings-team-button[aria-expanded="true"]{color:#0b376d;text-decoration-color:#0b376d}.standings-team-detail-row>td{padding:0!important;background:#f7fafc}.standings-team-detail{padding:14px 16px 16px;border-top:1px solid #dbe6ee;border-bottom:1px solid #dbe6ee}.standings-team-detail-head{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;margin-bottom:9px}.standings-team-detail-head strong{font-size:1rem;color:#123f68}.standings-team-detail-head span{font-size:.72rem;color:#718190}.standings-section-table{min-width:560px}.standings-section-table th,.standings-section-table td{white-space:nowrap}@media(max-width:760px){.standings-team-detail{padding:11px 8px 13px}.standings-section-table{min-width:500px}.standings-team-button{text-align:left}}`;
    document.head.appendChild(style);
  }

  const previousHistoryTemplate=historyTemplate;
  historyTemplate=function(){ return previousHistoryTemplate()+shell(); };
  if(typeof templates!=='undefined') templates.history=historyTemplate;

  function rerenderShell(){
    const host=document.querySelector('#threeEkidenStandings');
    if(host){
      const wrap=document.createElement('div'); wrap.innerHTML=shell();
      host.replaceWith(wrap.firstElementChild);
    }
  }
  document.addEventListener('click',e=>{
    const team=e.target.closest('[data-standings-team]');
    if(team){
      const mainRow=team.closest('tr');
      const detailRow=mainRow?.nextElementSibling;
      if(detailRow?.classList.contains('standings-team-detail-row')){
        const open=detailRow.hidden;
        const tbody=mainRow.parentElement;
        tbody?.querySelectorAll('.standings-team-detail-row').forEach(row=>row.hidden=true);
        tbody?.querySelectorAll('.standings-team-button').forEach(btn=>btn.setAttribute('aria-expanded','false'));
        detailRow.hidden=!open;
        team.setAttribute('aria-expanded',String(open));
      }
      return;
    }
    const race=e.target.closest('[data-three-race]');
    if(race){currentRace=race.dataset.threeRace; rerenderShell(); return;}
    const view=e.target.closest('[data-hakone-view]');
    if(view){currentHakoneView=view.dataset.hakoneView; rerenderShell(); return;}
    const dec=e.target.closest('[data-three-decade]');
    if(dec){currentDecade=dec.dataset.threeDecade; currentYear=yearsFor(currentDecade)[0]; rerenderShell(); return;}
    const yr=e.target.closest('[data-three-year]');
    if(yr){currentYear=Number(yr.dataset.threeYear); rerenderShell();}
  });

  if((location.hash.replace('#','')||'home')==='history'&&typeof render==='function') render('history');
})();