import React, { useState } from 'react';
import appConfig from '../config/appConfig.json';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 style={{ fontSize: '20px' }}>{appConfig.productName}</h1>
          </div>
          
          {/* Mobile burger menu button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>

          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li><button onClick={() => scrollToSection('value-proposition')}>Why It Works</button></li>
              <li><button onClick={() => scrollToSection('ethical-ai')}>Ethical AI</button></li>
              <li><button onClick={() => scrollToSection('reviews')}>Reviews</button></li>
              <li><button onClick={() => scrollToSection('products')}>Products</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
            </ul>
            <button 
              className="btn btn-primary header-cta"
              onClick={() => scrollToSection('products')}
            >
              Get Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
