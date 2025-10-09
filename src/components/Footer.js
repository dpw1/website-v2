import React, { useState } from 'react';
import footerContent from '../content/footerContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
  const content = processContentObject(footerContent);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
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
              <li><button onClick={openPrivacyModal} className="footer-link-button">{content.links.privacy}</button></li>
              <li><button onClick={openTermsModal} className="footer-link-button">{content.links.terms}</button></li>
              <li><a href={`mailto:${content.contact.email}`}>{content.links.faq}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{content.copyright}</p>
          <p className="disclaimer">{content.disclaimer}</p>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={closePrivacyModal} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={closeTermsModal} 
      />
    </footer>
  );
};

export default Footer;
