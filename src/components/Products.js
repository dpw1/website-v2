import React from 'react';
import productsContent from '../content/productsContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const Products = () => {
  const content = processContentObject(productsContent);
  const handleEcwidPurchase = (productId) => {
    // Replace with actual Ecwid links
    const ecwidLinks = {
      ebook: 'https://your-ecwid-store.com/ebook',
      review: 'https://your-ecwid-store.com/review',
      combo: 'https://your-ecwid-store.com/combo'
    };
    
    if (ecwidLinks[productId]) {
      window.open(ecwidLinks[productId], '_blank');
    }
  };

  const handlePremiumContact = () => {
    // Open email client or contact form
        window.location.href = 'mailto:getDatesWithAI@proton.me?subject=Premium Service Inquiry';
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <header className="section-title">
          <h2>{content.title}</h2>
          <HtmlContent content={content.subtitle} tag="p" className="section-subtitle" />
        </header>

        <div className="grid grid-4">
          {content.products.map((product) => (
            <div 
              key={product.id} 
              className={`card ${product.popular ? 'card-popular' : ''}`}
            >
              <h3>{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <p className="product-description">{product.description}</p>
              
              <ul className="feature-list">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <HtmlContent content={feature} />
                  </li>
                ))}
              </ul>

              {product.ecwid ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => handleEcwidPurchase(product.id)}
                >
                  {product.cta}
                </button>
              ) : (
                <div>
                  <button 
                    className="btn btn-secondary"
                    onClick={handlePremiumContact}
                  >
                    {product.cta}
                  </button>
                  <p className="premium-note">{product.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="guarantee-section">
          <div className="card">
            <h3>My Personal Guarantee</h3>
            <p>{content.guarantee}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
