import React from 'react';
import Modal from './Modal';
import termsOfServiceContent from '../content/termsOfServiceContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  const content = processContentObject(termsOfServiceContent);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={content.title}>
      <div className="legal-document">
        <p className="last-updated">Last updated: {content.lastUpdated}</p>
        
        {content.sections.map((section, index) => (
          <div key={index} className="legal-section">
            <h3 className="legal-section-title">{section.title}</h3>
            <div className="legal-section-content">
              <HtmlContent content={section.content} tag="p" />
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default TermsOfServiceModal;
