#!/usr/bin/env node

// Fix the exports field in @payloadcms/richtext-slate
const fs = require('fs');
const path = require('path');

// Try root node_modules first (monorepo), then local
const rootPath = path.join(__dirname, '../../../node_modules/@payloadcms/richtext-slate/package.json');
const localPath = path.join(__dirname, '../../node_modules/@payloadcms/richtext-slate/package.json');
const packagePath = fs.existsSync(rootPath) ? rootPath : localPath;

if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  if (pkg.exports === null || !pkg.exports) {
    pkg.exports = {
      '.': {
        'import': './dist/index.js',
        'require': './dist/index.js'
      }
    };
    
    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    console.log('✅ Fixed @payloadcms/richtext-slate exports field');
  } else {
    console.log('✅ Exports field already fixed');
  }
} else {
  console.log('⚠️  Package not found at:', packagePath);
}
