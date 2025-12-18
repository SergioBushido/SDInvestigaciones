import { For } from 'solid-js';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './About.css';

const About = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre-nosotros" class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            
            {/* Títulos */}
            <h2 class="section-title">{t().about.title}</h2>
            <h3 class="section-subtitle">{t().about.subtitle}</h3>

            {/* Descripción principal */}
            <For each={t().about.description}>
              {(paragraph) => (
                <p class="about-description">
                  {paragraph}
                </p>
              )}
            </For>

            {/* Valores */}
            <div class="values-grid">
              <For each={t().about.values}>
                {(value) => (
                  <div class="value-card">
                    <h4 class="value-title">{value.title}</h4>
                    <p class="value-description">{value.description}</p>
                  </div>
                )}
              </For>
            </div>

            {/* Estadísticas */}
            <div class="stats-grid">
              <For each={t().about.stats}>
                {(stat) => (
                  <div class="stat-card">
                    <div class="stat-number">{stat.number}</div>
                    <div class="stat-label">{stat.label}</div>
                  </div>
                )}
              </For>
            </div>

            {/* Llamada a la acción */}
            <div class="about-cta">
              <h3>{t().about.cta.title}</h3>
              <p>{t().about.cta.description}</p>
              <button class="btn btn-primary" onClick={scrollToContact}>
                {t().about.cta.button}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
