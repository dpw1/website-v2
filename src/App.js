import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Introduction from './components/Introduction';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PromoSlide from './components/PromoSlide';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <CopiedContent /> */}
      <Reviews />
      <Introduction />
      {/* <ValueProposition /> */}
      {/* <EthicalAI /> */}
    
      <FAQ />
      <ContactForm />
      <Footer />
      {/* <Popup /> */}
      <PromoSlide />
      <StickyButton />
    </div>
  );
}

export default App;
