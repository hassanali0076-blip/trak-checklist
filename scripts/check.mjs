import {readFileSync,writeFileSync} from 'node:fs';
import {validateBoard,toMarkdown} from '../lib/board.mjs';
const b=validateBoard(JSON.parse(readFileSync(new URL('../checklist.json',import.meta.url),'utf8')));
const output=toMarkdown(b),path=new URL('../CHECKLIST.md',import.meta.url);
if(process.argv.includes('--write'))writeFileSync(path,output);
else if(readFileSync(path,'utf8')!==output)throw Error('CHECKLIST.md is stale. Run node scripts/check.mjs --write');
console.log('Valid public checklist: '+b.tasks.length+' items; Markdown matches.');

// The deployed release page reads its change count from the first H2 section.
// Keep readiness prose in the introduction, before the first group table.
const release=readFileSync(new URL('../STAGING_TO_PRODUCTION.md',import.meta.url),'utf8');
if(release.trim().split(/\r?\n/)[0] !== '# Staging changes awaiting production') {
  throw Error('Keep the deployed release reader title exactly: # Staging changes awaiting production');
}
const firstSection=release.split(/^## /m)[1] || '';
const rows=firstSection.split(/\r?\n/).filter(line=>line.trim().startsWith('|'));
if(rows.length<3 || rows.some(line=>line.trim().slice(1,-1).split('|').length!==2)) {
  throw Error('The first release-list section must contain the two-column change table. Keep readiness prose in the introduction.');
}
console.log('Release-list section order and table format match the deployed reader.');
