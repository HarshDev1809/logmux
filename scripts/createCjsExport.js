// scripts/createCjsExport.js

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';


import path from 'path';

// Mimic __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path setup
const distPath = path.resolve(__dirname, '../dist');
const filePath = path.join(distPath, '/cjs/index.cjs');

mkdirSync(path.join(distPath, 'cjs'), { recursive: true });
// Content to write
const content = `
// This file is auto-generated post build to fix .default import issues
module.exports = require('../index.cjs').default;
`;

// Write the file
writeFileSync(filePath, content.trim(), 'utf8');
console.log(`✅ Created CJS export file at ${filePath}`);
