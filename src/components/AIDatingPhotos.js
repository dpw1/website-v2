import React from 'react';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const AIDatingPhotos = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <header className="section-title">
          <h2>AI Dating Photos</h2>
          <p className="section-subtitle">Transform your selfies into scroll-stopping dating photos that get matches</p>
        </header>
        
        <div className="service-content">
          <div className="service-text">
            <p className="paragraph-text">
              Get professional-quality dating photos without leaving your home. Our AI technology transforms your selfies into realistic, natural-looking photos that showcase your best features.
            </p>
            <p className="paragraph-text">
              No photoshoots, no expensive equipment, no waiting. Just upload your selfies and get dating photos that actually work.
            </p>
          </div>
          
          <div className="service-cta">
            <a 
              className="btn btn-primary"
              href={FREE_SAMPLE_FORM_URL}
            >
              Get your free AI dating photo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDatingPhotos;

