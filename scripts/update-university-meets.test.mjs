import test from 'node:test';
import assert from 'node:assert/strict';
import * as cheerio from 'cheerio';
import {parseResultRows,mergeMeetResults} from './update-university-meets.mjs';

test('road results use named columns and exclude split tables',()=>{
 const $=cheerio.load(`<table><tr><th>順位</th><th>No.</th><th>氏名</th><th>所属</th><th>記録</th><th>ｺﾒﾝﾄ</th></tr>
 <tr><td>2</td><td>255</td><td>工藤　慎作 (3)<br>ｸﾄﾞｳ ｼﾝｻｸ</td><td>早大<br>千　葉</td><td>1:04:16</td><td></td></tr>
 <tr><td></td><td>470</td><td>薄根　大河 (3)<br>ｳｽﾈ ﾀｲｶﾞ</td><td>東洋大<br>栃木</td><td></td><td>DNF</td></tr></table>
 <table><tr><th>順位</th><th>No.</th><th>氏名</th><th>所属</th><th>5km</th><th>記録</th></tr>
 <tr><td>2</td><td>255</td><td>工藤　慎作 (3)</td><td>早大</td><td>14:34</td><td>1:04:16</td></tr></table>`);
 assert.deepEqual(parseResultRows($),[
  ['2','工藤 慎作','早稲田大学','3','1:04:16',''],
  ['—','薄根 大河','東洋大学','3','—','DNF']]);
});
test('track results support ORD/kana columns and ignore lap headings',()=>{
 const $=cheerio.load(`<table><tr><th>順位</th><th>ORD</th><th>No.</th><th>氏名</th><th>ﾌﾘｶﾞﾅ</th><th>所属</th><th>記録</th><th>ｺﾒﾝﾄ</th></tr>
 <tr><td>1</td><td>8</td><td>1</td><td>山口　智規 (4)</td><td>ﾔﾏｸﾞﾁ ﾄﾓｷ</td><td>千葉<br>早大</td><td>13:40.06</td><td>PB</td></tr></table>
 <table><tr><th>No.</th><th>1000m</th><th>2000m</th><th>3000m</th><th>4000m</th><th>5000m</th></tr>
 <tr><td>239</td><td>2:48</td><td>5:40</td><td>8:29</td><td>11:20</td><td>14:10</td></tr></table>`);
 assert.deepEqual(parseResultRows($),[['1','山口 智規','早稲田大学','4','13:40.06','PB']]);
});
test('verified character images remain part of the name; unknown glyphs fail closed',()=>{
 const markup=src=>`<table><tr><th>順位</th><th>No.</th><th>氏名</th><th>所属</th><th>記録</th><th>ｺﾒﾝﾄ</th></tr><tr><td>1</td><td>1</td><td><img src="${src}">山　一颯 (2)<br>ｽｷﾞﾔﾏ ｲﾌﾞｷ</td><td>青学大</td><td>1:03:00</td><td></td></tr></table>`;
 const url='https://www.kgrr.org/event/event/2026/kan-currywithgyoza/rel248.html';
 assert.equal(parseResultRows(cheerio.load(markup('10060.gif')),url)[0][1],'榅山 一颯');
 assert.throws(()=>parseResultRows(cheerio.load(markup('unknown.gif')),url),/Unmapped/);
});
test('empty fetches preserve stored events and manually imported meets',()=>{
 const previous={id:'a',sourceSha256:'verified',events:{half:{rows:[['1','工藤']]},track:{rows:[['1','山口']]}}};
 const merged=mergeMeetResults(previous,{id:'a',events:{half:{rows:[]},track:{rows:[['2','山口']]}}});
 assert.deepEqual(merged.events.half,previous.events.half);
 assert.deepEqual(merged.events.track.rows,[['2','山口']]);
 assert.equal(merged.sourceSha256,'verified');
 assert.equal(mergeMeetResults(previous,{events:{}}),previous);
});
test('colspan name headers and photo-finish precision do not shift team/time columns',()=>{
 const $=cheerio.load(`<table><tr><th>順位</th><th>ORD.</th><th>No.</th><th colspan="2">氏名</th><th>所属</th><th>記録</th><th>ｺﾒﾝﾄ</th></tr><tr><td>17</td><td>1</td><td>324</td><td>山田 依茉 (2)</td><td>ﾔﾏﾀﾞ ｴﾏ</td><td>帝京科大<br>広島</td><td>16:41.08<br>[16:41.072]</td><td>PB</td></tr></table>`);
 assert.deepEqual(parseResultRows($),[['17','山田 依茉','帝京科学大学','2','16:41.08[16:41.072]','PB']]);
});
