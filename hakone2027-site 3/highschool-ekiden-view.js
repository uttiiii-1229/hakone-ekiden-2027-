// Nationwide high-school ekiden results, isolated from university race state.
(() => {
  const state={gender:'men',year:2025,section:1,topSection:1,openTeam:null};
  const config={men:{label:'男子',count:7,total:'42.195km',distances:[10,3,8.1075,8.0875,3,5,5]},women:{label:'女子',count:5,total:'21.0975km',distances:[6,4.0975,3,3,5]}};
  const escape=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const db=()=>window.highSchoolEkidenDB;
  const race=()=>db()?.[state.gender]?.[state.year];
  const meta=()=>window.highSchoolEkidenRecords;
  const distance=(n)=>config[state.gender].distances[n-1]+'km';
  const holderRows=n=>meta()?.records?.[state.gender]?.[n]||[];
  function recordNote(n){
    const holders=holderRows(n);
    if(!holders.length)return '';
    return `<div class="notice hs-record-note"><strong>区間記録（2025年大会まで）：${escape(holders[0].time)}</strong><div>${holders.map(r=>`${escape(r.name)}（${escape(r.school)}・${r.year}年）`).join(' ／ ')}</div><small>${distance(n)} · <a href="${escape(holders[0].source)}" target="_blank" rel="noopener noreferrer">公式成績表</a></small></div>`;
  }
  function splitDetail(team){
    const data=race(),rows=Array.from({length:config[state.gender].count},(_,i)=>({section:i+1,row:data.sections[i+1]?.find(r=>r.team===team)}));
    return `<div class="hs-team-splits">${rows.map(({section,row:r})=>`<article><h3>${section}区 <small>${distance(section)}</small></h3>${r?`<div class="hs-athlete-time"><strong>${escape(r.athlete)}</strong><b aria-label="区間タイム">${escape(r.time)}</b></div><div><span>区間 ${escape(r.rank)}${typeof r.rank==='number'?'位':''}</span></div><small>通過 ${escape(r.passingRank)}${typeof r.passingRank==='number'?'位':''}${r.disqualified?' · チーム失格':''}</small>`:'<p>出走成績なし</p>'}</article>`).join('')}</div>`;
  }
  function overall(){
    const data=race();
    return `<section class="hs-overall"><h2>総合順位</h2><p class="muted">学校名をタップすると、全${config[state.gender].count}区間の選手・区間順位・タイム・通過順位が開きます。</p><div class="table-wrap"><table class="hs-overall-table"><thead><tr><th>順位</th><th>学校</th><th>地域</th><th>総合タイム</th></tr></thead><tbody>${data.results.map((r,i)=>`<tr><td><strong>${escape(r.rank)}</strong></td><td><button class="hs-team-button" data-hs-team="${i}" aria-expanded="${state.openTeam===r.team}" aria-controls="hs-team-${i}">${escape(r.team)} <small>${state.openTeam===r.team?'▴':'▾'}</small></button></td><td>${escape(r.region)}</td><td><strong>${escape(r.time)}</strong></td></tr>${state.openTeam===r.team?`<tr class="hs-expanded-row"><td colspan="4" id="hs-team-${i}">${splitDetail(r.team)}</td></tr>`:''}`).join('')}</tbody></table></div></section>`;
  }
  function awards(){
    const data=race();
    return `<section class="hs-awards"><h2>区間賞一覧</h2><div class="hs-award-grid">${Array.from({length:config[state.gender].count},(_,i)=>`<article><h3>${i+1}区 <small>${distance(i+1)}</small></h3>${(data.sections[i+1]||[]).filter(r=>r.rank===1&&!r.disqualified).map(r=>`<strong>${escape(r.athlete)}</strong><span>${escape(r.team)}</span><b>${escape(r.time)}</b>`).join('')}</article>`).join('')}</div></section>`;
  }
  function sections(){
    const data=race(),n=state.section,rows=data.sections[n]||[];
    return `<section class="hs-section-results"><h2>各区間順位</h2><div class="tabs hs-section-tabs" role="group" aria-label="区間選択">${Array.from({length:config[state.gender].count},(_,i)=>`<button type="button" class="tab ${n===i+1?'active':''}" data-hs-section="${i+1}" aria-pressed="${n===i+1}">${i+1}区</button>`).join('')}</div><h3>${state.year}年 ${config[state.gender].label} ${n}区 · ${distance(n)}</h3>${recordNote(n)}<div class="table-wrap"><table class="hs-split-table"><thead><tr><th>区間順位</th><th>通過順位</th><th>学校</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${escape(r.rank)}</strong></td><td>${escape(r.passingRank)}</td><td>${escape(r.team)}</td><td>${escape(r.athlete)}</td><td><strong>${escape(r.time)}</strong></td></tr>`).join('')}</tbody></table></div><p class="muted hs-rank-note">通過順位は大会記録の累計順位です。区間タイムが同じ場合の区間順位も、主催者の成績表の表記を使用しています。失格・欠場の未成立記録は「—」で表示します。</p></section>`;
  }
  function topTen(){
    const n=state.topSection,rows=meta()?.top10?.[state.gender]?.[n]||[];
    return `<section class="hs-top10"><h2>各区間の歴代TOP10</h2><p class="muted">2025年大会まで。同一選手は最速記録を採用し、同タイムは同順位、10位同タイムは全員掲載します。</p><div class="tabs hs-section-tabs" role="group" aria-label="歴代記録の区間選択">${Array.from({length:config[state.gender].count},(_,i)=>`<button type="button" class="tab ${n===i+1?'active':''}" data-hs-top-section="${i+1}" aria-pressed="${n===i+1}">${i+1}区</button>`).join('')}</div><h3>${config[state.gender].label} ${n}区 · ${distance(n)}</h3><div class="table-wrap"><table class="hs-top10-table"><thead><tr><th>順位</th><th>選手</th><th>学校</th><th>記録</th><th>年</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.rank}</strong></td><td>${escape(r.athlete)}</td><td>${escape(r.team)}</td><td><strong>${escape(r.time)}</strong></td><td><a href="${escape(r.source)}" target="_blank" rel="noopener noreferrer">${r.year}</a></td></tr>`).join('')}</tbody></table></div><p class="muted hs-rank-note">男子は京都開催（1966年以降）、女子は初開催（1989年）以降の主催者記録を集計。距離が異なる旧区間は除外しています。</p></section>`;
  }
  function content(){
    const data=race(),c=config[state.gender];
    if(!data)return '<div class="notice">大会データを読み込めませんでした。ページを再読み込みしてください。</div>';
    return `<div class="hs-controls"><div class="tabs" role="group" aria-label="男女選択">${Object.entries(config).map(([g,v])=>`<button type="button" class="tab ${g===state.gender?'active':''}" data-hs-gender="${g}" aria-pressed="${g===state.gender}">${v.label}</button>`).join('')}</div><label>開催年 <select data-hs-year aria-label="開催年">${Array.from({length:10},(_,i)=>2025-i).map(y=>`<option value="${y}" ${y===state.year?'selected':''}>${y}年（第${db()[state.gender][y].edition}回）</option>`).join('')}</select></label></div><div class="race-page-summary"><div class="race-summary-card"><small>大会</small><strong>${state.year}年 ${c.label}第${data.edition}回</strong></div><div class="race-summary-card"><small>コース</small><strong>${c.count}区間 ${c.total}</strong></div><div class="race-summary-card"><small>出場校</small><strong>${data.results.length}校</strong></div></div>${overall()}${awards()}${sections()}${topTen()}<p class="hs-source"><a href="${escape(data.source)}" target="_blank" rel="noopener noreferrer">${state.year}年 ${c.label} 主催者大会記録</a></p>`;
  }
  function template(){return `<section class="container page highschool-page"><div class="page-header"><div class="eyebrow">NATIONAL HIGH SCHOOL EKIDEN</div><h1>全国高校駅伝 大会データ</h1><p>直近10開催分（2016〜2025年）の総合・区間成績。男女と年度を切り替えて表示できます。</p></div><div id="highschool-results">${content()}</div></section>`;}
  function refresh(){const host=document.querySelector('#highschool-results');if(host)host.innerHTML=content();}
  templates.highschool=template;
  document.addEventListener('click',e=>{
    if(!e.target.closest('.highschool-page'))return;
    let b=e.target.closest('[data-hs-gender]');if(b){state.gender=b.dataset.hsGender;state.section=Math.min(state.section,config[state.gender].count);state.topSection=Math.min(state.topSection,config[state.gender].count);state.openTeam=null;refresh();return;}
    b=e.target.closest('[data-hs-section]');if(b){state.section=Number(b.dataset.hsSection);refresh();return;}
    b=e.target.closest('[data-hs-top-section]');if(b){state.topSection=Number(b.dataset.hsTopSection);refresh();return;}
    b=e.target.closest('[data-hs-team]');if(b){const team=race().results[Number(b.dataset.hsTeam)].team;state.openTeam=state.openTeam===team?null:team;refresh();const next=document.querySelector(`[data-hs-team="${b.dataset.hsTeam}"]`);next?.focus({preventScroll:true});}
  });
  document.addEventListener('change',e=>{if(e.target.matches('[data-hs-year]')){state.year=Number(e.target.value);state.openTeam=null;refresh();}});
  if((location.hash.replace('#','')||'home')==='highschool'&&typeof render==='function')render('highschool');
})();
