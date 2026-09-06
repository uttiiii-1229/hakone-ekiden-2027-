// Expanded university directory: every school that appeared in Hakone 2007-2026
(() => {
  function normalizeTeam(name=''){
    const n=String(name).trim();
    if(n==='國學院大学') return '國學院大學';
    return n;
  }
  function isSelection(name=''){
    return /学生連合|学連選抜|関東学連|選抜/.test(String(name));
  }
  const hakone2026Order=['青山学院大学','國學院大學','順天堂大学','早稲田大学','中央大学','駒澤大学','城西大学','創価大学','帝京大学','日本大学','中央学院大学','東海大学','神奈川大学','東洋大学','日本体育大学','東京国際大学','山梨学院大学','東京農業大学','大東文化大学','立教大学'];
  const tasukiColors={
    '青山学院大学':'#2f9b79','國學院大學':'#8f1d60','順天堂大学':'#2874b8','早稲田大学':'#7b1638','中央大学':'#d21f2b','駒澤大学':'#73539d','城西大学':'#d73b75','創価大学':'#1d58a7','帝京大学':'#cf202f','日本大学':'#d71920',
    '中央学院大学':'#6f2c91','東海大学':'#1698d1','神奈川大学':'#243f8f','東洋大学':'#273c80','日本体育大学':'#b91d2c','東京国際大学':'#194f9b','山梨学院大学':'#005aa9','東京農業大学':'#2f7d32','大東文化大学':'#71b644','立教大学':'#5a2a82',
    '法政大学':'#f28c28','明治大学':'#652d90','国士舘大学':'#7d001f','専修大学':'#2c8a54','拓殖大学':'#d3543b','駿河台大学':'#2a6f9e','筑波大学':'#4d2785','上武大学':'#136b4f','亜細亜大学':'#233a72'
  };
  function teamIcon(team){
    const color=tasukiColors[team]||'#52718d';
    const initial=team.replace(/大学|大學/g,'').slice(0,1);
    return `<span class="university-tasuki-icon" style="--tasuki:${color}" aria-hidden="true"><span class="university-icon-letter">${initial}</span><span class="university-icon-sash"></span></span>`;
  }
  function timeToSeconds(v){
    const s=String(v||'').trim(); if(!s||s==='—') return null;
    const p=s.split(':').map(Number); if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===3)return p[0]*3600+p[1]*60+p[2];
    if(p.length===2)return p[0]*60+p[1];
    return null;
  }
  function formatAverage(seconds,kind){
    if(!Number.isFinite(seconds)) return '—';
    if(kind==='half'){
      const h=Math.floor(seconds/3600),m=Math.floor((seconds%3600)/60),s=Math.round(seconds%60);
      return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    const m=Math.floor(seconds/60),s=(seconds-m*60).toFixed(2).padStart(5,'0');
    return `${m}:${s}`;
  }
  function top10Averages(team){
    const rows=pbRows(team).slice(0,10);
    const metrics=[['5000m',2,'track'],['10000m',3,'track'],['ハーフ',4,'half']];
    return metrics.map(([label,idx,kind])=>{
      const vals=rows.map(r=>timeToSeconds(r[idx])).filter(Number.isFinite);
      const avg=vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null;
      return {label,key:label,value:formatAverage(avg,kind),seconds:avg,count:vals.length};
    });
  }
  function hakoneUniversityStats(){
    const db=window.hakonePhase2StaticDB||{};
    const map=new Map();
    for(let year=2007;year<=2026;year++){
      const participants=new Set((db?.[year]?.[1]||[]).map(r=>normalizeTeam(r?.[2])).filter(t=>t&&!isSelection(t)));
      participants.forEach(team=>{
        if(!map.has(team)) map.set(team,{team,years:new Set(),runs:0,athletes:new Set()});
        map.get(team).years.add(year);
      });
      for(let section=1;section<=10;section++){
        (db?.[year]?.[section]||[]).forEach(r=>{
          const team=normalizeTeam(r?.[2]);
          if(!map.has(team)) return;
          map.get(team).runs++;
          const athlete=String(r?.[3]||'').replace(/[\s　]+/g,'');
          if(athlete) map.get(team).athletes.add(athlete);
        });
      }
    }
    return [...map.values()].map(x=>{
      const years=[...x.years].sort((a,b)=>a-b);
      return {
        team:x.team,
        appearances:years.length,
        years,
        first:years[0],
        latest:years[years.length-1],
        runs:x.runs,
        athleteCount:x.athletes.size
      };
    }).sort((a,b)=>{
      const ai=hakone2026Order.indexOf(a.team),bi=hakone2026Order.indexOf(b.team);
      if(ai>=0||bi>=0){
        if(ai>=0&&bi>=0) return ai-bi;
        return ai>=0?-1:1;
      }
      return b.appearances-a.appearances||b.latest-a.latest||a.team.localeCompare(b.team,'ja');
    });
  }
  function pbRows(team){
    return typeof expandedTopAthletes2027!=='undefined' ? (expandedTopAthletes2027[team]||[]) : [];
  }
  function averageRanks(stats){
    const ranks={};
    ['5000m','10000m','ハーフ'].forEach(metric=>{
      const list=stats.map(s=>{
        const a=top10Averages(s.team).find(x=>x.key===metric);
        return {team:s.team,seconds:a?.seconds,count:a?.count||0};
      }).filter(x=>Number.isFinite(x.seconds)&&x.count>0).sort((a,b)=>a.seconds-b.seconds);
      list.forEach((x,i)=>{if(!ranks[x.team])ranks[x.team]={};ranks[x.team][metric]=i+1;});
    });
    return ranks;
  }
  function mergedCurrentRows(team){
    const top=pbRows(team);
    const seen=new Set(top.map(r=>String(r[0]).replace(/[\\s　]+/g,'')));
    const extra=[];
    if(typeof fullRosterData!=='undefined'){
      (fullRosterData[team]||[]).forEach(r=>{
        const key=String(r[0]).replace(/[\\s　]+/g,'');
        if(seen.has(key))return;
        extra.push([r[0],r[1],'—',r[2]||'—',r[3]||'—']);
      });
    }
    return {top,extra};
  }
  function pbTableRows(rows){
    return rows.map(r=>'<tr><td data-label="選手"><strong>'+r[0]+'</strong></td><td data-label="学年">'+r[1]+'年</td><td data-label="5000m PB">'+r[2]+'</td><td data-label="10000m PB">'+r[3]+'</td><td data-label="ハーフ PB">'+r[4]+'</td></tr>').join('');
  }
  function historicalAthletes(team){
    const db=window.hakonePhase2StaticDB||{};
    const map=new Map();
    for(let year=2007;year<=2026;year++){
      for(let section=1;section<=10;section++){
        (db?.[year]?.[section]||[]).forEach(r=>{
          if(normalizeTeam(r?.[2])!==team) return;
          const display=String(r?.[3]||'').trim();
          const key=display.replace(/[\s　]+/g,'');
          if(!key)return;
          if(!map.has(key)) map.set(key,{name:display,runs:0,years:new Set(),sections:new Set()});
          const a=map.get(key);a.runs++;a.years.add(year);a.sections.add(section);
        });
      }
    }
    return [...map.values()].map(a=>({...a,years:[...a.years].sort((x,y)=>x-y),sections:[...a.sections].sort((x,y)=>x-y)})).sort((a,b)=>b.runs-a.runs||a.name.localeCompare(b.name,'ja'));
  }
  function athleteDataBlock(team){
    const merged=mergedCurrentRows(team);
    const top=merged.top,extra=merged.extra;
    let pb='<div class="notice">現行選手PBは確認できたデータから順次追加しています。</div>';
    if(top.length||extra.length){
      pb='<h3>現行選手PB</h3>'+
        '<div class="table-wrap compact university-pb-table"><table><thead><tr><th>選手</th><th>学年</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>'+pbTableRows(top.slice(0,10))+'</tbody></table></div>'+
        (extra.length?'<details class="other-current-athletes"><summary>その他の選手（'+extra.length+'名）</summary><div class="table-wrap compact university-pb-table"><table><thead><tr><th>選手</th><th>学年</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>'+pbTableRows(extra)+'</tbody></table></div></details>':'');
    }
    const hist=historicalAthletes(team);
    const history='<details class="historical-athletes-details"><summary>箱根歴代出走選手（2007〜2026）</summary><div class="table-wrap compact"><table><thead><tr><th>選手</th><th>出走</th><th>年度</th><th>区間</th></tr></thead><tbody>'+hist.map(a=>'<tr><td><strong>'+a.name+'</strong></td><td>'+a.runs+'回</td><td>'+a.years.join('・')+'</td><td>'+a.sections.map(s=>s+'区').join('・')+'</td></tr>').join('')+'</tbody></table></div></details>';
    return pb+history;
  }
  function universityDirectoryTemplate(){
    const stats=hakoneUniversityStats();
    const currentPbCount=stats.filter(s=>pbRows(s.team).length).length;
    const avgRanks=averageRanks(stats);
    return `<section class="container page university-directory-page">
      <div class="page-header">
        <div class="eyebrow">UNIVERSITY DATA / HAKONE 20 YEARS</div>
        <h1>大学・選手データ</h1>
        <p>2007〜2026年の20大会で箱根駅伝本戦に1度でも出場した大学をすべて収録しています。</p>
      </div>
      <div class="topic-summary">
        <div><strong>${stats.length}</strong><span>箱根出場大学</span></div>
        <div><strong>2007–2026</strong><span>対象20大会</span></div>
        <div><strong>${currentPbCount}</strong><span>現行PB詳細収録校</span></div>
      </div>
      <div class="notice"><strong>データ範囲:</strong> 全大学に箱根出場回数・出場年度・直近出場・収録区間走数・歴代出走選手数を掲載します。現行選手PBは確認できた大学から順次追加します。</div>
      <div class="university-directory-grid">
        ${stats.map(s=>`<article class="data-card university-history-card">
          <div class="university-history-head"><div class="university-title-with-icon">${teamIcon(s.team)}<div><span class="topic-kicker">${hakone2026Order.includes(s.team)?'2026 HAKONE '+(hakone2026Order.indexOf(s.team)+1)+'位':'HAKONE HISTORY'}</span><h2>${s.team}</h2></div></div><span class="topic-badge">${s.appearances}回出場</span></div>
          <div class="university-history-stats">
            <div><span>初出場（対象期間）</span><strong>${s.first}</strong></div>
            <div><span>直近出場</span><strong>${s.latest}</strong></div>
            <div><span>収録区間走</span><strong>${s.runs}</strong></div>
            <div><span>収録選手</span><strong>${s.athleteCount}</strong></div>
          </div>
          ${pbRows(s.team).length?`<div class="top10-average-block"><h3>TOP10選手 平均タイム</h3><div class="top10-average-grid">${top10Averages(s.team).map(a=>`<div><span>${a.label}</span><strong>${a.value}${avgRanks[s.team]?.[a.key]?` <em>${avgRanks[s.team][a.key]}位</em>`:''}</strong><small>${a.count===10?'10名平均':a.count+'名確認平均'}</small></div>`).join('')}</div></div>`:''}
          <p class="muted university-years"><strong>出場年度:</strong> ${s.years.join('・')}</p>
          <details class="university-pb-details">
            <summary>選手データを見る</summary>
            ${athleteDataBlock(s.team)}
          </details>
        </article>`).join('')}
      </div>
    </section>`;
  }
  if(typeof templates!=='undefined') templates.teams=universityDirectoryTemplate;
  if(location.hash.replace('#','')==='teams' && typeof render==='function') render('teams');
})();