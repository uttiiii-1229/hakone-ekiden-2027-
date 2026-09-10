// Historical supplement: 2005 (第82回) 箱根駅伝予選会
// Sources: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2005, eventYear: 2005, hakoneEdition: 82,
    teams: [
      {rank:1,time:'10:10:17',team:'東洋大学'},{rank:2,time:'10:13:56',team:'早稲田大学'},{rank:3,time:'10:14:21',team:'國學院大學'},
      {rank:4,time:'10:16:01',team:'山梨学院大学'},{rank:5,time:'10:17:05',team:'大東文化大学'},{rank:6,time:'10:17:32',team:'城西大学'},
      {rank:7,time:'10:16:20',team:'国士舘大学'},{rank:8,time:'10:16:41',team:'明治大学'},{rank:9,time:'10:18:58',team:'専修大学'},
      {rank:10,time:'10:19:41',team:'拓殖大学'},{rank:11,time:'10:20:26',team:'平成国際大学'},{rank:12,time:'10:25:26',team:'帝京大学'},
      {rank:13,time:'10:26:02',team:'青山学院大学'},{rank:14,time:'10:27:34',team:'東京農業大学'},{rank:15,time:'10:32:23',team:'関東学院大学'},
      {rank:16,time:'10:39:47',team:'上武大学'},{rank:17,time:'10:42:36',team:'流通経済大学'},{rank:18,time:'10:49:29',team:'筑波大学'},
      {rank:19,time:'10:49:59',team:'創価大学'},{rank:20,time:'10:53:34',team:'国際武道大学'},{rank:21,time:'10:54:17',team:'慶應義塾大学'},
      {rank:22,time:'10:58:19',team:'麗澤大学'},{rank:23,time:'11:07:32',team:'立教大学'},{rank:24,time:'11:12:54',team:'東京大学'},
      {rank:25,time:'11:19:19',team:'東京学芸大学'},{rank:26,time:'11:31:11',team:'茨城大学'},{rank:27,time:'11:31:15',team:'駿河台大学'},
      {rank:28,time:'11:31:10',team:'成蹊大学'},{rank:29,time:'11:36:23',team:'東京理科大学'},{rank:30,time:'11:37:48',team:'学習院大学'},
      {rank:31,time:'11:43:44',team:'東京大学大学院'},{rank:32,time:'11:50:17',team:'千葉大学'},{rank:33,time:'11:55:29',team:'防衛大学校'},
      {rank:34,time:'12:06:56',team:'文教大学'},{rank:35,time:'12:07:20',team:'横浜国立大学'},{rank:36,time:'12:12:34',team:'埼玉大学'},
      {rank:37,time:'12:14:09',team:'首都大学東京'},{rank:null,time:'',team:'東京工業大学',status:'記録なし'},{rank:null,time:'',team:'千葉商科大学',status:'記録なし'}
    ],
    individuals: [
      {rank:1,time:'57:22',name:'メクボ・J・モグス',team:'山梨学院大学'},
      {rank:2,time:'58:45',name:'サイラス・ジュイ',team:'流通経済大学'},
      {rank:3,time:'1:00:03',name:'竹澤 健介',team:'早稲田大学'},
      {rank:4,time:'1:00:10',name:'座間 マボロベネディック',team:'専修大学'},
      {rank:5,time:'1:00:16',name:'三島 慎吾',team:'國學院大學'},
      {rank:6,time:'1:00:19',name:'阿久津 真倫',team:'関東学院大学'},
      {rank:7,time:'1:00:22',name:'大西 智也',team:'東洋大学'},
      {rank:8,time:'1:00:29',name:'黒﨑 拓克',team:'東洋大学'},
      {rank:9,time:'1:00:30',name:'伊藤 一行',team:'城西大学'},
      {rank:10,time:'1:00:31',name:'野宮 章弘',team:'大東文化大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/82/yosen_sougouresult',
    supplementalSources: ['https://www.ntv.co.jp/hakone/backnumber/82/yosen_kojinresult/'],
    notes: '2005年10月22日開催。日本テレビ箱根駅伝番組公式サイトで出場39校を確認。順位の付いた37校は公式の最終総合順位・タイムを収録し、東京工業大学・千葉商科大学は公式どおり記録なしとして保持。7〜9位を含む順位は当時の関東インカレポイント反映後の公式最終成績。個人成績は公式掲載の上位10名を収録。公式ページで学年を確認できない選手は推測せず未設定。11位以下の個人成績は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2005'];
  if (!existing) { window.hakoneQualifierDB.years['2005'] = record; return; }
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