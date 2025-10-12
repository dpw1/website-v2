import React from 'react';
import HtmlContent from './HtmlContent';

const Products = () => {
  const handleProductClick = (product) => {
    if (product.link) {
      if (product.link.startsWith('mailto:')) {
        window.location.href = product.link;
      } else {
        window.open(product.link, '_blank');
      }
    }
  };

  const products = [
    {
      id: "ebook",
      name: "Online Dating Complete Guide Ebook",
      price: "$49.99",
      description: "Complete guide covering everything you need: create your own AI photos, test which pictures women like best & texting guide to go convert matches to date as soon as possible.",
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
      id: "review",
      name: "Profile Review Service",
      price: "$49.99",
      description: "Get kind-hearted feedback on your dating profile with suggestions for improvement. NO 'brutal honesty' BS. I will be sincere and kind and give you the best suggestion to improve your current results",
      features: [
        "Thorough profile analysis",
        "Genuine, constructive feedback",
        "Strength identification (both physical & about your lifestyle)",
        "Picture suggestions and improvements",
        "Bio optimization recommendations",
        "Personalized action plan"
      ],
      cta: "Get Reviewed",
      ecwid: true,
      popular: false,
      link: "https://your-ecwid-store.com/review"
    },
    {
      id: "combo",
      name: "Ebook + Review Combo",
      price: "$89.99",
      description: "Best value! Get the complete guide plus personalized profile feedback for maximum results.",
      features: [
        "Everything in the ebook",
        "Everything in the review service",
        "Save $19 compared to buying separately",
        "Comprehensive learning + personalization",
        "Priority email support"
      ],
      cta: "Get Combo Deal",
      ecwid: true,
      popular: true,
      link: "https://your-ecwid-store.com/combo"
    },
    {
      id: "premium",
      name: "Premium Optimization Service",
      price: "$250",
      description: "Full-service profile and photo optimization with personal consultation. Limited availability.",
      features: [
        "Complete profile makeover",
        "Get 8 AI pics of yourself",
        "30 minutes call before we begin to understad your goals and situation",
        "30 minutes call 10 days later to understand how it went and what we need to adjust",
        "Personalized strategy development",
        "Limited to select clients only"
      ],
      cta: "Contact for Premium Service",
      ecwid: false,
      popular: false,
      note: "Not available through standard purchase. Requires bank transfer and 10 mins Google Meet call to ensure we're a good match.",
      link: "mailto:getDatesWithAI@proton.me?subject=Premium Service Inquiry"
    }
  ];

  return (
    <section id="products" className="section">
      <div className="container">
        <header className="section-title">
          <h2>Choose Your Path to Dating Success</h2>
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
    </section>
  );
};

export default Products;
