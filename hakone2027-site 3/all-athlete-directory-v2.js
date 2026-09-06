// Unified all-athlete directory across Hakone, Izumo, Zennihon and track data.
(() => {
  const races={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const state={query:'',team:'all',sort:'pb5000',page:1,pageSize:50};
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const teamNorm=s=>String(s||'').normalize('NFKC').replace('國學院大学','國學院大學').replace('國學院大學學','國學院大學').replace(/大$/,'大学').trim();
  const athleteNameFixes={
    '久 龍':'高久 龍','髙久 龍':'高久 龍',
    'Matt LＬano':'マット リャノ','Matt LLano':'マット リャノ'
  };
  function athleteDisplayName(name){
    let s=String(name||'').trim();
    if(athleteNameFixes[s]) return athleteNameFixes[s];
    if(typeof window.normalizeForeignAthleteName==='function'){
      const n=window.normalizeForeignAthleteName(s);
      if(n&&n!==s) return n;
    }
    s=s.normalize('NFKC').replace(/\uFFFD/g,'').replace(/[\uE000-\uF8FF]/g,'');
    return athleteNameFixes[s]||s;
  }
  const teamReadings={
    '青山学院大学':'あおやまがくいん','亜細亜大学':'あじあ','育英大学':'いくえい','上武大学':'じょうぶ','大阪経済大学':'おおさかけいざい',
    '大阪体育大学':'おおさかたいいく','関西大学':'かんさい','関西学院大学':'かんせいがくいん','神奈川大学':'かながわ','京都大学':'きょうと',
    '京都産業大学':'きょうとさんぎょう','皇學館大学':'こうがっかん','國學院大學':'こくがくいん','国士舘大学':'こくしかん','駒澤大学':'こまざわ',
    '札幌学院大学':'さっぽろがくいん','城西大学':'じょうさい','順天堂大学':'じゅんてんどう','信州大学':'しんしゅう','駿河台大学':'するがだい',
    '専修大学':'せんしゅう','創価大学':'そうか','大東文化大学':'だいとうぶんか','第一工科大学':'だいいちこうか','第一工業大学':'だいいちこうぎょう',
    '拓殖大学':'たくしょく','中央大学':'ちゅうおう','中央学院大学':'ちゅうおうがくいん','筑波大学':'つくば','帝京大学':'ていきょう',
    '東海大学':'とうかい','東京大学':'とうきょう','東京国際大学':'とうきょうこくさい','東京農業大学':'とうきょうのうぎょう',
    '東北大学':'とうほく','東洋大学':'とうよう','日本大学':'にほん','日本体育大学':'にほんたいいく','日本文理大学':'にほんぶんり',
    '法政大学':'ほうせい','明治大学':'めいじ','山梨学院大学':'やまなしがくいん','立教大学':'りっきょう','立命館大学':'りつめいかん',
    '早稲田大学':'わせだ'
  };
  const teamCollator=new Intl.Collator('ja',{usage:'sort',sensitivity:'base',numeric:true});
  function teamSortKey(team){return teamReadings[team]||team;}

  const toSec=v=>{
    const p=String(v||'').trim().split(':').map(Number);
    if(p.some(x=>!Number.isFinite(x)))return null;
    return p.length===3?p[0]*3600+p[1]*60+p[2]:p.length===2?p[0]*60+p[1]:null;
  };

  function raceRows(){
    const all={hakone:[],izumo:[],zennihon:[]};
    const h=window.hakonePhase2StaticDB||{};
    Object.entries(h).forEach(([year,sections])=>{
      for(let sec=1;sec<=10;sec++) (sections?.[sec]||[]).forEach(r=>{
        const seconds=toSec(r?.[4]); if(seconds===null)return;
        all.hakone.push({race:'hakone',year:+year,section:sec,team:teamNorm(r?.[2]),athlete:athleteDisplayName(r?.[3]||''),time:r?.[4],rank:r?.[0],seconds});
      });
    });
    const db=window.threeEkidenSectionsDB||{};
    ['izumo','zennihon'].forEach(race=>{
      Object.entries(db?.[race]||{}).forEach(([year,yd])=>{
        if(yd?.status!=='開催')return;
        Object.entries(yd?.sections||{}).forEach(([sec,rows])=>(rows||[]).forEach(r=>{
          const seconds=toSec(r?.time); if(seconds===null)return;
          all[race].push({race,year:+year,section:+sec,team:teamNorm(r?.team),athlete:athleteDisplayName(r?.athlete||''),time:r?.time,rank:r?.rank,seconds});
        }));
      });
    });
    return all;
  }

  function raceDeviation(rows){
    const buckets=new Map();
    rows.forEach(r=>{const k=r.year+'|'+r.section;if(!buckets.has(k))buckets.set(k,[]);buckets.get(k).push(r);});
    const out=new Map();
    buckets.forEach(group=>{
      if(group.length<5)return;
      const vals=group.map(x=>x.seconds),mean=vals.reduce((a,b)=>a+b,0)/vals.length;
      const sd=Math.sqrt(vals.reduce((s,x)=>s+(x-mean)**2,0)/vals.length); if(!sd)return;
      group.forEach(r=>{
        const key=norm(r.athlete)+'|'+norm(r.team);
        if(!out.has(key))out.set(key,[]);
        out.get(key).push(50+10*((mean-r.seconds)/sd));
      });
    });
    const avg=new Map();
    out.forEach((vals,k)=>avg.set(k,vals.reduce((a,b)=>a+b,0)/vals.length));
    return avg;
  }

  function pbMap(){
    const map=new Map();

    // Full current rosters: [name, grade, 10000m PB, half PB]
    if(typeof fullRosterData!=='undefined'){
      Object.entries(fullRosterData).forEach(([team,rows])=>(rows||[]).forEach(r=>{
        const key=norm(athleteDisplayName(r[0]))+'|'+norm(teamNorm(team));
        map.set(key,{grade:r[1],pb5000:'—',pb10000:r[2]||'—',half:r[3]||'—'});
      }));
    }

    // TOP10 data additionally has 5000m PB; let it override/fill full-roster values.
    if(typeof expandedTopAthletes2027!=='undefined'){
      Object.entries(expandedTopAthletes2027).forEach(([team,rows])=>(rows||[]).forEach(r=>{
        const key=norm(athleteDisplayName(r[0]))+'|'+norm(teamNorm(team));
        const prev=map.get(key)||{};
        map.set(key,{
          grade:r[1]||prev.grade||'',
          pb5000:r[2]||prev.pb5000||'—',
          pb10000:r[3]||prev.pb10000||'—',
          half:r[4]||prev.half||'—'
        });
      }));
    }
    return map;
  }

  function trackResultsFor(name,team){
    const out=[];
    const db=window.universityMeetResultsAutoDB?.meets||{};
    Object.values(db).forEach(meet=>Object.entries(meet?.events||{}).forEach(([eventName,event])=>{
      const rows=Array.isArray(event)?event:event?.rows||[];
      rows.forEach(r=>{
        if(norm(athleteDisplayName(r?.[1]))!==norm(name))return;
        const rt=teamNorm(r?.[2]);
        if(team&&rt&&norm(rt)!==norm(team))return;
        out.push({year:meet.year,meet:meet.name,event:eventName,rank:r?.[0],time:r?.[4],note:r?.[5]||''});
      });
    }));
    return out.sort((a,b)=>b.year-a.year).slice(0,12);
  }

  const rowsByRace=raceRows();
  const deviations={
    hakone:raceDeviation(rowsByRace.hakone),
    izumo:raceDeviation(rowsByRace.izumo),
    zennihon:raceDeviation(rowsByRace.zennihon)
  };
  const pbs=pbMap();
  const pbsByName=new Map();
  pbs.forEach((pb,key)=>{
    const nameKey=key.split('|')[0];
    if(!pbsByName.has(nameKey)) pbsByName.set(nameKey,[]);
    pbsByName.get(nameKey).push(pb);
  });
  function pbFor(name,team){
    const exact=pbs.get(norm(name)+'|'+norm(team));
    if(exact) return exact;
    const candidates=pbsByName.get(norm(name))||[];
    if(candidates.length===1) return candidates[0];
    return null;
  }

  function players(){
    const map=new Map();
    Object.entries(rowsByRace).forEach(([race,rows])=>rows.forEach(r=>{
      const key=norm(r.athlete)+'|'+norm(r.team); if(!norm(r.athlete))return;
      if(!map.has(key))map.set(key,{key,name:r.athlete,team:r.team,runs:{hakone:[],izumo:[],zennihon:[]}});
      map.get(key).runs[race].push(r);
    }));
    return [...map.values()].map(p=>{
      const pb=pbFor(p.name,p.team);
      return {...p,pb,totalRuns:Object.values(p.runs).reduce((n,a)=>n+a.length,0)};
    });
  }
  const allPlayers=players();

  function teams(){
    return [...new Set(allPlayers.map(p=>p.team).filter(Boolean))].sort((a,b)=>teamCollator.compare(teamSortKey(a),teamSortKey(b))||teamCollator.compare(a,b));
  }
  function filtered(){
    const q=norm(state.query);
    return allPlayers.filter(p=>{
      if(q&&!norm(p.name).includes(q)&&!norm(p.team).includes(q))return false;
      if(state.team!=='all'&&p.team!==state.team)return false;
      return true;
    }).sort((a,b)=>{
      if(state.sort==='runs')return b.totalRuns-a.totalRuns||a.name.localeCompare(b.name,'ja');
      if(state.sort==='hakone')return b.runs.hakone.length-a.runs.hakone.length||b.totalRuns-a.totalRuns;
      if(state.sort==='pb5000'||state.sort==='pb10000'||state.sort==='half'){
        const field=state.sort==='pb5000'?'pb5000':state.sort==='pb10000'?'pb10000':'half';
        const av=toSec(a.pb?.[field]),bv=toSec(b.pb?.[field]);
        return (av??Infinity)-(bv??Infinity)||a.name.localeCompare(b.name,'ja');
      }
      return a.name.localeCompare(b.name,'ja');
    });
  }

  function runSummary(p,race){
    const rows=p.runs[race].slice().sort((a,b)=>a.year-b.year||a.section-b.section);
    if(!rows.length)return '<span class="muted">出走なし</span>';
    return rows.map(r=>`<div class="athlete-run-line"><span>${r.year}年</span><strong>${r.section}区</strong><span>${r.rank?r.rank+'位':'—'}</span><span>${r.time}</span></div>`).join('');
  }
  function pbCards(p){
    const pb=p.pb;
    return `<div class="athlete-pb-block">
      <h4>自己ベスト</h4>
      <div class="athlete-pb-grid">
        <div class="athlete-pb-card"><span>5000m PB</span><strong>${pb?.pb5000||'—'}</strong></div>
        <div class="athlete-pb-card athlete-pb-card-10000"><span>10000m PB</span><strong>${pb?.pb10000||'—'}</strong></div>
        <div class="athlete-pb-card"><span>ハーフ PB</span><strong>${pb?.half||'—'}</strong></div>
      </div>
      <div class="athlete-grade-line"><span>学年</span><strong>${pb?.grade?pb.grade+'年':'—'}</strong></div>
    </div>`;
  }
  function deviationCards(p){
    return `<div class="athlete-deviation-note"><span>駅伝偏差値（参考）</span>${Object.entries(races).map(([k,label])=>{
      const v=deviations[k].get(p.key);
      return `<small>${label}: <strong>${Number.isFinite(v)?v.toFixed(1):'—'}</strong></small>`;
    }).join('')}</div>`;
  }
  function detail(p){
    const track=trackResultsFor(p.name,p.team);
    return `<div class="all-athlete-detail">
      ${pbCards(p)}
      <div class="athlete-race-grid">
        ${Object.entries(races).map(([k,label])=>`<section><h4>${label} <span>${p.runs[k].length}回</span></h4>${runSummary(p,k)}</section>`).join('')}
      </div>
      <section class="athlete-track-results"><h4>トラック・ロード大会結果</h4>
        ${track.length?track.map(t=>`<div class="athlete-track-line"><span>${t.year}</span><strong>${t.event}</strong><span>${t.time||'—'}</span><span>${t.rank?String(t.rank)+'位':''}</span></div>`).join(''):'<p class="muted">現在の大会DBでは該当結果を確認できていません。</p>'}
      </section>
      ${deviationCards(p)}
    </div>`;
  }

  function controls(){
    return `<div class="directory-controls">
      <div class="directory-search-wrap"><label>選手名・大学名で検索</label><input class="directory-search" type="search" value="${String(state.query).replace(/"/g,'&quot;')}" placeholder="例：山口竣平 / 早稲田大学" data-all-athlete-search></div>
      <div><label>大学</label><select class="directory-select" data-all-athlete-team><option value="all">すべて</option>${teams().map(t=>`<option value="${t}" ${state.team===t?'selected':''}>${t}</option>`).join('')}</select></div>
      <div><label>並び順</label><select class="directory-select" data-all-athlete-sort><option value="pb5000" ${state.sort==='pb5000'?'selected':''}>5000m PB</option><option value="pb10000" ${state.sort==='pb10000'?'selected':''}>10000m PB</option><option value="half" ${state.sort==='half'?'selected':''}>ハーフ PB</option><option value="name" ${state.sort==='name'?'selected':''}>選手名</option><option value="runs" ${state.sort==='runs'?'selected':''}>三大駅伝出走数</option><option value="hakone" ${state.sort==='hakone'?'selected':''}>箱根出走数</option></select></div>
    </div>`;
  }

  function table(){
    const list=filtered(),pages=Math.max(1,Math.ceil(list.length/state.pageSize));
    if(state.page>pages)state.page=pages;
    const slice=list.slice((state.page-1)*state.pageSize,state.page*state.pageSize);
    return `<div class="directory-result-head"><strong>${list.length.toLocaleString()}名</strong><span>該当</span></div>
      <div class="table-wrap directory-table all-athlete-table"><table><thead><tr><th>選手</th><th>大学</th><th>箱根</th><th>出雲</th><th>全日本</th><th>5000m PB</th><th>10000m PB</th><th>ハーフ PB</th></tr></thead><tbody>
      ${slice.map(p=>`<tr><td><button class="directory-player-name" data-all-athlete-player="${p.key}" aria-expanded="false">${p.name}</button></td><td>${p.team}</td><td>${p.runs.hakone.length}回</td><td>${p.runs.izumo.length}回</td><td>${p.runs.zennihon.length}回</td><td>${p.pb?.pb5000||'—'}</td><td>${p.pb?.pb10000||'—'}</td><td>${p.pb?.half||'—'}</td></tr><tr class="topic-player-detail-row" data-all-athlete-detail="${p.key}" hidden><td colspan="8">${detail(p)}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="directory-pagination"><button data-all-athlete-page="${state.page-1}" ${state.page<=1?'disabled':''}>‹ 前へ</button><span>${state.page} / ${pages} ページ</span><button data-all-athlete-page="${state.page+1}" ${state.page>=pages?'disabled':''}>次へ ›</button></div>`;
  }

  function template(){
    return `<section class="container page topics-page">
      <div class="page-header"><div class="eyebrow">TOPICS / ALL ATHLETES</div><h1>全選手名鑑</h1><p>三大駅伝の出走歴を選手ごとに統合し、収録済みのトラックPB・大会結果と一緒に確認できます。</p></div>
      <article class="data-card topic-feature directory-feature">
        <div class="topic-feature-head"><div><span class="topic-kicker">ATHLETE DATABASE</span><h2>大学長距離・全選手名鑑</h2></div><span class="topic-badge">三大駅伝 横断</span></div>
        <p class="muted directory-intro"><strong>選手名をタップすると詳細が開きます。</strong> 箱根・出雲・全日本の成績、5000m/10000m/ハーフPB、収録済みトラック大会結果を優先して表示し、駅伝偏差値は参考値として詳細下部に掲載します。</p>
        ${controls()}<div id="allAthleteResults">${table()}</div>
      </article>
    </section>`;
  }

  function refresh(){const h=document.querySelector('#allAthleteResults');if(h)h.innerHTML=table();}
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-all-athlete-player]');
    if(b){const row=document.querySelector(`[data-all-athlete-detail="${CSS.escape(b.dataset.allAthletePlayer)}"]`);if(row){const open=row.hidden;row.hidden=!open;b.setAttribute('aria-expanded',String(open));}return;}
    const p=e.target.closest('[data-all-athlete-page]');
    if(p&&!p.disabled){state.page=Number(p.dataset.allAthletePage)||1;refresh();document.querySelector('.directory-feature')?.scrollIntoView({behavior:'smooth',block:'start'});}
  });
  document.addEventListener('input',e=>{const q=e.target.closest('[data-all-athlete-search]');if(q){state.query=q.value;state.page=1;refresh();}});
  document.addEventListener('change',e=>{
    const t=e.target.closest('[data-all-athlete-team]');if(t){state.team=t.value;state.page=1;refresh();return;}
    const s=e.target.closest('[data-all-athlete-sort]');if(s){state.sort=s.value;state.page=1;refresh();}
  });
  window.allAthleteDirectoryV2={template,refresh,pbFor};
  if(typeof templates!=='undefined')templates.athletes=template;
  if(location.hash.replace('#','')==='athletes'&&typeof render==='function')render('athletes');
})();