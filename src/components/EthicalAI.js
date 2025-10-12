import React from 'react';
import HtmlContent from './HtmlContent';

const EthicalAI = () => {
  return (
    <section className="section">
      <div className="container">
        <header className="section-title">
          <h2>Ethical AI Usage for Dating</h2>
          <HtmlContent content="Using Technology Responsibly to Enhance Your Authentic Self" tag="p" className="section-subtitle" />
        </header>

        <div className="grid grid-2">
          <div className="card">
            <h3>My Ethical Approach</h3>
            <p>I believe AI should enhance your authentic self, not create a false persona. My methods teach you to use AI as a tool to better represent who you truly are, not to deceive or mislead potential matches.</p>
            <ul className="feature-list">
              <li>No fake luxury lifestyles or meaningless Ferrari photos</li>
              <li>AI is a means to an end when used with good intent</li>
              <li>Focus on realistic, casual smartphone-style photos</li>
              <li>How to showcase your best physical features, lifestyle & skills</li>
            </ul>
          </div>

          <div className="card">
            <h3>The Most Realistic AI Photo Method</h3>
            <p>My approach teaches you to generate photos that look natural and authentic - the kind of photos you'd actually take with your smartphone. No 'photoshoot-ish' looks that scream 'this is AI generated'.</p>
            <ul className="feature-list">
              <li>Casual, everyday scenarios</li>
              <li>Natural lighting and poses</li>
              <li>Smartphone-style composition</li>
              <li>Authentic expressions and body language</li>
            </ul>
          </div>
        </div>

        <div className="examples-section">
          <div className="card">
            <h3>Judge for Yourself</h3>
            <p>See examples of my AI-generated photos below. Notice how they look like natural, casual photos you'd take yourself - not obvious AI creations.</p>
            <p className="examples-note">These examples demonstrate the realistic, authentic style I teach in my guide.</p>
            
            {/* Placeholder for example images */}
            <div className="example-images">
              <div className="example-placeholder">
                <p>Example AI Photo 1</p>
                <small>Casual, natural lighting</small>
              </div>
              <div className="example-placeholder">
                <p>Example AI Photo 2</p>
                <small>Smartphone-style composition</small>
              </div>
              <div className="example-placeholder">
                <p>Example AI Photo 3</p>
                <small>Authentic expression</small>
              </div>
            </div>
          </div>
        </div>

        <div className="transparency-section">
          <div className="card">
            <h3>Complete Transparency</h3>
            <p>I'm upfront about using AI tools because I believe in ethical dating practices. The goal is to help you present your best authentic self, not to deceive anyone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalAI;
