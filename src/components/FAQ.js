import React, { useState } from 'react';
import faqContent from '../content/faqContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const FAQ = () => {
  const content = processContentObject(faqContent);
  const [openItems, setOpenItems] = useState({});

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="container">
        <header className="section-title">
          <h2>{content.title}</h2>
          <HtmlContent content={content.subtitle} tag="p" className="section-subtitle" />
        </header>

        <div className="faq-container">
          {content.questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <h4>{item.question}</h4>
                <span className={`faq-toggle ${openItems[index] ? 'open' : ''}`}>
                  +
                </span>
              </div>
              {openItems[index] && (
                <div className="faq-answer">
                  <HtmlContent content={item.answer} tag="p" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
