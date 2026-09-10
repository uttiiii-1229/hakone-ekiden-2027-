// Historical supplement: 2008 (第85回) 箱根駅伝予選会
// Sources: contemporary result archive + team-by-team result archive.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2008, eventYear: 2008, hakoneEdition: 85,
    teams: [
      {rank:1,time:'10:13:20',team:'城西大学'},
      {rank:2,time:'10:13:46',team:'東京農業大学'},
      {rank:3,time:'10:15:47',team:'上武大学'},
      {rank:4,time:'10:17:04',team:'日本体育大学'},
      {rank:5,time:'10:17:43',team:'拓殖大学'},
      {rank:6,time:'10:18:04',team:'神奈川大学'},
      {rank:7,time:'10:18:15',team:'東海大学'},
      {rank:8,time:'10:19:25',team:'専修大学'},
      {rank:9,time:'10:19:30',team:'明治大学'},
      {rank:10,time:'10:21:01',team:'大東文化大学'},
      {rank:11,time:'10:17:57',team:'国士舘大学'},
      {rank:12,time:'10:20:13',team:'順天堂大学'},
      {rank:13,time:'10:20:33',team:'青山学院大学'},
      {rank:14,time:'10:20:39',team:'法政大学'},
      {rank:15,time:'10:25:51',team:'國學院大學'}
    ],
    individuals: [
      {rank:13,time:'1:00:46',name:'山中 貴弘',team:'国士舘大学',grade:4},
      {rank:15,time:'1:00:52',name:'高谷 将弘',team:'国士舘大学',grade:4},
      {rank:40,time:'1:01:21',name:'川崎 健太',team:'国士舘大学',grade:4},
      {rank:51,time:'1:01:30',name:'小島 康彰',team:'国士舘大学',grade:4},
      {rank:92,time:'1:01:59',name:'平川 玲央',team:'国士舘大学',grade:2},
      {rank:116,time:'1:02:19',name:'柴田 省吾',team:'国士舘大学',grade:2},
      {rank:134,time:'1:02:40',name:'中西 将人',team:'国士舘大学',grade:3},
      {rank:148,time:'1:02:51',name:'伊藤 正樹',team:'国士舘大学',grade:1},
      {rank:157,time:'1:03:03',name:'齋藤 伸宗',team:'国士舘大学',grade:3},
      {rank:203,time:'1:04:11',name:'岩崎 哲也',team:'国士舘大学',grade:3},
      {rank:231,time:'1:05:09',name:'久井原 歩',team:'国士舘大学',grade:1},
      {rank:292,time:'1:07:11',name:'田代 洋平',team:'国士舘大学',grade:4},

      {rank:10,time:'1:00:37',name:'小野 裕幸',team:'順天堂大学',grade:4},
      {rank:25,time:'1:01:04',name:'山崎 敦史',team:'順天堂大学',grade:4},
      {rank:82,time:'1:01:53',name:'木水 良',team:'順天堂大学',grade:3},
      {rank:83,time:'1:01:54',name:'村上 真',team:'順天堂大学',grade:3},
      {rank:119,time:'1:02:27',name:'的場 亮太',team:'順天堂大学',grade:1},
      {rank:127,time:'1:02:32',name:'関戸 雅輝',team:'順天堂大学',grade:3},
      {rank:165,time:'1:03:13',name:'志賀 洸介',team:'順天堂大学',grade:3},
      {rank:168,time:'1:03:21',name:'越智 健一朗',team:'順天堂大学',grade:1},
      {rank:172,time:'1:03:25',name:'山田 翔太',team:'順天堂大学',grade:3},
      {rank:176,time:'1:03:37',name:'岡部 寛之',team:'順天堂大学',grade:2},
      {rank:186,time:'1:03:53',name:'琴岡 義規',team:'順天堂大学',grade:2},
      {rank:197,time:'1:04:07',name:'唐川 和宏',team:'順天堂大学',grade:1},

      {rank:30,time:'1:01:11',name:'荒井 輔',team:'青山学院大学',grade:3},
      {rank:41,time:'1:01:23',name:'先崎 祐也',team:'青山学院大学',grade:4},
      {rank:77,time:'1:01:49',name:'佐々木 徹也',team:'青山学院大学',grade:4},
      {rank:91,time:'1:01:58',name:'松野 祐季',team:'青山学院大学',grade:4},
      {rank:96,time:'1:02:02',name:'宇野 純也',team:'青山学院大学',grade:4},
      {rank:111,time:'1:02:14',name:'大坪 恭兵',team:'青山学院大学',grade:4},
      {rank:123,time:'1:02:29',name:'小林 剛寛',team:'青山学院大学',grade:1},
      {rank:132,time:'1:02:36',name:'岡崎 隼也',team:'青山学院大学',grade:4},
      {rank:144,time:'1:02:46',name:'辻本 啓吏',team:'青山学院大学',grade:2},
      {rank:167,time:'1:03:20',name:'米澤 類',team:'青山学院大学',grade:3},
      {rank:173,time:'1:03:29',name:'市岡 敬介',team:'青山学院大学',grade:3},
      {rank:232,time:'1:05:09',name:'村元 仁',team:'青山学院大学',grade:4},

      {rank:17,time:'1:00:53',name:'高嶺 秀仁',team:'法政大学',grade:4},
      {rank:67,time:'1:01:42',name:'姜山 佑樹',team:'法政大学',grade:4},
      {rank:90,time:'1:01:57',name:'稲垣 雄太',team:'法政大学',grade:2},
      {rank:120,time:'1:02:27',name:'近藤 洋平',team:'法政大学',grade:1},
      {rank:121,time:'1:02:28',name:'益田 賢太朗',team:'法政大学',grade:2},
      {rank:137,time:'1:02:42',name:'横部 貴之',team:'法政大学',grade:3},
      {rank:139,time:'1:02:43',name:'星野 剛',team:'法政大学',grade:4},
      {rank:140,time:'1:02:44',name:'末山 貴文',team:'法政大学',grade:1},
      {rank:149,time:'1:02:52',name:'上田 剛史',team:'法政大学',grade:3},
      {rank:169,time:'1:03:21',name:'福島 成博',team:'法政大学',grade:3},
      {rank:194,time:'1:04:03',name:'宇都宮 崇之',team:'法政大学',grade:3},
      {rank:207,time:'1:04:18',name:'奥田 宗弘',team:'法政大学',grade:3},

      {rank:33,time:'1:01:13',name:'川邉 一将',team:'國學院大學',grade:4},
      {rank:68,time:'1:01:42',name:'横田 勝也',team:'國學院大學',grade:4},
      {rank:81,time:'1:01:53',name:'仁科 徳将',team:'國學院大學',grade:2},
      {rank:124,time:'1:02:29',name:'當山 篤志',team:'國學院大學',grade:2},
      {rank:138,time:'1:02:43',name:'住野 達郎',team:'國學院大學',grade:3},
      {rank:150,time:'1:02:52',name:'小柳津 智弘',team:'國學院大學',grade:4},
      {rank:155,time:'1:03:03',name:'石谷 望',team:'國學院大學',grade:4},
      {rank:158,time:'1:03:05',name:'田中 光太郎',team:'國學院大學',grade:2},
      {rank:177,time:'1:03:38',name:'青木 信夫',team:'國學院大學',grade:1},
      {rank:181,time:'1:03:43',name:'日坂 充宏',team:'國學院大學',grade:3},
      {rank:218,time:'1:04:45',name:'荻野 皓平',team:'國學院大學',grade:1},
      {rank:256,time:'1:05:45',name:'平山 大樹',team:'國學院大學',grade:2}
    ],
    source: 'https://marathon-world.blogspot.com/2008/10/85_20.html?m=0',
    supplementalSources: ['https://azupero.blog.2nt.com/blog-entry-2230.html'],
    notes: '2008年10月18日開催。上位15校の公式最終順位・タイムを同時代結果アーカイブから収録。11位以降は関東インカレポイント換算後の最終順位・総合タイム。個人成績は同時代の大学別結果一覧で確認できた国士舘・順天堂・青山学院・法政・國學院の各12名（完走者およびチーム11・12番手を含む）を順位・記録・学年付きで収録。16位以下のチーム、および1〜10位校等の個人成績は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2008'];
  if (!existing) { window.hakoneQualifierDB.years['2008'] = record; return; }
  if (!Array.isArray(existing.teams)) existing.teams = [];
  const normTeam = s => String(s||'').normalize('NFKC').replace(/國學院大学/g,'國學院大學').replace(/[\s　]/g,'');
  const teamByName = new Map(existing.teams.map(x => [normTeam(x.team), x]));
  record.teams.forEach(x => { const k=normTeam(x.team), p=teamByName.get(k); if(!p){existing.teams.push(x);teamByName.set(k,x);return;} if((p.rank==null||p.rank==='')&&x.rank!=null)p.rank=x.rank; if(!p.time&&x.time)p.time=x.time; if(!p.status&&x.status)p.status=x.status; });
  existing.teams.sort((a,b)=>(a.rank ?? 999)-(b.rank ?? 999));
  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const normName = s => String(s||'').normalize('NFKC').replace(/[\s　・.･]/g,'').toLowerCase();
  const personKey = x => `${x.rank}|${normName(x.name)}|${normTeam(x.team)}`;
  const people = new Map(existing.individuals.map(x => [personKey(x), x]));
  record.individuals.forEach(x => { const k=personKey(x), p=people.get(k); if(!p){existing.individuals.push(x);people.set(k,x);return;} if(!p.time&&x.time)p.time=x.time; if(!p.grade&&x.grade)p.grade=x.grade; });
  existing.individuals.sort((a,b)=>(a.rank ?? 9999)-(b.rank ?? 9999));
  existing.source = existing.source || record.source;
  existing.supplementalSources = Array.from(new Set([...(existing.supplementalSources||[]), ...record.supplementalSources]));
  existing.notes = existing.notes || record.notes;
})();