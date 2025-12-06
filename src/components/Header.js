import React, { useState, useEffect } from 'react';
import appConfig from '../config/appConfig.json';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
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
              <li><button onClick={() => scrollToSection('ethical')}>About</button></li>
              <li 
                className="nav-dropdown"
                onMouseEnter={() => !isMobileMenuOpen && setIsServicesOpen(true)}
                onMouseLeave={() => !isMobileMenuOpen && setIsServicesOpen(false)}
              >
                <button 
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setIsServicesOpen(!isServicesOpen);
                    }
                  }}
                >
                  Services
                </button>
                <ul className={`dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
                  <li><button onClick={() => scrollToSection('products')}>AI Dating Photos</button></li>
                  <li><button onClick={() => scrollToSection('products')}>Editing</button></li>
                </ul>
              </li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
            <a 
              className="btn btn-primary header-cta"
              href={FREE_SAMPLE_FORM_URL}
            >
              FREE dating photo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
