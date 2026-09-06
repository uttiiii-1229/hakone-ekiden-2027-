// Topics: athlete performance index based on section-time deviation scores
(() => {
  const raceLabels={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const sectionCounts={hakone:10,izumo:6,zennihon:8};
  const cache={};
  let activeRace='hakone';

  // 箱根公式の選手詳細で再照合した通算出走数。
  // 2007年より前から出走しており、現DBの収録開始年をまたぐ選手を補正する。
  const hakoneCareerAppearances={
    '佐藤悠基|東海大学':4,
    '松瀬元太|順天堂大学':4,
    '鷲見知彦|日本体育大学':4,
    '今井正人|順天堂大学':4,
    '竹沢健介|早稲田大学':4,
    '上野裕一郎|中央大学':4,
    '上野祐一郎|中央大学':4
  };

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
        players.set(key,{athlete:a.athlete,team:a.team,scores:[],runs:[]});
      }
      const p=players.get(key);
      p.scores.push(a.deviation);
      p.runs.push(a);
    });

    const ranking=[...players.values()].map(p=>{
      const avg=p.scores.reduce((a,b)=>a+b,0)/p.scores.length;
      const best=Math.max(...p.scores);
      const sections=[...new Set(p.runs.map(r=>r.section))].sort((a,b)=>a-b);
      const years=[...new Set(p.runs.map(r=>r.year))].sort((a,b)=>a-b);
      const baseAppearances=p.scores.length;
      const careerKey=`${normText(p.athlete)}|${normText(p.team)}`;
      const officialAppearances=race==='hakone' ? (hakoneCareerAppearances[careerKey]||baseAppearances) : baseAppearances;
      return {...p,score:avg,best,sections,years,appearances:officialAppearances,scoredAppearances:baseAppearances};
    }).sort((a,b)=>b.score-a.score||b.best-a.best||b.appearances-a.appearances).slice(0,20);

    cache[race]={ranking,totalRuns:appearances.length,totalPlayers:players.size};
    return cache[race];
  }

  function rankingTable(race){
    const data=calcRace(race);
    if(!data.ranking.length){
      return '<div class="notice">区間タイムDBを読み込めなかったため、偏差値を算出できませんでした。</div>';
    }
    return `
      <div class="topic-summary">
        <div><strong>${data.totalPlayers.toLocaleString()}</strong><span>選手を集計</span></div>
        <div><strong>${data.totalRuns.toLocaleString()}</strong><span>区間走を標準化</span></div>
        <div><strong>TOP 20</strong><span>平均偏差値順</span></div>
      </div>
      <div class="table-wrap topic-ranking-table">
        <table>
          <thead><tr><th>順位</th><th>選手</th><th>大学・チーム</th><th>偏差値</th><th>公式出走数</th><th>出走区間</th></tr></thead>
          <tbody>
            ${data.ranking.map((p,i)=>`
              <tr>
                <td><strong>${i+1}</strong></td>
                <td><strong>${p.athlete}</strong></td>
                <td>${p.team}</td>
                <td><span class="topic-score">${p.score.toFixed(1)}</span></td>
                <td>${p.appearances}</td>
                <td>${p.sections.map(s=>s+'区').join('・')}</td>
              </tr>`).join('')}
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
          <span class="topic-badge">2007–2026 DATA</span>
        </div>
        <div class="notice topic-method">
          同じ年・同じ区間を走った選手のタイム分布から「偏差値 = 50 + 10 ×（区間平均タイム − 選手タイム）÷ 標準偏差」を算出します。
          選手が複数年・複数区間を走っている場合は、それぞれの区間偏差値を平均して平準化します。これにより距離やコースが違う区間同士をタイムそのままで比較しません。箱根の出走数は公式選手詳細も照合し、収録開始年をまたぐ選手は通算出走数を補正しています。
        </div>
        <div class="tabs topic-race-tabs">
          ${Object.entries(raceLabels).map(([k,v])=>`<button class="tab ${k===activeRace?'active':''}" data-topic-race="${k}">${v}</button>`).join('')}
        </div>
        <div id="topicRanking">
          <div class="section-db-head"><div><h2>${raceLabels[activeRace]} 選手偏差値 TOP20</h2><p class="muted">各年・各区間で標準化した偏差値を選手単位で平均。</p></div></div>
          ${rankingTable(activeRace)}
        </div>
      </article>
    </section>`;
  }

  if(typeof templates!=='undefined') templates.topics=topicsTemplate;

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-topic-race]');
    if(!btn) return;
    activeRace=btn.dataset.topicRace;
    document.querySelectorAll('[data-topic-race]').forEach(b=>b.classList.toggle('active',b.dataset.topicRace===activeRace));
    const host=document.querySelector('#topicRanking');
    if(host){
      host.innerHTML=`<div class="section-db-head"><div><h2>${raceLabels[activeRace]} 選手偏差値 TOP20</h2><p class="muted">各年・各区間で標準化した偏差値を選手単位で平均。</p></div></div>${rankingTable(activeRace)}`;
    }
  });

  if(location.hash.replace('#','')==='topics' && typeof render==='function') render('topics');
})();
