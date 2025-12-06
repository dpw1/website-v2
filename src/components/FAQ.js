import React, { useState } from 'react';
import HtmlContent from './HtmlContent';

// IMPORTANT: Always use template literals (backticks) for FAQ answers to avoid quote escaping issues
const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const questions = [
 
    {
      question: `What age range does this work for?`,
      answer: `I have worked with men aged between 18-55. The principles of expressing yourself and showing interest (which is what seduction is all about), are universal. However, I do provide age-specific advice and examples.`
    },
    {
      question: `How realistic do the AI photos look?`,
      answer: `My AI photos make you look slightly better than reality while maintaining authenticity. They enhance your best features without creating a false persona. The method I teach focuses on realistic, casual smartphone-style photos that look natural.`
    },
  

    {
      question: `Can dating apps detect AI photos?`,
      answer: `Popular image generators like Gemini, chatGPT, Grok, Flux and others, all come with an invisible watermark that makes it easy for social apps to detect it's AI generated.<br><br>We use our own solution which bypasses that. As of yet there is no proof that dating apps can detect AI-generated photos, especially the realistic ones that we make here.`
    },

      {
        question: `Will I get banned for using AI photos?`,
        answer: `No. Dating apps don't explicitly ban AI photos, they require authenticity (in other words: making sure you look the same as in your pictures).<br><br>My approach focuses on enhancing your authentic self rather than creating false personas. For reference, here are the official guidelines: <a href='https://hinge.co/ai-principles' target='_blank' rel='noopener noreferrer'>Hinge AI Principles</a>, <a href='https://policies.tinder.com/community-guidelines/intl/en/' target='_blank' rel='noopener noreferrer'>Tinder Community Guidelines</a>, and <a href='https://bumble.com/en-us/guidelines' target='_blank' rel='noopener noreferrer'>Bumble Community Guidelines</a>. I teach ethical practices that align with these policies.` 
      },
    {
      question: `Aren't AI images catfishing/unethical?`,
      answer: `The ethics behind AI images depend on how you use them. If you create images of yourself in a Lamborghini or a mansion when you've never been in those situations, that's not right. However, if you use AI to generate images of yourself in places you've actually been or in neutral settings, there's nothing unethical about it.<br><br>In fact, I believe the amount of filters people use to dramatically alter their appearance is far more unethical than using AI images. With our method, you'll look like your actual self—just presented in the best possible light.<br><br>That being said, you can always use AI as a temporary solution: use AI pictures to get matches, meet nice women, go on real adventures with them, and then take new authentic pictures together.`
    },
  ];

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="container">
        <header className="section-title">
          <h2>Frequently Asked Questions</h2>
          <HtmlContent content="Everything You Need to Know" tag="p" className="section-subtitle" />
        </header>

        <div className="faq-container">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <h4>{item.question}</h4>
                <span className={`faq-toggle ${openItems[index] ? 'open' : ''}`}>
                  +
                </span>
              </div>
              {openItems[index] && (
                <div className="faq-answer">
                  <HtmlContent content={item.answer} tag="p" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
