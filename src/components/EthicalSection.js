import React from 'react';

const EthicalSection = () => {
  return (
    <section id="ethical" className="section">
      <div className="container">
        <header className="section-title">
          <h2>Isn't this unethical/catfishing?</h2>
          <p className="section-subtitle">Understanding the difference between enhancement and deception</p>
        </header>
        
        <div className="ethical-content">
          <div className="ethical-text">
            <p className="paragraph-text">
              The definition of catfish is depiction - showing an image that does not resemble you, usually through heavy filters or old photos.
            </p>
            <p className="paragraph-text">
              Your AI images will look exactly like you. They will not look "beautified" nor do they have filters.
            </p>
            <p className="paragraph-text">
              Even if AI is not your preferred method, think of AI pictures as a <u>temporary solution</u>: use AI pics, meet women in real life, go on adventures & take new pictures.
            </p>
            <p className="paragraph-text">
              Not only that, but now you know what type of pictures actually work: your best picture is a hiking one? Cool, get a few friends you met thanks to your AI pictures and snap some of those IRL.
            </p>
       
          </div>
          
          <div className="ethical-image">
            <img 
              src="/images/success/1.png" 
              alt="Success story example"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalSection;

