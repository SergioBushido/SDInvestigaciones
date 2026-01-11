import { For } from "solid-js";
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import { useNavigate, useLocation, A } from '@solidjs/router';
import './Header.css';

const Header = (props) => {
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  const t = () => translations[language()];

  /* Estos hooks SÓLO funcionarán si Header está dentro del <Router>. */
  const navigate  = useNavigate();
  const location  = useLocation();

  /* Scroll o navegación */
  const scrollToSection = (id) => {
    const go = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    /* Si no estamos en la home, ve a la home y luego haz scroll  */
    const homePath = `/${language()}`;
    const currentPath = location.pathname.replace(/\/$/, ''); // Remove trailing slash
    
    // Check if we are already at home (e.g. /es or /es/)
    if (currentPath !== homePath && currentPath !== homePath + '/') {
      navigate(homePath);
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
            <img src="/logo-fox.webp" alt="SD INVESTIGACIONES" class="logo-image" />
            <h2>SDinvestigaciones</h2>
          </div>

          <nav class={`nav ${props.isMenuOpen ? 'nav-open' : ''}`}>
            <ul class="nav-list">
              <li>
                <A 
                  href={`/${language()}#inicio`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
                >
                  {t().nav.inicio}
                </A>
              </li>
              <li>
                <A 
                  href={`/${language()}#servicios`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}
                >
                  {t().nav.servicios}
                </A>
              </li>
              <li>
                <A 
                  href={`/${language()}#sobre-nosotros`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection('sobre-nosotros'); }}
                >
                  {t().nav.sobreNosotros}
                </A>
              </li>
              <li>
                <A 
                  href={`/${language()}#contacto`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
                >
                  {t().nav.contacto}
                </A>
              </li>
            </ul>
          </nav>

          <div class="header-controls">
            {/* Selector de idioma con banderas */}
            <div class="language-flags" aria-label="Seleccionar idioma">
              <For each={languages}>{(lang) => (
                <button
                  type="button"
                  class={`flag-btn ${language() === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                  title={lang.label}
                >
                  {flags[lang.code]}
                  <span class="sr-only">{lang.label}</span>
                </button>
              )}</For>
            </div>

            <button class="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode() ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2 L12 6 M12 18 L12 22 M22 12 L18 12 M6 12 L2 12"/>
                  <path d="M17.66 6.34 L15.54 8.46 M8.46 15.54 L6.34 17.66"/>
                  <path d="M17.66 17.66 L15.54 15.54 M8.46 8.46 L6.34 6.34"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>

          <div
            class={`hamburger ${props.isMenuOpen ? 'active' : ''}`}
            onClick={() => props.setIsMenuOpen?.(!props.isMenuOpen)}
          >
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
