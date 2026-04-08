import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, '..');
const srcDir = resolve(rootDir, 'src');
const outDir = resolve(rootDir, 'out');

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

await copyFile(resolve(rootDir, 'CNAME'), resolve(outDir, 'CNAME'));
await copyFile(resolve(srcDir, 'index.html'), resolve(outDir, 'index.html'));
await cp(resolve(srcDir, 'assets'), resolve(outDir, 'assets'), { recursive: true });
