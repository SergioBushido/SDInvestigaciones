import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import { useNavigate, useLocation } from '@solidjs/router';
import './Header.css';

const Header = (props) => {
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  const t = () => translations[language()];

  /* Estos hooks SÓLO funcionarán si Header está dentro del <Router>. */
  const navigate  = useNavigate();
  const location  = useLocation();
  console.log('🟢 Header dentro del Router:', !!navigate); // debería imprimir true

  /* Scroll o navegación */
  const scrollToSection = (id) => {
    const go = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    /* Si no estamos en la home, ve a la home y luego haz scroll  */
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 100);
    } else {
      go();
    }
    props.setIsMenuOpen?.(false);
  };

  const flags = {
    es: (
      <svg viewBox="0 0 3 2" aria-hidden="true">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y="0.5" width="3" height="1" fill="#F1BF00" />
      </svg>
    ),
    en: (
      <svg viewBox="0 0 60 30" aria-hidden="true">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v-5 h-30 v-10 h-5 v10 h-30 v5 h30 v10 h5 z" />
        </clipPath>
        <g clip-path="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 60,30 M60,0 0,30" stroke="#FFF" stroke-width="6" />
          <path d="M0,0 60,30 M60,0 0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#t)" />
          <path d="M30,0 v30 M0,15 h60" stroke="#FFF" stroke-width="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
        </g>
      </svg>
    ),
    de: (
      <svg viewBox="0 0 5 3" aria-hidden="true">
        <rect width="5" height="1" y="0" fill="#000" />
        <rect width="5" height="1" y="1" fill="#DD0000" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    )
  };

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="/logo.svg" alt="SD INVESTIGACIONES" class="logo-image" />
            <h2>SD INVESTIGACIONES</h2>
          </div>

          <nav class={`nav ${props.isMenuOpen ? 'nav-open' : ''}`}>
            <ul class="nav-list">
              <li><button onClick={() => scrollToSection('inicio')}>{t().nav.inicio}</button></li>
              <li><button onClick={() => scrollToSection('servicios')}>{t().nav.servicios}</button></li>
              <li><button onClick={() => scrollToSection('sobre-nosotros')}>{t().nav.sobreNosotros}</button></li>
              <li><button onClick={() => scrollToSection('contacto')}>{t().nav.contacto}</button></li>
            </ul>
          </nav>

          <div class="header-controls">
            {/* Selector de idioma con banderas */}
            <div class="language-flags" aria-label="Seleccionar idioma">
              {languages.map((lang) => (
                <button
                  type="button"
                  class={`flag-btn ${language() === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                  title={lang.label}
                >
                  {flags[lang.code]}
                  <span class="sr-only">{lang.label}</span>
                </button>
              ))}
            </div>

            <button class="theme-toggle" onClick={toggleTheme}>
              {isDarkMode() ? '☀️' : '🌙'}
            </button>
          </div>

          <div
            class={`hamburger ${props.isMenuOpen ? 'active' : ''}`}
            onClick={() => props.setIsMenuOpen?.(!props.isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
