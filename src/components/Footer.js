import React, { useState } from 'react';
import HtmlContent from './HtmlContent';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
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
            <h2>Ready to Transform Your Dating Life with AI Photos?</h2>
            <HtmlContent content="Get started today and join thousands of men who've improved their dating success" tag="p" className="footer-subtitle" />
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
              <a href="mailto:getDatesWithAI@proton.me">
                getDatesWithAI@proton.me
              </a>
            </p>
            <p>We respond within 24 hours</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={openPrivacyModal} className="footer-link-button">Privacy Policy</button></li>
              <li><button onClick={openTermsModal} className="footer-link-button">Terms of Service</button></li>
              <li><a href="mailto:getDatesWithAI@proton.me">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 MatchWithAI. All rights reserved.</p>
          <p className="disclaimer">Results may vary. Individual success depends on implementation and effort. We provide educational content and support, but cannot guarantee specific outcomes.</p>
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
