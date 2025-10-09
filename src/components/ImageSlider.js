import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-slider">
      {/* Main Image Display */}
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img 
                    src={image.src} 
                    alt={image.alt || `Dating profile transformation example ${index + 1} - ${image.label || 'AI enhanced photo'}`}
                    className="slide-image"
                    loading={index === 0 ? "eager" : "lazy"}
                    width="1280"
                    height="768"
                  />
                </div>
              ))}
        </div>
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="slider-arrow slider-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button 
              className="slider-arrow slider-arrow-right"
              onClick={goToNext}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="thumbnail-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Dating profile thumbnail ${index + 1} - ${image.label || 'AI enhanced photo'}`}
                className="thumbnail-image"
                loading="lazy"
                width="120"
                height="80"
              />
              {image.label && (
                <div className="thumbnail-label">{image.label}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
