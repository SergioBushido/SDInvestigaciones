import React from 'react';
import './Footer.css';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useAppContext();
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🔍 SD INVESTIGACIONES</h3>
            <p>
              {t.footer.description}
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📱 {t.footer.social.whatsapp}</a>
              <a href="#" className="social-link">📧 {t.footer.social.email}</a>
              <a href="#" className="social-link">📞 {t.footer.social.phone}</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>{t.footer.links.services}</h4>
            <ul className="footer-links">
              {t.services.items.map((service, index) => (
                <li key={index}><a href="#servicios">{service.title}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Información</h4>
            <ul className="footer-links">
              <li><a href="#sobre-nosotros">{t.footer.links.about}</a></li>
              <li><a href="#contacto">{t.footer.links.contact}</a></li>
              <li><a href="#">{t.footer.links.privacy}</a></li>
              <li><a href="#">{t.footer.links.terms}</a></li>
              <li><a href="#">{t.footer.links.legal}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t.footer.links.contact}</h4>
            <div className="contact-info">
              <p>📞 643697615</p>
              <p>📧 sdinvestigaciones@gmail.com</p>
              <p>📍 Candelaria, 38530, Santa Cruz De Tenerife, Spain</p>
              <p>⏰ Lun-Vie: 9:00-18:00</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SD INVESTIGACIONES. {t.footer.copyright}</p>
            <button onClick={scrollToTop} className="scroll-top">
              ↑ {t.footer.scrollTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 