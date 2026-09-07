// University Data subpages: in-site meet DB, PB updates, grade rankings
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
    const teams=new Set([
      ...Object.keys(typeof expandedTopAthletes2027!=='undefined'?expandedTopAthletes2027:{}),
      ...Object.keys(window.verifiedCurrentPb2026||{})
    ]);
    teams.forEach(team=>{
      const base=(typeof expandedTopAthletes2027!=='undefined'&&expandedTopAthletes2027[team])||[];
      const verified=window.verifiedCurrentPb2026?.[team]||{};
      const map=new Map(base.map(r=>[String(r[0]).replace(/[\\s　]+/g,''),r.slice()]));
      Object.entries(verified).forEach(([name,pb])=>{
        const key=String(name).replace(/[\\s　]+/g,'');
        const prev=map.get(key)||[name,'','—','—','—'];
        map.set(key,[prev[0]||name,prev[1]||'',(pb?.[0]&&pb[0]!=='—')?pb[0]:(prev[2]||'—'),(pb?.[1]&&pb[1]!=='—')?pb[1]:(prev[3]||'—'),(pb?.[2]&&pb[2]!=='—')?pb[2]:(prev[4]||'—')]);
      });
      map.forEach(r=>out.push({team,name:r[0],grade:Number(r[1])||0,pb5000:r[2],pb10000:r[3],half:r[4]}));
    });
    return out;
  }

  const meetCatalog=[
    {id:'japan-ic-2026',autoId:'95ic-2026',year:2026,name:'第95回 日本インカレ',type:'インカレ',period:'2026/9/5–9/7',venue:'日産スタジアム',status:'結果自動取得'},
    {id:'student-individual-2026',autoId:'26kojin-2026',year:2026,name:'2026 日本学生個人選手権',type:'学生選手権',period:'2026/4/24–4/26',venue:'レモンガススタジアム平塚',status:'結果自動取得'},
    {id:'kanto-ic-2026',autoId:'kanto-ic-105-2026',year:2026,name:'第105回 関東インカレ',type:'インカレ',period:'2026/5/21–5/24',venue:'カンセキスタジアムとちぎ',status:'結果自動取得'},
    {id:'abashiri-2026',autoId:'abashiri-summer-2026',year:2026,name:'関東学生網走夏季記録挑戦競技会',type:'記録会',period:'2026/7/12',venue:'網走市営陸上競技場',status:'結果自動取得'},
    {id:'twilight-2026',year:2026,name:'トワイライト・ゲームス',type:'競技会',period:'2026年8月',venue:'関東',status:'結果収録準備中'},
    {id:'nittai-long-2026',year:2026,name:'日本体育大学長距離競技会',type:'記録会',period:'2026年・複数回',venue:'日本体育大学健志台',status:'大会別DB拡張予定'},
    {id:'march-2026',year:2026,name:'MARCH対抗戦',type:'対抗戦',period:'2026年秋〜冬',venue:'関東',status:'開催後収録予定'},
    {id:'hachioji-2026',year:2026,name:'八王子ロングディスタンス',type:'記録会',period:'2026年冬季',venue:'八王子',status:'開催後収録予定'},
    {id:'hokuren-2026',year:2026,name:'ホクレン・ディスタンスチャレンジ',type:'シリーズ',period:'2026年7月',venue:'北海道各地',status:'結果収録準備中'},
    {id:'japan-ic-2025',autoId:'94ic-2025',year:2025,name:'第94回 日本インカレ',type:'インカレ',period:'2025年',venue:'大会公式会場',status:'過去結果自動取得'},
    {id:'student-individual-2025',autoId:'25kojin-2025',year:2025,name:'2025 日本学生個人選手権',type:'学生選手権',period:'2025/4/25–4/27',venue:'レモンガススタジアム平塚',status:'過去結果自動取得'},
    {id:'kanto-ic-2025',autoId:'kanto-ic-104-2025',year:2025,name:'第104回 関東インカレ',type:'インカレ',period:'2025/5/8–5/11',venue:'関東学連公式会場',status:'過去結果自動取得'},
    {id:'abashiri-2025',autoId:'abashiri-summer-2025',year:2025,name:'関東学生網走夏季記録挑戦競技会',type:'記録会',period:'2025/7/20',venue:'網走',status:'過去結果自動取得'},
    {id:'japan-ic-2024',autoId:'93ic-2024',year:2024,name:'第93回 日本インカレ',type:'インカレ',period:'2024/9/19–9/22',venue:'大会公式会場',status:'過去結果自動取得'},
    {id:'student-individual-2024',autoId:'24kojin-2024',year:2024,name:'2024 日本学生個人選手権',type:'学生選手権',period:'2024/6/14–6/16',venue:'レモンガススタジアム平塚',status:'過去結果自動取得'},
    {id:'kanto-10000-2024',autoId:'kanto-10000-2024',year:2024,name:'10000m記録挑戦競技会',type:'記録会',period:'2024/11/16',venue:'相模原ギオンスタジアム',status:'過去結果自動取得'},
    {id:'japan-ic-2023',autoId:'92ic-2023',year:2023,name:'第92回 日本インカレ',type:'インカレ',period:'2023年',venue:'大会公式会場',status:'過去結果自動取得'},
    {id:'student-individual-2023',autoId:'23kojin-2023',year:2023,name:'2023 日本学生個人選手権',type:'学生選手権',period:'2023年4月',venue:'レモンガススタジアム平塚',status:'過去結果自動取得'},
    {id:'japan-ic-2022',autoId:'91ic-2022',year:2022,name:'第91回 日本インカレ',type:'インカレ',period:'2022/9/9–9/11',venue:'大会公式会場',status:'過去結果自動取得'},
    {id:'student-individual-2022',autoId:'22kojin-2022',year:2022,name:'2022 日本学生個人選手権',type:'学生選手権',period:'2022/4/15–4/17',venue:'レモンガススタジアム平塚',status:'過去結果自動取得'},
    {id:'kanto-10000-2022',autoId:'kanto-10000-2022',year:2022,name:'10000m記録挑戦競技会',type:'記録会',period:'2022/11/20',venue:'国立競技場',status:'過去結果自動取得'}
  ];

  const meetResults={
    'japan-ic-2026':{
      source:'日本学生陸上競技連合 公式リザルト',
      events:{
        '男子5000m':[
          [1,'ベナード キクンビ','創価大学','1','13:49.84',''],
          [2,'菅野 元太','創価大学','1','13:50.75',''],
          [3,'井上 朋哉','順天堂大学','2','13:51.72',''],
          [4,'山口 竣平','早稲田大学','3','13:59.15',''],
          [5,'水野 颯也','立命館大学','2','14:07.25',''],
          [6,'南部 悠陽','同志社大学','4','14:11.99',''],
          [7,'岩田 玄弥','愛知工業大学','4','14:16.21',''],
          [8,'山下 慶馬','関西学院大学','4','14:17.52',''],
          [9,'栗田 紳冴','札幌学院大学','4','14:21.07',''],
          [10,'中村 晃斗','志學館大学','4','14:26.26',''],
          [10,'吉田 奏斗','東北学院大学','4','14:26.26',''],
          [12,'日野 拓夢','志學館大学','3','14:28.75',''],
          [13,'小川 晴也','広島経済大学','M1','14:47.90',''],
          [14,'大橋 史空','札幌学院大学','2','14:52.80',''],
          [15,'檜垣 蒼','東海大学','3','14:57.31',''],
          [16,'浦田 陽聖','札幌学院大学','3','15:08.47',''],
          ['—','川崎 颯','筑波大学','4','—','DNS']
        ]
      }
    },
    'kanto-ic-2026':{
      source:'関東学生陸上競技連盟 公式リザルト',
      events:{
        '男子1部10000m':[
          [1,'シャドラック キップケメイ','日本大学','4','28:15.16',''],
          [2,'スティーブン レマイヤン','駿河台大学','4','28:17.99',''],
          [3,'中野 純平','東海大学','3','28:19.39','PB'],
          [4,'南坂 柚汰','東海大学','4','28:21.62','PB'],
          [5,'三宅 悠斗','中央大学','2','28:22.27',''],
          [6,'山口 竣平','早稲田大学','3','28:22.79',''],
          [7,'松尾 和真','順天堂大学','2','28:23.90','PB'],
          [8,'松浦 輝仁','大東文化大学','3','28:32.83','PB'],
          [9,'占部 大和','山梨学院大学','4','28:34.91','PB'],
          [10,'玉目 陸','順天堂大学','3','28:36.33',''],
          [11,'野田 晶斗','法政大学','4','28:48.58',''],
          [12,'七枝 直','中央大学','3','28:51.38',''],
          [13,'迎 暖人','東洋大学','3','28:56.15',''],
          [14,'夏見 虹郎','日本体育大学','2','28:56.51',''],
          [15,'濱中 尊','東洋大学','4','28:56.97','PB'],
          [16,'棟方 一楽','大東文化大学','4','28:57.93',''],
          [17,'並川 颯太','中央大学','3','28:58.50',''],
          [18,'星野 泰地','法政大学','4','29:00.99','PB'],
          [19,'長澤 辰朗','日本大学','3','29:02.09',''],
          [20,'小平 敦之','早稲田大学','4','29:09.29',''],
          [21,'佐藤 大和','日本体育大学','3','29:11.30',''],
          [22,'佐藤 我駆人','駿河台大学','3','29:16.88',''],
          [23,'小田 伊織','城西大学','4','29:33.37',''],
          [24,'小林 侑世','順天堂大学','4','29:41.02',''],
          [25,'荻野 桂輔','日本体育大学','3','29:41.17',''],
          [26,'三宅 駿','城西大学','3','29:42.42',''],
          [27,'中澤 真大','大東文化大学','3','29:47.15',''],
          [28,'橋本 櫂知','日本大学','3','29:47.37',''],
          [29,'青手木 陽太','法政大学','3','29:51.39',''],
          [30,'税田 悠生','国士舘大学','2','30:22.60',''],
          ['—','宮地 大哉','山梨学院大学','4','—','DNS'],
          ['—','成合 洸琉','明治大学','3','—','DNS'],
          ['—','松井 海斗','東洋大学','3','—','DNS'],
          ['—','キブニ エヴァンス','国士舘大学','1','—','DNS']
        ]
      }
    },
    'student-individual-2026':{
      source:'日本学生陸上競技連合 公式リザルト',
      events:{
        '男子5000m':[
          ['—','佐々木 大輝','青山学院大学','3','—','DNS'],
          ['—','神邑 亮佑','青山学院大学','2','—','DNS']
        ],
        '男子10000m':[
          [1,'山口 竣平','早稲田大学','3','27:59.47',''],
          [2,'吉岡 大翔','順天堂大学','4','28:12.22',''],
          [3,'吉倉 ナヤブ直希','早稲田大学','3','28:13.07',''],
          [4,'川崎 颯','筑波大学','4','28:15.69',''],
          [5,'山本 悠','順天堂大学','3','28:19.16',''],
          [6,'植阪 嶺児','駒澤大学','4','28:23.41',''],
          [7,'小池 莉希','創価大学','4','28:40.22',''],
          [8,'辻 誉','中央大学','2','30:23.01',''],
          ['—','栗田 紳冴','札幌学院大学','4','—','DNS']
        ]
      }
    }
  };

  const autoDB=window.universityMeetResultsAutoDB?.meets||{};
  meetCatalog.forEach(meta=>{
    const autoId=meta.autoId;
    if(!autoId||!autoDB[autoId]) return;
    const meet=autoDB[autoId];
    if(!meetResults[meta.id]) meetResults[meta.id]={source:'公式WEBリザルト自動取得',events:{}};
    Object.entries(meet?.events||{}).forEach(([eventName,event])=>{
      const rows=Array.isArray(event)?event:event?.rows;
      if(Array.isArray(rows)&&rows.length) meetResults[meta.id].events[eventName]=rows;
    });
  });

  let activeMeetYear=2026;
  let activeMeet='student-individual-2026';
  let activeMeetEvent='男子10000m';

  function meetResultTable(meetId,event){
    const d=meetResults[meetId];
    const rows=d?.events?.[event]||[];
    if(!rows.length) return '<div class="notice">この大会・種目は結果確認中です。確認できた公式記録から順次追加します。</div>';
    return `<div class="table-wrap meet-result-table"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>記録</th><th>備考</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong></td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}年</td><td>${r[4]}</td><td>${r[5]||''}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function meetResultPanel(meetId){
    const meet=meetCatalog.find(m=>m.id===meetId)||meetCatalog[0];
    const d=meetResults[meetId];
    if(!d){
      return `<article class="data-card meet-db-panel"><div class="meet-card-top"><span class="topic-badge">${meet.type}</span><span class="muted">${meet.period}</span></div><h2>${meet.name}</h2><p>${meet.venue}</p><div class="notice">${meet.status}。外部サイトへ移動せず、このページ内に確認済み結果を追加していきます。</div></article>`;
    }
    const events=Object.keys(d.events);
    if(!events.includes(activeMeetEvent)) activeMeetEvent=events[0];
    return `<article class="data-card meet-db-panel">
      <div class="meet-card-top"><span class="topic-badge">${meet.type}</span><span class="muted">${meet.period}</span></div>
      <h2>${meet.name}</h2><p class="muted">${meet.venue} / ${d.source}</p>
      <div class="tabs meet-event-tabs">${events.map(ev=>`<button class="tab ${ev===activeMeetEvent?'active':''}" data-meet-event="${ev}">${ev.replace('男子','')}</button>`).join('')}</div>
      <div id="meetEventResult">${meetResultTable(meetId,activeMeetEvent)}</div>
    </article>`;
  }

  function meetsTemplate(){
    const years=[2026,2025,2024,2023,2022];
    const list=meetCatalog.filter(m=>m.year===activeMeetYear);
    if(!list.some(m=>m.id===activeMeet)) activeMeet=list[0]?.id||'';
    return `<section class="container page university-subpage">
      <div class="page-header"><div class="eyebrow">UNIVERSITY DATA / MEETS</div><h1>大会・記録会データベース</h1><p>2022〜2026の5年分を対象に、大学長距離の3000mより長いランニング種目をサイト内で確認できます。</p></div>
      <div class="university-note"><strong>収録ルール:</strong> 5000m・10000m・ロード5km以上・ハーフ等を対象とし、3000m、3000mSC、競歩は除外します。公式結果が残っている大会から順次バックフィルします。</div>
      <div class="year-select-control"><label for="meetYearSelect">年度</label><select id="meetYearSelect" class="year-select" data-meet-year>${years.map(y=>`<option value="${y}" ${y===activeMeetYear?'selected':''}>${y}年</option>`).join('')}</select></div>
      <div class="meet-db-layout">
        <aside class="meet-db-list">${list.map(m=>`<button class="meet-db-button ${m.id===activeMeet?'active':''}" data-meet-id="${m.id}"><strong>${m.name}</strong><span>${m.period} ・ ${m.status}</span></button>`).join('')}</aside>
        <div id="meetDatabaseResult">${activeMeet?meetResultPanel(activeMeet):'<div class="notice">大会データを確認中です。</div>'}</div>
      </div>
    </section>`;
  }

  function pbUpdatesTemplate(){
    const rows=athleteRows();
    const by5000=rows.filter(r=>Number.isFinite(sec(r.pb5000))).sort((a,b)=>sec(a.pb5000)-sec(b.pb5000)).slice(0,20);
    return `<section class="container page university-subpage"><div class="page-header"><div class="eyebrow">UNIVERSITY DATA / PB UPDATE</div><h1>PB更新ランキング</h1><p>選手ごとのPB更新を時系列で追い、「最近伸びている選手」を見つけるページです。</p></div><div class="university-note"><strong>現在の状態:</strong> 2026年8月時点のPBを基準スナップショットとして使用します。今後の大会DB追加時に旧PBとの差分を保存し、更新幅・更新回数でランキング化します。</div><article class="data-card"><h2>基準データ：5000m上位20名</h2><div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>5000m PB</th></tr></thead><tbody>${by5000.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${r.grade}年</td><td>${r.pb5000}</td></tr>`).join('')}</tbody></table></div></article><div class="pb-plan-grid"><article class="data-card"><h3>更新幅ランキング</h3><p>旧PBとの差を秒単位で集計します。</p></article><article class="data-card"><h3>更新回数ランキング</h3><p>シーズン中のPB更新回数を集計します。</p></article><article class="data-card"><h3>大学別PB更新人数</h3><p>大学ごとのPB更新人数も集計します。</p></article></div></section>`;
  }

  function gradeRankTable(metric,label,grade){
    const rows=athleteRows().filter(r=>r.grade===grade&&Number.isFinite(sec(r[metric]))).sort((a,b)=>sec(a[metric])-sec(b[metric])).slice(0,20);
    return `<div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>${label}</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${r.name}</strong></td><td>${r.team}</td><td>${r[metric]}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function gradeRankingsTemplate(){
    return `<section class="container page university-subpage"><div class="page-header"><div class="eyebrow">UNIVERSITY DATA / GRADE RANKING</div><h1>学年別ランキング</h1><p>現在PBを収録している選手を、学年別・種目別に比較します。</p></div>${[1,2,3,4].map(g=>`<article class="data-card grade-block"><div class="grade-head"><h2>${g}年生ランキング</h2><span class="topic-badge">TOP 20</span></div><div class="tabs grade-metric-tabs"><button class="tab active" data-grade-metric="pb5000" data-grade="${g}">5000m</button><button class="tab" data-grade-metric="pb10000" data-grade="${g}">10000m</button><button class="tab" data-grade-metric="half" data-grade="${g}">ハーフ</button></div><div data-grade-result="${g}">${gradeRankTable('pb5000','5000m PB',g)}</div></article>`).join('')}<div class="notice">大学データ対象は箱根直近20年の出場校へ拡張済みです。PBランキングは確認できた現行選手から順次対象校を増やします。</div></section>`;
  }

  document.addEventListener('change',e=>{
    const year=e.target.closest('[data-meet-year]');
    if(!year)return;
    activeMeetYear=Number(year.value);
    const first=meetCatalog.find(m=>m.year===activeMeetYear);
    activeMeet=first?.id||'';
    if(typeof render==='function') render('meets');
  });

  document.addEventListener('click',e=>{
    const meetBtn=e.target.closest('[data-meet-id]');
    if(meetBtn){activeMeet=meetBtn.dataset.meetId;const d=meetResults[activeMeet];if(d)activeMeetEvent=Object.keys(d.events)[0];const host=document.querySelector('#meetDatabaseResult');if(host)host.innerHTML=meetResultPanel(activeMeet);document.querySelectorAll('[data-meet-id]').forEach(b=>b.classList.toggle('active',b===meetBtn));return;}
    const eventBtn=e.target.closest('[data-meet-event]');
    if(eventBtn){activeMeetEvent=eventBtn.dataset.meetEvent;eventBtn.closest('.meet-db-panel').querySelectorAll('[data-meet-event]').forEach(b=>b.classList.toggle('active',b===eventBtn));const host=document.querySelector('#meetEventResult');if(host)host.innerHTML=meetResultTable(activeMeet,activeMeetEvent);return;}
    const btn=e.target.closest('[data-grade-metric]');
    if(!btn)return;
    const grade=Number(btn.dataset.grade),metric=btn.dataset.gradeMetric;
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
  if(['meets','pbupdates','grade-rankings'].includes(route)&&typeof render==='function')render(route);
})();