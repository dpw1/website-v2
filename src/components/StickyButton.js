import React from 'react';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';

const StickyButton = () => {
  return (
    <div className="sticky-button-container">
      <div className="sticky-message">
        <p>
          We are working only with the next <strong className="highlight-number">4 people</strong> sending a free AI photo. This is <u><strong className="highlight-not">NOT marketing</strong></u>, we <strong className="highlight-legit">legit</strong> have only <strong className="highlight-limited">limited resources</strong> for this. <strong className="highlight-hurry">Hurry</strong> and <strong className="highlight-reserve">reserve your spot</strong>
        </p>
      </div>
      <a 
        className="sticky-button btn btn-primary"
        href={FREE_SAMPLE_FORM_URL}
      >
        Yes I want a free AI dating photo
      </a>
    </div>
  );
};

export default StickyButton;

