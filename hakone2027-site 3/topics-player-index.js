// Topics: athlete performance index based on section-time deviation scores
(() => {
  const raceLabels={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  const cache={};
  let activeRace='hakone';

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
    </section>`;
  }

  if(typeof templates!=='undefined') templates.topics=topicsTemplate;

  document.addEventListener('click',e=>{
    const raceBtn=e.target.closest('[data-topic-race]');
    if(raceBtn){
      activeRace=raceBtn.dataset.topicRace;
      document.querySelectorAll('[data-topic-race]').forEach(b=>b.classList.toggle('active',b.dataset.topicRace===activeRace));
      const host=document.querySelector('#topicRanking');
      if(host){
        host.innerHTML=`<div class="section-db-head"><div><h2>${raceLabels[activeRace]} 選手偏差値 TOP20</h2><p class="muted">総合偏差値を主ランキングにし、詳細から区間別偏差値を確認できます。</p></div></div>${rankingTable(activeRace)}`;
      }
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

  if(location.hash.replace('#','')==='topics' && typeof render==='function') render('topics');
})();
