// Quiz question database generated from the site's three-ekiden historical datasets.
(() => {
  const raceLabel={hakone:'箱根駅伝',izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const raceShort={hakone:'箱根',izumo:'出雲',zennihon:'全日本'};
  const sectionCount={hakone:10,izumo:6,zennihon:8};
  const famous=['黒田 朝日','黒田朝日','佐藤 圭汰','佐藤圭汰','岡田 開成','岡田開成','鈴木 琉胤','鈴木琉胤','野中 恒亨','野中恒亨','工藤 慎作','工藤慎作','吉居 駿恭','吉居駿恭','山口 智規','山口智規','本間 颯','本間颯','辻原 輝','辻原輝'];

  const clean=s=>String(s??'').replace(/\s+/g,'').replace(/\([^)]*\)/g,'').trim();
  const sec=v=>{
    const p=String(v||'').replace(/[^0-9:]/g,'').split(':').filter(Boolean).map(Number);
    if(p.some(x=>!Number.isFinite(x))) return NaN;
    if(p.length===3) return p[0]*3600+p[1]*60+p[2];
    if(p.length===2) return p[0]*60+p[1];
    return NaN;
  };
  const fmtGap=n=>Number.isFinite(n)?Math.round(n)+'秒':'—';
  const shuffle=a=>{
    const out=a.slice();
    for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
    return out;
  };
  const uniq=a=>[...new Set(a.filter(v=>v!==undefined&&v!==null&&String(v).trim()!==''))];
  function makeQ(id,q,correct,distractors,ex,meta={}){
    const others=uniq(distractors).filter(x=>String(x)!==String(correct));
    if(others.length<3) return null;
    const choices=shuffle([correct,...shuffle(others).slice(0,3)]);
    return {id,q,choices,answer:choices.findIndex(x=>String(x)===String(correct)),ex,...meta};
  }
  function sample(pool,n=10){
    const seen=new Set(),out=[];
    for(const q of shuffle(pool)){
      const key=q?.q;
      if(!q||seen.has(key)) continue;
      seen.add(key);out.push(q);
      if(out.length>=n) break;
    }
    return out;
  }

  function hakoneRows(year,section){
    return (window.hakonePhase2StaticDB?.[year]?.[section]||[]).map(r=>({rank:Number(r[0]),pass:Number(r[1]),team:r[2],athlete:r[3],time:r[4]}));
  }
  function threeRows(race,year,section){
    return (window.threeEkidenSectionsDB?.[race]?.[year]?.sections?.[section]||[]).map(r=>({rank:Number(r.rank),team:r.team,athlete:r.athlete,time:r.time}));
  }
  function rows(race,year,section){return race==='hakone'?hakoneRows(year,section):threeRows(race,year,section);}
  function heldYears(race){
    if(race==='hakone') return Object.keys(window.hakonePhase2StaticDB||{}).map(Number).filter(y=>y>=2000).sort((a,b)=>a-b);
    return Object.entries(window.threeEkidenSectionsDB?.[race]||{}).filter(([,v])=>v?.status==='開催').map(([y])=>Number(y)).filter(y=>y>=2000).sort((a,b)=>a-b);
  }
  function overallResults(race,year){
    if(race==='hakone'){
      const s10=hakoneRows(year,10);
      return s10.slice().sort((a,b)=>a.pass-b.pass).map(r=>({rank:r.pass,team:r.team}));
    }
    return (window.threeEkidenStandingsDB?.[race]?.[year]?.results||[]).filter(r=>Number.isFinite(Number(r.rank))).map(r=>({rank:Number(r.rank),team:r.team,time:r.time})).sort((a,b)=>a.rank-b.rank);
  }
  function overallWinner(race,year){return overallResults(race,year).find(r=>r.rank===1)?.team||'';}
  function outboundWinner(year){return hakoneRows(year,5).slice().sort((a,b)=>a.pass-b.pass).find(r=>r.pass===1)?.team||'';}
  function returnWinner(year){
    const totals=new Map();
    for(let s=6;s<=10;s++) for(const r of hakoneRows(year,s)){
      const t=sec(r.time); if(!Number.isFinite(t)) continue;
      totals.set(r.team,(totals.get(r.team)||0)+t);
    }
    return [...totals.entries()].sort((a,b)=>a[1]-b[1])[0]?.[0]||'';
  }
  function sectionWinner(race,year,section){return rows(race,year,section).find(r=>r.rank===1)||null;}
  function isFamous(name){const n=clean(name);return famous.some(f=>clean(f)===n);}

  const pools={beginner:[],intermediate:[],advanced:[],expert:[],mania:[]};

  // 初級: 最新大会の優勝校と、現在よく知られる有力選手を中心にする。
  for(const race of ['hakone','izumo','zennihon']){
    const ys=heldYears(race); const y=ys[ys.length-1]; if(!y) continue;
    const winner=overallWinner(race,y);
    const all=overallResults(race,y).map(r=>r.team);
    if(winner) pools.beginner.push(makeQ('beg-win-'+race+'-'+y,`${y}年の${raceLabel[race]}で優勝した大学はどこですか？`,winner,all.filter(x=>x!==winner),`${y}年の${raceLabel[race]}は${winner}が優勝しました。`));
    for(let s=1;s<=sectionCount[race];s++){
      const rs=rows(race,y,s); const target=rs.find(r=>isFamous(r.athlete));
      if(!target) continue;
      pools.beginner.push(makeQ('beg-famous-team-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区を走った${target.athlete}の所属大学はどこですか？`,target.team,rs.map(r=>r.team),`${target.athlete}は${target.team}として${s}区を走りました。`));
    }
  }

  // 中級: 大会そのものの基本知識。ほかの難易度と歴史データ問題を重複させない。
  const basics=[
    ['mid-01','箱根駅伝は往路と復路を合わせて全部で何区ありますか？','10区',['8区','9区','12区'],'往路5区・復路5区の合計10区です。'],
    ['mid-02','出雲駅伝は全部で何区ありますか？','6区',['5区','7区','8区'],'出雲駅伝は6区です。'],
    ['mid-03','全日本大学駅伝は全部で何区ありますか？','8区',['6区','7区','10区'],'全日本大学駅伝は8区です。'],
    ['mid-04','箱根駅伝で「山上り」と呼ばれる区間はどこですか？','5区',['3区','6区','8区'],'箱根5区は小田原から芦ノ湖へ向かう山上り区間です。'],
    ['mid-05','箱根駅伝で「山下り」と呼ばれる区間はどこですか？','6区',['4区','5区','7区'],'箱根6区は芦ノ湖から小田原へ向かう山下り区間です。'],
    ['mid-06','出雲駅伝が開催される都道府県はどこですか？','島根県',['鳥取県','岡山県','広島県'],'出雲駅伝は島根県で開催されます。'],
    ['mid-07','全日本大学駅伝のゴール地点として知られるのはどこですか？','伊勢神宮 内宮宇治橋前',['出雲大社','芦ノ湖','明治神宮'],'全日本大学駅伝は伊勢神宮内宮宇治橋前がゴールです。'],
    ['mid-08','箱根駅伝のスタート地点として知られる場所はどこですか？','東京・大手町',['横浜・みなとみらい','新宿・都庁前','箱根湯本'],'箱根駅伝は東京・大手町からスタートします。'],
    ['mid-09','大学三大駅伝に含まれる組み合わせはどれですか？','箱根・出雲・全日本',['箱根・都道府県・全日本','出雲・ニューイヤー・箱根','箱根・富士山・出雲'],'大学三大駅伝は箱根、出雲、全日本です。'],
    ['mid-10','箱根駅伝で往路の最終区間は何区ですか？','5区',['4区','6区','7区'],'往路は1区から5区までです。'],
    ['mid-11','箱根駅伝で復路の最初の区間は何区ですか？','6区',['5区','7区','8区'],'復路は6区から始まります。'],
    ['mid-12','三大駅伝のうち最も区間数が多い大会はどれですか？','箱根駅伝',['出雲駅伝','全日本大学駅伝','3大会とも同じ'],'箱根は10区、出雲は6区、全日本は8区です。']
  ];
  for(const [id,q,c,d,e] of basics) pools.intermediate.push(makeQ(id,q,c,d,e));

  // 上級: 各大会の直近5開催分から、最新大会を除いた優勝校、箱根往路優勝、有名選手の出走区間を中心にする。
  for(const race of ['hakone','izumo','zennihon']){
    const ys=heldYears(race).slice(-5);
    for(const y of ys.slice(0,-1)){
      const winner=overallWinner(race,y),all=overallResults(race,y).map(r=>r.team);
      if(winner) pools.advanced.push(makeQ('adv-win-'+race+'-'+y,`直近5開催の範囲で、${y}年の${raceLabel[race]}を制した大学はどこですか？`,winner,all,`${y}年の${raceLabel[race]}優勝は${winner}です。`));
      if(race==='hakone'){
        const out=outboundWinner(y),teams=hakoneRows(y,5).map(r=>r.team);
        if(out) pools.advanced.push(makeQ('adv-out-'+y,`${y}年の箱根駅伝で往路優勝した大学はどこですか？`,out,teams,`${y}年の箱根駅伝往路優勝は${out}です。`));
      }
      for(let s=1;s<=sectionCount[race];s++){
        const rs=rows(race,y,s); const t=rs.find(r=>isFamous(r.athlete));
        if(!t) continue;
        pools.advanced.push(makeQ('adv-famous-sec-'+race+'-'+y+'-'+clean(t.athlete),`${y}年の${raceLabel[race]}で${t.athlete}が走った区間はどこですか？`,s+'区',Array.from({length:sectionCount[race]},(_,i)=>(i+1)+'区'),`${t.athlete}は${s}区を走りました。`));
      }
    }
  }

  // 超級: 直近10開催の区間賞、箱根復路優勝、有名選手の区間タイムを中心にする。
  for(const race of ['hakone','izumo','zennihon']){
    const ys=heldYears(race).slice(-10);
    for(const y of ys){
      for(let s=1;s<=sectionCount[race];s++){
        const rs=rows(race,y,s),w=rs.find(r=>r.rank===1); if(!w) continue;
        pools.expert.push(makeQ('exp-secwin-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で区間賞を獲得した選手は誰ですか？`,w.athlete,rs.map(r=>r.athlete),`${s}区の区間賞は${w.athlete}（${w.team}）、タイムは${w.time}でした。`));
        if(isFamous(w.athlete)){
          pools.expert.push(makeQ('exp-famous-time-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で${w.athlete}が記録したタイムはどれですか？`,w.time,rs.map(r=>r.time),`${w.athlete}の${s}区タイムは${w.time}でした。`));
        }
      }
      if(race==='hakone'){
        const rw=returnWinner(y),teams=hakoneRows(y,10).map(r=>r.team);
        if(rw) pools.expert.push(makeQ('exp-return-'+y,`${y}年の箱根駅伝で復路優勝した大学はどこですか？`,rw,teams,`${y}年の箱根駅伝復路優勝は${rw}です。`));
      }
    }
  }

  // マニア級: 2000年以降のサイト内全履歴DBを横断し、優勝・区間賞以外の細部まで問題化する。
  for(const race of ['hakone','izumo','zennihon']){
    for(const y of heldYears(race)){
      for(let s=1;s<=sectionCount[race];s++){
        const rs=rows(race,y,s); if(rs.length<4) continue;
        const r1=rs.find(r=>r.rank===1)||rs[0];
        const r2=rs.find(r=>r.rank===2)||rs[1];
        const r3=rs.find(r=>r.rank===3)||rs[2];

        if(r2) pools.mania.push(makeQ('man-r2-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で区間2位だった選手は誰ですか？`,r2.athlete,rs.map(r=>r.athlete),`${s}区の区間2位は${r2.athlete}（${r2.team}）で、${r2.time}でした。`));
        if(r3) pools.mania.push(makeQ('man-r3time-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で区間3位だった選手のタイムはどれですか？`,r3.time,rs.map(r=>r.time),`区間3位は${r3.athlete}（${r3.team}）で、タイムは${r3.time}でした。`));
        if(r1) pools.mania.push(makeQ('man-team-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で${r1.athlete}が所属していた大学・チームはどこですか？`,r1.team,rs.map(r=>r.team),`${r1.athlete}は${r1.team}として${s}区を走りました。`));
        if(r1&&r2){
          const gap=sec(r2.time)-sec(r1.time);
          if(Number.isFinite(gap)&&gap>=0){
            const correct=fmtGap(gap);
            pools.mania.push(makeQ('man-gap-'+race+'-'+y+'-'+s,`${y}年の${raceLabel[race]}${s}区で、区間1位と2位のタイム差は何秒ですか？`,correct,[fmtGap(gap+5),fmtGap(Math.max(0,gap-5)),fmtGap(gap+10),fmtGap(gap+15)],`区間1位${r1.athlete}が${r1.time}、2位${r2.athlete}が${r2.time}で、差は${correct}です。`));
          }
        }
        if(race==='hakone'){
          const leader=rs.find(r=>r.pass===1);
          if(leader) pools.mania.push(makeQ('man-pass-'+y+'-'+s,`${y}年の箱根駅伝${s}区終了時点で総合首位だった大学はどこですか？`,leader.team,rs.map(r=>r.team),`${s}区終了時点の通過順位1位は${leader.team}でした。`));
        }
      }

      const standings=overallResults(race,y);
      if(race!=='hakone'&&standings.length>=4){
        const second=standings.find(r=>r.rank===2),third=standings.find(r=>r.rank===3);
        if(second) pools.mania.push(makeQ('man-overall2-'+race+'-'+y,`${y}年の${raceLabel[race]}で総合2位だった大学はどこですか？`,second.team,standings.map(r=>r.team),`総合2位は${second.team}でした。`));
        if(third) pools.mania.push(makeQ('man-overall3-'+race+'-'+y,`${y}年の${raceLabel[race]}で総合3位だった大学はどこですか？`,third.team,standings.map(r=>r.team),`総合3位は${third.team}でした。`));
        const top3=standings.slice(0,3).map(r=>r.team);
        if(top3.length===3){
          const correct=top3.join(' → ');
          const opts=[
            [top3[1],top3[0],top3[2]].join(' → '),
            [top3[0],top3[2],top3[1]].join(' → '),
            [top3[2],top3[1],top3[0]].join(' → '),
            [top3[1],top3[2],top3[0]].join(' → ')
          ];
          pools.mania.push(makeQ('man-top3-'+race+'-'+y,`${y}年の${raceLabel[race]}の総合1〜3位を正しい順に並べたものはどれですか？`,correct,opts,`1位から順に${correct}でした。`));
        }
      }
    }
  }

  for(const k of Object.keys(pools)) pools[k]=pools[k].filter(Boolean);

  function makeSession(){
    return {
      beginner:sample(pools.beginner,10),
      intermediate:sample(pools.intermediate,10),
      advanced:sample(pools.advanced,10),
      expert:sample(pools.expert,10),
      mania:sample(pools.mania,10)
    };
  }

  window.threeEkidenQuizDB={
    pools,
    makeSession,
    stats:Object.fromEntries(Object.entries(pools).map(([k,v])=>[k,v.length]))
  };
})();