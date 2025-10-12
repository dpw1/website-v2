import React from 'react';
import HtmlContent from './HtmlContent';
import Modal from './Modal';
import EbookContent from './EbookContent';
import ComboContent from './ComboContent';

const ProductDetailsModal = ({ isOpen, onClose, productId }) => {
  if (!isOpen) return null;

  const getProductContent = () => {
    if (productId === 'combo') {
      return (
        <div className="product-details-content">
          <header className="section-title">
            <h2>Bundle: Online Dating Mastery Ebook + Create AI Images Guide</h2>
            <p className="section-subtitle">Complete package for maximum dating success</p>
          </header>

          <ComboContent />
        </div>
      );
    } else if (productId === 'ebook') {
      return (
        <div className="product-details-content">
          <header className="section-title">
            <h2>Online Dating Mastery Ebook</h2>
            <p className="section-subtitle">Complete guide to transform your dating life</p>
          </header>

          <EbookContent />
        </div>
      );
    }
    return null;
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="product-details-modal"
    >
      <div className="product-details-scroll">
        {getProductContent()}
      </div>
    </Modal>
  );
};

export default ProductDetailsModal;
