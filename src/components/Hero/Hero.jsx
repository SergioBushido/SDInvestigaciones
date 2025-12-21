import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  /* scrollToSection removed as it was unused and buttons use inline logic */

  return (
    <section id="inicio" class="hero">
      <div class="hero-underlay" />
      <img 
        src="/hero-bg.avif"
        alt="Agencia de Detectives en Tenerife" 
        class="hero-bg-image"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
      
      <div class="hero-content">
        <h1>
          {t().hero.title}
          <br />
          <span class="highlight">{t().hero.titleHighlight}</span>
        </h1>
        <h2>{t().hero.subtitle}</h2>
        
        <div class="hero-buttons">
          <button onClick={() => {
            const el = document.getElementById('contacto');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} class="btn btn-primary">
            {t().hero.buttons.consulta}
          </button>
          <button onClick={() => {
            const el = document.getElementById('servicios');
            el?.scrollIntoView({ behavior: 'smooth' });
          }} class="btn btn-outline">
            {t().hero.buttons.servicios}
          </button>
        </div>
        </div>
    </section>
  );
};

export default Hero;
