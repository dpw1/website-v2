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
              <HtmlContent content="Attract women online.<br> Go on real life dates." tag="h1" />
              
              {/* Slider Subtitle */}
              <HtmlContent content="Learn how to turn selfies into realistic photos with AI and turn matches into dates." tag="h3" className="slider-subtitle" />
              
              {/* Image Slider */}
              <ImageSlider 
                images={sliderImages}
                autoPlay={false}
                interval={4000}
              />
              
              <HtmlContent content="The only PRACTICAL guide on how to master online dating and get in front of women IRL, not just collecting matches." tag="h2" className="hero-subtitle" />
          
          <div className="hero-guarantee">
            <p><strong>I firmly believe this will legitimately any man's dating life in a matter of days. <br/>If you don't get a date within 10 days email me and I'll personally review what is going on.</strong></p>
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
