// Historical supplement: 2012 (第89回) 箱根駅伝予選会
// Team results: 日本テレビ 箱根駅伝公式 第89回予選会結果.
// Individual results: 関東学生陸上競技連盟 公式個人記録表.
(() => {
  if (!window.hakoneQualifierDB) window.hakoneQualifierDB = { years: {} };
  if (!window.hakoneQualifierDB.years) window.hakoneQualifierDB.years = {};
  const record = {
    year: 2012, eventYear: 2012, hakoneEdition: 89,
    teams: [
      {rank:1,time:'10:04:47',team:'日本体育大学'},
      {rank:2,time:'10:08:05',team:'帝京大学'},
      {rank:3,time:'10:09:54',team:'中央学院大学'},
      {rank:4,time:'10:10:13',team:'大東文化大学'},
      {rank:5,time:'10:10:42',team:'上武大学'},
      {rank:6,time:'10:11:27',team:'神奈川大学'},
      {rank:7,time:'10:08:55',team:'日本大学'},
      {rank:8,time:'10:10:37',team:'法政大学'},
      {rank:9,time:'10:10:41',team:'東京農業大学'},
      {rank:10,time:'10:14:23',team:'拓殖大学'},
      {rank:11,time:'10:16:34',team:'専修大学'},
      {rank:12,time:'10:16:38',team:'東海大学'},
      {rank:13,time:'10:17:36',team:'国士舘大学'},
      {rank:14,time:'10:22:43',team:'創価大学'},
      {rank:15,time:'10:23:22',team:'亜細亜大学'},
      {rank:16,time:'10:26:23',team:'流通経済大学'},
      {rank:17,time:'10:27:27',team:'平成国際大学'},
      {rank:18,time:'10:36:47',team:'麗澤大学'},
      {rank:19,time:'10:36:48',team:'関東学院大学'},
      {rank:20,time:'10:39:32',team:'松蔭大学'},
      {rank:21,time:'10:40:24',team:'東京国際大学'},
      {rank:22,time:'10:42:18',team:'武蔵野学院大学'},
      {rank:23,time:'10:47:36',team:'東京経済大学'},
      {rank:24,time:'10:55:01',team:'筑波大学'},
      {rank:25,time:'10:56:15',team:'駿河台大学'},
      {rank:26,time:'10:57:02',team:'国際武道大学'},
      {rank:27,time:'11:06:36',team:'東京学芸大学'},
      {rank:28,time:'11:09:09',team:'慶應義塾大学'},
      {rank:29,time:'11:14:19',team:'東京情報大学'},
      {rank:30,time:'11:16:53',team:'東京大学'},
      {rank:31,time:'11:21:14',team:'立教大学'},
      {rank:32,time:'11:29:10',team:'学習院大学'},
      {rank:33,time:'11:31:09',team:'横浜国立大学'},
      {rank:34,time:'11:32:54',team:'東京工業大学'},
      {rank:35,time:'11:33:58',team:'東京大学大学院'},
      {rank:36,time:'11:35:01',team:'首都大学東京'},
      {rank:37,time:'11:35:09',team:'東京理科大学'},
      {rank:38,time:'11:35:51',team:'防衛大学校'},
      {rank:39,time:'11:40:59',team:'高崎経済大学'},
      {rank:40,time:'11:41:25',team:'芝浦工業大学'},
      {rank:41,time:'11:47:38',team:'埼玉大学'},
      {rank:42,time:'11:53:50',team:'千葉大学'},
      {rank:43,time:'11:55:27',team:'一橋大学'},
      {rank:44,time:'12:07:09',team:'山梨大学'},
      {rank:45,time:'12:09:51',team:'北里大学'}
    ],
    individuals: [
      {rank:1,time:'0:57:47',name:'ガンドゥ・ベンジャミン',grade:'4',team:'日本大学'},
      {rank:2,time:'0:59:07',name:'ダンカン・モゼ',grade:'3',team:'拓殖大学'},
      {rank:3,time:'0:59:09',name:'藤井 啓介',grade:'4',team:'中央学院大学'},
      {rank:4,time:'0:59:40',name:'蛯名 聡勝',grade:'3',team:'帝京大学'},
      {rank:5,time:'0:59:43',name:'本田 匠',grade:'3',team:'日本体育大学'},
      {rank:6,time:'0:59:55',name:'矢野 圭吾',grade:'3',team:'日本体育大学'},
      {rank:7,time:'0:59:59',name:'山川 雄大',grade:'4',team:'帝京大学'},
      {rank:8,time:'1:00:00',name:'室田 祐司',grade:'4',team:'中央学院大学'},
      {rank:9,time:'1:00:02',name:'竹内 竜真',grade:'2',team:'東京農業大学'},
      {rank:10,time:'1:00:02',name:'早川 翼',grade:'4',team:'東海大学'},
      {rank:11,time:'1:00:04',name:'木村 翔太',grade:'4',team:'東京農業大学'},
      {rank:12,time:'1:00:04',name:'大沼 恭教',grade:'4',team:'亜細亜大学'},
      {rank:13,time:'1:00:07',name:'渡辺 力将',grade:'4',team:'上武大学'},
      {rank:14,time:'1:00:11',name:'福士 優太朗',grade:'4',team:'日本体育大学'},
      {rank:15,time:'1:00:20',name:'熊崎 健人',grade:'2',team:'帝京大学'},
      {rank:16,time:'1:00:22',name:'早川 昇平',grade:'2',team:'帝京大学'},
      {rank:17,time:'1:00:24',name:'内藤 寛人',grade:'4',team:'東京農業大学'},
      {rank:18,time:'1:00:25',name:'西池 和人',grade:'2',team:'法政大学'},
      {rank:19,time:'1:00:27',name:'勝亦 祐太',grade:'1',team:'日本体育大学'},
      {rank:20,time:'1:00:29',name:'大橋 秀星',grade:'4',team:'専修大学'},
      {rank:21,time:'1:00:30',name:'田中 瑞穂',grade:'3',team:'中央学院大学'},
      {rank:22,time:'1:00:30',name:'佐藤 舜',grade:'2',team:'上武大学'},
      {rank:23,time:'1:00:31',name:'市田 孝',grade:'2',team:'大東文化大学'},
      {rank:24,time:'1:00:31',name:'岡本 雄大',grade:'3',team:'中央学院大学'},
      {rank:25,time:'1:00:33',name:'佐藤 佑輔',grade:'4',team:'日本大学'},
      {rank:26,time:'1:00:34',name:'氏原 健介',grade:'4',team:'上武大学'},
      {rank:27,time:'1:00:35',name:'ルウル・ゲブレシラシェ',grade:'1',team:'東京国際大学'},
      {rank:28,time:'1:00:35',name:'片川 準二',grade:'3',team:'大東文化大学'},
      {rank:29,time:'1:00:35',name:'山口 修平',grade:'1',team:'創価大学'},
      {rank:30,time:'1:00:36',name:'高柳 祐也',grade:'4',team:'日本体育大学'},
      {rank:31,time:'1:00:36',name:'菊池 貴文',grade:'3',team:'国士舘大学'},
      {rank:32,time:'1:00:37',name:'甲斐 翔太',grade:'3',team:'日本体育大学'},
      {rank:33,time:'1:00:37',name:'山中 秀仁',grade:'1',team:'日本体育大学'},
      {rank:34,time:'1:00:38',name:'倉田 翔平',grade:'2',team:'上武大学'},
      {rank:35,time:'1:00:39',name:'服部 翔大',grade:'3',team:'日本体育大学'},
      {rank:36,time:'1:00:40',name:'小山 司',grade:'3',team:'帝京大学'},
      {rank:37,time:'1:00:40',name:'千葉 一慶',grade:'3',team:'帝京大学'},
      {rank:38,time:'1:00:40',name:'稲田 康希',grade:'4',team:'大東文化大学'},
      {rank:39,time:'1:00:40',name:'柿原 聖哉',grade:'2',team:'神奈川大学'},
      {rank:40,time:'1:00:41',name:'斉藤 翔太',grade:'2',team:'専修大学'},
      {rank:41,time:'1:00:44',name:'関口 頌悟',grade:'2',team:'法政大学'},
      {rank:42,time:'1:00:47',name:'田井 慎一郎',grade:'3',team:'法政大学'},
      {rank:43,time:'1:00:48',name:'吉村 大輝',grade:'2',team:'流通経済大学'},
      {rank:44,time:'1:00:49',name:'山岸 宏貴',grade:'3',team:'上武大学'},
      {rank:45,time:'1:00:50',name:'西山 凌平',grade:'1',team:'神奈川大学'},
      {rank:46,time:'1:00:50',name:'鈴木 駿',grade:'4',team:'神奈川大学'},
      {rank:47,time:'1:00:52',name:'佐々木 天太',grade:'2',team:'上武大学'},
      {rank:48,time:'1:00:53',name:'赤松 宏樹',grade:'2',team:'神奈川大学'},
      {rank:49,time:'1:00:54',name:'髙橋 裕太',grade:'1',team:'帝京大学'},
      {rank:50,time:'1:00:54',name:'大崎 翔也',grade:'3',team:'大東文化大学'}
    ],
    source: 'https://www.ntv.co.jp/hakone/backnumber/89/yosen_sougouresult/',
    supplementalSources: [
      'https://www.hakone-ekiden.jp/topics/66a0d5dc0038b37f5bb3a363ebcd175dc04e7b15.html',
      'https://www.kgrr.org/event/2012/kgrr/89_yosenkai/kojin_result.pdf'
    ],
    notes: '日本テレビ箱根駅伝公式アーカイブで全45校の最終総合順位・タイムを収録。7〜9位は当時の関東インカレポイントによるアドバンテージ適用後の公式最終総合タイム。個人成績は関東学連公式記録表の1〜50位を、順位・記録・大学・学年付きで先行収録。51位以下は継続補完対象。'
  };
  const existing = window.hakoneQualifierDB.years['2012'];
  if (!existing) { window.hakoneQualifierDB.years['2012'] = record; return; }
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