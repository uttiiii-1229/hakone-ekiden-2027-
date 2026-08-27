// 全日本大学駅伝 各区間歴代BEST10ビュー（第57回・2025年まで）
(() => {
  const raw = {
    race:'秩父宮賜杯 全日本大学駅伝対校選手権大会',
    shortName:'全日本大学駅伝',
    updatedThrough:{edition:57,year:2025},
    rankingRule:'1〜7区は第50回大会以降の現行区間。8区は第24回大会以降。同一選手は最速記録のみ順位付け。',
    sections:[
      {section:1,distanceKm:9.5,records:[
        {name:'ピーター・ワンジル',university:'大東文化大学',grade:2,time:'26:58',seconds:1618,year:2022,edition:54},
        {name:'佐藤条二',university:'駒澤大学',grade:1,time:'27:05',seconds:1625,year:2021,edition:53},
        {name:'吉居大和',university:'中央大学',grade:2,time:'27:05',seconds:1625,year:2021,edition:53},
        {name:'島﨑慎愛',university:'國學院大學',grade:4,time:'27:06',seconds:1626,year:2021,edition:53},
        {name:'三浦龍司',university:'順天堂大学',grade:1,time:'27:07',seconds:1627,year:2020,edition:52},
        {name:'目片将大',university:'青山学院大学',grade:4,time:'27:08',seconds:1628,year:2022,edition:54},
        {name:'砂岡拓磨',university:'城西大学',grade:3,time:'27:10',seconds:1630,year:2020,edition:52},
        {name:'志貴勇斗',university:'青山学院大学',grade:2,time:'27:10',seconds:1630,year:2021,edition:53},
        {name:'加藤淳',university:'駒澤大学',grade:4,time:'27:13',seconds:1633,year:2020,edition:52},
        {name:'千守倫央',university:'中央大学',grade:4,time:'27:13',seconds:1633,year:2022,edition:54}
      ]},
      {section:2,distanceKm:11.1,records:[
        {name:'佐藤圭汰',university:'駒澤大学',grade:2,time:'31:01',seconds:1861,year:2023,edition:55},
        {name:'楠岡由浩',university:'帝京大学',grade:3,time:'31:01',seconds:1861,year:2025,edition:57},
        {name:'鶴川正也',university:'青山学院大学',grade:4,time:'31:04',seconds:1864,year:2024,edition:56},
        {name:'吉居駿恭',university:'中央大学',grade:4,time:'31:07',seconds:1867,year:2025,edition:57},
        {name:'黒田朝日',university:'青山学院大学',grade:2,time:'31:09',seconds:1869,year:2023,edition:55},
        {name:'葛西潤',university:'創価大学',grade:4,time:'31:12',seconds:1872,year:2022,edition:54},
        {name:'谷中晴',university:'駒澤大学',grade:2,time:'31:14',seconds:1874,year:2025,edition:57},
        {name:'鈴木琉胤',university:'早稲田大学',grade:1,time:'31:15',seconds:1875,year:2025,edition:57},
        {name:'伊藤達彦',university:'東京国際大学',grade:4,time:'31:17',seconds:1877,year:2019,edition:51},
        {name:'小池莉希',university:'創価大学',grade:3,time:'31:22',seconds:1882,year:2025,edition:57}
      ]},
      {section:3,distanceKm:11.9,records:[
        {name:'イェゴン・ヴィンセント',university:'東京国際大学',grade:3,time:'32:46',seconds:1966,year:2021,edition:53},
        {name:'相澤晃',university:'東洋大学',grade:4,time:'33:01',seconds:1981,year:2019,edition:51},
        {name:'野中恒亨',university:'國學院大學',grade:3,time:'33:11',seconds:1991,year:2025,edition:57},
        {name:'ヴィクター・キムタイ',university:'城西大学',grade:4,time:'33:12',seconds:1992,year:2025,edition:57},
        {name:'田澤廉',university:'駒澤大学',grade:2,time:'33:18',seconds:1998,year:2020,edition:52},
        {name:'帰山侑大',university:'駒澤大学',grade:4,time:'33:38',seconds:2018,year:2025,edition:57},
        {name:'中谷雄飛',university:'早稲田大学',grade:3,time:'33:42',seconds:2022,year:2020,edition:52},
        {name:'藤田大智',university:'中央大学',grade:3,time:'33:42',seconds:2022,year:2025,edition:57},
        {name:'田島駿介',university:'日本体育大学',grade:4,time:'33:44',seconds:2024,year:2025,edition:57},
        {name:'石原翔太郎',university:'東海大学',grade:3,time:'33:48',seconds:2028,year:2022,edition:54}
      ]},
      {section:4,distanceKm:11.8,records:[
        {name:'黒田朝日',university:'青山学院大学',grade:3,time:'33:03',seconds:1983,year:2024,edition:56},
        {name:'石原翔太郎',university:'東海大学',grade:1,time:'33:16',seconds:1996,year:2020,edition:52},
        {name:'太田直希',university:'早稲田大学',grade:3,time:'33:23',seconds:2003,year:2020,edition:52},
        {name:'野村優作',university:'順天堂大学',grade:2,time:'33:34',seconds:2014,year:2020,edition:52},
        {name:'山川拓馬',university:'駒澤大学',grade:1,time:'33:41',seconds:2021,year:2022,edition:54},
        {name:'横田俊吾',university:'青山学院大学',grade:4,time:'33:44',seconds:2024,year:2022,edition:54},
        {name:'塩尻和也',university:'順天堂大学',grade:4,time:'33:48',seconds:2028,year:2018,edition:50},
        {name:'柴田大地',university:'中央大学',grade:3,time:'33:52',seconds:2032,year:2025,edition:57},
        {name:'西田壮志',university:'東海大学',grade:3,time:'33:54',seconds:2034,year:2019,edition:51},
        {name:'高山豪起',university:'國學院大學',grade:4,time:'33:54',seconds:2034,year:2025,edition:57}
      ]},
      {section:5,distanceKm:12.4,records:[
        {name:'伊藤蒼唯',university:'駒澤大学',grade:4,time:'35:01',seconds:2101,year:2025,edition:57},
        {name:'吉田響',university:'創価大学',grade:3,time:'35:18',seconds:2118,year:2023,edition:55},
        {name:'野中恒亨',university:'國學院大學',grade:2,time:'35:35',seconds:2135,year:2024,edition:56},
        {name:'佐藤一世',university:'青山学院大学',grade:1,time:'35:47',seconds:2147,year:2020,edition:52},
        {name:'青木瑠郁',university:'國學院大學',grade:1,time:'35:50',seconds:2150,year:2022,edition:54},
        {name:'青木祐人',university:'國學院大學',grade:4,time:'36:06',seconds:2166,year:2019,edition:51},
        {name:'飯國新太',university:'國學院大學',grade:2,time:'36:26',seconds:2186,year:2025,edition:57},
        {name:'三宅悠斗',university:'中央大学',grade:1,time:'36:33',seconds:2193,year:2025,edition:57},
        {name:'佐藤有一',university:'青山学院大学',grade:4,time:'36:34',seconds:2194,year:2025,edition:57},
        {name:'川原琉人',university:'順天堂大学',grade:2,time:'36:35',seconds:2195,year:2025,edition:57}
      ]},
      {section:6,distanceKm:12.8,records:[
        {name:'山本歩夢',university:'國學院大學',grade:4,time:'36:47',seconds:2207,year:2024,edition:56},
        {name:'吉居大和',university:'中央大学',grade:3,time:'37:01',seconds:2221,year:2022,edition:54},
        {name:'西澤侑真',university:'順天堂大学',grade:4,time:'37:09',seconds:2229,year:2022,edition:54},
        {name:'丹所健',university:'東京国際大学',grade:3,time:'37:12',seconds:2232,year:2021,edition:53},
        {name:'安原太陽',university:'駒澤大学',grade:4,time:'37:16',seconds:2236,year:2023,edition:55},
        {name:'飯田翔大',university:'青山学院大学',grade:2,time:'37:20',seconds:2240,year:2025,edition:57},
        {name:'中村唯翔',university:'青山学院大学',grade:4,time:'37:21',seconds:2241,year:2022,edition:54},
        {name:'長田駿佑',university:'東海大学',grade:3,time:'37:22',seconds:2242,year:2020,edition:52},
        {name:'村上響',university:'駒澤大学',grade:3,time:'37:22',seconds:2242,year:2025,edition:57},
        {name:'郡司陽大',university:'東海大学',grade:4,time:'37:26',seconds:2246,year:2019,edition:51}
      ]},
      {section:7,distanceKm:17.6,records:[
        {name:'黒田朝日',university:'青山学院大学',grade:4,time:'49:31',seconds:2971,year:2025,edition:57},
        {name:'田澤廉',university:'駒澤大学',grade:4,time:'49:38',seconds:2978,year:2022,edition:54},
        {name:'近藤幸太郎',university:'青山学院大学',grade:4,time:'49:52',seconds:2992,year:2022,edition:54},
        {name:'篠原倖太朗',university:'駒澤大学',grade:4,time:'49:57',seconds:2997,year:2024,edition:56},
        {name:'シャドラック・キップケメイ',university:'日本大学',grade:3,time:'50:17',seconds:3017,year:2025,edition:57},
        {name:'佐藤圭汰',university:'駒澤大学',grade:4,time:'50:26',seconds:3026,year:2025,edition:57},
        {name:'山口智規',university:'早稲田大学',grade:4,time:'50:57',seconds:3057,year:2025,edition:57},
        {name:'平林清澄',university:'國學院大學',grade:2,time:'50:58',seconds:3058,year:2022,edition:54},
        {name:'湯浅仁',university:'中央大学',grade:4,time:'51:12',seconds:3072,year:2023,edition:55},
        {name:'鈴木芽吹',university:'駒澤大学',grade:4,time:'51:13',seconds:3073,year:2023,edition:55}
      ]},
      {section:8,distanceKm:19.7,records:[
        {name:'メクボ・ジョブ・モグス',university:'山梨学院大学',grade:3,time:'55:32',seconds:3332,year:2007,edition:39},
        {name:'ガンドゥ・ベンジャミン',university:'日本大学',grade:2,time:'56:42',seconds:3402,year:2010,edition:42},
        {name:'ドミニク・ニャイロ',university:'山梨学院大学',grade:2,time:'56:43',seconds:3403,year:2016,edition:48},
        {name:'工藤慎作',university:'早稲田大学',grade:3,time:'56:54',seconds:3414,year:2025,edition:57},
        {name:'溜池一太',university:'中央大学',grade:4,time:'57:03',seconds:3423,year:2025,edition:57},
        {name:'山川拓馬',university:'駒澤大学',grade:3,time:'57:09',seconds:3429,year:2024,edition:56},
        {name:'山川拓馬',university:'駒澤大学',grade:4,time:'57:23',seconds:3443,year:2025,edition:57},
        {name:'上原琉翔',university:'國學院大學',grade:4,time:'57:25',seconds:3445,year:2025,edition:57},
        {name:'花尾恭輔',university:'駒澤大学',grade:3,time:'57:30',seconds:3450,year:2022,edition:54},
        {name:'斎藤将也',university:'城西大学',grade:4,time:'57:32',seconds:3452,year:2025,edition:57}
      ]}
    ]
  };

  function normalizedRecords(records){
    const fastest=new Map();
    [...records].sort((a,b)=>a.seconds-b.seconds || a.year-b.year).forEach(r=>{
      if(!fastest.has(r.name)) fastest.set(r.name,r);
    });
    const rows=[...fastest.values()].sort((a,b)=>a.seconds-b.seconds || a.year-b.year).slice(0,10);
    let lastSec=null,lastRank=0;
    return rows.map((r,i)=>{
      if(r.seconds!==lastSec){lastRank=i+1;lastSec=r.seconds;}
      return {...r,rank:lastRank};
    });
  }

  const data={...raw,sections:raw.sections.map(s=>({...s,records:normalizedRecords(s.records)}))};
  window.zennihonAlltimeTop10=data;

  function sectionButtons(active=1){
    return data.sections.map(s=>`<button type="button" class="tab ${s.section===active?'active':''}" data-zennihon-top10-section="${s.section}">${s.section}区</button>`).join('');
  }
  function recordsTable(sectionNo){
    const s=data.sections.find(x=>x.section===sectionNo)||data.sections[0];
    return `<div class="zennihon-top10-section"><div class="section-db-head"><div><h2>${s.section}区 歴代BEST10</h2><p class="muted">${s.distanceKm.toFixed(1)}km / 第${data.updatedThrough.edition}回（${data.updatedThrough.year}年）まで</p></div></div><div class="table-wrap"><table><thead><tr><th>順位</th><th>選手</th><th>大学</th><th>学年</th><th>記録</th><th>年</th><th>大会</th></tr></thead><tbody>${s.records.map(r=>`<tr><td><strong>${r.rank}</strong></td><td><strong>${r.name}</strong></td><td>${r.university}</td><td>${r.grade}年</td><td><strong>${r.time}</strong></td><td>${r.year}</td><td>第${r.edition}回</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function alltimeBlock(active=1){
    return `<section class="race-alltime-section" id="zennihonAlltimeTop10"><div class="page-header" style="margin-top:34px"><h1>全日本大学駅伝 各区間・歴代BEST10</h1><p>${data.rankingRule}</p></div><div class="tabs" id="zennihonTop10Tabs">${sectionButtons(active)}</div><div id="zennihonTop10Result">${recordsTable(active)}</div></section>`;
  }

  const originalZennihonTemplate=templates.zennihon;
  templates.zennihon=function(){return originalZennihonTemplate()+`<section class="container page" style="padding-top:0">${alltimeBlock(1)}</section>`;};

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-zennihon-top10-section]');
    if(!btn)return;
    const section=Number(btn.dataset.zennihonTop10Section)||1;
    document.querySelectorAll('[data-zennihon-top10-section]').forEach(x=>x.classList.toggle('active',Number(x.dataset.zennihonTop10Section)===section));
    const host=document.querySelector('#zennihonTop10Result');
    if(host)host.innerHTML=recordsTable(section);
  });

  if((location.hash.replace('#','')||'home')==='zennihon' && typeof render==='function') render('zennihon');
})();