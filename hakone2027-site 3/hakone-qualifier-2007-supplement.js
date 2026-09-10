// Historical supplement: 2007 (第84回) 箱根駅伝予選会
// Sources: 日本テレビ箱根駅伝公式、中央学院大学、帝京大学、青山学院大学公式/OBアーカイブ。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2007, eventYear: 2007, hakoneEdition: 84,
    teams: [
      {rank:1,time:'10:10:49',team:'中央学院大学'},{rank:2,time:'10:12:14',team:'帝京大学'},{rank:2,time:'10:12:14',team:'城西大学'},
      {rank:4,time:'10:12:26',team:'山梨学院大学'},{rank:5,time:'10:13:04',team:'大東文化大学'},{rank:6,time:'10:13:54',team:'神奈川大学'},
      {rank:7,time:'10:11:01',team:'国士舘大学'},{rank:8,time:'10:12:35',team:'東京農業大学'},{rank:9,time:'10:13:18',team:'法政大学'},
      {rank:10,time:'10:14:37',team:'青山学院大学'},{rank:11,time:'10:16:54',team:'明治大学'},{rank:12,time:'10:16:59',team:'拓殖大学'},
      {rank:13,time:'10:21:08',team:'上武大学'},{rank:14,time:'10:21:56',team:'平成国際大学'},{rank:15,time:'10:28:13',team:'國學院大學'},
      {rank:16,time:'10:33:06',team:'麗澤大学'},{rank:17,time:'10:35:58',team:'創価大学'},{rank:18,time:'10:39:49',team:'関東学院大学'},
      {rank:19,time:'10:42:48',team:'流通経済大学'},{rank:20,time:'10:45:33',team:'松蔭大学'},{rank:21,time:'10:52:29',team:'慶應義塾大学'},
      {rank:22,time:'10:57:07',team:'筑波大学'},{rank:23,time:'11:05:56',team:'国際武道大学'},{rank:24,time:'11:08:27',team:'立教大学'},
      {rank:25,time:'11:16:21',team:'東京大学'},{rank:26,time:'11:16:37',team:'駿河台大学'},{rank:27,time:'11:21:30',team:'東京学芸大学'},
      {rank:28,time:'11:21:43',team:'防衛大学校'},{rank:29,time:'11:30:12',team:'学習院大学'},{rank:30,time:'11:32:24',team:'成蹊大学'},
      {rank:31,time:'11:35:21',team:'東京理科大学'},{rank:32,time:'11:39:47',team:'東京経済大学'},{rank:33,time:'11:41:01',team:'横浜国立大学'},
      {rank:34,time:'11:43:26',team:'東京大学大学院'},{rank:35,time:'11:49:23',team:'筑波大学大学院'},{rank:36,time:'11:57:19',team:'埼玉大学'},
      {rank:37,time:'12:03:24',team:'高崎経済大学'},{rank:38,time:'12:05:04',team:'首都大学東京'},{rank:39,time:'12:08:38',team:'北里大学'},
      {rank:40,time:'12:08:44',team:'一橋大学'},{rank:41,time:'12:13:24',team:'千葉大学'},{rank:42,time:'12:18:33',team:'上智大学'}
    ],
    individuals: [
      {rank:2,time:'58:40',name:'木原 真佐人',team:'中央学院大学',grade:3},{rank:4,time:'59:49',name:'篠藤 淳',team:'中央学院大学',grade:4},
      {rank:35,time:'1:01:01',name:'大内 陽介',team:'中央学院大学',grade:4},{rank:57,time:'1:01:20',name:'木村 聡寿',team:'中央学院大学',grade:4},
      {rank:64,time:'1:01:28',name:'辻 茂樹',team:'中央学院大学',grade:3},{rank:70,time:'1:01:31',name:'小林 光二',team:'中央学院大学',grade:1},
      {rank:82,time:'1:01:37',name:'大野 紘崇',team:'中央学院大学',grade:2},{rank:90,time:'1:01:45',name:'大谷 克',team:'中央学院大学',grade:1},
      {rank:95,time:'1:01:48',name:'松浦 貴之',team:'中央学院大学',grade:4},{rank:99,time:'1:01:50',name:'渡部 政彦',team:'中央学院大学',grade:3},
      {rank:103,time:'1:01:51',name:'伊藤 達志',team:'中央学院大学',grade:4},{rank:132,time:'1:02:27',name:'木原 好隆',team:'中央学院大学',grade:4},
      {rank:6,time:'59:52',name:'馬場 圭太',team:'帝京大学',grade:3},{rank:21,time:'1:00:37',name:'清水 健司',team:'帝京大学',grade:4},
      {rank:34,time:'1:01:00',name:'前川 剛己',team:'帝京大学',grade:3},{rank:36,time:'1:01:04',name:'久保 芳斗',team:'帝京大学',grade:1},
      {rank:48,time:'1:01:15',name:'小田 鎌徳',team:'帝京大学',grade:4},{rank:51,time:'1:01:16',name:'赤木 翼',team:'帝京大学',grade:3},
      {rank:53,time:'1:01:19',name:'田部 貴之',team:'帝京大学',grade:4},{rank:85,time:'1:01:38',name:'河野 健一',team:'帝京大学',grade:2},
      {rank:115,time:'1:02:06',name:'土久岡 陽祐',team:'帝京大学',grade:1},{rank:116,time:'1:02:07',name:'岡田 洋輔',team:'帝京大学',grade:3},
      {rank:160,time:'1:03:01',name:'大脇 佑介',team:'帝京大学',grade:4},{rank:166,time:'1:03:13',name:'西村 知修',team:'帝京大学',grade:1},
      {rank:24,time:'1:00:48',name:'先崎 祐也',team:'青山学院大学',grade:3},{rank:33,time:'1:01:00',name:'横田 竜一',team:'青山学院大学',grade:4},
      {rank:46,time:'1:01:13',name:'松本 光',team:'青山学院大学',grade:4},{rank:59,time:'1:01:23',name:'荒井 輔',team:'青山学院大学',grade:2},
      {rank:66,time:'1:01:30',name:'宇野 純也',team:'青山学院大学',grade:3},{rank:68,time:'1:01:30',name:'川口 将宏',team:'青山学院大学',grade:4},
      {rank:97,time:'1:01:49',name:'大坪 恭兵',team:'青山学院大学',grade:3},{rank:98,time:'1:01:49',name:'末松 佑一朗',team:'青山学院大学',grade:3},
      {rank:134,time:'1:02:28',name:'米澤 豪',team:'青山学院大学',grade:3},{rank:140,time:'1:02:42',name:'田中 五月',team:'青山学院大学',grade:2},
      {rank:170,time:'1:03:20',name:'佐々木 徹也',team:'青山学院大学',grade:3},{rank:246,time:'1:05:30',name:'五刀 裕規',team:'青山学院大学',grade:4}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/84/yosen_sougouresult',
    supplementalSources: ['https://www.cgu.ac.jp/club/sports/ekiden/record/record_hakone_semifinal.html','https://archive-ekiden.teikyouniv.jp/game/2007/','https://agu-ac-archives.com/record/hakoneyosenkai81-90.html'],
    notes: '2007年10月20日開催。日テレ箱根駅伝公式で参加42校すべての最終総合順位・タイムを収録。7〜9位は当時の関東インカレポイント併用後の公式最終順位・タイム。個人成績は中央学院・帝京・青山学院の各大学公式/公式OBアーカイブで確認できた各12名、計36名を順位・記録・学年付きで収録。他大学の個人成績は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2007'];
  if (!existing) { window.hakoneQualifierDB.years['2007'] = record; return; }
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