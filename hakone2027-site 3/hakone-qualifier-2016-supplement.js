// Historical supplement: 2016 (第93回) 箱根駅伝予選会
// Primary source: 関東学生陸上競技連盟 official team/individual result PDFs.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};

  const record = {
    year: 2016,
    eventYear: 2016,
    hakoneEdition: 93,
    teams: [
      {rank:1,time:'10:08:07',team:'大東文化大学'},
      {rank:2,time:'10:08:17',team:'明治大学'},
      {rank:3,time:'10:10:09',team:'創価大学'},
      {rank:4,time:'10:10:18',team:'法政大学'},
      {rank:5,time:'10:11:47',team:'神奈川大学'},
      {rank:6,time:'10:12:12',team:'上武大学'},
      {rank:7,time:'10:12:36',team:'拓殖大学'},
      {rank:8,time:'10:14:09',team:'國學院大學'},
      {rank:9,time:'10:14:45',team:'国士舘大学'},
      {rank:10,time:'10:16:17',team:'日本大学'},
      {rank:11,time:'10:17:01',team:'中央大学'},
      {rank:12,time:'10:19:10',team:'城西大学'},
      {rank:13,time:'10:20:50',team:'東京農業大学'},
      {rank:14,time:'10:25:00',team:'専修大学'},
      {rank:15,time:'10:25:29',team:'東京国際大学'},
      {rank:16,time:'10:26:48',team:'亜細亜大学'},
      {rank:17,time:'10:33:32',team:'関東学院大学'},
      {rank:18,time:'10:33:32',team:'日本薬科大学'},
      {rank:19,time:'10:34:59',team:'駿河台大学'},
      {rank:20,time:'10:36:10',team:'明治学院大学'},
      {rank:21,time:'10:36:15',team:'平成国際大学'},
      {rank:22,time:'10:36:51',team:'麗澤大学'},
      {rank:23,time:'10:37:07',team:'流通経済大学'},
      {rank:24,time:'10:38:57',team:'筑波大学'},
      {rank:25,time:'10:41:04',team:'桜美林大学'},
      {rank:26,time:'10:47:45',team:'東京経済大学'},
      {rank:27,time:'10:49:28',team:'武蔵野学院大学'},
      {rank:28,time:'10:55:27',team:'慶應義塾大学'},
      {rank:29,time:'10:57:50',team:'松蔭大学'},
      {rank:30,time:'10:59:51',team:'東京大学'},
      {rank:31,time:'11:03:58',team:'芝浦工業大学'},
      {rank:32,time:'11:05:11',team:'東京情報大学'},
      {rank:33,time:'11:07:08',team:'立教大学'},
      {rank:34,time:'11:16:47',team:'千葉大学'},
      {rank:35,time:'11:22:19',team:'防衛大学校'},
      {rank:36,time:'11:26:19',team:'首都大学東京'},
      {rank:37,time:'11:27:22',team:'学習院大学'},
      {rank:38,time:'11:30:51',team:'東京理科大学'},
      {rank:39,time:'11:32:52',team:'東京学芸大学'},
      {rank:40,time:'11:35:29',team:'東京工業大学'},
      {rank:41,time:'11:35:47',team:'埼玉大学'},
      {rank:42,time:'11:36:16',team:'帝京平成大学'},
      {rank:43,time:'11:37:52',team:'一橋大学'},
      {rank:44,time:'11:40:22',team:'国際武道大学'},
      {rank:45,time:'11:41:02',team:'横浜国立大学'},
      {rank:46,time:'11:44:40',team:'上智大学'},
      {rank:47,time:'11:44:45',team:'茨城大学'},
      {rank:48,time:'11:46:01',team:'高崎経済大学'},
      {rank:49,time:'11:56:56',team:'東京工業大学大学院'},
      {rank:null,time:'NM',team:'東京大学大学院'}
    ],
    individuals: [
      {rank:1,time:'0:58:15',name:'Patrick M. Wambui',grade:'2',team:'日本大学'},
      {rank:2,time:'0:58:27',name:'Ledama Kisaisa',grade:'1',team:'桜美林大学'},
      {rank:3,time:'0:58:43',name:'鈴木 健吾',grade:'3',team:'神奈川大学'},
      {rank:4,time:'0:58:51',name:'Muthoni Muiru',grade:'1',team:'創価大学'},
      {rank:5,time:'0:59:06',name:'Simon Kariuki',grade:'2',team:'日本薬科大学'},
      {rank:6,time:'0:59:34',name:'Workneh Derese',grade:'2',team:'拓殖大学'},
      {rank:7,time:'0:59:38',name:'石川 颯真',grade:'4',team:'日本大学'},
      {rank:8,time:'0:59:40',name:'丸山 竜也',grade:'4',team:'専修大学'},
      {rank:9,time:'0:59:44',name:'原 法利',grade:'3',team:'大東文化大学'},
      {rank:10,time:'0:59:58',name:'山藤 篤司',grade:'2',team:'神奈川大学'},
      {rank:11,time:'1:00:00',name:'セルナルド 祐慈',grade:'4',team:'創価大学'},
      {rank:12,time:'1:00:01',name:'足羽 純実',grade:'4',team:'法政大学'},
      {rank:13,time:'1:00:02',name:'住吉 秀昭',grade:'2',team:'国士舘大学'},
      {rank:14,time:'1:00:04',name:'細森 大輔',grade:'4',team:'國學院大學'},
      {rank:15,time:'1:00:05',name:'町澤 大雅',grade:'4',team:'中央大学'},
      {rank:16,time:'1:00:15',name:'平賀 喜裕',grade:'4',team:'駿河台大学'},
      {rank:17,time:'1:00:20',name:'宇田 朋史',grade:'4',team:'拓殖大学'},
      {rank:18,time:'1:00:22',name:'東 森拓',grade:'4',team:'上武大学'},
      {rank:19,time:'1:00:22',name:'菊地 聡之',grade:'4',team:'城西大学'},
      {rank:20,time:'1:00:22',name:'下尾 一真',grade:'4',team:'大東文化大学'},
      {rank:21,time:'1:00:22',name:'江頭 賢太郎',grade:'4',team:'明治大学'},
      {rank:22,time:'1:00:23',name:'加藤 風磨',grade:'3',team:'亜細亜大学'},
      {rank:23,time:'1:00:25',name:'坂東 悠汰',grade:'2',team:'法政大学'},
      {rank:24,time:'1:00:25',name:'森田 清貴',grade:'4',team:'上武大学'},
      {rank:25,time:'1:00:26',name:'籔下 響大',grade:'4',team:'明治大学'},
      {rank:26,time:'1:00:29',name:'金子 元気',grade:'2',team:'城西大学'},
      {rank:27,time:'1:00:29',name:'照井 明人',grade:'4',team:'東京国際大学'},
      {rank:28,time:'1:00:30',name:'大山 憲明',grade:'3',team:'創価大学'},
      {rank:29,time:'1:00:30',name:'柴田 拓真',grade:'4',team:'平成国際大学'},
      {rank:30,time:'1:00:33',name:'太田黒 卓',grade:'2',team:'上武大学'},
      {rank:31,time:'1:00:33',name:'小山 直城',grade:'2',team:'東京農業大学'},
      {rank:32,time:'1:00:33',name:'谷川 貴俊',grade:'2',team:'大東文化大学'},
      {rank:33,time:'1:00:34',name:'相馬 一生',grade:'4',team:'中央大学'},
      {rank:34,time:'1:00:37',name:'廣瀬 岳',grade:'4',team:'関東学院大学'},
      {rank:35,time:'1:00:38',name:'阿部 弘輝',grade:'1',team:'明治大学'},
      {rank:36,time:'1:00:38',name:'蜂須賀 源',grade:'4',team:'國學院大學'},
      {rank:37,time:'1:00:41',name:'末次 慶太',grade:'3',team:'明治大学'},
      {rank:38,time:'1:00:41',name:'射場 雄太朗',grade:'4',team:'明治大学'},
      {rank:39,time:'1:00:42',name:'川澄 克弥',grade:'1',team:'大東文化大学'},
      {rank:40,time:'1:00:42',name:'戸澤 奨',grade:'2',team:'国士舘大学'},
      {rank:41,time:'1:00:43',name:'土井 大輔',grade:'2',team:'法政大学'},
      {rank:42,time:'1:00:44',name:'藤井 亮矢',grade:'1',team:'武蔵野学院大学'},
      {rank:43,time:'1:00:46',name:'中島 大就',grade:'1',team:'明治大学'},
      {rank:44,time:'1:00:46',name:'細川 翔太郎',grade:'3',team:'法政大学'},
      {rank:45,time:'1:00:48',name:'工藤 隼人',grade:'4',team:'亜細亜大学'},
      {rank:46,time:'1:00:51',name:'坂田 昌駿',grade:'4',team:'法政大学'},
      {rank:47,time:'1:00:53',name:'磯口 晋平',grade:'3',team:'明治大学'},
      {rank:48,time:'1:00:53',name:'鈴木 大貴',grade:'4',team:'東京国際大学'},
      {rank:49,time:'1:00:56',name:'坂本 佳太',grade:'3',team:'上武大学'},
      {rank:50,time:'1:00:57',name:'折居 卓哉',grade:'4',team:'東京農業大学'}
    ],
    source: 'https://www.kgrr.org/event/2016/kgrr/93hakone-yosenkai/sougo.pdf',
    supplementalSources: [
      'https://www.kgrr.org/event/2016/kgrr/93hakone-yosenkai/kojin.pdf',
      'https://www.chuo-u.ac.jp/aboutus/news/2016/10/48016/',
      'https://ekiden.kanagawa-u.ac.jp/road_to/road_to2017/yosenkai_kansenki04.html',
      'https://www.reitaku-u.ac.jp/news/life/58868/'
    ],
    notes: '関東学連公式結果で49校の順位・合計タイムと、記録なし(NM)の東京大学大学院を収録。個人成績は公式個人結果の上位50名を先行収録し、51位以下は継続補完対象。'
  };

  const existing = window.hakoneQualifierDB.years['2016'];
  if (!existing) {
    window.hakoneQualifierDB.years['2016'] = record;
    return;
  }

  if (!Array.isArray(existing.teams)) existing.teams = [];
  const normTeam = s => String(s||'').normalize('NFKC').replace(/國學院大学/g,'國學院大學').replace(/[\s　]/g,'');
  const teamByName = new Map(existing.teams.map(x => [normTeam(x.team), x]));
  record.teams.forEach(x => {
    const key = normTeam(x.team);
    const prev = teamByName.get(key);
    if (!prev) {
      existing.teams.push(x);
      teamByName.set(key, x);
      return;
    }
    if ((prev.rank == null || prev.rank === '') && x.rank != null) prev.rank = x.rank;
    if (!prev.time && x.time) prev.time = x.time;
  });
  existing.teams.sort((a,b)=>(a.rank ?? 999)-(b.rank ?? 999));

  if (!Array.isArray(existing.individuals)) existing.individuals = [];
  const normName = s => String(s||'').normalize('NFKC').replace(/[\s　・.]/g,'').toLowerCase();
  const personKey = x => `${x.rank}|${normName(x.name)}|${normTeam(x.team)}`;
  const people = new Map(existing.individuals.map(x => [personKey(x), x]));
  record.individuals.forEach(x => {
    const key = personKey(x);
    const prev = people.get(key);
    if (!prev) {
      existing.individuals.push(x);
      people.set(key, x);
      return;
    }
    if (!prev.time && x.time) prev.time = x.time;
    if (!prev.grade && x.grade) prev.grade = x.grade;
  });
  existing.individuals.sort((a,b)=>(a.rank ?? 9999)-(b.rank ?? 9999));

  if (!existing.source) existing.source = record.source;
  if (!Array.isArray(existing.supplementalSources)) existing.supplementalSources = record.supplementalSources;
  if (!existing.notes) existing.notes = record.notes;
})();
