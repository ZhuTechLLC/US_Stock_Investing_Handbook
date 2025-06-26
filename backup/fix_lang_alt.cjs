// 自动修正 Astro Handbook 所有 Markdown 文件的 lang 和 alt 字段
// 用法：node backup/fix_lang_alt.cjs

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const rootDir = path.join(__dirname, '../src/pages');
const enDir = path.join(rootDir, 'en');
const homepageZh = '/';
const homepageEn = '/en/index';

// 获取所有md文件（递归）
function getAllMdFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMdFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

// 文件名映射规则
function getEnFileFromZh(zhFile) {
  const base = path.basename(zhFile);
  const match = base.match(/^(\d+)_/);
  if (!match) return null;
  const prefix = match[1];
  const enFiles = getAllMdFiles(enDir);
  for (const enFile of enFiles) {
    if (path.basename(enFile).startsWith(prefix + '_')) {
      return enFile;
    }
  }
  return null;
}

function getZhFileFromEn(enFile) {
  const base = path.basename(enFile);
  const match = base.match(/^(\d+)_/);
  if (!match) return null;
  const prefix = match[1];
  const zhFiles = getAllMdFiles(rootDir).filter(f => !f.includes('/en/'));
  for (const zhFile of zhFiles) {
    if (path.basename(zhFile).startsWith(prefix + '_')) {
      return zhFile;
    }
  }
  return null;
}

function fixFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  let changed = false;
  let lang, alt;
  if (filePath.includes('/en/')) {
    lang = 'en';
    const zhFile = getZhFileFromEn(filePath);
    if (zhFile) {
      const rel = path.relative(rootDir, zhFile).replace(/\\/g, '/');
      alt = '/' + rel.replace(/\.md$/, '');
    } else {
      alt = homepageZh;
    }
  } else {
    lang = 'zh';
    const enFile = getEnFileFromZh(filePath);
    if (enFile) {
      const rel = path.relative(rootDir, enFile).replace(/\\/g, '/');
      alt = '/' + rel.replace(/\.md$/, '');
    } else {
      alt = homepageEn;
    }
  }
  if (parsed.data.lang !== lang) {
    parsed.data.lang = lang;
    changed = true;
  }
  if (parsed.data.alt !== alt) {
    parsed.data.alt = alt;
    changed = true;
  }
  if (changed) {
    const newRaw = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, newRaw, 'utf8');
    console.log('Fixed:', filePath);
  }
}

const allFiles = getAllMdFiles(rootDir);
allFiles.forEach(fixFile);

console.log('lang/alt 字段批量修正完成！'); 