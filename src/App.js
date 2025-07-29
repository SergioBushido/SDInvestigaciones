import React, { useState } from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppProvider>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </AppProvider>
  );
}

export default App; 