import React from 'react';
import heroContent from '../content/heroContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const content = processContentObject(heroContent);
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
        <main className="hero section">
          <div className="container">
            <div className="hero-content">
              <h1>{content.title}</h1>
              
              {/* Image Slider */}
              {content.sliderImages && content.sliderImages.length > 0 && (
                <ImageSlider 
                  images={content.sliderImages}
                  autoPlay={false}
                  interval={4000}
                />
              )}
              
              <HtmlContent content={content.subtitle} tag="h2" className="hero-subtitle" />
          
          <div className="hero-guarantee">
            <p><strong>{content.guarantee}</strong></p>
          </div>

          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={scrollToProducts}
            >
              {content.cta.primary}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
