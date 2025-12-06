import React from 'react';
import HtmlContent from './HtmlContent';
import ImageSlider from './ImageSlider';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const Hero = () => {
  const sliderImages = [
 
    {
      src: "/images/success/2.png",
      alt: "Success story example 2",
      label: "Success"
    },
    {
      src: "/images/success/3.png",
      alt: "Success story example 3",
      label: "Success"
    },
    {
      src: "/images/success/4.png",
      alt: "Success story example 4",
      label: "Success"
    },
    {
      src: "/images/success/5.png",
      alt: "Success story example 5",
      label: "Success"
    },
  ];

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
                autoPlay={false}
                interval={4000}
              />
              
              <HtmlContent content="the only PRAGMATIC approach to actually start getting dates and meeting more women in real life." tag="h2" className="hero-subtitle" />
          
          <div className="hero-guarantee">
            <p><strong>I firmly believe this will legitimately any man's dating life in a matter of days. <br/>If you don't get a date within 10 days email me and I'll personally review what is going on.</strong></p>
          </div>

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
