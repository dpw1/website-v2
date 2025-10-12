import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import EthicalAI from './components/EthicalAI';
import Reviews from './components/Reviews';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reviews />
      <ValueProposition />
      {/* <EthicalAI /> */}
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
