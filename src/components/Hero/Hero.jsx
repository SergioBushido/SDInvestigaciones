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
      <div class="hero-underlay"></div>
      <img 
        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=20&fm=avif" 
        srcset="
          https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=480&q=20&fm=avif 480w,
          https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=640&q=20&fm=avif 640w,
          https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1024&q=20&fm=avif 1024w,
          https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=20&fm=avif 1920w
        "
        sizes="100vw"
        alt="Hero Background" 
        class="hero-bg-image" 
        fetchpriority="high"
        width="1920"
        height="1080"
      />
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
