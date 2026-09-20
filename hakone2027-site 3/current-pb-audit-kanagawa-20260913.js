// Current-athlete PB audit: Kanagawa University — 2026-09-13
// Source: Kanagawa University JINDAI Ekiden official 2026 athlete profiles (grades 1-4).
// Values below are only those explicitly shown as "best time" on the official profiles.
// Missing values are never inferred. Existing faster verified marks are preserved.
(() => {
  const team='神奈川大学';
  const audits={
    '大岩 蓮':['14:11.33','29:18.00','1:03:44'],'滝本 朗史':['13:56.56','28:49.40','1:03:34'],'新妻 玲旺':['13:58.80','28:51.98','1:02:16'],'花井 創':['14:21.05','28:51.22','1:01:41'],'平川 瑠星':['14:08.27','28:46.61','1:05:16'],'三原 涼雅':['14:23.27','28:53.12','1:02:40'],'森 稜真':['14:24.85','30:00.44','1:03:30'],'山本 琉楓':['14:08.43','29:29.80','1:04:09'],
    '淺田 龍':['14:35.12','31:33.19','—'],'安部 爽仁朗':['14:36.43','30:57.19','1:05:49'],'上田 航大':['14:18.90','28:43.93','1:03:11'],'遠藤 優裕':['14:20.93','29:38.20','1:04:18'],'太田 宗一郎':['14:25.89','31:57.09','1:04:54'],'小林 亮太':['14:12.45','—','—'],'近藤 大智':['14:11.67','29:24.73','1:02:50'],'野間 黎矢':['14:17.62','29:42.55','1:05:55'],'柳生 琥珀':['14:52.17','32:19.22','1:04:14'],
    '牛嶋 勇斗':['14:18.91','29:34.91','1:13:06'],'金山 隆斗':['14:20.11','29:51.06','1:04:30'],'木村 駿太':['14:35.62','—','1:04:00'],'佐伯 遥大':['14:30.78','30:24.15','—'],'佐藤 輝':['14:23.17','—','1:08:49'],'清水 陽永':['14:40.89','—','1:06:33'],
    '梅木 新太':['14:24.02','—','—'],'小田垣 茉周':['14:18.10','—','—'],'北村 海智':['14:06.56','—','—'],'小林 歩夢':['14:30.99','—','—'],'佐藤 柊斗':['14:23.85','—','—'],'鈴木 富大':['14:30.90','—','—'],'髙橋 功平':['14:23.13','—','—'],'豊川 滉大':['14:23.54','—','—'],'新妻 昂己':['14:04.20','—','—'],'藤田 慶太':['14:19.95','—','—'],'山崎 碧葉':['14:32.71','—','—'],'山崎 寿和':['14:35.25','—','—'],'由井 蓮':['14:36.95','—','—']
  };
  const grades={'大岩 蓮':'4','滝本 朗史':'4','新妻 玲旺':'4','花井 創':'4','平川 瑠星':'4','三原 涼雅':'4','森 稜真':'4','山本 琉楓':'4','淺田 龍':'3','安部 爽仁朗':'3','上田 航大':'3','遠藤 優裕':'3','太田 宗一郎':'3','小林 亮太':'3','近藤 大智':'3','野間 黎矢':'3','柳生 琥珀':'3','牛嶋 勇斗':'2','金山 隆斗':'2','木村 駿太':'2','佐伯 遥大':'2','佐藤 輝':'2','清水 陽永':'2','梅木 新太':'1','小田垣 茉周':'1','北村 海智':'1','小林 歩夢':'1','佐藤 柊斗':'1','鈴木 富大':'1','髙橋 功平':'1','豊川 滉大':'1','新妻 昂己':'1','藤田 慶太':'1','山崎 碧葉':'1','山崎 寿和':'1','由井 蓮':'1'};
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{}; verified[team]=Object.assign(verified[team]||{},audits);
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);if(p.some(x=>!Number.isFinite(x)))return null;if(p.length===3)return p[0]*3600+p[1]*60+p[2];if(p.length===2)return p[0]*60+p[1];return null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);if(av==null)return b||'—';if(bv==null)return a||'—';return bv<av?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){const rows=(expandedTopAthletes2027[team]||[]).map(r=>r.slice());const byName=new Map(rows.map(r=>[norm(r[0]),r]));Object.entries(audits).forEach(([name,v])=>{const key=norm(name);let row=byName.get(key);if(!row){row=[name,grades[name]||'','—','—','—'];rows.push(row);byName.set(key,row);}if(!row[1])row[1]=grades[name]||'';row[2]=better(row[2],v[0]);row[3]=better(row[3],v[1]);row[4]=better(row[4],v[2]);});expandedTopAthletes2027[team]=rows;}
  const resolver=window.currentAthletePbResolver;if(!resolver?.currentRows||resolver.__kanagawaOfficialAudit20260913)return;const base=resolver.currentRows.bind(resolver);resolver.currentRows=function(currentTeam){const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));if(norm(currentTeam)!==norm(team))return rows;const byName=new Map(rows.map(r=>[norm(r.name),r]));Object.entries(audits).forEach(([name,v])=>{const key=norm(name);const row=byName.get(key)||{name,grade:grades[name]||'',pb5000:'—',pb10000:'—',half:'—',sources:[]};row.grade=grades[name]||row.grade||'';row.pb5000=better(row.pb5000,v[0]);row.pb10000=better(row.pb10000,v[1]);row.half=better(row.half,v[2]);if(!row.sources.includes('Kanagawa University official 2026 athlete profile'))row.sources.push('Kanagawa University official 2026 athlete profile');if(!byName.has(key)){rows.push(row);byName.set(key,row);}});return rows.sort((a,b)=>{const a10=resolver.timeSeconds(a.pb10000),b10=resolver.timeSeconds(b.pb10000);const a5=resolver.timeSeconds(a.pb5000),b5=resolver.timeSeconds(b.pb5000);return(a10??Infinity)-(b10??Infinity)||(a5??Infinity)-(b5??Infinity)||a.name.localeCompare(b.name,'ja');});};resolver.__kanagawaOfficialAudit20260913=true;
})();

