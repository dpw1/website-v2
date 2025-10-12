import React from 'react';

const Reviews = () => {

  const reviewImages = [
    {
      src: "/images/reviews/review1.jpg",
      alt: "Customer review screenshot 1",
      width: 800,
      height: 1000
    },
    {
      src: "/images/reviews/review2.jpg", 
      alt: "Customer review screenshot 2",
      width: 800,
      height: 1000
    },
    {
      src: "/images/reviews/review3.jpg",
      alt: "Customer review screenshot 3",
      width: 800,
      height: 1000
    }
  ];


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
        width: image.width,
        height: 'auto',
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
        hideAnimationDuration: 0
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
          <h2>What my clients are saying</h2>
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
