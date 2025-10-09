import React from 'react';
import ethicalAiContent from '../content/ethicalAiContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const EthicalAI = () => {
  const content = processContentObject(ethicalAiContent);
  return (
    <section className="section">
      <div className="container">
        <header className="section-title">
          <h2>{content.title}</h2>
          <HtmlContent content={content.subtitle} tag="p" className="section-subtitle" />
        </header>

        <div className="grid grid-2">
          <div className="card">
            <h3>{content.philosophy.title}</h3>
            <p>{content.philosophy.description}</p>
            <ul className="feature-list">
              {content.philosophy.principles.map((principle, index) => (
                <li key={index}>
                  <HtmlContent content={principle} />
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>{content.method.title}</h3>
            <p>{content.method.description}</p>
            <ul className="feature-list">
              {content.method.features.map((feature, index) => (
                <li key={index}>
                  <HtmlContent content={feature} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="examples-section">
          <div className="card">
            <h3>{content.examples.title}</h3>
            <p>{content.examples.description}</p>
            <p className="examples-note">{content.examples.note}</p>
            
            {/* Placeholder for example images */}
            <div className="example-images">
              <div className="example-placeholder">
                <p>Example AI Photo 1</p>
                <small>Casual, natural lighting</small>
              </div>
              <div className="example-placeholder">
                <p>Example AI Photo 2</p>
                <small>Smartphone-style composition</small>
              </div>
              <div className="example-placeholder">
                <p>Example AI Photo 3</p>
                <small>Authentic expression</small>
              </div>
            </div>
          </div>
        </div>

        <div className="transparency-section">
          <div className="card">
            <h3>{content.transparency.title}</h3>
            <p>{content.transparency.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalAI;
