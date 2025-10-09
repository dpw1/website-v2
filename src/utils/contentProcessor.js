import appConfig from '../config/appConfig.json';

/**
 * Processes content strings by replacing template variables with actual values
 * @param {string} content - The content string with template variables and HTML
 * @returns {string} - The processed content with variables replaced and HTML preserved
 */
export const processContent = (content) => {
  if (typeof content !== 'string') {
    return content;
  }

  let processedContent = content;
  
  // Replace all template variables with config values
  Object.keys(appConfig).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processedContent = processedContent.replace(regex, appConfig[key]);
  });

  return processedContent;
};

/**
 * Checks if a string contains HTML tags
 * @param {string} str - The string to check
 * @returns {boolean} - True if HTML tags are found
 */
export const containsHtml = (str) => {
  if (typeof str !== 'string') return false;
  return /<[^>]*>/g.test(str);
};

/**
 * Processes an entire content object recursively
 * @param {object} contentObj - The content object to process
 * @returns {object} - The processed content object
 */
export const processContentObject = (contentObj) => {
  if (typeof contentObj === 'string') {
    return processContent(contentObj);
  }
  
  if (Array.isArray(contentObj)) {
    return contentObj.map(item => processContentObject(item));
  }
  
  if (typeof contentObj === 'object' && contentObj !== null) {
    const processed = {};
    Object.keys(contentObj).forEach(key => {
      processed[key] = processContentObject(contentObj[key]);
    });
    return processed;
  }
  
  return contentObj;
};

const contentProcessor = { processContent, processContentObject };
export default contentProcessor;
