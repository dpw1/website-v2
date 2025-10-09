import React from 'react';
import { processContent, containsHtml } from '../utils/contentProcessor';

/**
 * Component that safely renders HTML content with template variable processing
 * @param {string} content - The content string that may contain HTML and template variables
 * @param {string} tag - The HTML tag to wrap the content (default: 'span')
 * @param {object} props - Additional props to pass to the wrapper element
 */
const HtmlContent = ({ content, tag = 'span', ...props }) => {
  if (!content) return null;

  const processedContent = processContent(content);
  const hasHtml = containsHtml(processedContent);

  // If content contains HTML, render it with dangerouslySetInnerHTML
  if (hasHtml) {
    const Tag = tag;
    return <Tag {...props} dangerouslySetInnerHTML={{ __html: processedContent }} />;
  }

  // If no HTML, render as plain text
  const Tag = tag;
  return <Tag {...props}>{processedContent}</Tag>;
};

export default HtmlContent;
