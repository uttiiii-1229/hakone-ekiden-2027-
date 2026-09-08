// Historical supplement: 2014 (第91回) 箱根駅伝予選会
// Primary source: 日本テレビ 箱根駅伝公式 第91回予選会結果.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2014, eventYear: 2014, hakoneEdition: 91,
    teams: [
      {rank:1,time:'10:07:11',team:'神奈川大学'},
      {rank:2,time:'10:07:18',team:'國學院大學'},
      {rank:3,time:'10:07:31',team:'東海大学'},
      {rank:4,time:'10:07:57',team:'山梨学院大学'},
      {rank:5,time:'10:09:17',team:'中央学院大学'},
      {rank:6,time:'10:10:20',team:'上武大学'},
      {rank:7,time:'10:11:37',team:'中央大学'},
      {rank:8,time:'10:11:55',team:'順天堂大学'},
      {rank:9,time:'10:12:09',team:'城西大学'},
      {rank:10,time:'10:14:03',team:'創価大学'},
      {rank:11,time:'10:14:52',team:'東京農業大学'},
      {rank:12,time:'10:16:53',team:'法政大学'},
      {rank:13,time:'10:18:24',team:'東京国際大学'},
      {rank:14,time:'10:22:19',team:'平成国際大学'},
      {rank:15,time:'10:25:28',team:'国士舘大学'},
      {rank:16,time:'10:27:22',team:'麗澤大学'},
      {rank:17,time:'10:27:45',team:'専修大学'},
      {rank:18,time:'10:30:14',team:'流通経済大学'},
      {rank:19,time:'10:35:18',team:'駿河台大学'},
      {rank:20,time:'10:35:49',team:'亜細亜大学'},
      {rank:21,time:'10:39:17',team:'筑波大学'},
      {rank:22,time:'10:39:34',team:'関東学院大学'},
      {rank:23,time:'10:45:45',team:'武蔵野学院大学'},
      {rank:24,time:'10:47:15',team:'東京経済大学'},
      {rank:25,time:'10:51:29',team:'松蔭大学'},
      {rank:26,time:'10:52:21',team:'日本薬科大学'},
      {rank:27,time:'10:56:38',team:'東京情報大学'},
      {rank:28,time:'11:01:54',team:'立教大学'},
      {rank:29,time:'11:06:06',team:'桜美林大学'},
      {rank:30,time:'11:07:46',team:'明治学院大学'},
      {rank:31,time:'11:07:49',team:'東京大学'},
      {rank:32,time:'11:08:34',team:'慶應義塾大学'},
      {rank:33,time:'11:09:10',team:'芝浦工業大学'},
      {rank:34,time:'11:09:11',team:'東京学芸大学'},
      {rank:35,time:'11:11:22',team:'国際武道大学'},
      {rank:36,time:'11:24:56',team:'千葉大学'},
      {rank:37,time:'11:25:31',team:'東京大学大学院'},
      {rank:38,time:'11:27:25',team:'横浜国立大学'},
      {rank:39,time:'11:27:36',team:'高崎経済大学'},
      {rank:40,time:'11:27:43',team:'学習院大学'},
      {rank:41,time:'11:40:40',team:'首都大学東京'},
      {rank:42,time:'11:41:41',team:'東京工業大学'},
      {rank:43,time:'11:47:16',team:'一橋大学'},
      {rank:44,time:'11:53:11',team:'東京理科大学'},
      {rank:45,time:'11:54:05',team:'東京農工大学'},
      {rank:46,time:'11:59:25',team:'防衛大学校'},
      {rank:47,time:'11:59:45',team:'上智大学'},
      {rank:null,time:'NM',team:'埼玉大学'}
    ],
    individuals: [
      {rank:1,time:'0:58:26',name:'村山 紘太',grade:'',team:'城西大学'},
      {rank:2,time:'0:58:34',name:'エノック・オムワンバ',grade:'',team:'山梨学院大学'},
      {rank:3,time:'0:59:17',name:'柿原 聖哉',grade:'',team:'神奈川大学'},
      {rank:4,time:'0:59:22',name:'浅岡 満憲',grade:'',team:'東京農業大学'},
      {rank:5,time:'0:59:25',name:'井上 大仁',grade:'',team:'山梨学院大学'},
      {rank:6,time:'0:59:25',name:'山口 修平',grade:'',team:'創価大学'},
      {rank:7,time:'0:59:28',name:'シテキ・スタンレイ',grade:'',team:'東京国際大学'},
      {rank:8,time:'0:59:29',name:'蜂須賀 源',grade:'',team:'國學院大學'},
      {rank:9,time:'0:59:34',name:'白吉 凌',grade:'',team:'東海大学'},
      {rank:10,time:'0:59:37',name:'沖守 怜',grade:'',team:'國學院大學'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/91/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/91/yosen_kojinresult/'
    ],
    notes: '日本テレビ箱根駅伝公式アーカイブで、順位が付いた47校の順位・合計タイムと、記録なしの埼玉大学を収録。個人成績は公式掲載の上位10名を先行収録。学年は公式ページで確認できないため未入力。11位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2014'];
  if (!existing) { window.hakoneQualifierDB.years['2014'] = record; return; }
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
