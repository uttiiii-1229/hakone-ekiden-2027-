// University Data subpages: meets, PB updates, grade rankings
(() => {
  function sec(v){
    const s=String(v||'').trim();
    if(!s||s==='—') return Number.POSITIVE_INFINITY;
    const p=s.split(':').map(Number);
    if(p.length===2) return p[0]*60+p[1];
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    return Number.POSITIVE_INFINITY;
  }
  function athleteRows(){
    const out=[];
    if(typeof expandedTopAthletes2027==='undefined') return out;
    Object.entries(expandedTopAthletes2027).forEach(([team,rows])=>{
      (rows||[]).forEach(r=>out.push({team,name:r[0],grade:Number(r[1]),pb5000:r[2],pb10000:r[3],half:r[4]}));
    });
    return out;
  }

  const meetCatalog=[
    {name:'日本学生陸上競技対校選手権大会（日本インカレ）',type:'インカレ',scope:'全国',month:'9月',events:'1500m / 5000m / 10000m / 3000mSC など',source:'日本学生陸上競技連合・日本陸連',url:'https://www.iuau.jp/taikaijoho2026.html'},
    {name:'日本学生陸上競技個人選手権大会',type:'学生選手権',scope:'全国',month:'4月',events:'トラック・フィールド各種目',source:'日本陸連',url:'https://www.jaaf.or.jp/competition/detail/2110/'},
    {name:'関東学生陸上競技対校選手権大会（関東インカレ）',type:'インカレ',scope:'関東',month:'5月',events:'1500m / 5000m / 10000m / ハーフ / 3000mSC など',source:'関東学生陸上競技連盟',url:'https://www.kgrr.org/competition/'},
    {name:'関東学生網走夏季記録挑戦競技会',type:'記録会',scope:'関東',month:'7月',events:'長距離種目中心',source:'関東学生陸上競技連盟',url:'https://www.kgrr.org/'},
    {name:'トワイライト・ゲームス',type:'競技会',scope:'関東',month:'8月',events:'中長距離を含む選抜種目',source:'関東学生陸上競技連盟',url:'https://www.kgrr.org/'},
    {name:'関東学生新人陸上競技選手権大会',type:'新人戦',scope:'関東',month:'9月',events:'トラック・フィールド各種目',source:'関東学生陸上競技連盟',url:'https://www.kgrr.org/'},
    {name:'関東学連春季オープン競技会',type:'オープン',scope:'関東',month:'3月',events:'トラック・フィールド各種目',source:'関東学生陸上競技連盟',url:'https://www.kgrr.org/'},
    {name:'日本体育大学長距離競技会',type:'記録会',scope:'全国参加',month:'複数回',events:'5000m / 10000m など',source:'日本学生陸上競技連合の公認競技会一覧等',url:'https://www.iuau.jp/'},
    {name:'MARCH対抗戦',type:'対抗戦',scope:'関東',month:'秋〜冬',events:'10000m',source:'大会公式',url:'https://march-cup.org/'},
    {name:'八王子ロングディスタンス',type:'記録会',scope:'全国',month:'冬季',events:'10000m',source:'大会公式',url:'https://www.hachioji-10000.com/'},
    {name:'ホクレン・ディスタンスチャレンジ',type:'シリーズ',scope:'全国',month:'7月',events:'1500m / 5000m / 10000m など',source:'日本陸連',url:'https://www.jaaf.or.jp/competition/'},
    {name:'各大学主催競技会・記録突破会',type:'大学記録会',scope:'各地域',month:'通年',events:'5000m / 10000m ほか',source:'日本学生陸上競技連合の月別大会情報',url:'https://www.iuau.jp/'}
  ];

  function meetsTemplate(){
    return `<section class="container page university-subpage">
      <div class="page-header">
        <div class="eyebrow">UNIVERSITY DATA / MEETS</div>
        <h1>大会・記録会</h1>
        <p>大学長距離の主要インカレから記録会まで、駅伝以外の競技結果を追うためのページです。今後は年度・大会・種目ごとの結果DBへ拡張します。</p>
      </div>
      <div class="university-note"><strong>収録方針：</strong> 日本インカレ・関東インカレなどの主要大会に加え、日体大長距離競技会、MARCH対抗戦、八王子ロングディスタンス、各大学主催の公認競技会まで対象にします。</div>
      <div class="meet-grid">
        ${meetCatalog.map(m=>`<article class="data-card meet-card"><div class="meet-card-top"><span class="topic-badge">${m.type}</span><span class="muted">${m.month}</span></div><h3>${m.name}</h3><p><strong>対象:</strong> ${m.scope}</p><p><strong>主な種目:</strong> ${m.events}</p><p class="muted">情報源: ${m.source}</p><a class="primary-button meet-link" href="${m.url}" target="_blank" rel="noopener">公式・大会情報を見る ↗</a></article>`).join('')}
      </div>
      <div class="notice"><strong>今後の完成形:</strong> 「2026年 → 大会 → 男子5000m → 全結果」のように掘れるデータベースにし、選手名を押すと全選手名鑑へつながる構成を想定しています。</div>
    </section>`;
  }

  function pbUpdatesTemplate(){
    const rows=athleteRows();
    const by5000=rows.filter(r=>Number.isFinite(sec(r.pb5000))).sort((a,b)=>sec(a.pb5000)-sec(b.pb5000)).slice(0,20);
    return `<section class="container page university-subpage">
      <div class="page-header">
        <div class="eyebrow">UNIVERSITY DATA / PB UPDATE</div>
        <h1>PB更新ランキング</h1>
        <p>選手ごとのPB更新を時系列で追い、「最近伸びている選手」を見つけるページです。</p>
      </div>
      <div class="university-note"><strong>現在の状態:</strong> 2026年8月時点のPBを基準スナップショットとして使用します。次回以降の記録会・大会更新で旧PBとの差分を保存し、更新幅・更新回数でランキング化します。</div>
      <article class="data-card"><h2>基準データ：5000m上位20名</h2><p class="muted">まず現在PBを基準値として固定。今後この値からの更新を自動比較します。</p>
        <div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>5000m PB</th></tr></thead><tbody>
        ${by5000.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${r.grade}年</td><td>${r.pb5000}</td></tr>`).join('')}
        </tbody></table></div>
      </article>
      <div class="pb-plan-grid">
        <article class="data-card"><h3>更新幅ランキング</h3><p>例：5000mを13:40.00 → 13:31.20に更新した場合、8.80秒更新として集計。</p></article>
        <article class="data-card"><h3>更新回数ランキング</h3><p>シーズン中に何回PBを更新したかを集計し、継続的な伸びを評価。</p></article>
        <article class="data-card"><h3>大学別PB更新人数</h3><p>各大学で何人がPB更新したかを集計し、チーム全体の伸びも見えるようにします。</p></article>
      </div>
    </section>`;
  }

  function gradeRankTable(metric,label,grade){
    const rows=athleteRows().filter(r=>r.grade===grade && Number.isFinite(sec(r[metric]))).sort((a,b)=>sec(a[metric])-sec(b[metric])).slice(0,20);
    return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>${label}</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${r[metric]}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function gradeRankingsTemplate(){
    return `<section class="container page university-subpage">
      <div class="page-header">
        <div class="eyebrow">UNIVERSITY DATA / GRADE RANKING</div>
        <h1>学年別ランキング</h1>
        <p>現在収録している注目9校の選手を、学年別・種目別に比較します。</p>
      </div>
      ${[1,2,3,4].map(g=>`<article class="data-card grade-block"><div class="grade-head"><h2>${g}年生ランキング</h2><span class="topic-badge">TOP 20</span></div><div class="tabs grade-metric-tabs"><button class="tab active" data-grade-metric="pb5000" data-grade="${g}">5000m</button><button class="tab" data-grade-metric="pb10000" data-grade="${g}">10000m</button><button class="tab" data-grade-metric="half" data-grade="${g}">ハーフ</button></div><div data-grade-result="${g}">${gradeRankTable('pb5000','5000m PB',g)}</div></article>`).join('')}
      <div class="notice">現時点では注目9校×各10名の収録選手が対象です。将来的には全大学・全登録選手へ拡張する想定です。</div>
    </section>`;
  }

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-grade-metric]');
    if(!btn)return;
    const grade=Number(btn.dataset.grade);
    const metric=btn.dataset.gradeMetric;
    const host=document.querySelector(`[data-grade-result="${grade}"]`);
    if(!host)return;
    btn.closest('.grade-block').querySelectorAll('[data-grade-metric]').forEach(b=>b.classList.toggle('active',b===btn));
    const labels={pb5000:'5000m PB',pb10000:'10000m PB',half:'ハーフ PB'};
    host.innerHTML=gradeRankTable(metric,labels[metric],grade);
  });

  if(typeof templates!=='undefined'){
    templates.meets=meetsTemplate;
    templates.pbupdates=pbUpdatesTemplate;
    templates['grade-rankings']=gradeRankingsTemplate;
  }

  const route=location.hash.replace('#','');
  if(['meets','pbupdates','grade-rankings'].includes(route) && typeof render==='function') render(route);
})();