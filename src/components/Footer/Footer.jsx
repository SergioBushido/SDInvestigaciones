import { For } from 'solid-js';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './Footer.css';

let useNavigate;
try {
  ({ useNavigate } = await import('@solidjs/router'));
} catch (e) {
  console.error("⚠️ No se pudo importar 'useNavigate' de @solidjs/router:", e);
}

const Footer = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  let navigate = () => {};
  try {
    navigate = useNavigate();
  } catch {
    console.warn('⚠️ Footer renderizado fuera del Router. Navegación deshabilitada.');
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    if (navigate) navigate(path);
  };

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">

          <div class="footer-section">
            <h3>🔍 SD INVESTIGACIONES</h3>
            <p>
              {t().footer.licenseInfo}
              <br />
              <strong>RNSP: 11.582 | TIP: 6.091</strong>
              <br />
              {t().footer.validity}
            </p>
            <div class="social-links">
              <a href="#" class="social-link">📱 {t().footer.social.whatsapp}</a>
              <a href="#" class="social-link">📧 {t().footer.social.email}</a>
              <a href="#" class="social-link">📞 {t().footer.social.phone}</a>
            </div>
          </div>

          <div class="footer-section">
            <h4>{t().footer.links.services}</h4>
            <ul class="footer-links">
              <For each={t().services.items}>
                {(service) => (
                  <li>
                    <button onClick={() => handleNavClick('/servicios')}>
                      {service.title}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </div>

          <div class="footer-section">
            <h4>{t().footer.links.information || 'Información'}</h4>
            <ul class="footer-links">
              <li><button onClick={() => handleNavClick('/sobre-nosotros')}>{t().footer.links.about}</button></li>
              <li><button onClick={() => handleNavClick('/contacto')}>{t().footer.links.contact}</button></li>
              <li><a href="#">{t().footer.links.privacy}</a></li>
              <li><a href="#">{t().footer.links.terms}</a></li>
              <li><a href="#">{t().footer.links.legal}</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>{t().footer.links.contact}</h4>
            <div class="contact-info">
              <p>📞 643697615</p>
              <p>📧 sdinvestigaciones@gmail.com</p>
              <p>📍 Candelaria, 38530, Santa Cruz De Tenerife, Spain</p>
              <p>⏰ Lun-Vie: 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2024 SD INVESTIGACIONES. {t().footer.copyright}</p>
            <button onClick={scrollToTop} class="scroll-top">
              ↑ {t().footer.scrollTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
