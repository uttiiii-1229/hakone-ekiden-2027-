// Historical supplement: 2000 (第77回) 箱根駅伝予選会
// Primary source: 日本テレビ箱根駅伝番組公式サイト（総合成績・個人成績）。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2000, eventYear: 2000, hakoneEdition: 77,
    teams: [
      {rank:1,time:'10:23:14',team:'大東文化大学'},{rank:2,time:'10:26:47',team:'日本体育大学'},{rank:3,time:'10:26:53',team:'國學院大學'},
      {rank:4,time:'10:27:41',team:'拓殖大学'},{rank:5,time:'10:31:47',team:'法政大学'},{rank:6,time:'10:31:58',team:'平成国際大学'},
      {rank:7,time:'10:33:03',team:'東洋大学'},{rank:8,time:'10:35:38',team:'亜細亜大学'},{rank:9,time:'10:35:55',team:'関東学院大学'},
      {rank:10,time:'10:36:04',team:'国士舘大学'}
    ],
    individuals: [
      {rank:1,time:'59:17',name:'J. カーニー',team:'平成国際大学'},
      {rank:2,time:'59:33',name:'F. ムヒア',team:'平成国際大学'},
      {rank:3,time:'1:00:51',name:'土井 洋志',team:'法政大学',grade:2},
      {rank:4,time:'1:01:03',name:'松浦 仁一',team:'大東文化大学',grade:4},
      {rank:5,time:'1:01:13',name:'尾田 賢典',team:'関東学院大学'},
      {rank:6,time:'1:01:15',name:'石川 末廣',team:'東洋大学'},
      {rank:7,time:'1:01:19',name:'和田 昇',team:'東京農業大学'},
      {rank:8,time:'1:01:25',name:'安部 晋太郎',team:'拓殖大学',grade:3},
      {rank:9,time:'1:01:30',name:'寺尾 成人',team:'関東学院大学'},
      {rank:10,time:'1:01:30',name:'新妻 拓弥',team:'東京大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/77/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/77/yosen_kojinresult/',
      'https://www.ntv.co.jp/hakone/backnumber/77/team/hosei.html',
      'https://www.ntv.co.jp/hakone/backnumber/77/team/daito.html',
      'https://www.ntv.co.jp/hakone/backnumber/77/team/takushoku.html'
    ],
    notes: '2000年開催の第77回箱根駅伝予選会。日本テレビ公式本文は30校334名出場とするが、総合表は1〜10位のみ掲載されているため確認できた10校のみ収録。個人成績は公式掲載の上位10名。公式ページの大学略称はDBの標準表記へ正規化。学年は第77回本戦の日本テレビ公式選手名簿で同一選手を確認できた土井洋志（2年）、松浦仁一（4年）、安部晋太郎（3年）のみ追加し、その他は推測せず未設定。既存確認済み値を空データで上書きしない。'
  };
  const existing = window.hakoneQualifierDB.years['2000'];
  if (!existing) { window.hakoneQualifierDB.years['2000'] = record; return; }
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