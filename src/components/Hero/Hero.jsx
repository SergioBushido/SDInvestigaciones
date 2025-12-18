import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" class="hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          {/* Título principal con resaltado */}
          <h1 class="hero-title">
            {t().hero.title} <span class="highlight">{t().hero.titleHighlight}</span>
          </h1>

          {/* Subtítulo */}
          <p class="hero-subtitle">
            {t().hero.subtitle}
          </p>

          {/* Características destacadas */}
          <div class="hero-features">
            <div class="feature">
              <span class="feature-icon">🔒</span>
              <span>{t().hero.features.confidencial}</span>
            </div>
            <div class="feature">
              <span class="feature-icon">⚡</span>
              <span>{t().hero.features.rapidos}</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✅</span>
              <span>{t().hero.features.garantia}</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div class="hero-buttons">
            <button class="btn btn-primary" onClick={() => scrollToSection('contacto')}>
              {t().hero.buttons.consulta}
            </button>
            <button class="btn btn-secondary" onClick={() => scrollToSection('servicios')}>
              {t().hero.buttons.servicios}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
