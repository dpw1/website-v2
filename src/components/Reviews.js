import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviewImages, setReviewImages] = useState([
    {
      src: "/images/reviews/review1.jpg",
      alt: "Customer review screenshot 1"
    },
    {
      src: "/images/reviews/review2.jpg", 
      alt: "Customer review screenshot 2"
    },
    {
      src: "/images/reviews/review3.jpg",
      alt: "Customer review screenshot 3"
    }
  ]);

  // Load image dimensions dynamically
  useEffect(() => {
    const loadImageDimensions = async () => {
      const imagesWithDimensions = await Promise.all(
        reviewImages.map(async (image) => {
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
                width: 800,
                height: 1000
              });
            };
            img.src = image.src;
          });
        })
      );
      setReviewImages(imagesWithDimensions);
    };

    loadImageDimensions();
  }, []);


  const openPhotoSwipe = async (index) => {
    try {
      // Import both the core PhotoSwipe and the lightbox
      const [PhotoSwipeModule, PhotoSwipeLightboxModule] = await Promise.all([
        import('photoswipe'),
        import('photoswipe/lightbox')
      ]);
      
      const PhotoSwipe = PhotoSwipeModule.default;
      const PhotoSwipeLightbox = PhotoSwipeLightboxModule.default;
      
      const items = reviewImages.map(image => ({
        src: image.src,
        width: image.width,  // actual pixel width
        height: image.height, // actual pixel height
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

  return (
    <section id="reviews" className="section">
      <div className="container">
        <header className="section-title">
          <h2>What customers are saying</h2>
          <p className="section-subtitle">I want to see you here next! More reviews coming soon ;)</p>
        </header>
        
        <div className="grid grid-3">
          {reviewImages.map((image, index) => (
            <div key={index} className="review-image" onClick={() => openPhotoSwipe(index)}>
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
