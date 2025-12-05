import React from 'react';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const CopiedContent = () => {
  // Image carousel images
  const carouselImages = [
    'https://aidatingphoto.com/wp-content/uploads/2025/09/4.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/5-1.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/25.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/17.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/2-1.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/18.png'
  ];

  // Example gallery images
  const exampleImages = [
    'https://aidatingphoto.com/wp-content/uploads/2025/09/16-1.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/18.png',
    'https://aidatingphoto.com/wp-content/uploads/2025/09/23.png'
  ];

  // Results gallery images (success screenshots)
  const resultsImages = [
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250616-234953_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250616-234953_Bumble-836x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-040027_Hinge.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-040027_Hinge-882x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-034701_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-034701_Bumble-1024x662.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250826_201615_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250826_201615_Bumble-1024x696.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/3DatesInTwoDays-1.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/3DatesInTwoDays-1-915x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/50PlusHingeLikes.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/50PlusHingeLikes-983x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250506_191852_WhatsApp-1.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250506_191852_WhatsApp-1-910x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250825_230219_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250825_230219_Bumble-958x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250517_061539_Discord.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250517_061539_Discord-1024x382.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250827_144120_WhatsApp.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250827_144120_WhatsApp-1024x260.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-035907_Instagram.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250902-035907_Instagram-1024x368.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250730_165810_Gallery.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250730_165810_Gallery-1024x714.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250725_172759_Messages.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250725_172759_Messages-1024x818.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250829_003614_WhatsApp.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250829_003614_WhatsApp-1024x621.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250828_073649_WhatsApp.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250828_073649_WhatsApp-750x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250829_145456_WhatsApp.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250829_145456_WhatsApp-981x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250625_153342_Fiverr.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250625_153342_Fiverr-1024x739.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250208_184902_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250208_184902_Bumble-521x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/1250-Bumble-Matches.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/1250-Bumble-Matches-461x1024.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/IMG_0041.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/IMG_0041-473x1024.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250826_201804_Bumble.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Screenshot_20250826_201804_Bumble-749x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/TooManyHingeMatches.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/TooManyHingeMatches-472x1024.jpg' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/TooManyHingeTexts.jpg', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/TooManyHingeTexts-527x1024.jpg' }
  ];

  // Testimonials gallery images
  const testimonialImages = [
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/22nd-Positive-Review.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/22nd-Positive-Review-1024x403.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/FlixReview.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/FlixReview-1024x228.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Indian-testimmonial.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Indian-testimmonial-1024x606.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/JaseReview.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/JaseReview-1024x235.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Maxryan.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Maxryan-1024x344.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/MiguelMona.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/MiguelMona-1024x236.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/MrPlain.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/MrPlain-1024x397.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Poland-testi.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/Poland-testi-1024x245.png' },
    { url: 'https://aidatingphoto.com/wp-content/uploads/2025/09/SlickerReview.png', thumbnail: 'https://aidatingphoto.com/wp-content/uploads/2025/09/SlickerReview-1024x247.png' }
  ];

  const formUrl = FREE_SAMPLE_FORM_URL;

  // Arrow icon SVG
  const ArrowIcon = () => (
    <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    </svg>
  );

  return (
    <div className="copied-content">
      {/* Section 1: Hero with heading, button, and carousel */}
      <section className="section">
        <div className="container">
          <h2 className="heading">Get scroll-stopping dating photos without leaving home</h2>
          <h3 className="subtitle" style={{ fontSize: '1.2rem', fontWeight: 'normal', marginTop: '1rem', marginBottom: '2rem' }}>Turn your selfies into realistic AI photos.</h3>
          
          <div className="button-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a className="btn btn-primary" href={formUrl}>
              <span className="button-content-wrapper">
                <span className="button-icon">
                  <ArrowIcon />
                </span>
                <span className="button-text">Get a FREE sample clicking here</span>
              </span>
            </a>
          </div>

          {/* Image Carousel */}
          <div className="image-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', margin: '2rem 0' }}>
            {carouselImages.map((img, idx) => (
              <figure key={idx} className="carousel-image">
                <img src={img} alt={`AI dating photo example ${idx + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              </figure>
            ))}
          </div>

          <div className="text-content" style={{ marginTop: '2rem' }}>
            <p>We'll help you turn your selfies into ultra-realistic AI dating photos, crafted by a professional prompt engineer and dating coach who helped countless men around the world create a top 1% dating profile.</p>
            <p>The best part? It's 100% free, no catches and no strings attached.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Get your perfect AI dating photos */}
      <section className="section">
        <div className="container">
          <h2 className="heading">Get your perfect AI dating photos without lifting a finger</h2>
          <div className="text-content">
            <p>Chances are, you've tried those AI dating photo apps that spit out fake-looking images that look nothing like you.</p>
            <p>Here, every image we deliver is guided by a professional prompt engineer and dating coach, so your final images <strong>bring out your best self and look 100% authentic.</strong></p>
            <p><strong>Here's how to get your AI dating photos in three simple steps:</strong></p>
          </div>
        </div>
      </section>

      {/* Section 3: Three Steps */}
      <section className="section">
        <div className="container">
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
            {/* Step 1 */}
            <div className="step-item">
              <figure className="step-image">
                <img 
                  src="https://aidatingphoto.com/wp-content/uploads/2025/09/click.png" 
                  alt="Click icon" 
                  width="512" 
                  height="512"
                  style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto', display: 'block' }}
                />
              </figure>
              <div className="step-content">
                <p className="step-description">1. Click on any buttons on this page to request your FREE AI dating photos from our team.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-item">
              <figure className="step-image">
                <img 
                  src="https://aidatingphoto.com/wp-content/uploads/2025/09/upload.png" 
                  alt="Upload icon" 
                  width="512" 
                  height="512"
                  style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto', display: 'block' }}
                />
              </figure>
              <div className="step-content">
                <p className="step-description">2. Follow simple instructions to upload a few pictures, which will be used to generate your photos.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-item">
              <figure className="step-image">
                <img 
                  src="https://aidatingphoto.com/wp-content/uploads/2025/09/downlod.png" 
                  alt="Download icon" 
                  width="512" 
                  height="512"
                  style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto', display: 'block' }}
                />
              </figure>
              <div className="step-content">
                <p className="step-description">3. We'll send your final images to your inbox (make sure to enter your best email address on the previous step).</p>
              </div>
            </div>
          </div>

          <div className="button-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a className="btn btn-primary" href={formUrl}>
              <span className="button-content-wrapper">
                <span className="button-icon">
                  <ArrowIcon />
                </span>
                <span className="button-text">Make My Photos Better</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Examples Gallery */}
      <section className="section">
        <div className="container">
          <h2 className="heading">"But what's the final result? I want to see some examples!"</h2>
          <div className="text-content">
            <p>See for yourself in the examples below. We use the most advanced state-of-the-art technology to create photos so realistic that women never notice that they were generated with AI. <span style={{ fontSize: '1.3rem' }}>Every detail, from lighting to expressions, looks completely natural and authentic.</span></p>
            <p>How do we know this?</p>
            <p><span style={{ fontSize: '1.3rem' }}> Because thousands of women have swiped right on our clients' dating profiles and sent the first message. Women would never do that if the photos look "fake". </span></p>
          </div>

          {/* Example Gallery */}
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', margin: '2rem 0' }}>
            {exampleImages.map((img, idx) => (
              <a key={idx} href={img} target="_blank" rel="noopener noreferrer" className="gallery-item">
                <div className="gallery-image" style={{ backgroundImage: `url(${img})`, paddingBottom: '66.67%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Results Gallery */}
      <section className="section">
        <div className="container">
          <h2 className="heading">...And yes, these AI dating photos really do land more dates!</h2>
          
          {/* Results Gallery - Masonry style */}
          <div className="gallery-masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px', margin: '2rem 0' }}>
            {resultsImages.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="gallery-item">
                <div className="gallery-image" style={{ backgroundImage: `url(${item.thumbnail})`, paddingBottom: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              </a>
            ))}
          </div>

          <div className="button-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a className="btn btn-primary" href={formUrl}>
              <span className="button-content-wrapper">
                <span className="button-icon">
                  <ArrowIcon />
                </span>
                <span className="button-text">Get me results like this!</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="heading">What are people saying about this service?</h2>
          
          {/* Testimonials Gallery */}
          <div className="gallery-masonry" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px', margin: '2rem 0' }}>
            {testimonialImages.map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="gallery-item">
                <div className="gallery-image" style={{ backgroundImage: `url(${item.thumbnail})`, paddingBottom: '50%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              </a>
            ))}
          </div>

          <div className="button-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a className="btn btn-primary" href={formUrl}>
              <span className="button-content-wrapper">
                <span className="button-icon">
                  <ArrowIcon />
                </span>
                <span className="button-text">Give me those photos now!</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Why Free */}
      <section className="section">
        <div className="container">
          <h2 className="heading">Why do we offer this for free?</h2>
          <div className="text-content">
            <p>We know this might sound too good to be true. After all, there's real professional work going into your photos.</p>
            <p>And yes, there are websites and apps out there that claim to be free, but they secretly use/sell your images to train AI. <strong>This isn't one of them.</strong> Your privacy is 100% safe. We'll never use your photos for anything beyond delivering your results.</p>
            <p className="whitespace-normal break-words">We're offering free sample photos with the hope that you'll love the results and decide to upgrade to our full transformation service.</p>
            <p className="whitespace-normal break-words">But here's the thing: whether you choose to work with us further or not, these sample photos are yours to keep. No strings attached.</p>
            <p className="whitespace-normal break-words">We believe in letting our work speak for itself.</p>
            <p className="whitespace-normal break-words">Once you see what we can deliver, we're confident you'll want to explore what else we can do for you. But if not? That's totally fine. You still walk away with quality photos at no cost.</p>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section">
        <div className="container">
          <h2 className="heading">This free service could cost you $195 tomorrow. Act now.</h2>
          <div className="text-content">
            <p>This service normally costs $195 (and it still does if you buy outside of this page). But right now, only on this page, you can get it absolutely free.</p>
            <p>However, there's no guarantee this free offer will still be available tomorrow. We're only running it for a short time. And once it's gone, it's gone. If you're serious about getting more matches and dates, now is the time to grab it. Don't miss out!</p>
          </div>
          
          <div className="button-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a className="btn btn-primary" href={formUrl}>
              <span className="button-content-wrapper">
                <span className="button-icon">
                  <ArrowIcon />
                </span>
                <span className="button-text">Claim your free photos now</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopiedContent;

