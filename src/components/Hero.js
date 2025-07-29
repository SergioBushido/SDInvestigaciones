import React from 'react';
import './Hero.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const { language } = useAppContext();
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t.hero.title} <span className="highlight">{t.hero.titleHighlight}</span>
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>{t.hero.features.confidencial}</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>{t.hero.features.rapidos}</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>{t.hero.features.garantia}</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              {t.hero.buttons.consulta}
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const element = document.getElementById('servicios');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.hero.buttons.servicios}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 