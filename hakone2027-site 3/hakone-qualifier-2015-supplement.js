// Historical supplement: 2015 (第92回) 箱根駅伝予選会
// Primary source: 関東学生陸上競技連盟 official team/individual result PDFs.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2015, eventYear: 2015, hakoneEdition: 92,
    teams: [
      {rank:1,time:'10:06:00',team:'日本大学'},
      {rank:2,time:'10:07:20',team:'帝京大学'},
      {rank:3,time:'10:07:37',team:'日本体育大学'},
      {rank:4,time:'10:07:58',team:'順天堂大学'},
      {rank:5,time:'10:08:01',team:'神奈川大学'},
      {rank:6,time:'10:08:36',team:'拓殖大学'},
      {rank:7,time:'10:11:03',team:'法政大学'},
      {rank:8,time:'10:11:32',team:'中央大学'},
      {rank:9,time:'10:11:41',team:'東京国際大学'},
      {rank:10,time:'10:12:04',team:'上武大学'},
      {rank:11,time:'10:12:14',team:'国士舘大学'},
      {rank:12,time:'10:12:57',team:'東京農業大学'},
      {rank:13,time:'10:13:28',team:'國學院大學'},
      {rank:14,time:'10:14:13',team:'創価大学'},
      {rank:15,time:'10:16:29',team:'専修大学'},
      {rank:16,time:'10:18:48',team:'亜細亜大学'},
      {rank:17,time:'10:20:37',team:'平成国際大学'},
      {rank:18,time:'10:21:10',team:'麗澤大学'},
      {rank:19,time:'10:28:30',team:'駿河台大学'},
      {rank:20,time:'10:31:20',team:'流通経済大学'},
      {rank:21,time:'10:36:38',team:'日本薬科大学'},
      {rank:22,time:'10:36:58',team:'筑波大学'},
      {rank:23,time:'10:36:59',team:'関東学院大学'},
      {rank:24,time:'10:42:33',team:'武蔵野学院大学'},
      {rank:25,time:'10:47:01',team:'東京経済大学'},
      {rank:26,time:'10:48:47',team:'東京情報大学'},
      {rank:27,time:'10:49:50',team:'松蔭大学'},
      {rank:28,time:'10:50:40',team:'明治学院大学'},
      {rank:29,time:'10:52:13',team:'東京大学'},
      {rank:30,time:'10:54:45',team:'桜美林大学'},
      {rank:31,time:'10:58:39',team:'慶應義塾大学'},
      {rank:32,time:'11:00:00',team:'立教大学'},
      {rank:33,time:'11:07:00',team:'芝浦工業大学'},
      {rank:34,time:'11:07:01',team:'埼玉大学'},
      {rank:35,time:'11:19:50',team:'東京理科大学'},
      {rank:36,time:'11:21:13',team:'学習院大学'},
      {rank:37,time:'11:22:04',team:'東京学芸大学'},
      {rank:38,time:'11:23:08',team:'千葉大学'},
      {rank:39,time:'11:24:34',team:'東京工業大学'},
      {rank:40,time:'11:25:45',team:'国際武道大学'},
      {rank:41,time:'11:30:15',team:'東京大学大学院'},
      {rank:42,time:'11:31:04',team:'横浜国立大学'},
      {rank:43,time:'11:31:13',team:'一橋大学'},
      {rank:44,time:'11:37:14',team:'高崎経済大学'},
      {rank:45,time:'11:40:51',team:'首都大学東京'},
      {rank:46,time:'11:40:56',team:'防衛大学校'},
      {rank:47,time:'11:43:38',team:'上智大学'},
      {rank:48,time:'12:02:33',team:'帝京平成大学'},
      {rank:null,time:'NM',team:'東京農工大学'}
    ],
    individuals: [
      {rank:1,time:'0:58:20',name:'Daniel Muiva Kitonyi',grade:'4',team:'日本大学'},
      {rank:2,time:'0:59:10',name:'Workneh Derese',grade:'1',team:'拓殖大学'},
      {rank:3,time:'0:59:14',name:'Siteki Stanley',grade:'2',team:'東京国際大学'},
      {rank:4,time:'0:59:17',name:'徳永 照',grade:'4',team:'中央大学'},
      {rank:5,time:'0:59:21',name:'金森 寛人',grade:'4',team:'拓殖大学'},
      {rank:6,time:'0:59:26',name:'山口 修平',grade:'4',team:'創価大学'},
      {rank:7,time:'0:59:34',name:'戸田 雅稀',grade:'4',team:'東京農業大学'},
      {rank:8,time:'0:59:38',name:'塩尻 和也',grade:'1',team:'順天堂大学'},
      {rank:9,time:'0:59:44',name:'鈴木 健吾',grade:'2',team:'神奈川大学'},
      {rank:10,time:'0:59:44',name:'小松 巧弥',grade:'3',team:'日本体育大学'},
      {rank:11,time:'0:59:51',name:'荻野 眞乃介',grade:'4',team:'日本大学'},
      {rank:12,time:'0:59:52',name:'足羽 純実',grade:'3',team:'法政大学'},
      {rank:13,time:'0:59:53',name:'東 森拓',grade:'4',team:'上武大学'},
      {rank:14,time:'0:59:54',name:'奥野 翔弥',grade:'4',team:'日本体育大学'},
      {rank:15,time:'0:59:55',name:'町澤 大雅',grade:'3',team:'中央大学'},
      {rank:16,time:'0:59:58',name:'小町 昌矢',grade:'2',team:'日本体育大学'},
      {rank:17,time:'1:00:01',name:'髙橋 裕太',grade:'4',team:'帝京大学'},
      {rank:18,time:'1:00:06',name:'松枝 博輝',grade:'4',team:'順天堂大学'},
      {rank:19,time:'1:00:13',name:'石川 颯真',grade:'3',team:'日本大学'},
      {rank:20,time:'1:00:13',name:'宇田 朋史',grade:'3',team:'拓殖大学'},
      {rank:21,time:'1:00:14',name:'工藤 隼人',grade:'3',team:'亜細亜大学'},
      {rank:22,time:'1:00:14',name:'武藤 健太',grade:'4',team:'国士舘大学'},
      {rank:23,time:'1:00:15',name:'丸山 竜也',grade:'3',team:'専修大学'},
      {rank:24,time:'1:00:16',name:'東島 彰吾',grade:'4',team:'拓殖大学'},
      {rank:25,time:'1:00:18',name:'セルナルド 祐慈',grade:'3',team:'創価大学'},
      {rank:26,time:'1:00:20',name:'坂本 佳太',grade:'2',team:'上武大学'},
      {rank:27,time:'1:00:23',name:'我那覇 和真',grade:'4',team:'神奈川大学'},
      {rank:28,time:'1:00:25',name:'細森 大輔',grade:'3',team:'國學院大學'},
      {rank:29,time:'1:00:29',name:'柴田 拓真',grade:'3',team:'平成国際大学'},
      {rank:30,time:'1:00:30',name:'西山 凌平',grade:'4',team:'神奈川大学'},
      {rank:31,time:'1:00:30',name:'加藤 風磨',grade:'2',team:'亜細亜大学'},
      {rank:32,time:'1:00:32',name:'松井 将器',grade:'4',team:'東京工業大学'},
      {rank:33,time:'1:00:32',name:'森田 清貴',grade:'3',team:'上武大学'},
      {rank:34,time:'1:00:34',name:'稲田 翔威',grade:'4',team:'順天堂大学'},
      {rank:35,time:'1:00:34',name:'鈴木 祐希',grade:'2',team:'神奈川大学'},
      {rank:36,time:'1:00:34',name:'関 竜大',grade:'4',team:'東京国際大学'},
      {rank:37,time:'1:00:34',name:'有井 渉',grade:'4',team:'法政大学'},
      {rank:38,time:'1:00:34',name:'中平 英志',grade:'3',team:'神奈川大学'},
      {rank:39,time:'1:00:35',name:'木津 晶夫',grade:'4',team:'日本大学'},
      {rank:40,time:'1:00:35',name:'大野 日暉',grade:'2',team:'神奈川大学'},
      {rank:41,time:'1:00:37',name:'君島 亮太',grade:'4',team:'帝京大学'},
      {rank:42,time:'1:00:38',name:'山岸 塁',grade:'4',team:'上武大学'},
      {rank:43,time:'1:00:38',name:'加藤 勇也',grade:'3',team:'帝京大学'},
      {rank:44,time:'1:00:38',name:'相馬 一生',grade:'3',team:'中央大学'},
      {rank:45,time:'1:00:39',name:'馬場 祐輔',grade:'1',team:'拓殖大学'},
      {rank:46,time:'1:00:39',name:'山﨑 一輝',grade:'2',team:'日本大学'},
      {rank:47,time:'1:00:39',name:'吉村 匠',grade:'4',team:'東京経済大学'},
      {rank:48,time:'1:00:39',name:'平賀 喜裕',grade:'3',team:'駿河台大学'},
      {rank:49,time:'1:00:40',name:'聞谷 賢人',grade:'3',team:'順天堂大学'},
      {rank:50,time:'1:00:40',name:'村瀬 圭太',grade:'4',team:'麗澤大学'}
    ],
    source: 'https://www.kgrr.org/event/2015/kgrr/92hakone_yosenkai/sougou-r.pdf',
    supplementalSources: [
      'https://www.kgrr.org/event/2015/kgrr/92hakone_yosenkai/kojin-r.pdf',
      'https://www.chuo-u.ac.jp/aboutus/news/2015/10/12105/',
      'https://tsukuba-hakone.win/topics/15101901/'
    ],
    notes: '関東学連公式結果で順位が付いた48校の順位・合計タイムと、NMの東京農工大学を収録。個人成績は公式個人結果の上位50名を学年付きで先行収録。51位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2015'];
  if (!existing) { window.hakoneQualifierDB.years['2015'] = record; return; }
  if (!Array.isArray(existing.teams)) existing.teams = [];
  const normTeam = s => String(s||'').normalize('NFKC').replace(/國學院大学/g,'國學院大學').replace(/[\s　]/g,'');
  const teamByName = new Map(existing.teams.map(x => [normTeam(x.team), x]));
  record.teams.forEach(x => { const k=normTeam(x.team), p=teamByName.get(k); if(!p){existing.teams.push(x);teamByName.set(k,x);return;} if((p.rank==null||p.rank==='')&&x.rank!=null)p.rank=x.rank; if(!p.time&&x.time)p.time=x.time; });
  existing.teams.sort((a,b)=>(a.rank ?? 999)-(b.rank ?? 999));
  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const normName = s => String(s||'').normalize('NFKC').replace(/[\s　・.]/g,'').toLowerCase();
  const personKey = x => `${x.rank}|${normName(x.name)}|${normTeam(x.team)}`;
  const people = new Map(existing.individuals.map(x => [personKey(x), x]));
  record.individuals.forEach(x => { const k=personKey(x), p=people.get(k); if(!p){existing.individuals.push(x);people.set(k,x);return;} if(!p.time&&x.time)p.time=x.time; if(!p.grade&&x.grade)p.grade=x.grade; });
  existing.individuals.sort((a,b)=>(a.rank ?? 9999)-(b.rank ?? 9999));
  existing.source = existing.source || record.source;
  existing.supplementalSources = Array.from(new Set([...(existing.supplementalSources||[]), ...record.supplementalSources]));
  existing.notes = existing.notes || record.notes;
})();