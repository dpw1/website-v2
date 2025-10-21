import React, { useState, useEffect } from 'react';
import './PromoSlide.css';

const PromoSlide = () => {
  // Configurable delay variable (in milliseconds)
  const POPUP_DELAY = 4000; // 4 seconds
  
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Cookie utility functions
  const setCookie = (name, value, hours) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    // Check if user has previously dismissed the slide
    const dismissed = getCookie('promoSlideDismissed');
    if (dismissed === 'true') {
      setIsClosed(true);
      return;
    }

    // Show the slide after the configured delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store dismissal in cookie for 48 hours
    setCookie('promoSlideDismissed', 'true', 48);
    // After animation completes, mark as closed
    setTimeout(() => {
      setIsClosed(true);
    }, 300);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className={`promo-slide ${isVisible ? 'visible' : ''}`}>
      <div className="promo-slide-content">
        <button className="promo-slide-close" onClick={handleClose}>
          ×
        </button>
        
        <div className="promo-slide-body">
          <h3>Download our FREE ebook on online dating basics</h3>
          
          <ul className="promo-slide-list">
            <li>Learn what pictures ACTUALLY get matches</li>
            <li>First message strategies</li>
            <li>Texting guide to keep conversation going</li>
            <li>How to ask on a date the right way</li>
            <li>How to escalate naturally in real life date</li>
          </ul>
          
          <a 
            href="https://getdateswithai.gumroad.com/l/wrutga"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-slide-cta"
          >
            Get Free Ebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoSlide;
