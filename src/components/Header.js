import React, { useState, useEffect } from 'react';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

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
              <li><button onClick={() => scrollToSection('reviews')}>Reviews</button></li>
              <li><button onClick={() => scrollToSection('introduction')}>About</button></li>
              <li><button onClick={() => scrollToSection('products')}>Products</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
            <button 
              className="btn btn-primary header-cta"
              onClick={() => scrollToSection('products')}
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
