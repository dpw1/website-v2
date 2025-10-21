import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Introduction from './components/Introduction';
import Products from './components/Products';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Popup from './components/Popup';
import PromoSlide from './components/PromoSlide';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reviews />
      <Introduction />
      {/* <ValueProposition /> */}
      {/* <EthicalAI /> */}
      <Products />
      <FAQ />
      <ContactForm />
      <Footer />
      {/* <Popup /> */}
      <PromoSlide />
    </div>
  );
}

export default App;
