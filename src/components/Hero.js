import React from 'react';
import HtmlContent from './HtmlContent';
import ImageSlider from './ImageSlider';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const Hero = () => {
  const sliderImages = [
    {
      src: "/images/examples/a1-example-2.jpg",
      alt: "AI enhanced dating profile example 1",
      label: "Professional"
    },
    {
      src: "/images/examples/a1-example-3.jpg",
      alt: "AI enhanced dating profile example 2",
      label: "Casual"
    },
    {
      src: "/images/examples/a1-example-4.jpg",
      alt: "AI enhanced dating profile example 3",
      label: "Outdoor"
    },
    {
      src: "/images/examples/a2-example-1.jpg",
      alt: "AI enhanced dating profile example 4",
      label: "Lifestyle"
    },
    {
      src: "/images/examples/a2-example-2.jpg",
      alt: "AI enhanced dating profile example 5",
      label: "Social"
    },
    {
      src: "/images/examples/a2-example-3.jpg",
      alt: "AI enhanced dating profile example 6",
      label: "Adventure"
    },
    {
      src: "/images/examples/a3-2.jpg",
      alt: "AI enhanced dating profile example 7",
      label: "Stylish"
    },
    {
      src: "/images/examples/a3-4.jpg",
      alt: "AI enhanced dating profile example 8",
      label: "Confident"
    },
    {
      src: "/images/examples/a3-6.jpg",
      alt: "AI enhanced dating profile example 9",
      label: "Trendy"
    },
    {
      src: "/images/examples/a3-7.jpg",
      alt: "AI enhanced dating profile example 10",
      label: "Sophisticated"
    },
    {
      src: "/images/examples/a3-8.jpg",
      alt: "AI enhanced dating profile example 11",
      label: "Charming"
    },
    {
      src: "/images/examples/a3-9.jpg",
      alt: "AI enhanced dating profile example 12",
      label: "Attractive"
    },
    {
      src: "/images/examples/a3.jpg",
      alt: "AI enhanced dating profile example 13",
      label: "Engaging"
    },
    {
      src: "/images/examples/a4-1.jpg",
      alt: "AI enhanced dating profile example 14",
      label: "Dynamic"
    },
    {
      src: "/images/examples/a4-2.jpg",
      alt: "AI enhanced dating profile example 15",
      label: "Compelling"
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
              
              <HtmlContent content="The only PRACTICAL guide on how to master online dating and get in front of women in real life, not just making pictures & collecting matches." tag="h2" className="hero-subtitle" />
          
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
