import React from 'react';
import HtmlContent from './HtmlContent';

const ValueProposition = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="value-proposition" className="section">
      <div className="container">
        <header className="section-title">
          <h2>Why this works for every man</h2>
          <HtmlContent content="A little bit about me and why this works for everyone" tag="p" className="section-subtitle" />
        </header>

        <div className="value-proposition-paragraphs">
          <h3 className="section-content-title">My Story</h3>
          <p className="paragraph-text">This is my experience of 12 years condensed in a practical guide to help any average man get more dates.</p>
          <p className="paragraph-text">I started this journey 12 years ago. Even during my childhood, I had a natural obsession with women: at 7 years old, I would buy gifts for the girls in my class.</p>
          <p className="paragraph-text">I have always been a skinny man (ranging between 125lb - 145lb) of average height (5'9), with acne for years. I'm not bad-looking, but I am not a model either: just an average man.</p>
          <p className="paragraph-text">Still, I live a life many would consider impossible or just pure lying: unless you're 6+ feet, have a six-pack, are handsome and rich, you can't be with so many women! Fortunately, this is a lie that I will happily debunk.</p>
          <p className="paragraph-text">For all these years, I kept it a secret, and now I want to help others with what I learned the hard way. Years of loneliness, solitude, and sexual frustration-something I see many men in this day and age going through.</p>
        </div>

        <div className="additional-content-block">
          <h3 className="additional-content-title">Why This Course Is Unique</h3>
          <div className="additional-content-paragraphs">
            <p className="paragraph-text">Competitors will charge you more than the price of this book just to make a limited number of pictures that may not even work.</p>
            <p className="paragraph-text">In this book, you will learn how to create as many images as you want, as well as understand what type of pictures work.</p>
            <p className="paragraph-text">I will show you exactly how to make the images, as well as how to find the cheapest services online to generate AI images and the correct prompts to achieve the best results.</p>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h3>The Reality of Modern Dating</h3>
            <ul className="feature-list">
              <li>Dating apps are more competitive than ever</li>
              <li>Most men struggle to get quality matches</li>
              <li>Even when you match, converting to dates is challenging</li>
              <li>Generic advice doesn't work for real-world situations</li>
            </ul>
          </div>

          <div className="card">
            <h3>My Approach: Actual Actionable Steps</h3>
            <ul className="feature-list">
           <li>Understand what type of pictures get matches and how to create them</li>
              <li>Focus on getting real dates, not collecting matches</li>
              <li>Teaches you how to text, express yourself and pursue</li>
              <li>Works for both experienced and completely inexperienced men</li>
            </ul>
          </div>
        </div>

        <div className="key-takeaways-section">
          <header className="section-title">
            <h2>Online Dating Mastery: Key Takeaways</h2>
            <HtmlContent content="This guide is your full blueprint for leveling up your dating life, focusing on <strong>mindset, strategy, and actionable steps</strong>. It's designed to show the average man how to build a satisfying dating life through consistent effort and smart choices." tag="p" className="section-subtitle" />
          </header>
          
          <div className="grid grid-2">
            <div className="card">
              <h3>Profile & Visibility</h3>
              <ul className="feature-list">
                <li><HtmlContent content="<strong>Attraction Basics:</strong> Learn how to craft a profile that highlights your natural appeal and tells a compelling visual story, making you more attractive to matches." /></li>
                <li><HtmlContent content="<strong>Smart Imaging:</strong> Discover the types of photos that grab attention, showcase an appealing lifestyle, and subtly signal traits like confidence, social influence, and competence." /></li>
                <li><HtmlContent content="<strong>Profile Optimization:</strong> Get practical tips on what to avoid in your photos, how to order your images, and simple ways to test which ones perform best." /></li>
                <li><HtmlContent content="<strong>Platform Strategy:</strong> Understand which dating and social apps work best for your goals and how to use them strategically to maximize your reach." /></li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Messaging & Conversion</h3>
              <ul className="feature-list">
                <li><HtmlContent content="<strong>Conversation Skills:</strong> Learn proven techniques to start and maintain engaging conversations, focusing on curiosity and genuinely understanding the other person." /></li>
                <li><HtmlContent content="<strong>First Impressions Matter:</strong> Master your initial message so it gets a reply and sets the conversation on the right track." /></li>
                <li><HtmlContent content="<strong>Asking Her Out:</strong> Know the right timing and approach to move your matches from chat to casual, low-pressure real-life dates." /></li>
              </ul>
            </div>
            
            <div className="card">
              <h3>The Real-Life Date</h3>
              <ul className="feature-list">
                <li><HtmlContent content="<strong>Relax and Enjoy:</strong> The key to great dates is to stay relaxed, have fun, and be your best self-without feeling like you need to &quot;perform.&quot;" /></li>
                <li><HtmlContent content="<strong>Connection & Chemistry:</strong> Learn how to be genuinely interested, flirt naturally, and build sexual tension in a comfortable way." /></li>
                <li><HtmlContent content="<strong>Escalation:</strong> Get guidance on reading signals, knowing if a date is going well, and when and how to escalate intimacy appropriately." /></li>
                <li><HtmlContent content="<strong>Tips for Beginners:</strong> If you're new to dating, find practical advice for building confidence, managing nerves, and handling first-time experiences." /></li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Mindset & Fulfillment</h3>
              <ul className="feature-list">
                <li><HtmlContent content="<strong>Mindset First:</strong> Techniques matter, but your mindset is everything. Approach dating with confidence, curiosity, and the right perspective." /></li>
                <li><HtmlContent content="<strong>Redefining Success:</strong> Shift from ego-driven pursuits to genuine fulfillment, focusing on connection, confidence, and taking control of your dating life." /></li>
                <li><HtmlContent content="<strong>The Big Picture:</strong> The ultimate goal is becoming the best version of yourself, avoiding common mistakes, and developing real curiosity and respect for women as individuals." /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="promise-section">
          <h3 className="promise-text">Join the top 1% of men who understand how to navigate modern dating successfully</h3>
          <button 
            className="btn btn-secondary"
            onClick={scrollToProducts}
          >
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
