// Historical supplement: 2006 (第83回) 箱根駅伝予選会
// Sources: 日本テレビ箱根駅伝公式、中央学院大学公式、東京工業大学陸上競技部公式。
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2006, eventYear: 2006, hakoneEdition: 83,
    teams: [
      {rank:1,time:'10:06:53',team:'早稲田大学'},{rank:2,time:'10:12:43',team:'専修大学'},{rank:3,time:'10:12:54',team:'中央学院大学'},
      {rank:4,time:'10:14:06',team:'國學院大學'},{rank:5,time:'10:14:37',team:'神奈川大学'},{rank:6,time:'10:16:35',team:'明治大学'},
      {rank:7,time:'10:16:06',team:'城西大学'},{rank:8,time:'10:16:34',team:'大東文化大学'},{rank:9,time:'10:16:57',team:'国士舘大学'},
      {rank:10,time:'10:16:58',team:'拓殖大学'},{rank:11,time:'10:19:40',team:'東京農業大学'},{rank:12,time:'10:20:32',team:'帝京大学'},
      {rank:13,time:'10:23:37',team:'上武大学'},{rank:14,time:'10:25:38',team:'平成国際大学'},{rank:15,time:'10:28:57',team:'関東学院大学'},
      {rank:16,time:'10:32:46',team:'青山学院大学'},{rank:17,time:'10:39:26',team:'流通経済大学'},{rank:18,time:'10:46:19',team:'筑波大学'},
      {rank:19,time:'10:49:49',team:'麗澤大学'},{rank:20,time:'10:51:30',team:'立教大学'},{rank:21,time:'10:52:32',team:'国際武道大学'},
      {rank:22,time:'10:53:52',team:'慶應義塾大学'},{rank:23,time:'10:54:45',team:'創価大学'},{rank:24,time:'10:55:12',team:'松蔭大学'},
      {rank:25,time:'11:09:21',team:'東京大学'},{rank:26,time:'11:13:17',team:'東京学芸大学'},{rank:27,time:'11:24:11',team:'駿河台大学'},
      {rank:28,time:'11:30:41',team:'筑波大学大学院'},{rank:29,time:'11:32:33',team:'東京理科大学'},{rank:30,time:'11:40:09',team:'東京大学大学院'},
      {rank:31,time:'11:42:33',team:'玉川大学'},{rank:32,time:'11:43:58',team:'成蹊大学'},{rank:33,time:'11:44:19',team:'学習院大学'},
      {rank:34,time:'11:47:58',team:'茨城大学'},{rank:35,time:'11:49:35',team:'一橋大学'},{rank:36,time:'11:53:07',team:'千葉大学'},
      {rank:37,time:'11:53:14',team:'横浜国立大学'},{rank:38,time:'11:58:34',team:'東京工業大学'},{rank:39,time:'12:01:31',team:'高崎経済大学'},
      {rank:40,time:'12:02:37',team:'山梨大学'},{rank:41,time:'12:04:06',team:'埼玉大学'},{rank:42,time:'12:15:53',team:'文教大学'},
      {rank:43,time:'12:18:00',team:'首都大学東京'},{rank:null,time:'',team:'東京経済大学',status:'記録なし'}
    ],
    individuals: [
      {rank:1,time:'59:33',name:'座間 紅祢',team:'専修大学'},
      {rank:2,time:'59:48',name:'木原 真佐人',team:'中央学院大学',grade:2},
      {rank:3,time:'59:57',name:'駒野 亮太',team:'早稲田大学'},
      {rank:4,time:'59:59',name:'山口 祥太',team:'國學院大學'},
      {rank:5,time:'1:00:04',name:'長谷川 淳',team:'専修大学'},
      {rank:6,time:'1:00:11',name:'河野 隼人',team:'早稲田大学'},
      {rank:7,time:'1:00:17',name:'川南 友佑',team:'神奈川大学'},
      {rank:8,time:'1:00:18',name:'宮城 普邦',team:'早稲田大学'},
      {rank:9,time:'1:00:19',name:'尾籠 浩考',team:'明治大学'},
      {rank:10,time:'1:00:19',name:'豊田 崇',team:'神奈川大学'},
      {rank:21,time:'1:00:50',name:'松浦 貴之',team:'中央学院大学',grade:3},
      {rank:29,time:'1:01:04',name:'木村 聡寿',team:'中央学院大学',grade:3},
      {rank:39,time:'1:01:16',name:'大内 陽介',team:'中央学院大学',grade:3},
      {rank:41,time:'1:01:17',name:'篠藤 淳',team:'中央学院大学',grade:3},
      {rank:56,time:'1:01:30',name:'辻 茂樹',team:'中央学院大学',grade:2},
      {rank:77,time:'1:01:44',name:'土居 太',team:'中央学院大学',grade:2},
      {rank:79,time:'1:01:45',name:'天野 達也',team:'中央学院大学',grade:4},
      {rank:85,time:'1:01:49',name:'前澤 賢',team:'中央学院大学',grade:3},
      {rank:89,time:'1:01:51',name:'伊藤 達志',team:'中央学院大学',grade:3},
      {rank:116,time:'1:02:20',name:'池田 政輝',team:'中央学院大学',grade:3},
      {rank:133,time:'1:02:46',name:'木原 好隆',team:'中央学院大学',grade:3},
      {rank:280,time:'1:06:20',name:'笠原 慧',team:'東京工業大学'},
      {rank:329,time:'1:08:09',name:'中西 如人',team:'東京工業大学'},
      {rank:363,time:'1:09:39',name:'國友 正信',team:'東京工業大学'},
      {rank:401,time:'1:11:11',name:'吉延 毅朗',team:'東京工業大学'},
      {rank:408,time:'1:11:48',name:'大堀 哲央',team:'東京工業大学'},
      {rank:413,time:'1:12:07',name:'高橋 拓也',team:'東京工業大学'},
      {rank:426,time:'1:12:48',name:'深澤 峻',team:'東京工業大学'},
      {rank:460,time:'1:14:26',name:'三石 郁之',team:'東京工業大学'},
      {rank:477,time:'1:15:26',name:'宮下 康彦',team:'東京工業大学'},
      {rank:483,time:'1:16:40',name:'荒木 悠平',team:'東京工業大学'},
      {rank:489,time:'1:17:17',name:'正能 大輔',team:'東京工業大学'},
      {rank:492,time:'1:17:43',name:'森川 真年',team:'東京工業大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/83/yosen_sougouresult/',
    supplementalSources: [
      'https://www.ntv.co.jp/hakone/backnumber/83/yosen_kojinresult/',
      'https://www.cgu.ac.jp/club/sports/ekiden/record/record_hakone_semifinal.html',
      'https://www.titech-tfclub.net/schedule/s2006/'
    ],
    notes: '2006年10月21日開催。日本テレビ箱根駅伝公式で順位の付いた43校すべての最終総合順位・タイムを収録し、東京経済大学は公式どおり記録なしとして保持。7〜9位以下は当時の関東インカレポイントによるアドバンテージ反映後の最終総合タイム。個人成績は日テレ公式上位10名、中央学院大学公式の同校12名、東京工業大学公式の同校12名を照合して収録。中央学院大学は学年も公式確認済み。他大学の11位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2006'];
  if (!existing) { window.hakoneQualifierDB.years['2006'] = record; return; }
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