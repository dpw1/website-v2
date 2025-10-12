import React, { useState } from 'react';
import HtmlContent from './HtmlContent';

// IMPORTANT: Always use template literals (backticks) for FAQ answers to avoid quote escaping issues
const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const questions = [
 
    {
      question: `What age range does this work for?`,
      answer: `I have worked with men aged between 18-55. The principles of expressing yourself and showing interest (which is what seduction is all about), are universal. However, I do provide age-specific advice and examples throughout the guide.`
    },
    {
      question: `How realistic do the AI photos look?`,
      answer: `My AI photos make you look slightly better than reality while maintaining authenticity. They enhance your best features without creating a false persona. The method I teach focuses on realistic, casual smartphone-style photos that look natural.`
    },
    {
      question: `How do I create AI images?`,
      answer: `There are online services that will generate AI images for you. I will show you how to find the cheapest services online to generate AI images and the correct prompts to achieve the best results. You will also need to take new pictures of yourself at home, which I will show you in details how to do to achieve the best results.`
    },
    {
      question: `Will the photos look realistic and not 'AI-ish'?`,
      answer: `Yes. When you're generating AI images, some will come out great, others not so great. For the \`not so great\` ones (meaning: they look AI-ish), it's better to use them in a lower resolution or apply a \`realistic skin filter\` which I cover in the guide. It's a matter of trial and error.<br><br>With my method I'll show you to get images as realistic as possible, with the casual smartphone-style photos.<br>`
    },
    {
      question: `Can dating apps detect AI photos?`,
      answer: `As of yet there is no proof that dating apps can detect AI-generated photos, especially the realistic ones that are taught here.`
    },
    {
      question: `Do I need a powerful computer?`,
      answer: `No, you don't need a powerful computer. The AI services I recommend run through websites, so you just need internet access.`
    },
      {
        question: `Will I get banned for using AI photos?`,
        answer: `Dating apps don't explicitly ban AI photos, they require authenticity (in other words: making sure you look the same as in your pictures).<br><br>My approach focuses on enhancing your authentic self rather than creating false personas. For reference, here are the official guidelines: <a href='https://hinge.co/ai-principles' target='_blank' rel='noopener noreferrer'>Hinge AI Principles</a>, <a href='https://policies.tinder.com/community-guidelines/intl/en/' target='_blank' rel='noopener noreferrer'>Tinder Community Guidelines</a>, and <a href='https://bumble.com/en-us/guidelines' target='_blank' rel='noopener noreferrer'>Bumble Community Guidelines</a>. I teach ethical practices that align with these policies.`
      },
      {
        question: `Can I go on X dates a week?`,
        answer: `You will definitely go on more dates, but it's important to be realistic about the possibilities. This is something I go in-depth in the book. There's a concept of 'natural attractiveness' (height, bone structure, good genetics, etc.) and 'controlled attractiveness' (style, grooming, haircuts/beards that suit your face, being in shape, etc.).<br><br>

If man X and man Y look exactly the same, but man X is overweight and doesn’t care about his appearance, and man Y is well-groomed and fit (not jacked), it's obvious that man Y will have an easier time. A man who is overweight and not taking care of his life will not have the same opportunities.`
      },
    {
      question: `What's the difference between perceived value and actual value?`,
      answer: `When it comes to online dating, your actual value doesn't reflect your perceived value.<br><br>

For example, say you look super attractive and you have an amazing personality, but still get no matches on online dating: this means you're not portraying yourself in the best light.<br><br>

With the AI images guide, you'll be able to generate pictures that will help you counter that and show your looks/personality in the best way possible. A man who looks average or even below average can still appear more attractive and get more real-life dates/sex than a man who's super attractive but has pictures that are not attractive.`
    },
    {
      question: `How long does it take to apply what I learn here?`,
      answer: `I have had clients who had no prior experience creating their profiles within 24 hours and going on dates within 3 days. Seriously. You read the book in a few hours, create your pictures in a few hours, and then hop onto the dating app and start getting matches. You'll use the texting guide you learned there to start converting these. If you're not experienced with women yet, it may take you a bit longer, I'd say that on average 5 - 10 days to get your first date. If you live in a small city it may take longer.`
    },
    {
      question: `Can women tell the pics are AI?`,
      answer: `So far, I have not had any women calling me or my clients out about being AI. It's possible that some of them suspect though, and I teach in the book how to quickly prove your 'realness' and put her at ease once you start chatting.`
    },
    {
      question: `Isn't this catfishing/unethical?`,
      answer: `No. The definition of catfishing is: "a person who deceives someone online by means of a fictional or assumed persona, especially with the aim of luring them into a relationship." With AI pictures you are just portraying yourself under the best light. The pictures will still look like you. If you want to actually improve your looks, you can use apps like FaceApp after the images are generated.`
    },
    {
      question: `Can I use "Online Dating Mastery Ebook" without AI images?`,
      answer: `Absolutely! You can use the <a href='#products' onclick='document.getElementById("products").scrollIntoView({behavior: "smooth"})'>Online Dating Mastery Ebook</a> with your real images and still have good results if you have decent pictures.`
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
