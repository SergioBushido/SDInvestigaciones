import React from 'react';
import './Header.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { language, changeLanguage, isDarkMode, toggleTheme } = useAppContext();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.svg" alt="SD INVESTIGACIONES" className="logo-image" />
            <h2>SD INVESTIGACIONES</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('inicio')}>{t.nav.inicio}</button></li>
              <li><button onClick={() => scrollToSection('servicios')}>{t.nav.servicios}</button></li>
              <li><button onClick={() => scrollToSection('sobre-nosotros')}>{t.nav.sobreNosotros}</button></li>
              <li><button onClick={() => scrollToSection('contacto')}>{t.nav.contacto}</button></li>
            </ul>
          </nav>

          <div className="header-controls">
            <div className="language-flags">
              <button 
                className={`flag-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => changeLanguage('es')}
                title="Español"
              >
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" fill="#C60B1E"/>
                  <rect width="20" height="7.5" fill="#FFC400"/>
                  <rect width="20" height="3.75" fill="#C60B1E"/>
                </svg>
              </button>
              <button 
                className={`flag-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                title="English"
              >
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" fill="#012169"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1"/>
                  <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="3"/>
                  <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1.5"/>
                </svg>
              </button>
              <button 
                className={`flag-btn ${language === 'de' ? 'active' : ''}`}
                onClick={() => changeLanguage('de')}
                title="Deutsch"
              >
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="5" fill="#000000"/>
                  <rect y="5" width="20" height="5" fill="#DD0000"/>
                  <rect y="10" width="20" height="5" fill="#FFCE00"/>
                </svg>
              </button>
            </div>

            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 