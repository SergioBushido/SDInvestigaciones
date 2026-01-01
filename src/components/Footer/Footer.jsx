import { For } from 'solid-js';
import { A } from '@solidjs/router';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import { Icons } from '../Icons/Icons';
import './Footer.css';

const Footer = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">

          <div class="footer-section">
            <h3 style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
              <Icons.Search size="24" color="#9ca3af" />
              SD INVESTIGACIONES
            </h3>
            <p>
              {t().footer.licenseInfo}
              <br />
              <strong>RNSP: 11.582 | TIP: 6.091</strong>
              <br />
              {t().footer.validity}
            </p>

          </div>

          <div class="footer-section">
            <h4>{t().footer.links.services}</h4>
            <ul class="footer-links">
              <For each={t().services.items}>
                {(service) => (
                  <li>
                    <A href={`/${language()}/servicios#${service.id || ''}`} class="footer-link-item">
                      {service.title}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </div>

          <div class="footer-section">
            <h4>{t().footer.links.information || 'Información'}</h4>
            <ul class="footer-links">
              <li><A href={`/${language()}/sobre-nosotros`} class="footer-link-item">{t().footer.links.about}</A></li>
              <li><A href={`/${language()}/contacto`} class="footer-link-item">{t().footer.links.contact}</A></li>
              <li><A href={`/${language()}/privacy`} class="footer-link-item">{t().footer.links.privacy}</A></li>
              <li><A href={`/${language()}/terms`} class="footer-link-item">{t().footer.links.terms}</A></li>
              <li><A href={`/${language()}/legal`} class="footer-link-item">{t().footer.links.legal}</A></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>{t().footer.links.contact}</h4>
            <div class="contact-info">
              <p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
                <Icons.Phone size="18" color="#9ca3af" />
                643697615
              </p>
              <p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
                <Icons.Mail size="18" color="#9ca3af" />
                sdinvestigaciones@gmail.com
              </p>
              <p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
                <Icons.MapPin size="18" color="#9ca3af" />
                Candelaria, 38530, Santa Cruz De Tenerife, Spain
              </p>
              <p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
                <Icons.Clock size="18" color="#9ca3af" />
                Lun-Vie: 9:00-18:00
              </p>
            </div>
          </div>
        </div>

        <div class="footer-social-section">
          <div class="social-links">
            <a href="https://wa.me/34643697615" target="_blank" rel="noopener noreferrer" class="social-link" style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
              <Icons.Smartphone size="18" color="#9ca3af" />
              {t().footer.social.whatsapp}
            </a>
            <a href="mailto:sdinvestigaciones@gmail.com" class="social-link" style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
              <Icons.Mail size="18" color="#9ca3af" />
              {t().footer.social.email}
            </a>
            <a href="tel:+34643697615" class="social-link" style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
              <Icons.Phone size="18" color="#9ca3af" />
              {t().footer.social.phone}
            </a>
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
