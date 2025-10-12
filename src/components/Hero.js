import React from 'react';
import HtmlContent from './HtmlContent';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  const sliderImages = [
    {
      src: "/images/success/1.png",
      alt: "Success story 1 - Dating profile transformation result",
      label: "Travel"
    },
    {
      src: "/images/success/2.png",
      alt: "Success story 2 - Dating profile transformation result",
      label: "Casual"
    },
    {
      src: "/images/success/3.png",
      alt: "Success story 3 - Dating profile transformation result",
      label: "Night Out"
    },
    {
      src: "/images/success/4.png",
      alt: "Success story 4 - Dating profile transformation result",
      label: "Yacht"
    }
  ];

  return (
        <main className="hero section">
          <div className="container">
            <div className="hero-content">
              <HtmlContent content="Meet women online.<br> go on real life dates." tag="h1" />
              
              {/* Slider Subtitle */}
              <HtmlContent content="Get your dating life fixed in a matter of days." tag="h3" className="slider-subtitle" />
              
              {/* Image Slider */}
              <ImageSlider 
                images={sliderImages}
                autoPlay={false}
                interval={4000}
              />
              
              <HtmlContent content="<u>Learn</u> how to create hyper realistic AI pictures of yourself & meet more women in real life." tag="h2" className="hero-subtitle" />
          
          <div className="hero-guarantee">
            <p><strong>This will legitimately change your dating life in a matter of days. If you don't get a date within 10 days email me and I'll personally review what is going on.</strong></p>
          </div>

          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={scrollToProducts}
            >
              View Products & Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
