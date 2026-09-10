// Hakone Ekiden Kanakuri Shiso Cup recipients (user-supplied dataset, updated 2026-09-10)
(() => {
  const data={
    award:{name:'金栗四三杯',english_name:'Kanakuri Shiso Cup',category:'最優秀選手賞',established:2004,first_edition:80,description:'箱根駅伝で特に優れた活躍をした選手に贈られる最優秀選手賞'},
    last_updated:'2026-09-10',
    recipients:[
      [80,2004,'鐘ケ江幸治','筑波大学','日本学連選抜',4,5,'1:12:21',1,false,false,false,1,''],
      [81,2005,'今井正人','順天堂大学','順天堂大学',2,5,'1:09:12',1,true,false,false,1,''],
      [82,2006,'今井正人','順天堂大学','順天堂大学',3,5,'1:18:30',1,true,false,false,2,''],
      [83,2007,'佐藤悠基','東海大学','東海大学',2,1,'1:01:06',1,true,false,true,1,''],
      [83,2007,'今井正人','順天堂大学','順天堂大学',4,5,'1:18:05',1,true,true,true,3,''],
      [84,2008,'篠藤淳','中央学院大学','中央学院大学',4,9,'1:08:01',1,true,false,false,1,''],
      [85,2009,'柏原竜二','東洋大学','東洋大学',1,5,'1:17:18',1,true,true,false,1,''],
      [86,2010,'柏原竜二','東洋大学','東洋大学',2,5,'1:17:08',1,true,true,false,2,''],
      [87,2011,'村澤明伸','東海大学','東海大学',2,2,'1:06:52',1,false,false,false,1,'2区で17人抜き'],
      [88,2012,'柏原竜二','東洋大学','東洋大学',4,5,'1:16:39',1,true,true,false,3,''],
      [89,2013,'服部翔大','日本体育大学','日本体育大学',3,5,'1:20:35',1,false,true,false,1,''],
      [90,2014,'大津顕杜','東洋大学','東洋大学',4,10,'1:09:08',1,false,true,false,1,''],
      [91,2015,'神野大地','青山学院大学','青山学院大学',3,5,'1:16:15',1,true,true,false,1,''],
      [92,2016,'久保田和真','青山学院大学','青山学院大学',4,1,'1:01:22',1,false,true,false,1,''],
      [93,2017,'秋山清仁','日本体育大学','日本体育大学',4,6,'0:58:01',1,true,false,false,1,''],
      [94,2018,'林奎介','青山学院大学','青山学院大学',3,7,'1:02:16',1,true,true,false,1,''],
      [95,2019,'小松陽平','東海大学','東海大学',3,8,'1:03:49',1,true,true,false,1,''],
      [96,2020,'相澤晃','東洋大学','東洋大学',4,2,'1:05:57',1,true,false,false,1,''],
      [97,2021,'イェゴン・ヴィンセント','東京国際大学','東京国際大学',2,2,'1:05:49',1,true,false,false,1,'2区で14人抜き'],
      [98,2022,'吉居大和','中央大学','中央大学',2,1,'1:00:40',1,true,false,true,1,''],
      [98,2022,'中村唯翔','青山学院大学','青山学院大学',3,9,'1:07:15',1,true,true,true,1,''],
      [99,2023,'イェゴン・ヴィンセント','東京国際大学','東京国際大学',4,4,'1:00:00',1,true,false,false,2,'4区で8人抜き'],
      [100,2024,'山本唯翔','城西大学','城西大学',4,5,'1:09:14',1,true,false,false,1,''],
      [101,2025,'野村昭夢','青山学院大学','青山学院大学',4,6,'0:56:47',1,true,true,false,1,'第101回から新設された大会MVPも同時受賞'],
      [102,2026,'黒田朝日','青山学院大学','青山学院大学',4,5,'1:07:16',1,true,true,false,1,'5区区間新。大会MVPも同時受賞']
    ].map(r=>({edition:r[0],year:r[1],athlete:r[2],university:r[3],team:r[4],grade:r[5],section:r[6],section_time:r[7],section_rank:r[8],section_record:r[9],overall_champion_team:r[10],co_recipient:r[11],career_award_number:r[12],note:r[13]||''}))
  };
  function badges(r){const out=[];if(r.section_record)out.push('<span class="kanakuri-badge record">区間記録</span>');if(r.overall_champion_team)out.push('<span class="kanakuri-badge champion">総合優勝</span>');if(r.co_recipient)out.push('<span class="kanakuri-badge co">同時受賞</span>');if(r.career_award_number>1)out.push(`<span class="kanakuri-badge repeat">通算${r.career_award_number}回目</span>`);return out.join('');}
  function row(r){return `<tr><td data-label="大会"><strong>第${r.edition}回</strong><small>${r.year}</small></td><td data-label="選手"><strong>${r.athlete}</strong>${badges(r)}</td><td data-label="所属">${r.university}${r.team!==r.university?`<small>出場: ${r.team}</small>`:''}</td><td data-label="学年">${r.grade}年</td><td data-label="区間">${r.section}区</td><td data-label="区間タイム"><strong class="kanakuri-time">${r.section_time}</strong><small>区間${r.section_rank}位</small></td><td data-label="備考">${r.note||'—'}</td></tr>`;}
  function template(){const uniqueAthletes=new Set(data.recipients.map(r=>r.athlete)).size;const recordCount=data.recipients.filter(r=>r.section_record).length;return `<section class="container page kanakuri-page"><div class="page-header"><div class="eyebrow">TOPICS / HAKONE EKIDEN</div><h1>箱根駅伝 金栗四三杯獲得者</h1><p>${data.award.description}</p></div><div class="kanakuri-summary"><div><span>創設</span><strong>${data.award.established}年</strong><small>第${data.award.first_edition}回大会</small></div><div><span>収録受賞</span><strong>${data.recipients.length}件</strong><small>${uniqueAthletes}選手</small></div><div><span>区間記録</span><strong>${recordCount}件</strong><small>受賞時に区間記録</small></div></div><article class="data-card kanakuri-card"><div class="kanakuri-card-head"><div><span class="topic-kicker">KANAKURI SHISO CUP</span><h2>歴代受賞者一覧</h2></div><span class="topic-badge">2004–2026</span></div><p class="muted">年次タブには分けず、第80回（2004年）から第102回（2026年）までを一続きの一覧で掲載しています。同一年に複数受賞者がいる場合もそれぞれ表示します。</p><div class="table-wrap kanakuri-table-wrap"><table class="kanakuri-table"><thead><tr><th>大会</th><th>選手</th><th>所属</th><th>学年</th><th>区間</th><th>区間タイム</th><th>備考</th></tr></thead><tbody>${data.recipients.map(row).join('')}</tbody></table></div></article></section>`;}
  window.kanakuriShisoCupData=data;window.kanakuriShisoCupPage={template};if(typeof templates!=='undefined')templates.kanakuri=template;if(location.hash.replace('#','')==='kanakuri'&&typeof render==='function')render('kanakuri');
})();
