// Script to fix Next.js validator.ts path issues
// This patches the generated validator to use correct paths for src/app directory

const fs = require('fs');
const path = require('path');

const validatorPath = path.join(__dirname, '..', '.next', 'types', 'validator.ts');

if (fs.existsSync(validatorPath)) {
  let content = fs.readFileSync(validatorPath, 'utf8');
  
  // Replace ../../app/ with ../../src/app/ for all route imports
  content = content.replace(/import\("\.\.\/\.\.\/app\//g, 'import("../../src/app/');
  
  fs.writeFileSync(validatorPath, content, 'utf8');
  console.log('Fixed validator.ts paths');
} else {
  console.log('Validator file not found, skipping fix');
}

