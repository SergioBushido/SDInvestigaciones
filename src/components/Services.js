import React from 'react';
import './Services.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Services = () => {
  const { language } = useAppContext();
  const t = translations[language];

  const services = t.services.items;

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-subtitle">
          {t.services.subtitle}
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card fade-in-up">
              <div className="service-icon">
                {['🔍', '👥', '🏢', '💰', '📱', '🚗'][index]}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>{t.services.cta.text}</p>
          <button
            className="btn"
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.services.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 