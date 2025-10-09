import React from 'react';
import footerContent from '../content/footerContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const Footer = () => {
  const content = processContentObject(footerContent);
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-cta">
            <h2>{content.title}</h2>
            <HtmlContent content={content.subtitle} tag="p" className="footer-subtitle" />
            <button 
              className="btn btn-primary"
              onClick={scrollToProducts}
            >
              Get Started Now
            </button>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <strong>Email:</strong> 
              <a href={`mailto:${content.contact.email}`}>
                {content.contact.email}
              </a>
            </p>
            <p>{content.contact.responseTime}</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#privacy">{content.links.privacy}</a></li>
              <li><a href="#terms">{content.links.terms}</a></li>
              <li><a href={`mailto:${content.contact.email}`}>{content.links.support}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{content.copyright}</p>
          <p className="disclaimer">{content.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
