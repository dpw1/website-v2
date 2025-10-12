import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import EthicalAI from './components/EthicalAI';
import Reviews from './components/Reviews';
import Introduction from './components/Introduction';
import Products from './components/Products';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Popup from './components/Popup';

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
      <Popup />
    </div>
  );
}

export default App;
