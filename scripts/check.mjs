import {readFileSync,writeFileSync} from 'node:fs';
import {validateBoard,toMarkdown} from '../lib/board.mjs';
const b=validateBoard(JSON.parse(readFileSync(new URL('../checklist.json',import.meta.url),'utf8')));
const output=toMarkdown(b),path=new URL('../CHECKLIST.md',import.meta.url);
if(process.argv.includes('--write'))writeFileSync(path,output);
else if(readFileSync(path,'utf8')!==output)throw Error('CHECKLIST.md is stale. Run node scripts/check.mjs --write');
console.log('Valid public checklist: '+b.tasks.length+' items; Markdown matches.');
