// University average ranking fix — 2026-09-07
// Rankings are shown only when a school has 10 valid PBs for that event.
// Event averages use the fastest 10 valid PBs for each event independently.
(() => {
  const toSec=v=>{
    const s=String(v||'').trim(); if(!s||s==='—') return null;
    const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2) return p[0]*60+p[1];
    return null;
  };
  const fmt=(seconds,half)=>{
    if(!Number.isFinite(seconds)) return '—';
    if(half){
      const t=Math.round(seconds),h=Math.floor(t/3600),m=Math.floor((t%3600)/60),s=t%60;
      return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    const cs=Math.round(seconds*100),m=Math.floor(cs/6000),r=cs-m*6000;
    return `${m}:${(r/100).toFixed(2).padStart(5,'0')}`;
  };
  const metricDefs=[['5000m',2,false],['10000m',3,false],['ハーフ',4,true]];
  function rows(team){ return window.expandedTopAthletes2027?.[team]||[]; }
  function metric(team,idx,half){
    const vals=rows(team).map(r=>toSec(r[idx])).filter(Number.isFinite).sort((a,b)=>a-b).slice(0,10);
    const avg=vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null;
    return {count:vals.length,seconds:avg,value:fmt(avg,half)};
  }
  function ranked(){
    const teams=Object.keys(window.expandedTopAthletes2027||{});
    const out={};
    metricDefs.forEach(([label,idx,half])=>{
      const list=teams.map(team=>({team,...metric(team,idx,half)}))
        .filter(x=>x.count===10&&Number.isFinite(x.seconds)).sort((a,b)=>a.seconds-b.seconds);
      out[label]=list;
    });
    return out;
  }
  function teamName(card){ return card.querySelector('.university-history-head h2')?.textContent?.trim()||''; }
  function apply(){
    if(location.hash.replace('#','')!=='teams') return;
    const rank=ranked();

    const overview=document.querySelector('.average-top3-overview');
    if(overview){
      const groups=[...overview.querySelectorAll('.average-top3-card')];
      metricDefs.forEach(([label],i)=>{
        const card=groups[i]; if(!card)return;
        const list=card.querySelector('.average-top3-list'); if(!list)return;
        const top=rank[label].slice(0,3);
        list.innerHTML=top.length ? top.map((x,j)=>`<div><b>${j+1}</b><span><strong>${x.team}</strong></span><em>${x.value}</em></div>`).join('') : '<div class="muted">10名分の記録が揃った大学なし</div>';
      });
    }

    document.querySelectorAll('.university-history-card').forEach(card=>{
      const team=teamName(card); if(!team)return;
      const cells=[...card.querySelectorAll('.top10-average-grid > div')];
      metricDefs.forEach(([label,idx,half],i)=>{
        const cell=cells[i]; if(!cell)return;
        const m=metric(team,idx,half);
        const strong=cell.querySelector('strong');
        const small=cell.querySelector('small');
        if(strong){
          const pos=m.count===10 ? rank[label].findIndex(x=>x.team===team)+1 : 0;
          strong.innerHTML=`${m.value}${pos?` <em>${pos}位</em>`:''}`;
        }
        if(small) small.textContent=m.count===10?'10名平均':`${m.count}名確認平均（ランキング対象外）`;
      });
    });
  }
  let queued=false;
  const schedule=()=>{ if(queued)return; queued=true; requestAnimationFrame(()=>{queued=false;apply();}); };
  new MutationObserver(schedule).observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
  window.addEventListener('hashchange',schedule);
  schedule();
})();