import React, { useState } from 'react';
import HtmlContent from './HtmlContent';
import ProductDetailsModal from './ProductDetailsModal';

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    if (product.link) {
      if (product.ecwid) {
        // For Ecwid products, open the purchase link
        window.open(product.link, '_blank');
      } else {
        // For non-Ecwid products (like Profile Review), scroll to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  };

  const handleMoreDetailsClick = (productId) => {
    setSelectedProduct(productId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: "ebook",
      name: "Online Dating Mastery Ebook",
      price: "$69.99",
      description: "Learn how to optimize your dating profile, pick the right apps (including non-dating apps), test and select photos that attract women, and discover how women use these apps. Perfect if you already have plenty of photos to work with.",
      features: [
        "Comprehensive detailed guide",
        "AI photo generation methods",
        "Texting and conversation strategies",
        "How to correctly ask her on a date",
        "Lifetime access and updates"
      ],
      cta: "Buy Now",
      ecwid: true,
      popular: false,
      link: "https://ezfyshop.company.site/products/Online-Dating-Mastery-p788600953"
    },
    {
      id: "combo",
      name: "Bundle: Online Dating Mastery Ebook + Create AI Images Guide",
      price: "$79.99",
      description: "If you don't have good pictures yet, this is the best bet. Everything included in 'Online Dating Mastery Ebook' plus how to make realistic AI images of yourself.",
      features: [
        "Everything from 'Online Dating Mastery Ebook'",
        "Realistic AI photos",
        "Proven photo prompts",
        "No photo skills needed",
        "Fix 'AI look' fast",
        "Save money & time",
        "Boost dating matches"
      ],
      cta: "Buy Now",
      ecwid: true,
      popular: true,
      link: "https://ezfyshop.company.site/products/AI-Image-Generation-Online-Dating-Mastery-p788885232"
    },
    {
      id: "review",
      name: "Profile Review",
      price: "$99.99",
      description: "Get kind-hearted feedback on your dating profile & pictures with suggestions for improvement. NO 'brutal honesty' BS. I will be sincere and kind and give you the best suggestion to improve your current results",
      features: [
   
        "Thorough profile analysis",
        "Genuine, constructive feedback",
        "Strength identification (I'll tell you both your physical & lifestyle strengths that must be used in pictures)",
        "Picture suggestions and improvements",
        "Bio optimization recommendations",
        "Personalized action plan"
      ],
      cta: "Book Now",
      ecwid: false,
      popular: false,
      link: "mailto:getDatesWithAI@proton.me?subject=Profile Review Service Inquiry"
    },
    {
      id: "premium",
      name: "Profile Optimization Service",
      price: "$199.99",
      description: "Full-service profile and photo optimization with personal consultation. Limited availability.",
      features: [
        "30 minutes call before we begin to understad your goals and situation",
        "Complete profile makeover based on your goals",
        "Get 50 AI pics of yourself in 5 different scenarios",
        "30 minutes call 10 days later to understand how it went and what we need to adjust",
        "Personalized strategy development",
        "Limited to select clients only"
      ],
      cta: "Book Now",
      ecwid: false,
      popular: false,
      note: "Not available through standard purchase. Requires bank transfer and 10 mins Google Meet call to ensure we're a good match.",
      link: "mailto:getDatesWithAI@proton.me?subject=Profile Optimization Service Inquiry"
    }
  ];

  return (
    <section id="products" className="section">
      <div className="container">
        <header className="section-title">
          <h2>Products & Services</h2>
          <HtmlContent content="Four Options to Match Your Needs and Budget" tag="p" className="section-subtitle" />
        </header>

        <div className="grid grid-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`card ${product.popular ? 'card-popular' : ''}`}
            >
              <h3>{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <p className="product-description">{product.description}</p>
              
              <ul className="feature-list">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <HtmlContent content={feature} />
                  </li>
                ))}
              </ul>

              {(product.id === "combo" || product.id === "ebook") && (
                <div className="more-details-link">
                  <button 
                    className="more-details"
                    onClick={() => handleMoreDetailsClick(product.id)}
                  >
                    More details
                  </button>
                </div>
              )}

              {product.ecwid ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => handleProductClick(product)}
                >
                  {product.cta}
                </button>
              ) : (
                <div>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.cta}
                  </button>
                  <p className="premium-note">{product.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="guarantee-section">
          <div className="card">
            <h3>My Personal Guarantee</h3>
            <p>If you don't go on a date within 10 days, send me the screenshot of your profile + matches + conversations and I'll help you.</p>
          </div>
        </div>
      </div>

      <ProductDetailsModal 
        isOpen={modalOpen}
        onClose={closeModal}
        productId={selectedProduct}
      />
    </section>
  );
};

export default Products;
