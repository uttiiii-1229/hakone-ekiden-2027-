// Historical supplement: 2004 (第81回) 箱根駅伝予選会
// Sources: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績）、中央学院大学公式（同校個人成績・学年）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2004, eventYear: 2004, hakoneEdition: 81,
    teams: [
      {rank:1,time:'10:09:07',team:'早稲田大学'},{rank:2,time:'10:10:34',team:'大東文化大学'},{rank:3,time:'10:10:52',team:'明治大学'},
      {rank:4,time:'10:11:06',team:'専修大学'},{rank:5,time:'10:11:49',team:'山梨学院大学'},{rank:6,time:'10:12:04',team:'中央学院大学'},
      {rank:7,time:'10:12:24',team:'拓殖大学'},{rank:8,time:'10:12:41',team:'城西大学'},{rank:9,time:'10:13:51',team:'帝京大学'},
      {rank:10,time:'10:13:55',team:'東京農業大学'},{rank:11,time:'10:16:20',team:'国士舘大学'},{rank:12,time:'10:17:57',team:'國學院大學'},
      {rank:13,time:'10:18:21',team:'関東学院大学'},{rank:14,time:'10:19:48',team:'平成国際大学'},{rank:15,time:'10:22:14',team:'流通経済大学'},
      {rank:16,time:'10:22:17',team:'青山学院大学'},{rank:17,time:'10:32:12',team:'創価大学'},{rank:18,time:'10:40:19',team:'筑波大学'},
      {rank:19,time:'10:43:06',team:'上武大学'},{rank:20,time:'10:44:44',team:'慶應義塾大学'},{rank:21,time:'10:52:04',team:'国際武道大学'},
      {rank:22,time:'11:09:49',team:'東京大学'},{rank:23,time:'11:18:46',team:'東京学芸大学'},{rank:24,time:'11:24:39',team:'茨城大学'},
      {rank:25,time:'11:27:52',team:'東京理科大学'},{rank:26,time:'11:30:42',team:'立教大学'},{rank:27,time:'11:31:21',team:'学習院大学'},
      {rank:28,time:'11:35:09',team:'東京大学大学院'},{rank:29,time:'11:57:36',team:'千葉大学'},{rank:30,time:'11:58:58',team:'一橋大学'},
      {rank:31,time:'12:00:39',team:'玉川大学'},{rank:32,time:'12:02:13',team:'東京工業大学'},{rank:33,time:'12:02:31',team:'防衛大学校'},
      {rank:34,time:'12:11:42',team:'東京都立大学'}
    ],
    individuals: [
      {rank:1,time:'58:11',name:'ジョセファト・ダビリ',team:'流通経済大学'},
      {rank:2,time:'58:39',name:'オンベチェ・モカンバ',team:'山梨学院大学'},
      {rank:3,time:'59:14',name:'サイラス・ジュイ',team:'流通経済大学'},
      {rank:4,time:'59:52',name:'座間 マボロベネディック',team:'専修大学'},
      {rank:5,time:'1:00:00',name:'古川 茂',team:'大東文化大学'},
      {rank:6,time:'1:00:00',name:'チャールズ・キレギ',team:'平成国際大学'},
      {rank:7,time:'1:00:01',name:'スティーブン・ジェンガ',team:'平成国際大学'},
      {rank:8,time:'1:00:01',name:'篠浦 辰徳',team:'早稲田大学'},
      {rank:9,time:'1:00:03',name:'池邉 稔',team:'明治大学'},
      {rank:10,time:'1:00:05',name:'幸田 高明',team:'明治大学'},
      {rank:12,time:'1:00:07',name:'中東 亨介',team:'中央学院大学',grade:4},
      {rank:21,time:'1:00:31',name:'石田 直之',team:'中央学院大学',grade:4},
      {rank:43,time:'1:00:58',name:'篠藤 淳',team:'中央学院大学',grade:1},
      {rank:48,time:'1:01:02',name:'梅田 将一',team:'中央学院大学',grade:3},
      {rank:63,time:'1:01:11',name:'天野 達也',team:'中央学院大学',grade:2},
      {rank:84,time:'1:01:27',name:'江藤 裕也',team:'中央学院大学',grade:3},
      {rank:92,time:'1:01:33',name:'大内 陽介',team:'中央学院大学',grade:1},
      {rank:93,time:'1:01:34',name:'畠山 卓哉',team:'中央学院大学',grade:4},
      {rank:101,time:'1:01:39',name:'細田 祐司',team:'中央学院大学',grade:1},
      {rank:119,time:'1:02:02',name:'蔭山 浩司',team:'中央学院大学',grade:3},
      {rank:142,time:'1:02:23',name:'伊藤 達志',team:'中央学院大学',grade:1},
      {rank:154,time:'1:02:40',name:'信田 雄一',team:'中央学院大学',grade:3}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/81/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/81/yosen_kojinresult/',
      'https://www.cgu.ac.jp/club/sports/ekiden/record/record_hakone_semifinal.html'
    ],
    notes: '2004年10月16日開催。日本テレビ公式は参加36校と記載し、順位・最終総合タイムは34位まで掲載しているため、確認できた34校のみ収録し残る2校は推測で追加していない。個人成績は日テレ公式掲載の上位10名に加え、中央学院大学公式で確認できた同校12名を順位・記録・学年付きで補完。既存の確認済み値は上書きしない。'
  };
  const existing = window.hakoneQualifierDB.years['2004'];
  if (!existing) { window.hakoneQualifierDB.years['2004'] = record; return; }
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

// Load the next historical supplement synchronously while index.html is still parsing.
document.write('<script src="hakone-qualifier-2003-supplement.js"><\/script>');