import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ImageSlider = ({ images, autoPlay = true, interval = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !autoPlay || images.length <= 1) return;

    const autoplay = () => {
      emblaApi.scrollNext();
    };

    const timer = setInterval(autoplay, interval);
    return () => clearInterval(timer);
  }, [emblaApi, autoPlay, interval, images.length]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-slider">
      {/* Main Image Display */}
      <div className="slider-container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div key={index} className="embla__slide">
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
        </div>
        
        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button 
              className="slider-arrow slider-arrow-left"
              onClick={scrollPrev}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button 
              className="slider-arrow slider-arrow-right"
              onClick={scrollNext}
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
              className="thumbnail-item"
              onClick={() => scrollTo(index)}
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
