// Historical supplement: 2010 (第87回) 箱根駅伝予選会
// Team and individual results: 日本テレビ 箱根駅伝公式 第87回予選会結果.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2010, eventYear: 2010, hakoneEdition: 87,
    teams: [
      {rank:1,time:'10:11:39',team:'拓殖大学'},
      {rank:2,time:'10:15:46',team:'國學院大學'},
      {rank:3,time:'10:16:22',team:'帝京大学'},
      {rank:4,time:'10:16:40',team:'中央学院大学'},
      {rank:5,time:'10:17:49',team:'上武大学'},
      {rank:6,time:'10:20:10',team:'東海大学'},
      {rank:7,time:'10:19:26',team:'日本大学'},
      {rank:8,time:'10:21:27',team:'神奈川大学'},
      {rank:9,time:'10:22:46',team:'専修大学'},
      {rank:10,time:'10:24:35',team:'法政大学'},
      {rank:11,time:'10:25:44',team:'大東文化大学'},
      {rank:12,time:'10:26:52',team:'亜細亜大学'},
      {rank:13,time:'10:29:56',team:'順天堂大学'},
      {rank:14,time:'10:31:57',team:'国士舘大学'},
      {rank:15,time:'10:36:16',team:'松蔭大学'},
      {rank:16,time:'10:38:17',team:'創価大学'},
      {rank:17,time:'10:41:28',team:'流通経済大学'},
      {rank:18,time:'10:42:58',team:'平成国際大学'},
      {rank:19,time:'10:43:05',team:'麗澤大学'},
      {rank:20,time:'10:50:09',team:'関東学院大学'},
      {rank:21,time:'10:57:17',team:'武蔵野学院大学'},
      {rank:22,time:'10:59:55',team:'東京経済大学'},
      {rank:23,time:'11:12:43',team:'慶應義塾大学'},
      {rank:24,time:'11:16:35',team:'東京大学'},
      {rank:25,time:'11:23:03',team:'東京学芸大学'},
      {rank:26,time:'11:24:20',team:'立教大学'},
      {rank:27,time:'11:24:24',team:'学習院大学'},
      {rank:28,time:'11:31:31',team:'国際武道大学'},
      {rank:29,time:'11:32:41',team:'筑波大学'},
      {rank:30,time:'11:34:18',team:'東京理科大学'},
      {rank:31,time:'11:46:19',team:'横浜国立大学'},
      {rank:32,time:'11:46:42',team:'筑波大学大学院'},
      {rank:33,time:'11:54:24',team:'千葉大学'},
      {rank:34,time:'12:00:14',team:'東京大学大学院'},
      {rank:35,time:'12:01:17',team:'防衛大学校'},
      {rank:36,time:'12:06:23',team:'駿河台大学'}
    ],
    individuals: [
      {rank:1,time:'0:58:23',name:'ジョン マイナ',team:'拓殖大学'},
      {rank:2,time:'0:58:43',name:'ガンドゥ・ベンジャミン',team:'日本大学'},
      {rank:3,time:'1:00:03',name:'早川 翼',team:'東海大学'},
      {rank:4,time:'1:00:12',name:'長谷川 裕介',team:'上武大学'},
      {rank:5,time:'1:00:12',name:'荻野 皓平',team:'國學院大學'},
      {rank:6,time:'1:00:16',name:'小林 光二',team:'中央学院大学'},
      {rank:7,time:'1:00:17',name:'谷川 智浩',team:'拓殖大学'},
      {rank:8,time:'1:00:26',name:'仁科 徳将',team:'國學院大學'},
      {rank:9,time:'1:00:26',name:'中村 亮太',team:'帝京大学'},
      {rank:10,time:'1:00:34',name:'堂本 尚寛',team:'日本大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/87/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/87/yosen_kojinresult/'
    ],
    notes: '日本テレビ箱根駅伝公式アーカイブで全36校の最終総合順位・タイムを収録。1〜6位は各校上位10名の合計タイム、7〜9位は第89回関東インカレポイント併用後の公式最終順位・タイム。個人成績は公式掲載の上位10名を先行収録。学年は公式ページで確認できないため推測せず未設定。11位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2010'];
  if (!existing) { window.hakoneQualifierDB.years['2010'] = record; return; }
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