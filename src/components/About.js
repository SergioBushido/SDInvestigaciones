import React from 'react';
import './About.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useAppContext();
  const t = translations[language];

  const stats = t.about.stats;
  const values = t.about.values;

  return (
    <section id="sobre-nosotros" className="section about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>{t.about.subtitle}</h3>
            {t.about.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <div className="about-features">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">{['🔒', '⚖️', '🎯', '🤝'][index]}</div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="cta-content">
            <h3>{t.about.cta.title}</h3>
            <p>
              {t.about.cta.description}
            </p>
            <button
              className="btn"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.about.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 