// University of Tsukuba official result supplement — 2026-09-21.
// Source: University of Tsukuba Track & Field official 2026 Kanto IC day-4 result report (2026-05-24), explicitly marked PB.
(() => {
  const team='筑波大学', name='小林晴琉', mark='14:06.50';
  const verified=window.verifiedCurrentPb2026=window.verifiedCurrentPb2026||{};verified[team]=Object.assign(verified[team]||{},{[name]:[mark,'—','—']});
  const norm=s=>String(s||'').normalize('NFKC').replace(/[\s　]+/g,'').trim();
  const sec=v=>{const s=String(v||'').trim();if(!s||s==='—')return null;const p=s.split(':').map(Number);return p.length===2&&p.every(Number.isFinite)?p[0]*60+p[1]:null;};
  const better=(a,b)=>{const av=sec(a),bv=sec(b);return bv!=null&&(av==null||bv<av)?b:a;};
  if(typeof expandedTopAthletes2027!=='undefined'){const row=(expandedTopAthletes2027[team]||[]).find(r=>norm(r[0])===norm(name));if(row)row[2]=better(row[2],mark);}
  const resolver=window.currentAthletePbResolver;if(!resolver?.currentRows||resolver.__tsukubaOfficialAudit20260921)return;const base=resolver.currentRows.bind(resolver);resolver.currentRows=function(currentTeam){const rows=base(currentTeam).map(r=>({...r,sources:Array.isArray(r.sources)?r.sources.slice():[]}));if(norm(currentTeam)!==norm(team))return rows;const row=rows.find(r=>norm(r.name)===norm(name));if(row){row.pb5000=better(row.pb5000,mark);if(!row.sources.includes('University of Tsukuba official 2026 Kanto IC result'))row.sources.push('University of Tsukuba official 2026 Kanto IC result');}return rows;};resolver.__tsukubaOfficialAudit20260921=true;
})();
