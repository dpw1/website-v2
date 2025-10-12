import React, { useState } from 'react';
import HtmlContent from './HtmlContent';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const questions = [
    {
      question: "What's your refund policy?",
      answer: "Since this is a digital product, I don't offer refunds. However, if you don't get any matches after 10 days of implementing my strategies, I'll provide email support to help you troubleshoot and improve your results. I'm committed to your success."
    },
    {
      question: "What age range does this work for?",
      answer: "I have worked with men aged between 18-55. The principles of expressing yourself and showing interest (which is what seduction is all about), are universal. However, I do provide age-specific advice and examples throughout the guide."
    },
    {
      question: "How realistic do the AI photos look?",
      answer: "My AI photos make you look slightly better than reality while maintaining authenticity. They enhance your best features without creating a false persona. The method I teach focuses on realistic, casual smartphone-style photos that look natural."
    },
    {
      question: "How do I create AI images?",
      answer: "You'll need to do a small photoshoot at home with good lighting. The ebook includes detailed instructions on how to take the right photos and use AI tools to generate realistic, attractive images that represent your authentic self."
    },
    {
      question: "Will the photos look realistic and not 'AI-ish'?",
      answer: "Yes! My method specifically teaches you to create realistic, casual smartphone-style photos. I avoid the 'photoshoot-ish' look that screams 'AI generated.' The goal is photos that look like natural, everyday pictures you'd take yourself."
    },
    {
      question: "Can dating apps detect AI photos?",
      answer: "No, dating apps cannot detect AI-generated photos. The technology used by dating apps focuses on detecting fake accounts and spam, not AI-enhanced photos. My methods create photos that are indistinguishable from regular photos."
    },
    {
      question: "Do I need a powerful computer?",
      answer: "No, you don't need a powerful computer. The AI services I recommend run through websites, so you just need internet access. However, I recommend using a computer rather than a phone for ease of use and better results."
    },
    {
      question: "Will I get banned for using AI photos?",
      answer: "Dating apps don't explicitly ban AI photos, but they do require authenticity. My approach focuses on enhancing your authentic self rather than creating false personas. For reference, here are the official guidelines: Hinge Community Guidelines (https://hinge.co/community-guidelines), Tinder Community Guidelines (https://policies.tinder.com/community-guidelines), and Bumble Community Guidelines (https://bumble.com/community-guidelines). I teach ethical practices that align with these policies."
    },
    {
      question: "Can I go on X dates a week?",
      answer: "You will definitely go on more dates, but it's important to be realistic about the possibilities. This is something I go in depth in the book. There's a concept of 'natural attractiveness' (height, bone structure, good genetics, etc.) and 'controlled attractiveness' (style, grooming, haircut/beards that suit your face, being in shape, etc.). The first one is obviously beyond anyone's control (let's not consider plastic surgery for now). The other is where the right effort can put you above even men with natural attractiveness."
    },
    {
      question: "What's the difference between perceived value and actual value?",
      answer: "When it comes to online dating, your actual value doesn't reflect your perceived value. For example, say you look super attractive but still get no matches on online dating: this means you're not portraying yourself in the best light. With the AI images guide, you'll be able to generate pictures that will help you counter that. A man who looks average or even below average can still appear more attractive and get more real-life dates/sex than a man who's super attractive but has pictures that are not attractive."
    },
    {
      question: "How long does it take to apply what I learn here?",
      answer: "I have had clients who had no prior experience creating their profiles within 24 hours and going on dates within 3 days. Seriously. You read the book in a few hours, create your pictures in a few hours, and then hop onto the dating app and start getting matches. You'll use the texting guide you learned there to start converting these. If you're not experienced with women yet, it may take you a bit longer, I'd say that on average 5 - 10 days to get your first date. If you live in a small city it may take longer."
    },
    {
      question: "Can women tell the pics are AI?",
      answer: "So far, I have not had any women calling me or my clients out about being AI. It's possible that some of them suspect though, and I teach you how to quickly prove your 'realness' and put her at ease in the guide once you start chatting. I also show you how to make the pictures look as non-AI as possible. Bear in mind this technology is quickly evolving, and I'll be updating the guide with every new major tech update. We are months away from a technology where it won't be possible to tell whether it's AI or not."
    }
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
    <section className="section">
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
