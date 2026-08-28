// Full standings viewer: Hakone / Izumo / All-Japan, 2007-2026
(() => {
  const raceNames={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
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
  function hakoneTable(results){
    if(currentHakoneView==='outward'){
      return `<div class="table-wrap"><table><thead><tr><th>往路順位</th><th>大学・チーム</th><th>往路タイム</th></tr></thead><tbody>${results.map(r=>`<tr class="${rowClass(r.outwardRank)}"><td><strong>${rankText(r.outwardRank)}</strong></td><td><strong>${r.team}</strong></td><td>${timeText(r.outwardTime)}</td></tr>`).join('')}</tbody></table></div>`;
    }
    if(currentHakoneView==='return'){
      return `<div class="table-wrap"><table><thead><tr><th>復路順位</th><th>大学・チーム</th><th>復路タイム</th></tr></thead><tbody>${results.map(r=>`<tr class="${rowClass(r.returnRank)}"><td><strong>${rankText(r.returnRank)}</strong></td><td><strong>${r.team}</strong></td><td>${timeText(r.returnTime)}</td></tr>`).join('')}</tbody></table></div>`;
    }
    if(currentHakoneView==='detail'){
      return `<div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th><th>往路順位</th><th>往路タイム</th><th>復路順位</th><th>復路タイム</th></tr></thead><tbody>${results.map(r=>`<tr class="${rowClass(r.rank)}"><td><strong>${rankText(r.rank)}</strong></td><td><strong>${r.team}</strong></td><td>${timeText(r.time)}</td><td>${rankText(r.outwardRank)}</td><td>${timeText(r.outwardTime)}</td><td>${rankText(r.returnRank)}</td><td>${timeText(r.returnTime)}</td></tr>`).join('')}</tbody></table></div>`;
    }
    return `<div class="table-wrap"><table><thead><tr><th>総合順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${results.map(r=>`<tr class="${rowClass(r.rank)}"><td><strong>${rankText(r.rank)}</strong></td><td><strong>${r.team}</strong></td><td>${timeText(r.time)}</td></tr>`).join('')}</tbody></table></div>`;
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
      return `<div class="section-db-head" style="margin-top:16px"><div><h2>箱根駅伝 第${ed}回（${year}年）${title}</h2><p class="muted">箱根駅伝公式「大会詳細」の総合・往路・復路順位と記録を使用しています。</p></div></div>${hakoneTable(results)}`;
    }
    return `<div class="section-db-head" style="margin-top:16px"><div><h2>${raceNames[race]} 第${ed}回（${year}年）総合成績</h2><p class="muted">公式記録に掲載された全出場校を表示しています。</p></div></div>
      <div class="table-wrap"><table><thead><tr><th>順位</th><th>大学・チーム</th><th>総合タイム</th></tr></thead><tbody>${results.map(r=>`<tr class="${rowClass(r.rank)}"><td><strong>${rankText(r.rank)}</strong></td><td><strong>${r.team}</strong></td><td>${timeText(r.time)}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function shell(){
    const years=yearsFor(currentDecade);
    if(!years.includes(currentYear)) currentYear=years[0];
    return `<section class="container page" id="threeEkidenStandings" style="padding-top:0">
      <div class="page-header"><h1>三大駅伝・全出場校総合成績</h1><p>箱根駅伝・出雲駅伝・全日本大学駅伝の2007〜2026年を収録。箱根駅伝は総合・往路・復路を個別に確認できます。</p></div>
      <div class="tabs">${Object.entries(raceNames).map(([k,v])=>`<button class="tab ${k===currentRace?'active':''}" data-three-race="${k}">${v}</button>`).join('')}</div>
      ${currentRace==='hakone'?`<div class="tabs" style="margin-top:10px">${Object.entries(hakoneViews).map(([k,v])=>`<button class="tab ${k===currentHakoneView?'active':''}" data-hakone-view="${k}">${v}</button>`).join('')}</div>`:''}
      <div class="tabs" style="margin-top:10px"><button class="tab ${currentDecade==='2017-2026'?'active':''}" data-three-decade="2017-2026">2017–2026</button><button class="tab ${currentDecade==='2007-2016'?'active':''}" data-three-decade="2007-2016">2007–2016</button></div>
      <div class="tabs" style="margin-top:10px">${years.map(y=>`<button class="tab ${y===currentYear?'active':''}" data-three-year="${y}">${y}年</button>`).join('')}</div>
      <div id="threeEkidenResult">${resultBlock(currentRace,currentYear)}</div>
    </section>`;
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