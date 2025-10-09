const fs = require('fs');
const path = require('path');

// Import the config
const appConfig = require('../src/config/appConfig.json');

/**
 * Processes HTML content by replacing template variables with actual values
 */
function processHtmlContent(htmlContent) {
  let processedContent = htmlContent;
  
  // Replace all template variables with config values
  Object.keys(appConfig).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processedContent = processedContent.replace(regex, appConfig[key]);
  });

  return processedContent;
}

/**
 * Processes JSON content by replacing template variables with actual values
 */
function processJsonContent(jsonContent) {
  let processedContent = JSON.stringify(jsonContent);
  
  // Replace all template variables with config values
  Object.keys(appConfig).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processedContent = processedContent.replace(regex, appConfig[key]);
  });

  return JSON.parse(processedContent);
}

// Process HTML files
const htmlFiles = ['public/index.html'];
const jsonFiles = ['public/manifest.json'];

// Process HTML files
htmlFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const processedContent = processHtmlContent(content);
    fs.writeFileSync(fullPath, processedContent, 'utf8');
    console.log(`Processed: ${filePath}`);
  }
});

// Process JSON files
jsonFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    const processedContent = processJsonContent(content);
    fs.writeFileSync(fullPath, JSON.stringify(processedContent, null, 2), 'utf8');
    console.log(`Processed: ${filePath}`);
  }
});

console.log('HTML and JSON processing complete!');
