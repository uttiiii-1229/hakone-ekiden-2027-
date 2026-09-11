// Historical supplement: 2003 (第80回) 箱根駅伝予選会
// Source: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2003, eventYear: 2003, hakoneEdition: 80,
    teams: [
      {rank:1,time:'8:37:50',team:'法政大学'},{rank:2,time:'8:38:07',team:'亜細亜大学'},{rank:3,time:'8:38:16',team:'神奈川大学'},
      {rank:4,time:'8:38:57',team:'帝京大学'},{rank:5,time:'8:40:34',team:'東京農業大学'},{rank:6,time:'8:40:56',team:'関東学院大学'},
      {rank:7,time:'8:38:16',team:'早稲田大学'},{rank:8,time:'8:43:05',team:'城西大学'},{rank:9,time:'8:44:21',team:'国士舘大学'},
      {rank:10,time:'8:44:25',team:'拓殖大学'},{rank:11,time:'8:45:00',team:'専修大学'},{rank:12,time:'8:45:28',team:'明治大学'},
      {rank:13,time:'8:45:47',team:'國學院大學'},{rank:14,time:'8:48:23',team:'平成国際大学'},{rank:15,time:'8:55:48',team:'筑波大学'},
      {rank:16,time:'8:58:33',team:'創価大学'},{rank:17,time:'8:59:34',team:'青山学院大学'},{rank:18,time:'9:04:11',team:'流通経済大学'},
      {rank:19,time:'9:17:34',team:'慶應義塾大学'},{rank:20,time:'9:24:30',team:'国際武道大学'},{rank:21,time:'9:33:30',team:'東京大学'},
      {rank:22,time:'9:36:05',team:'上武大学'},{rank:23,time:'9:41:44',team:'立教大学'},{rank:24,time:'9:45:50',team:'防衛大学校'},
      {rank:25,time:'9:46:44',team:'東京学芸大学'},{rank:26,time:'9:53:19',team:'茨城大学'},{rank:27,time:'9:57:29',team:'東京理科大学'},
      {rank:28,time:'9:59:53',team:'山梨大学'},{rank:29,time:'10:00:04',team:'上智大学'},{rank:30,time:'10:01:18',team:'学習院大学'},
      {rank:31,time:'10:05:31',team:'東京工業大学'},{rank:32,time:'10:05:53',team:'一橋大学'},{rank:33,time:'10:09:08',team:'玉川大学'},
      {rank:34,time:'10:14:33',team:'千葉大学'},{rank:35,time:'10:20:31',team:'千葉商科大学'},{rank:36,time:'10:39:20',team:'東京都立大学'},
      {rank:37,time:'10:44:21',team:'東京電機大学'}
    ],
    individuals: [
      {rank:1,time:'50:39',name:'S. ジェンガ',team:'平成国際大学'},
      {rank:2,time:'50:41',name:'竜田 美幸',team:'神奈川大学'},
      {rank:3,time:'50:42',name:'杉山 一介',team:'早稲田大学'},
      {rank:4,time:'50:52',name:'長嶺 貴裕',team:'法政大学'},
      {rank:5,time:'50:56',name:'河野 孝志',team:'城西大学'},
      {rank:6,time:'51:00',name:'戸村 将幸',team:'帝京大学'},
      {rank:7,time:'51:02',name:'加藤 健一朗',team:'拓殖大学'},
      {rank:8,time:'51:02',name:'岩崎 洋平',team:'亜細亜大学'},
      {rank:9,time:'51:05',name:'小池 健太',team:'亜細亜大学'},
      {rank:10,time:'51:11',name:'北川 昌史',team:'関東学院大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/80/yosen_sougouresult/',
    supplementalSources: ['https://www.ntv.co.jp/hakone/backnumber/80/yosen_kojinresult/'],
    notes: '2003年開催の第80回箱根駅伝予選会。日本テレビ公式掲載の37校すべての最終総合順位・タイムを収録。上位6校は無条件通過、残る枠は関東インカレポイント反映後の公式最終順位を採用。個人成績は公式掲載の上位10名を収録。学年は同ページで確認できないため推測せず未設定。既存の確認済み値は空データで上書きしない。'
  };
  const existing = window.hakoneQualifierDB.years['2003'];
  if (!existing) { window.hakoneQualifierDB.years['2003'] = record; return; }
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