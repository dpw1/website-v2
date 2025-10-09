import React from 'react';
import reviewsContent from '../content/reviewsContent.json';
import { processContentObject } from '../utils/contentProcessor';
import HtmlContent from './HtmlContent';

const Reviews = () => {
  const content = processContentObject(reviewsContent);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <header className="section-title">
          <h2>{content.title}</h2>
          <HtmlContent content={content.subtitle} tag="p" className="section-subtitle" />
        </header>

        <div className="reviews-grid">
          {content.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <p className="reviewer-location">{review.location}</p>
                </div>
                <div className="review-rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                </div>
              </div>
              
              <blockquote className="review-text">
                "{review.text}"
              </blockquote>
              
              <div className="review-result">
                <strong>Result: {review.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
