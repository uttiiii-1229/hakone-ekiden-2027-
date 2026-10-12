// Izumo / All-Japan section standings viewer
(() => {
  const sectionCount={izumo:6,zennihon:8};
  const labels={izumo:'出雲駅伝',zennihon:'全日本大学駅伝'};
  const currentSection={izumo:1,zennihon:1};

  const normalizeTeam=(name='')=>{
    const n=String(name).trim();
    if(['國學院大學學','國學院大学','國學院大','国学院大学','国学院大'].includes(n)) return '國學院大學';
    return n;
  };

  // Course-era records. A year is matched to the course actually used in that year.
  // Izumo: 2009 changed the 3rd/4th relay area; 2014 planned another change, first raced in 2015.
  // All-Japan: 1-7 changed from the 50th race (2018); 8 has stayed 19.7 km since the 24th.
  const courseRecords={
    izumo:{
      1:[{start:2007,end:2026,distance:'8.0km',course:'2001年以降コース',time:'22:30',holders:[{athlete:'キラグ・ジュグナ',team:'第一工業大学',year:2009,edition:21}]}],
      2:[{start:2007,end:2026,distance:'5.8km',course:'2001年以降コース',time:'15:27',holders:[{athlete:'佐藤 圭汰',team:'駒澤大学',year:2022,edition:34}]}],
      3:[
        {start:2007,end:2008,distance:'8.5km',course:'2001〜2008年コース',time:'24:24',holders:[{athlete:'伊達 秀晃',team:'東海大学',year:2006,edition:18}]},
        {start:2009,end:2013,distance:'7.9km',course:'2009〜2013年コース',time:'22:36',holders:[{athlete:'村山 謙太',team:'駒澤大学',year:2013,edition:25}]},
        {start:2015,end:2026,distance:'8.5km',course:'2015年以降コース',time:'22:56',holders:[{athlete:'シャドラック キップケメイ',team:'日本大学',year:2026,edition:38}]}
      ],
      4:[
        {start:2007,end:2008,distance:'6.5km',course:'2001〜2008年コース',time:'18:04',holders:[{athlete:'伊達 秀晃',team:'東海大学',year:2007,edition:19}]},
        {start:2009,end:2026,distance:'6.2km',course:'2009年以降コース',time:'17:10',holders:[{athlete:'新妻 遼己',team:'早稲田大学',year:2026,edition:38}]}
      ],
      5:[
        {start:2007,end:2008,distance:'5.0km',course:'2001〜2008年コース',time:'14:26',holders:[{athlete:'小出 徹',team:'東海大学',year:2003,edition:15}]},
        {start:2009,end:2026,distance:'6.4km',course:'2009年以降コース',time:'17:35',holders:[{athlete:'山口 竣平',team:'早稲田大学',year:2026,edition:38}]}
      ],
      6:[{start:2007,end:2026,distance:'10.2km',course:'2001年以降コース',time:'28:17',holders:[{athlete:'ギタウ・ダニエル',team:'日本大学',year:2009,edition:21}]}]
    },
    zennihon:{
      1:[
        {start:2007,end:2017,distance:'14.6km',course:'第49回までの旧コース',time:'41:56',holders:[{athlete:'永田 宏一郎',team:'鹿屋体育大学',year:2000,edition:32},{athlete:'ギタウ・ダニエル',team:'日本大学',year:2007,edition:39}]},
        {start:2018,end:2025,distance:'9.5km',course:'第50回以降の現行コース',time:'26:58',holders:[{athlete:'ピーター・ワンジル',team:'大東文化大学',year:2022,edition:54}]}
      ],
      2:[
        {start:2007,end:2017,distance:'13.2km',course:'第49回までの旧コース',time:'37:16',holders:[{athlete:'エノック・オムワンバ',team:'山梨学院大学',year:2012,edition:44}]},
        {start:2018,end:2025,distance:'11.1km',course:'第50回以降の現行コース',time:'31:01',holders:[{athlete:'佐藤 圭汰',team:'駒澤大学',year:2023,edition:55},{athlete:'楠岡 由浩',team:'帝京大学',year:2025,edition:57}]}
      ],
      3:[
        {start:2007,end:2017,distance:'9.5km',course:'第49回までの旧コース',time:'26:55',holders:[{athlete:'油布 郁人',team:'駒澤大学',year:2012,edition:44}]},
        {start:2018,end:2025,distance:'11.9km',course:'第50回以降の現行コース',time:'32:46',holders:[{athlete:'イェゴン・ヴィンセント',team:'東京国際大学',year:2021,edition:53}]}
      ],
      4:[
        {start:2007,end:2017,distance:'14.0km',course:'第49回までの旧コース',time:'39:24',holders:[{athlete:'村山 謙太',team:'駒澤大学',year:2013,edition:45}]},
        {start:2018,end:2025,distance:'11.8km',course:'第50回以降の現行コース',time:'33:03',holders:[{athlete:'黒田 朝日',team:'青山学院大学',year:2024,edition:56}]}
      ],
      5:[
        {start:2007,end:2017,distance:'11.6km',course:'第49回までの旧コース',time:'33:22',holders:[{athlete:'横手 健',team:'明治大学',year:2014,edition:46}]},
        {start:2018,end:2025,distance:'12.4km',course:'第50回以降の現行コース',time:'35:01',holders:[{athlete:'伊藤 蒼唯',team:'駒澤大学',year:2025,edition:57}]}
      ],
      6:[
        {start:2007,end:2017,distance:'12.3km',course:'第49回までの旧コース',time:'35:30',holders:[{athlete:'前田 悠貴',team:'早稲田大学',year:2012,edition:44}]},
        {start:2018,end:2025,distance:'12.8km',course:'第50回以降の現行コース',time:'36:47',holders:[{athlete:'山本 歩夢',team:'國學院大學',year:2024,edition:56}]}
      ],
      7:[
        {start:2007,end:2017,distance:'11.9km',course:'第49回までの旧コース',time:'34:08',holders:[{athlete:'阿部 弘輝',team:'明治大学',year:2017,edition:49}]},
        {start:2018,end:2025,distance:'17.6km',course:'第50回以降の現行コース',time:'49:31',holders:[{athlete:'黒田 朝日',team:'青山学院大学',year:2025,edition:57}]}
      ],
      8:[{start:2007,end:2025,distance:'19.7km',course:'第24回以降コース',time:'55:32',holders:[{athlete:'メクボ・ジョブ・モグス',team:'山梨学院大学',year:2007,edition:39}]}]
    }
  };

  function currentYear(page){
    const selected=page.querySelector('[data-race-year-select]');
    if(selected)return Number(selected.value);
    const active=page.querySelector('[data-race-year].active');
    return Number(active?.dataset.raceYear||0);
  }

  function sectionRows(race,year,section){
    return window.threeEkidenSectionsDB?.[race]?.[year]?.sections?.[section]||[];
  }

  function recordFor(race,year,section){
    return (courseRecords?.[race]?.[section]||[]).find(r=>year>=r.start&&year<=r.end)||null;
  }

  function recordHtml(race,year,section){
    const r=recordFor(race,year,section);
    if(!r)return '';
    const holders=(r.holders||[]).map(h=>`${h.athlete}（${normalizeTeam(h.team)}・${h.year}年 第${h.edition}回）`).join(' ／ ');
    return `<div class="notice section-record-note" style="margin:12px 0 14px"><strong>区間記録${race==='izumo'?'（2026年まで）':''}：</strong> <strong>${r.time}</strong>　${holders}<br><span class="muted">対象：${r.course}・${r.distance}。コース変更前の年度は、その当時のコース区間記録を表示しています。</span>${race==='izumo'?'<br><a href="https://www.izumo-ekiden.jp/record/index.html" target="_blank" rel="noopener noreferrer">公式区間記録・大会結果</a>':''}</div>`;
  }


  function teamKey(name=''){return normalizeTeam(name).normalize('NFKC').replace(/[\s　]+/g,'').replace(/大學/g,'大学').replace(/大学$/,'').replace(/大$/,'');}
  function stageSeconds(time=''){
    const match=String(time).trim().match(/^(\d+):([0-5]\d)(?::([0-5]\d))?(?:\s|$)/);
    if(!match)return null;
    return match[3]===undefined?Number(match[1])*60+Number(match[2]):Number(match[1])*3600+Number(match[2])*60+Number(match[3]);
  }
  function passingRanks(race,year,section){
    const rows=sectionRows(race,year,section),out=new Map();
    const numeric=r=>!r.openParticipation&&/^\d+$/.test(String(r.rank).trim());
    const entrants=sectionRows(race,year,1).filter(numeric);
    const totals=[];
    let incomplete=false;
    for(const first of entrants){
      const key=teamKey(first.team);let total=0,valid=true;
      for(let k=1;k<=section;k++){
        const hit=sectionRows(race,year,k).find(r=>teamKey(r.team)===key);
        if(!hit||!numeric(hit)){valid=false;break;}
        const seconds=stageSeconds(hit.time);
        if(seconds===null){valid=false;incomplete=true;break;}
        total+=seconds;
      }
      if(valid)totals.push({key,total});
    }
    // A current competitor absent from an earlier split makes the ranking incomplete.
    if(rows.some(r=>numeric(r)&&!totals.some(t=>t.key===teamKey(r.team))))incomplete=true;
    if(!incomplete){
      totals.sort((a,b)=>a.total-b.total);
      let previous=null,rank=0;
      totals.forEach((t,i)=>{if(t.total!==previous)rank=i+1;out.set(t.key,rank);previous=t.total;});
    }
    for(const row of rows){
      const key=teamKey(row.team);
      if(row.rank==='OPN'||row.rank==='参考')out.set(key,row.rank);
      else if(row.passingRank!==undefined&&row.passingRank!==null)out.set(key,row.passingRank);
      else if(section===1&&numeric(row))out.set(key,row.rank);
    }
    return out;
  }

  function renderTable(race,year,section){
    const yearData=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!yearData)return `<div class="notice">${year}年の区間順位データを読み込めませんでした。</div>`;
    if(yearData.status!=='開催')return `<div class="notice">${year}年は${yearData.status}です。</div>`;
    const rows=sectionRows(race,year,section);
    const passing=passingRanks(race,year,section);
    if(!rows.length)return `<div class="notice">${year}年 ${section}区の区間順位データは現在確認中です。</div>`;
    return `<div class="section-db-head" style="margin-top:16px"><div><h2>${labels[race]} ${year}年 ${section}区 区間順位</h2><p class="muted">大会記録をもとに、全出場選手の区間順位を掲載しています。</p></div></div>${yearData.provisional?'<div class="notice">速報・公式照合前。※は速報での区間新記録表記です。</div>':''}${recordHtml(race,year,section)}<div class="table-wrap"><table><thead><tr><th>区間順位</th><th>通過順位</th><th>大学・チーム</th><th>選手</th><th>区間タイム</th></tr></thead><tbody>${rows.map(r=>`<tr class="${r.openParticipation||r.rank==='OPN'||r.rank==='参考'?'reference-row':''}"><td><strong>${r.rank}</strong></td><td>${esc(passing.get(teamKey(r.team))??'—')}</td><td><strong>${normalizeTeam(r.team)}</strong></td><td>${esc(r.athlete)}${r.grade?` <small>${esc(r.grade)}年</small>`:''}</td><td>${r.time}${r.record?' ※':r.recordTie?'（区間タイ）':''}</td></tr>`).join('')}</tbody></table></div><div class="notice"><strong>通過順位：</strong>1区から当該区間までの累計タイムによる順位です（公式通過順位の登録がある場合は公式値を優先）。繰り上げスタート後の実際の通過順とは異なります。累計同タイムは同順位、記録欠損は「—」、OPN・参考は通過順位の対象外です。※は区間新記録です。</div>`;
  }


  function esc(value=''){return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function awardsHtml(race,year){
    const data=window.threeEkidenSectionsDB?.[race]?.[year];
    if(!data||data.status!=='開催')return '';
    const cards=Array.from({length:sectionCount[race]},(_,i)=>{
      const section=i+1, winners=sectionRows(race,year,section).filter(r=>!r.openParticipation&&String(r.rank).trim()==='1');
      const distance=recordFor(race,year,section)?.distance||(race==='izumo'&&year===2026?['8.0km','5.8km','8.5km','6.2km','6.4km','10.2km'][i]:'');
      return `<article class="section-award-card"><h3>${section}区 <small>${esc(distance)}</small></h3>${winners.length?winners.map(r=>{const raw=String(r.athlete||''),grade=r.grade?[null,r.grade]:raw.match(/\(([1-5])\)/);const name=raw.replace(/\s*\([1-5]\)\s*.*$/,'').trim();return `<div class="section-award-winner"><strong>${esc(name)}${grade?` <small>${grade[1]}年</small>`:''}</strong><span>${esc(normalizeTeam(r.team))}</span><b>${esc(r.time)}${r.record?' ※':''}</b></div>`;}).join(''):'<p class="muted">区間賞データは確認中です。</p>'}</article>`;
    }).join('');
    return `<section class="section-awards" data-section-awards="${race}" aria-label="${labels[race]} ${year}年の区間賞"><h2>区間賞一覧</h2><p>${year}年・全${sectionCount[race]}区間。${data.provisional?'速報・公式照合前。':''}同着1位は全員掲載します。</p><div class="section-award-grid">${cards}</div></section>`;
  }

  function block(race,page){
    const year=currentYear(page); if(!year)return '';
    const count=sectionCount[race];
    const sec=Math.min(currentSection[race],count);
    return `<section class="three-ekiden-sections" data-three-sections="${race}" data-three-sections-year="${year}" style="margin-top:28px">${awardsHtml(race,year)}<div class="page-header"><h2>各区間順位</h2><p>${year}年大会の区間別成績。区間タブで切り替えられます。</p></div><div class="tabs section-tabs">${Array.from({length:count},(_,i)=>`<button class="tab ${i+1===sec?'active':''}" data-three-section-race="${race}" data-three-section="${i+1}">${i+1}区</button>`).join('')}</div><div class="three-section-result">${renderTable(race,year,sec)}</div></section>`;
  }

  function ensure(race){
    const page=document.querySelector(`#race-page-${race}`); if(!page)return;
    const existing=page.querySelector(`[data-three-sections="${race}"]`);
    const html=block(race,page); if(!html)return;
    const year=currentYear(page);
    if(existing){
      if(Number(existing.dataset.threeSectionsYear)===year)return;
      existing.outerHTML=html;
    }else{
      page.insertAdjacentHTML('beforeend',html);
    }
  }

  function ensureAll(){ensure('izumo');ensure('zennihon');}

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-three-section-race]');
    if(btn){
      const race=btn.dataset.threeSectionRace;
      const sec=Number(btn.dataset.threeSection);
      currentSection[race]=sec;
      const page=document.querySelector(`#race-page-${race}`);if(!page)return;
      const host=page.querySelector(`[data-three-sections="${race}"]`);
      if(host)host.outerHTML=block(race,page);
      return;
    }
    if(e.target.closest('[data-race-year],[data-race-decade]')) setTimeout(ensureAll,0);
  });

  document.addEventListener('change',e=>{if(e.target.closest('[data-race-year-select]'))setTimeout(ensureAll,0);});
  if(!document.getElementById('sectionAwardStyles')){
    const style=document.createElement('style');style.id='sectionAwardStyles';
    style.textContent='.section-awards{margin:0 0 28px}.section-award-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.section-award-card{border:1px solid #dce5ed;border-radius:10px;padding:14px;background:#fff;min-width:0}.section-award-card h3{margin:0 0 12px;color:#174f7d}.section-award-card small{font-weight:400;color:#65798b;font-size:.8em}.section-award-winner{display:grid;gap:5px;overflow-wrap:anywhere}.section-award-winner+div{margin-top:12px;padding-top:12px;border-top:1px solid #e3eaf0}.section-award-winner span{font-size:.9rem;color:#526879}.section-award-winner b{font-size:1.1rem;font-variant-numeric:tabular-nums}@media(max-width:680px){.section-award-grid{grid-template-columns:1fr}.section-award-card{padding:12px}}';
    document.head.appendChild(style);
  }
  const app=document.querySelector('#app');
  if(app)new MutationObserver(ensureAll).observe(app,{childList:true,subtree:true});
  ensureAll();
})();
