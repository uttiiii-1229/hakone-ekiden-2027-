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
  function canonicalAthlete(name='',context={}){
    const raw=String(name||'').trim();
    if(typeof window.canonicalAthleteIdentity==='function') return window.canonicalAthleteIdentity(raw,context);
    return typeof window.canonicalAthleteName==='function' ? window.canonicalAthleteName(raw) : raw;
  }
  const hakone2026Order=['青山学院大学','國學院大學','順天堂大学','早稲田大学','中央大学','駒澤大学','城西大学','創価大学','帝京大学','日本大学','中央学院大学','東海大学','神奈川大学','東洋大学','日本体育大学','東京国際大学','山梨学院大学','東京農業大学','大東文化大学','立教大学'];
  // 第102回（2026年）終了時点の箱根駅伝・大学別通算出場回数。
  // 2007〜2026のサイト収録期間だけでなく、第1回からの通算回数を表示する。
  const hakoneAllTimeAppearances={
    '中央大学':99,'早稲田大学':95,'日本大学':92,'法政大学':85,'東洋大学':84,'日本体育大学':78,
    '専修大学':72,'東京農業大学':71,'順天堂大学':67,'明治大学':65,'筑波大学':61,'駒澤大学':60,
    '神奈川大学':56,'大東文化大学':54,'国士舘大学':52,'東海大学':52,'拓殖大学':42,'山梨学院大学':39,
    '亜細亜大学':33,'立教大学':31,'青山学院大学':31,'帝京大学':27,'中央学院大学':25,'城西大学':20,
    '國學院大學':19,'上武大学':11,'東京国際大学':9,'創価大学':9,'関東学院大学':6,'駿河台大学':2,'平成国際大学':1
  };
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
      const total=Math.round(seconds);
      const h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60;
      return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
    const centiseconds=Math.round(seconds*100);
    const m=Math.floor(centiseconds/6000);
    const remain=centiseconds-m*6000;
    return `${m}:${(remain/100).toFixed(2).padStart(5,'0')}`;
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
          const athlete=canonicalAthlete(r?.[3]||'',{race:'hakone',year,team:r?.[2]||''}).replace(/[\s　]+/g,'');
          if(athlete) map.get(team).athletes.add(athlete);
        });
      }
    }
    return [...map.values()].map(x=>{
      const years=[...x.years].sort((a,b)=>a-b);
      return {
        team:x.team,
        appearances:hakoneAllTimeAppearances[x.team]||years.length,
        periodAppearances:years.length,
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
    if(window.currentAthletePbResolver?.currentRows){
      return window.currentAthletePbResolver.currentRows(team).map(r=>[
        r.name,r.grade||'',r.pb5000||'—',r.pb10000||'—',r.half||'—'
      ]);
    }
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
    // pbRows already represents the unified 2026 current roster/PB view.
    return {top:pbRows(team),extra:[]};
  }
  function gradeLabel(v){
    const g=String(v??'').normalize('NFKC').trim().replace(/年生?$/,'');
    return /^[1-4]$/.test(g)?g+'年':'—';
  }
  function pbTableRows(rows){
    return rows.map(r=>'<tr><td data-label="選手"><strong>'+r[0]+'</strong></td><td data-label="学年">'+gradeLabel(r[1])+'</td><td data-label="5000m PB">'+r[2]+'</td><td data-label="10000m PB">'+r[3]+'</td><td data-label="ハーフ PB">'+r[4]+'</td></tr>').join('');
  }
  function historicalAthletes(team){
    const db=window.hakonePhase2StaticDB||{};
    const map=new Map();
    for(let year=2007;year<=2026;year++){
      for(let section=1;section<=10;section++){
        (db?.[year]?.[section]||[]).forEach(r=>{
          if(normalizeTeam(r?.[2])!==team) return;
          const display=canonicalAthlete(r?.[3]||'',{race:'hakone',year,team:r?.[2]||''});
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
    let pb='<div class="notice">2026年度の現役選手を対象に、確認済みの最新PBを表示しています。</div>';
    if(top.length||extra.length){
      pb='<h3>現行選手PB</h3>'+
        '<div class="table-wrap compact university-pb-table"><table><thead><tr><th>選手</th><th>学年</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>'+pbTableRows(top.slice(0,10))+'</tbody></table></div>'+
        (extra.length?'<details class="other-current-athletes"><summary>その他の選手（'+extra.length+'名）</summary><div class="table-wrap compact university-pb-table"><table><thead><tr><th>選手</th><th>学年</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>'+pbTableRows(extra)+'</tbody></table></div></details>':'');
    }
    const hist=historicalAthletes(team);
    const history='<details class="historical-athletes-details"><summary>箱根歴代出走選手（2007〜2026）</summary><div class="table-wrap compact"><table><thead><tr><th>選手</th><th>出走</th><th>年度</th><th>区間</th></tr></thead><tbody>'+hist.map(a=>'<tr><td><strong>'+a.name+'</strong></td><td>'+a.runs+'回</td><td>'+a.years.join('・')+'</td><td>'+a.sections.map(s=>s+'区').join('・')+'</td></tr>').join('')+'</tbody></table></div></details>';
    return pb+history;
  }
  function averageTop3(stats){
    return ['5000m','10000m','ハーフ'].map(metric=>{
      const list=stats.map(s=>{
        const a=top10Averages(s.team).find(x=>x.key===metric);
        return {team:s.team,...a};
      }).filter(x=>Number.isFinite(x.seconds)).sort((a,b)=>a.seconds-b.seconds).slice(0,3);
      return {metric,list};
    });
  }
  function universityDirectoryTemplate(){
    const stats=hakoneUniversityStats();
    const currentPbCount=stats.filter(s=>pbRows(s.team).length).length;
    const avgRanks=averageRanks(stats);
    const top3=averageTop3(stats);
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
      <div class="average-top3-overview">
        ${top3.map(group=>`<article class="data-card average-top3-card"><div class="average-top3-head"><span>TOP10平均</span><h2>${group.metric}</h2></div><div class="average-top3-list">${group.list.map((x,i)=>`<div><b>${i+1}</b><span>${teamIcon(x.team)}<strong>${x.team}</strong></span><em>${x.value}</em></div>`).join('')}</div></article>`).join('')}
      </div>
      <div class="notice"><strong>データ範囲:</strong> 出場回数は第1回〜第102回（2026年）までの大学別通算回数を表示します。直近出場・区間走数・歴代出走選手数は、サイト収録範囲の2007〜2026年を対象にしています。現行選手PBは2026年度の現役名簿・公式PB・2026年公式大会結果を統合し、確認できた最速記録を表示します。</div>
      <div class="university-directory-grid">
        ${stats.map(s=>`<article class="data-card university-history-card">
          <div class="university-history-head"><div class="university-title-with-icon">${teamIcon(s.team)}<div><span class="topic-kicker">${hakone2026Order.includes(s.team)?'2026 HAKONE '+(hakone2026Order.indexOf(s.team)+1)+'位':'HAKONE HISTORY'}</span><h2>${s.team}</h2></div></div><span class="topic-badge">通算 ${s.appearances}回出場</span></div>
          <div class="university-history-stats">
            <div><span>2007〜2026出場</span><strong>${s.periodAppearances}回</strong></div>
            <div><span>直近出場</span><strong>${s.latest}</strong></div>
            <div><span>収録区間走</span><strong>${s.runs}</strong></div>
            <div><span>収録選手</span><strong>${s.athleteCount}</strong></div>
          </div>
          ${pbRows(s.team).length?`<div class="top10-average-block"><h3>TOP10選手 平均タイム</h3><div class="top10-average-grid">${top10Averages(s.team).map(a=>`<div><span>${a.label}</span><strong>${a.value}${avgRanks[s.team]?.[a.key]?` <em>${avgRanks[s.team][a.key]}位</em>`:''}</strong><small>${a.count===10?'10名平均':a.count+'名確認平均'}</small></div>`).join('')}</div></div>`:''}
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