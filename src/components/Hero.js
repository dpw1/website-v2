import React, { useMemo } from 'react';
import HtmlContent from './HtmlContent';
import ImageSlider from './ImageSlider';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const Hero = () => {
  // Automatically discover all images in the success folder at build time
  const sliderImages = useMemo(() => {
    // require.context automatically finds all images matching the pattern
    const imageContext = require.context('../images/success', false, /\.(png|jpg|jpeg)$/i);
    
    return imageContext.keys().map((item, index) => {
      // Get the imported image path
      const imagePath = imageContext(item);
      
      return {
        src: imagePath,
        alt: `Success story example ${index + 1}`,
        label: "Success"
      };
    });
  }, []);

  return (
        <main className="hero section">
          <div className="container">
            <div className="hero-content">
              <HtmlContent content="Get scroll-stopping dating photos without leaving home" tag="h1" />
              
              {/* Slider Subtitle */}
              <HtmlContent content="Turn your selfies into realistic AI photos." tag="h3" className="slider-subtitle" />
              {/* Image Slider */}
              <ImageSlider 
                images={sliderImages}
                autoPlay={true}
                interval={3000}
              />
              
              <HtmlContent content="the only PRAGMATIC approach to actually start getting more matchesss and meeting more women in real life." tag="h2" className="hero-subtitle" />
          
          {/* <div className="hero-guarantee">
            <p><strong>I firmly believe this will legitimately improve any man's dating life in a matter of days. <br/>If you don't get more matches within 10 days email me and I'll personally review what is going on.</strong></p>
          </div> */}

          <div className="hero-cta">
            <a 
              className="btn btn-primary"
              href={FREE_SAMPLE_FORM_URL}
            >
              Yes I want a free AI dating photo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
