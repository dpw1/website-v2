import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ImageSlider = ({ images, autoPlay = true, interval = 3000 }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: isMobile ? 1 : 2,
    containScroll: 'trimSnaps'
  });
  const [currentThumbnailPage, setCurrentThumbnailPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesWithDimensions, setImagesWithDimensions] = useState(images);
  
  const thumbnailsPerPage = 5;
  const totalThumbnailPages = Math.ceil(imagesWithDimensions.length / thumbnailsPerPage);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load image dimensions dynamically
  useEffect(() => {
    const loadImageDimensions = async () => {
      const imagesWithDimensions = await Promise.all(
        images.map(async (image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                ...image,
                width: img.naturalWidth,
                height: img.naturalHeight
              });
            };
            img.onerror = () => {
              // Fallback dimensions if image fails to load
              resolve({
                ...image,
                width: 1280,
                height: 1920
              });
            };
            img.src = image.src;
          });
        })
      );
      setImagesWithDimensions(imagesWithDimensions);
    };

    loadImageDimensions();
  }, [images]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !autoPlay || imagesWithDimensions.length <= 2) return;

    const autoplay = () => {
      emblaApi.scrollNext();
    };

    const timer = setInterval(autoplay, interval);
    return () => clearInterval(timer);
  }, [emblaApi, autoPlay, interval, imagesWithDimensions.length]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((imageIndex) => {
    if (emblaApi) {
      // Calculate slide index based on current display mode
      const slideIndex = isMobile ? imageIndex : Math.floor(imageIndex / 2);
      emblaApi.scrollTo(slideIndex);
      setCurrentSlide(imageIndex);
      // Update thumbnail page to show the current image
      const newThumbnailPage = Math.floor(imageIndex / thumbnailsPerPage);
      setCurrentThumbnailPage(newThumbnailPage);
    }
  }, [emblaApi, thumbnailsPerPage, isMobile]);

  // Track current slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const slideIndex = emblaApi.selectedScrollSnap();
      // Convert slide index back to image index based on current display mode
      const imageIndex = isMobile ? slideIndex : slideIndex * 2;
      setCurrentSlide(imageIndex);
      
      // Auto-update thumbnail pagination to keep active thumbnail visible
      const newThumbnailPage = Math.floor(imageIndex / thumbnailsPerPage);
      setCurrentThumbnailPage(newThumbnailPage);
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, isMobile, thumbnailsPerPage]);

  const goToThumbnailPage = (page) => {
    setCurrentThumbnailPage(page);
  };

  const getVisibleThumbnails = () => {
    const startIndex = currentThumbnailPage * thumbnailsPerPage;
    const endIndex = Math.min(startIndex + thumbnailsPerPage, imagesWithDimensions.length);
    return imagesWithDimensions.slice(startIndex, endIndex).map((image, index) => ({
      ...image,
      originalIndex: startIndex + index
    }));
  };

  const openPhotoSwipe = async (index) => {
    try {
      // Import both the core PhotoSwipe and the lightbox
      const [PhotoSwipeModule, PhotoSwipeLightboxModule] = await Promise.all([
        import('photoswipe'),
        import('photoswipe/lightbox')
      ]);
      
      const PhotoSwipe = PhotoSwipeModule.default;
      const PhotoSwipeLightbox = PhotoSwipeLightboxModule.default;
      
      const items = imagesWithDimensions.map(image => ({
        src: image.src,
        width: image.width,  // Actual image width
        height: image.height, // Actual image height
        alt: image.alt
      }));

      const lightbox = new PhotoSwipeLightbox({
        pswpModule: PhotoSwipe,
        dataSource: items,
        index: index,
        bgOpacity: 0.8,
        showHideOpacity: true,
        history: false,
        focus: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0,
        // Enable zoom functionality with pinch-to-zoom
        zoom: {
          enabled: true,
          maxZoomLevel: 4,
          minZoomLevel: 1,
          allowPanToNext: true
        },
        // Enable touch gestures for mobile
        allowPanToNext: true
      });

      lightbox.init();
      lightbox.loadAndOpen(index);
    } catch (error) {
      console.error('Failed to load PhotoSwipe:', error);
    }
  };

  if (!imagesWithDimensions || imagesWithDimensions.length === 0) {
    return null;
  }

  return (
    <div className="image-slider">
      {/* Main Image Display */}
      <div className="slider-container">
        {/* AI Generated Label */}
        <div className="ai-generated-label">
          AI Generated
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {imagesWithDimensions.map((image, index) => (
              <div key={index} className="embla__slide">
                <img 
                  src={image.src} 
                  alt={image.alt || `Dating profile transformation example ${index + 1} - ${image.label || 'AI enhanced photo'}`}
                  className="slide-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  width="1280"
                  height="768"
                  onClick={() => openPhotoSwipe(index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows */}
        {imagesWithDimensions.length > 2 && (
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
      {imagesWithDimensions.length > 2 && (
        <div className="thumbnail-section">
          <div className="thumbnail-gallery">
            {getVisibleThumbnails().map((image, index) => (
              <div
                key={image.originalIndex}
                className={`thumbnail-item ${currentSlide === image.originalIndex ? 'active' : ''}`}
                onClick={() => scrollTo(image.originalIndex)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt || `Dating profile thumbnail ${image.originalIndex + 1} - ${image.label || 'AI enhanced photo'}`}
                  className="thumbnail-image"
                  loading="lazy"
                  width="120"
                  height="80"
                />
              </div>
            ))}
          </div>
          
          {/* Thumbnail Pagination */}
          {totalThumbnailPages > 1 && (
            <div className="thumbnail-pagination">
              <button 
                className="thumbnail-nav-btn"
                onClick={() => goToThumbnailPage(Math.max(0, currentThumbnailPage - 1))}
                disabled={currentThumbnailPage === 0}
                aria-label="Previous thumbnails"
              >
                &#8249;
              </button>
              <span className="thumbnail-page-info">
                {currentThumbnailPage + 1} / {totalThumbnailPages}
              </span>
              <button 
                className="thumbnail-nav-btn"
                onClick={() => goToThumbnailPage(Math.min(totalThumbnailPages - 1, currentThumbnailPage + 1))}
                disabled={currentThumbnailPage === totalThumbnailPages - 1}
                aria-label="Next thumbnails"
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
