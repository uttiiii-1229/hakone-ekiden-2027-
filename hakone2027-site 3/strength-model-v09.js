// 2026-11-01: Hakone forecast refreshed after All-Japan, qualifier and recent meets.
// Long-distance, retained Hakone strength, squad depth, recent racing and hills are scored separately.
const strengthModelAfterAllJapan20261101=hakoneScoreRows20261101.map(r=>({name:r.team,score:r.parts.reduce((a,b)=>a+b,0),note:r.note,tags:['11月1日更新','箱根距離で評価','全日本・記録会反映']}));
teams.splice(0,teams.length,...strengthModelAfterAllJapan20261101);
rankList = function rankList(limit=teams.length){return teams.slice(0,limit).map((t,i)=>{const v=(typeof teamVisuals2027!=='undefined'&&teamVisuals2027[t.name])||{gauge:'#2878c8'};return `<div class="rank-item" data-team="${t.name}"><div class="rank-number">${i+1}</div><div><div class="team-name-with-icon">${typeof teamIconHtml==='function'?teamIconHtml(t.name):''}<span class="team-name">${t.name}</span></div><div class="bar"><span style="width:${t.score}%;background-color:${v.gauge};background-image:none;"></span></div></div><div class="percent strength-score">${t.score.toFixed(1)}<small>点</small></div></div>`;}).join('');};
if(typeof templates!=='undefined')templates.prediction=predictionTemplate;
const renderBeforeAllJapanRefresh20261101=render;
render=function(route='home'){renderBeforeAllJapanRefresh20261101(route);if(route==='home'){const label=document.querySelector('.eyebrow');if(label)label.textContent='Data update 2026.11.01';}};
render(location.hash.replace('#','')||'home');
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{const route=location.hash.replace('#','')||'home';if(['home','prediction','zennihon-prediction'].includes(route))render(route);},{once:true});

