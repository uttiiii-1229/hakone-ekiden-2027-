import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import * as cheerio from 'cheerio';

const ROOT=process.cwd();
const manifestPath=path.join(ROOT,'data','university-meet-sources.json');
const outputPath=path.join(ROOT,'hakone2027-site 3','university-meet-results-auto.js');


const fw=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim();
function eligibleEvent(text){
  const t=fw(text).toLowerCase();
  // NANS pages often abbreviate race walking as 5000mW / 10000mW, so reject both words and suffix notation.
  if(/競歩|walking|walk|\b(?:5|10|20|30|50|5000|10000|20000|30000|50000)(?:km|m)\s*w\b|3000m\s*sc|3000m障害/.test(t)) return false;
  return /5000m|10000m|ハーフ|half marathon|20km|30km|15km|10km|5km/.test(t);
}
function absolutize(base,href){try{return new URL(href,base).href}catch{return null}}
function gradeFromName(name){const m=String(name||'').match(/\((M\d|D\d|\d)\)/i);return m?m[1]:''}
function cleanName(name){return fw(name).replace(/\((?:M\d|D\d|\d{1,2}|高\d)\)(?:\*?YC)?$/i,'').trim()}
function normalizeTeam(team){
  let t=fw(team).replace(/\s+/g,'');
  const suffixes=['北海道','青森','岩手','宮城','秋田','山形','福島','茨城','栃木','群馬','埼玉','千葉','東京','神奈川','新潟','富山','石川','福井','山梨','長野','岐阜','静岡','愛知','三重','滋賀','京都','大阪','兵庫','奈良','和歌山','鳥取','島根','岡山','広島','山口','徳島','香川','愛媛','高知','福岡','佐賀','長崎','熊本','大分','宮崎','鹿児島','沖縄','学連'];
  for(const s of suffixes){if(t.endsWith(s)){t=t.slice(0,-s.length);break;}}
  const aliases={'早大':'早稲田大学','慶大':'慶應義塾大学','順大':'順天堂大学','法大':'法政大学','明大':'明治大学','中大':'中央大学','駒大':'駒澤大学','日大':'日本大学','日体大':'日本体育大学','山梨学大':'山梨学院大学','東国大':'東京国際大学','中央学大':'中央学院大学','國學院大':'國學院大學','國學院大学':'國學院大學','立大':'立教大学','青学大':'青山学院大学','大東大':'大東文化大学','国士大':'国士舘大学','国武大':'国際武道大学','農大':'東京農業大学','東農大':'東京農業大学','日本薬大':'日本薬科大学','亜大':'亜細亜大学','京産大':'京都産業大学','大経大':'大阪経済大学','関学大':'関西学院大学','中大':'中央大学','明大':'明治大学','拓大':'拓殖大学','帝京科大':'帝京科学大学','帝科大':'帝京科学大学','城西国大':'城西国際大学','白鷗大':'白鴎大学','白鴎大':'白鴎大学','東経大':'東京経済大学','群大':'群馬大学','明学大':'明治学院大学','東大':'東京大学','青学大':'青山学院大学','駿大':'駿河台大学','専大':'専修大学','埼大':'埼玉大学','横国大':'横浜国立大学','東工大':'東京工業大学','防大':'防衛大学校','東京外大':'東京外国語大学','東女体大':'東京女子体育大学','日女体大':'日本女子体育大学','都留文大':'都留文科大学','流経大':'流通経済大学','高崎経大':'高崎経済大学','都市大':'東京都市大学','東学大':'東京学芸大学','尚美学大':'尚美学園大学','湘南工大':'湘南工科大学','東農工大':'東京農工大学','芝浦工大':'芝浦工業大学','平成国大':'平成国際大学','電通大':'電気通信大学','びわ学大':'びわこ学院大学','大院大':'大阪学院大学','明国医大':'明治国際医療大学','九産大':'九州産業大学'};
  if(aliases[t]) return aliases[t];
  if(t.endsWith('大')&&!t.endsWith('大学')) t+='学';
  return t;
}
async function fetchText(url){
  let lastErr;
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const controller=new AbortController();
      const timer=setTimeout(()=>controller.abort(),20000);
      const res=await fetch(url,{signal:controller.signal,headers:{
        'user-agent':'Mozilla/5.0 (compatible; UniversityEkidenDatabase/1.0)',
        'accept':'text/html,application/xhtml+xml'
      }});
      clearTimeout(timer);
      if(!res.ok) throw new Error(`${res.status} ${url}`);
      const buf=Buffer.from(await res.arrayBuffer());
      const head=buf.subarray(0,4096).toString('latin1');
      const headerCharset=(res.headers.get('content-type')||'').match(/charset=([^;]+)/i)?.[1]?.toLowerCase();
      const metaCharset=head.match(/charset\s*=\s*["']?([\w-]+)/i)?.[1]?.toLowerCase();
      const charset=headerCharset||metaCharset||'utf-8';
      const enc=/shift[_-]?jis|sjis|windows-31j|cp932/i.test(charset)?'shift_jis':'utf-8';
      return new TextDecoder(enc).decode(buf);
    }catch(err){
      lastErr=err;
      if(attempt<3) await new Promise(r=>setTimeout(r,1500*attempt));
    }
  }
  throw lastErr;
}
export function parseResultRows($,baseUrl=''){
  const glyphs={
    'https://www.kgrr.org/event/2022/kgrr/101ic/hp/9512.gif':'𠮷',
    'https://www.kgrr.org/event/2022/kgrr/101ic/hp/9532.gif':'柗',
    'https://www.kgrr.org/event/event/2026/kan-currywithgyoza/10060.gif':'榅',
    'https://www.kgrr.org/event/event/2025/104ic/9593.gif':'鷗'
  };
  $('td img').each((_,img)=>{
    const url=absolutize(baseUrl,$(img).attr('src'));
    const text=$(img).attr('alt')||glyphs[url];
    if(text) $(img).replaceWith(text);
  });
  const rows=[];
  const firstLine=cell=>{
    const copy=$(cell).clone();
    copy.find('br').replaceWith('\n');
    return fw(copy.text().split('\n').find(line=>line.trim())||'');
  };
  $('table').each((_,table)=>{
    let columns=null;
    $(table).children('tbody,thead,tfoot').children('tr').add($(table).children('tr')).each((__,tr)=>{
      const nodes=$(tr).children('th,td').get();
      const cells=nodes.map(td=>fw($(td).text()));
      const headings=nodes.flatMap(td=>Array(Number($(td).attr('colspan'))||1).fill(fw($(td).text())));
      if(headings.includes('順位') && headings.some(t=>/^(?:氏名|氏 名)$/.test(t))){
        // Column positions differ between track and road pages. Ignore lap tables.
        columns=headings.some(t=>/[0-9]\s*(?:km|m)(?:ラップ)?/i.test(t))?null:{
          rank:headings.indexOf('順位'),name:headings.findIndex(t=>/^(?:氏名|氏 名)$/.test(t)),
          team:headings.indexOf('所属'),record:headings.indexOf('記録'),
          comment:headings.findIndex(t=>/^(?:コメント|ｺﾒﾝﾄ)$/.test(t))
        };
        if(columns && Object.values(columns).slice(0,4).some(i=>i<0)) columns=null;
        return;
      }
      if(!columns) return;
      const at=key=>nodes[columns[key]]?firstLine(nodes[columns[key]]):'';
      if($(nodes[columns.name]).find('img').length||$(nodes[columns.team]).find('img').length) throw new Error('Unmapped result glyph: '+baseUrl);
      const rawName=at('name');
      const name=cleanName(rawName);
      const teamCell=$(nodes[columns.team]).clone();
      teamCell.find('br').replaceWith('\n');
      const teamLines=teamCell.text().split('\n').map(fw).filter(Boolean);
      const team=normalizeTeam(teamLines.find(t=>normalizeTeam(t))||'');
      const record=fw(cells[columns.record]).replace(/\s+(?=\[)/g,'');
      let comment=columns.comment>=0?cells[columns.comment]||'':'';
      if(/\*?YC$/.test(rawName)&&!comment.includes('YC')) comment=[comment,'YC'].filter(Boolean).join(' / ');
      if(!name||!team||!/^(?:\d+|—)?$/.test(at('rank'))) return;
      if(!/^(?:\d{1,2}:)?\d{1,2}:\d{2}(?:\.\d+)?(?:\[\d{1,2}:\d{2}\.\d+\])?$/.test(record) && !/DNS|DNF|DQ|NM/.test(comment)) return;
      rows.push([at('rank')||'—',name,team,gradeFromName(rawName),record||'—',comment]);
    });
  });
  const seen=new Set();
  return rows.filter(r=>{const k=r.join('|');if(seen.has(k))return false;seen.add(k);return true});
}
async function parseNansWeb(source){
  const indexHtml=await fetchText(source.indexUrl);
  const $=cheerio.load(indexHtml);
  const links=new Map();
  $('a[href]').each((_,a)=>{
    const href=$(a).attr('href');
    if(!href||!/(?:rel|REL)\d+\.html?/i.test(href)) return;
    const tr=$(a).closest('tr');
    const rowText=fw(tr.text());
    const linkText=fw($(a).text());
    const context=fw(`${rowText} ${linkText}`);
    if(!eligibleEvent(context)) return;
    if(source.includeGenders?.length && !source.includeGenders.some(g=>context.includes(g))) return;
    const url=absolutize(source.indexUrl,href);
    if(url) links.set(url,context);
  });
  console.log(source.id,'candidate links',links.size,[...links.entries()].slice(0,3));
  const events={};
  for(const [url,indexText] of links){
    try{
      const html=await fetchText(url);
      const $$=cheerio.load(html);
      const title=fw($$('h1').first().text()||$$('h2').first().text()||$$('title').text()||indexText);
      if(!eligibleEvent(`${title} ${indexText}`)) continue;
      const rows=parseResultRows($$,url);
      if(rows.length) events[title||indexText]={url,rows};
    }catch(err){console.warn('skip result',url,err.message)}
  }
  return {id:source.id,year:source.year,name:source.name,events};
}

export function mergeMeetResults(previous={},fetched={}){
 const events=Object.fromEntries(Object.entries(fetched.events||{}).filter(([,event])=>Array.isArray(event.rows)&&event.rows.length));
 if(!Object.keys(events).length) return previous;
 return {...previous,...fetched,events:{...previous.events,...events}};
}
export async function main(){
const sources=JSON.parse(await fs.readFile(manifestPath,'utf8'));
// A failed source or an empty event must never erase results already collected.
let existing={meets:{}};
try{
 const js=await fs.readFile(outputPath,'utf8');
 existing=JSON.parse(js.slice(js.indexOf('{')).trim().replace(/;$/,''));
}catch(error){if(error.code!=='ENOENT') throw error;}
const db={...existing,generatedAt:new Date().toISOString(),rule:'distance > 3000m; running events only; race walking and 3000mSC excluded',meets:{...existing.meets}};
let updatedEvents=0;
for(const source of sources){
 try{
  if(source.adapter!=='iuau-web-results'&&source.adapter!=='kgrr-web-results') continue;
  const fetched=await parseNansWeb(source);
  if(!Object.keys(fetched.events).length) continue;
  const previous=db.meets[source.id]||{};
  db.meets[source.id]=mergeMeetResults(previous,fetched);
  updatedEvents+=Object.keys(fetched.events).length;
 }catch(err){console.error('source failed; preserving previous results',source.id,err.message);}
}
if(!updatedEvents){console.error('No usable meet results fetched; preserving existing DB.');process.exitCode=2;return;}
const js='// Auto-generated by scripts/update-university-meets.mjs\nwindow.universityMeetResultsAutoDB = '+JSON.stringify(db,null,2)+';\n';
await fs.writeFile(outputPath,js,'utf8');
console.log('wrote',outputPath,Object.keys(db.meets).length,'meets',updatedEvents,'updated events');
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) await main();
