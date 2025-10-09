import React from 'react';
import appConfig from '../config/appConfig.json';

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 style={{ fontSize: '20px' }}>{appConfig.productName}</h1>
          </div>
          <nav className="header-nav">
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
