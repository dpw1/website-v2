import React from 'react';
import valuePropositionContent from '../content/valuePropositionContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const ValueProposition = () => {
  const content = processContentObject(valuePropositionContent);
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="value-proposition" className="section">
      <div className="container">
        <header className="section-title">
          <h2>{content.title}</h2>
          <HtmlContent content={content.subtitle} tag="p" className="section-subtitle" />
        </header>

        <div className="value-proposition-paragraphs">
          {content.firstSectionTitle && (
            <h3 className="section-content-title">{content.firstSectionTitle}</h3>
          )}
          {content.paragraphs && content.paragraphs.map((paragraph, index) => (
            <p key={index} className="paragraph-text">
              <HtmlContent content={paragraph} />
            </p>
          ))}
        </div>

        {content.additionalContent && (
          <div className="additional-content-block">
            <h3 className="additional-content-title">{content.additionalContent.title}</h3>
            <div className="additional-content-paragraphs">
              {content.additionalContent.paragraphs && content.additionalContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="paragraph-text">
                  <HtmlContent content={paragraph} />
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-2">
          <div className="card">
            <h3>{content.painPoints.title}</h3>
            <ul className="feature-list">
              {content.painPoints.points.map((point, index) => (
                <li key={index}>
                  <HtmlContent content={point} />
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>{content.solution.title}</h3>
            <ul className="feature-list">
              {content.solution.points.map((point, index) => (
                <li key={index}>
                  <HtmlContent content={point} />
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="promise-section">
          <h3 className="promise-text">{content.promise}</h3>
          <button 
            className="btn btn-secondary"
            onClick={scrollToProducts}
          >
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
