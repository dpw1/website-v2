import appConfig from '../config/appConfig.json';

/**
 * Processes HTML content by replacing template variables with actual values
 * @param {string} htmlContent - The HTML content string with template variables
 * @returns {string} - The processed HTML with variables replaced
 */
export const processHtmlContent = (htmlContent) => {
  let processedContent = htmlContent;
  
  // Replace all template variables with config values
  Object.keys(appConfig).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processedContent = processedContent.replace(regex, appConfig[key]);
  });

  return processedContent;
};

export default { processHtmlContent };
