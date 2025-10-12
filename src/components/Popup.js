import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Popup = () => {
  // Configuration variables
  const SHOW_DELAY_SECONDS = 60; // How long to wait before showing popup (in seconds)
  const COOKIE_DURATION_DAYS = 3; // How long to remember popup was closed (in days)
  const COOKIE_NAME = 'popup_closed';

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cookie utility functions
  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
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
    // Check if popup was recently closed
    const popupClosed = getCookie(COOKIE_NAME);
    
    if (!popupClosed) {
      // Show popup after specified delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, SHOW_DELAY_SECONDS * 1000); // Convert seconds to milliseconds

      return () => clearTimeout(timer);
    }
  }, []);


  const closePopup = () => {
    setIsVisible(false);
    // Set cookie to remember popup was closed
    setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8a152361-325f-46ee-b587-fff6b5940651",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        closePopup(); // Close popup after successful submission
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal 
      isOpen={isVisible} 
      onClose={closePopup}
      className="popup-form"
      title="Not sure yet? Let's talk."
    >
      <p>Let's hop on a quick 10 mins call and I can help you decide the best course of action.</p>
      
      <form onSubmit={handleSubmit} className="popup-contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Tell me about your dating goals..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Modal>
  );
};

export default Popup;
