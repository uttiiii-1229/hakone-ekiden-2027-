// Topics: athlete performance index based on section-time deviation scores
(() => {
  const raceLabels={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  const cache={};
  let activeRace='hakone';
  const directoryState={query:'',team:'all',minRuns:1,sort:'score',page:1,pageSize:50};

  function toSeconds(value){
    const s=String(value||'').trim();
    if(!s||s==='—') return null;
    const p=s.split(':').map(Number);
    if(p.some(x=>!Number.isFinite(x))) return null;
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2) return p[0]*60+p[1];
    return null;
  }
  function normText(s){
    return String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  }
  function hakoneRows(){
    const out=[];
    const db=window.hakonePhase2StaticDB||{};
    Object.entries(db).forEach(([year,sections])=>{
      for(let sec=1;sec<=10;sec++){
        (sections?.[sec]||[]).forEach(r=>{
          const seconds=toSeconds(r?.[4]);
          if(seconds===null) return;
          out.push({year:Number(year),section:sec,team:r?.[2]||'',athlete:r?.[3]||'',time:r?.[4]||'',seconds});
        });
      }
    });
    return out;
  }
  function threeRows(race){
    const out=[];
    const db=window.threeEkidenSectionsDB?.[race]||{};
    Object.entries(db).forEach(([year,yd])=>{
      if(yd?.status!=='開催') return;
      const count=sectionCounts[race];
      for(let sec=1;sec<=count;sec++){
        (yd?.sections?.[sec]||[]).forEach(r=>{
          const seconds=toSeconds(r?.time);
          if(seconds===null) return;
          out.push({year:Number(year),section:sec,team:r?.team||'',athlete:r?.athlete||'',time:r?.time||'',seconds});
        });
      }
    });
    return out;
  }
  function rawRows(race){ return race==='hakone'?hakoneRows():threeRows(race); }

  // 1回の突出だけで歴代上位になりすぎないように、出走実績が少ない場合だけ50へ穏やかに縮約。
  // 4回出走は補正なし。区間そのものへの固定ウェイトは付けない。
  function reliabilityFactor(runs){
    if(runs>=4) return 1.00;
    if(runs===3) return 0.96;
    if(runs===2) return 0.90;
    return 0.82;
  }

  function calcRace(race){
    if(cache[race]) return cache[race];
    const rows=rawRows(race);
    const buckets=new Map();

    rows.forEach(r=>{
      const key=`${r.year}|${r.section}`;
      if(!buckets.has(key)) buckets.set(key,[]);
      buckets.get(key).push(r);
    });

    const appearances=[];
    buckets.forEach(group=>{
      if(group.length<5) return;
      const values=group.map(x=>x.seconds);
      const mean=values.reduce((a,b)=>a+b,0)/values.length;
      const variance=values.reduce((sum,x)=>sum+(x-mean)**2,0)/values.length;
      const sd=Math.sqrt(variance);
      if(!Number.isFinite(sd)||sd===0) return;
      group.forEach(r=>{
        const deviation=50+10*((mean-r.seconds)/sd);
        appearances.push({...r,deviation});
      });
    });

    const players=new Map();
    appearances.forEach(a=>{
      const nameKey=normText(a.athlete);
      const teamKey=normText(a.team);
      if(!nameKey) return;
      const key=`${nameKey}|${teamKey}`;
      if(!players.has(key)){
        players.set(key,{key,athlete:a.athlete,team:a.team,scores:[],runs:[]});
      }
      const p=players.get(key);
      p.scores.push(a.deviation);
      p.runs.push(a);
    });

    const ranking=[...players.values()].map(p=>{
      const rawAvg=p.scores.reduce((a,b)=>a+b,0)/p.scores.length;
      const appearances=p.scores.length;
      const factor=reliabilityFactor(appearances);
      const score=50+(rawAvg-50)*factor;
      const best=Math.max(...p.scores);
      const sections=[...new Set(p.runs.map(r=>r.section))].sort((a,b)=>a-b);
      const years=[...new Set(p.runs.map(r=>r.year))].sort((a,b)=>a-b);
      const sectionScores={};
      for(let sec=1;sec<=sectionCounts[race];sec++){
        const vals=p.runs.filter(r=>r.section===sec).map(r=>r.deviation);
        if(vals.length) sectionScores[sec]=vals.reduce((a,b)=>a+b,0)/vals.length;
      }
      return {...p,score,rawAvg,best,sections,years,appearances,sectionScores,factor};
    }).sort((a,b)=>b.score-a.score||b.rawAvg-a.rawAvg||b.best-a.best||b.appearances-a.appearances);

    cache[race]={ranking,totalRuns:appearances.length,totalPlayers:players.size};
    return cache[race];
  }

  function sectionGrid(p,race){
    const count=sectionCounts[race];
    return `<div class="topic-section-grid">${Array.from({length:count},(_,i)=>{
      const sec=i+1;
      const v=p.sectionScores[sec];
      return `<div class="topic-section-score ${Number.isFinite(v)?'has-score':'no-score'}"><span>${sec}区</span><strong>${Number.isFinite(v)?v.toFixed(1):'—'}</strong></div>`;
    }).join('')}</div>`;
  }

  function playerDetail(p,race){
    const runHistory=p.runs.slice().sort((a,b)=>a.year-b.year).map(r=>`${r.year}年 ${r.section}区 ${r.deviation.toFixed(1)}`).join(' / ');
    return `<div class="topic-player-detail-card">
      <div class="topic-detail-stats">
        <div><span>総合偏差値</span><strong>${p.score.toFixed(1)}</strong></div>
        <div><span>区間偏差値平均</span><strong>${p.rawAvg.toFixed(1)}</strong></div>
        <div><span>最高偏差値</span><strong>${p.best.toFixed(1)}</strong></div>
        <div><span>出走数</span><strong>${p.appearances}回</strong></div>
      </div>
      <p class="muted topic-reliability-note">出走回数補正: ${Math.round(p.factor*100)}%（4回で100%）。区間への固定ウェイトは付けず、同年・同区間内で標準化しています。</p>
      ${sectionGrid(p,race)}
      <p class="topic-run-history"><strong>出走履歴:</strong> ${runHistory}</p>
    </div>`;
  }

  function rankingTable(race){
    const data=calcRace(race);
    if(!data.ranking.length){
      return '<div class="notice">区間タイムDBを読み込めなかったため、偏差値を算出できませんでした。</div>';
    }
    const top=data.ranking.slice(0,20);
    return `
      <div class="topic-summary">
        <div><strong>${data.totalPlayers.toLocaleString()}</strong><span>選手を集計</span></div>
        <div><strong>${data.totalRuns.toLocaleString()}</strong><span>区間走を標準化</span></div>
        <div><strong>TOP 20</strong><span>総合偏差値順</span></div>
      </div>
      <div class="table-wrap topic-ranking-table">
        <table>
          <thead><tr><th>順位</th><th>選手</th><th>大学・チーム</th><th>総合偏差値</th><th>出走数</th><th>出走区間</th><th>詳細</th></tr></thead>
          <tbody>
            ${top.map((p,i)=>`
              <tr>
                <td><strong>${i+1}</strong></td>
                <td><strong>${p.athlete}</strong></td>
                <td>${p.team}</td>
                <td><span class="topic-score">${p.score.toFixed(1)}</span></td>
                <td>${p.appearances}</td>
                <td>${p.sections.map(s=>s+'区').join('・')}</td>
                <td><button class="topic-detail-button" data-topic-player="${p.key}" data-topic-player-race="${race}" aria-expanded="false">区間別を見る</button></td>
              </tr>
              <tr class="topic-player-detail-row" data-topic-player-detail="${p.key}" hidden><td colspan="7">${playerDetail(p,race)}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function allTeamsForRace(race){
    return [...new Set(calcRace(race).ranking.map(p=>p.team).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ja'));
  }

  function filteredDirectoryPlayers(race){
    const q=normText(directoryState.query);
    return calcRace(race).ranking.filter(p=>{
      if(q && !normText(p.athlete).includes(q) && !normText(p.team).includes(q)) return false;
      if(directoryState.team!=='all' && p.team!==directoryState.team) return false;
      if(p.appearances<directoryState.minRuns) return false;
      return true;
    }).sort((a,b)=>{
      if(directoryState.sort==='runs') return b.appearances-a.appearances||b.score-a.score;
      if(directoryState.sort==='best') return b.best-a.best||b.score-a.score;
      if(directoryState.sort==='name') return a.athlete.localeCompare(b.athlete,'ja');
      return b.score-a.score||b.rawAvg-a.rawAvg||b.best-a.best;
    });
  }

  function directoryControls(race){
    const teams=allTeamsForRace(race);
    return `<div class="directory-controls">
      <div class="directory-search-wrap">
        <label for="directorySearch">選手名・大学名で検索</label>
        <input id="directorySearch" class="directory-search" type="search" placeholder="例：佐藤悠基 / 東海大学" value="${directoryState.query.replace(/"/g,'&quot;')}" data-directory-search>
      </div>
      <div>
        <label for="directoryTeam">大学・チーム</label>
        <select id="directoryTeam" class="directory-select" data-directory-team>
          <option value="all">すべて</option>
          ${teams.map(t=>`<option value="${t}" ${directoryState.team===t?'selected':''}>${t}</option>`).join('')}
        </select>
      </div>
      <div>
        <label for="directoryRuns">最低出走数</label>
        <select id="directoryRuns" class="directory-select" data-directory-runs>
          ${[1,2,3,4].map(n=>`<option value="${n}" ${directoryState.minRuns===n?'selected':''}>${n}回以上</option>`).join('')}
        </select>
      </div>
      <div>
        <label for="directorySort">並び順</label>
        <select id="directorySort" class="directory-select" data-directory-sort>
          <option value="score" ${directoryState.sort==='score'?'selected':''}>総合偏差値</option>
          <option value="runs" ${directoryState.sort==='runs'?'selected':''}>出走数</option>
          <option value="best" ${directoryState.sort==='best'?'selected':''}>最高偏差値</option>
          <option value="name" ${directoryState.sort==='name'?'selected':''}>選手名</option>
        </select>
      </div>
    </div>`;
  }

  function directoryTable(race){
    const players=filteredDirectoryPlayers(race);
    const pages=Math.max(1,Math.ceil(players.length/directoryState.pageSize));
    if(directoryState.page>pages) directoryState.page=pages;
    const start=(directoryState.page-1)*directoryState.pageSize;
    const rows=players.slice(start,start+directoryState.pageSize);
    if(!rows.length){
      return '<div class="notice">条件に一致する選手が見つかりませんでした。</div>';
    }
    return `
      <div class="directory-result-head"><strong>${players.length.toLocaleString()}名</strong><span>該当</span></div>
      <div class="table-wrap directory-table"><table>
        <thead><tr><th>選手</th><th>大学・チーム</th><th>総合偏差値</th><th>出走数</th><th>出走区間</th><th>最高偏差値</th><th>詳細</th></tr></thead>
        <tbody>
        ${rows.map(p=>`
          <tr>
            <td><strong>${p.athlete}</strong></td>
            <td>${p.team}</td>
            <td><span class="topic-score">${p.score.toFixed(1)}</span></td>
            <td>${p.appearances}回</td>
            <td>${p.sections.map(s=>s+'区').join('・')}</td>
            <td>${p.best.toFixed(1)}</td>
            <td><button class="topic-detail-button" data-directory-player="${p.key}" aria-expanded="false">詳細を見る</button></td>
          </tr>
          <tr class="topic-player-detail-row" data-directory-player-detail="${p.key}" hidden><td colspan="7">${playerDetail(p,race)}</td></tr>
        `).join('')}
        </tbody>
      </table></div>
      <div class="directory-pagination">
        <button data-directory-page="${directoryState.page-1}" ${directoryState.page<=1?'disabled':''}>‹ 前へ</button>
        <span>${directoryState.page} / ${pages} ページ</span>
        <button data-directory-page="${directoryState.page+1}" ${directoryState.page>=pages?'disabled':''}>次へ ›</button>
      </div>`;
  }

  function directorySection(race){
    return `<article class="data-card topic-feature directory-feature">
      <div class="topic-feature-head">
        <div><span class="topic-kicker">全選手名鑑</span><h2>${raceLabels[race]} 全選手名鑑</h2></div>
        <span class="topic-badge">${race==='hakone'?'2000–2026':'収録済み全期間'} DATA</span>
      </div>
      <p class="muted directory-intro">収録期間に出走した全選手を検索できます。選手名・大学名・出走回数で絞り込み、総合偏差値や区間別偏差値、出走履歴を確認できます。</p>
      ${directoryControls(race)}
      <div id="directoryResults">${directoryTable(race)}</div>
    </article>`;
  }

  function refreshDirectory(){
    const host=document.querySelector('#directoryResults');
    if(host) host.innerHTML=directoryTable(activeRace);
  }

  function topicsTemplate(){
    return `<section class="container page topics-page">
      <div class="page-header">
        <div class="eyebrow">TOPICS / ATHLETE INDEX</div>
        <h1>トピック</h1>
        <p>三大駅伝の区間タイムから、選手ごとの「駅伝偏差値」を算出してランキング化します。</p>
      </div>

      <article class="data-card topic-feature">
        <div class="topic-feature-head">
          <div>
            <span class="topic-kicker">選手偏差値名鑑</span>
            <h2>三大駅伝・選手偏差値 TOP20</h2>
          </div>
          <span class="topic-badge">2000–2026 DATA</span>
        </div>
        <div class="notice topic-method">
          各出走は、同じ年・同じ区間を走った選手のタイム分布から「偏差値 = 50 + 10 ×（区間平均タイム − 選手タイム）÷ 標準偏差」で標準化します。
          総合偏差値は各出走の平均を基礎に、1回82%・2回90%・3回96%・4回以上100%の信頼度で50側へ補正します。
          これにより一度だけの突出走を過大評価しにくくしつつ、区間ごとの難しさは同年・同区間内の標準化で吸収します。
        </div>
        <div class="tabs topic-race-tabs">
          ${Object.entries(raceLabels).map(([k,v])=>`<button class="tab ${k===activeRace?'active':''}" data-topic-race="${k}">${v}</button>`).join('')}
        </div>
        <div id="topicRanking">
          <div class="section-db-head"><div><h2>${raceLabels[activeRace]} 選手偏差値 TOP20</h2><p class="muted">総合偏差値を主ランキングにし、詳細から区間別偏差値を確認できます。</p></div></div>
          ${rankingTable(activeRace)}
        </div>
      </article>
      ${directorySection(activeRace)}
    </section>`;
  }

  if(typeof templates!=='undefined') templates.topics=topicsTemplate;

  document.addEventListener('click',e=>{
    const raceBtn=e.target.closest('[data-topic-race]');
    if(raceBtn){
      activeRace=raceBtn.dataset.topicRace;
      directoryState.query=''; directoryState.team='all'; directoryState.minRuns=1; directoryState.sort='score'; directoryState.page=1;
      document.querySelectorAll('[data-topic-race]').forEach(b=>b.classList.toggle('active',b.dataset.topicRace===activeRace));
      const host=document.querySelector('#topicRanking');
      if(host){
        host.innerHTML=`<div class="section-db-head"><div><h2>${raceLabels[activeRace]} 選手偏差値 TOP20</h2><p class="muted">総合偏差値を主ランキングにし、詳細から区間別偏差値を確認できます。</p></div></div>${rankingTable(activeRace)}`;
      }
      const dir=document.querySelector('.directory-feature');
      if(dir) dir.outerHTML=directorySection(activeRace);
      return;
    }

    const detailBtn=e.target.closest('[data-topic-player]');
    if(detailBtn){
      const key=detailBtn.dataset.topicPlayer;
      const row=document.querySelector(`[data-topic-player-detail="${CSS.escape(key)}"]`);
      if(!row) return;
      const open=row.hidden;
      row.hidden=!open;
      detailBtn.setAttribute('aria-expanded',String(open));
      detailBtn.textContent=open?'閉じる':'区間別を見る';
    }
  });

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-directory-player]');
    if(btn){
      const key=btn.dataset.directoryPlayer;
      const row=document.querySelector(`[data-directory-player-detail="${CSS.escape(key)}"]`);
      if(!row)return;
      const open=row.hidden;
      row.hidden=!open;
      btn.setAttribute('aria-expanded',String(open));
      btn.textContent=open?'閉じる':'詳細を見る';
      return;
    }
    const page=e.target.closest('[data-directory-page]');
    if(page && !page.disabled){
      directoryState.page=Number(page.dataset.directoryPage)||1;
      refreshDirectory();
      document.querySelector('.directory-feature')?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });

  document.addEventListener('input',e=>{
    const search=e.target.closest('[data-directory-search]');
    if(!search)return;
    directoryState.query=search.value;
    directoryState.page=1;
    refreshDirectory();
  });

  document.addEventListener('change',e=>{
    const team=e.target.closest('[data-directory-team]');
    if(team){directoryState.team=team.value;directoryState.page=1;refreshDirectory();return;}
    const runs=e.target.closest('[data-directory-runs]');
    if(runs){directoryState.minRuns=Number(runs.value)||1;directoryState.page=1;refreshDirectory();return;}
    const sort=e.target.closest('[data-directory-sort]');
    if(sort){directoryState.sort=sort.value;directoryState.page=1;refreshDirectory();}
  });

  if(location.hash.replace('#','')==='topics' && typeof render==='function') render('topics');
})();
