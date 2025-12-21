import { For, createEffect } from 'solid-js';
import { useLocation, useNavigate } from '@solidjs/router';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import { Icons } from '../Icons/Icons';
import './Services.css';

const Services = () => {
  const location = useLocation();

  createEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  });
  const { language } = useAppContext();
  const t = () => translations[language()];
  
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacto');
    }
  };

  const iconComponents = [
    <Icons.Search size="32" color="#9ca3af" />,
    <Icons.Users size="32" color="#9ca3af" />,
    <Icons.Building size="32" color="#9ca3af" />,
    <Icons.DollarSign size="32" color="#9ca3af" />,
    <Icons.Smartphone size="32" color="#9ca3af" />,
    <Icons.Shield size="32" color="#9ca3af" />
  ];

  // const serviceImages = [
  //   '/images/services/infidelity.png',
  //   '/images/services/person.png',
  //   '/images/services/corporate.png',
  //   '/images/services/financial.png',
  //   '/images/services/electronic.png',
  //   '/images/services/insurance.png'
  // ];

  return (
    <section id="servicios" class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{t().services.title}</h2>
          <p class="section-subtitle">{t().services.subtitle}</p>
        </div>

        <div class="services-grid">
          <For each={t().services.items}>
            {(service, index) => (
              <div 
                id={service.id}
                class="service-card"
                style={{
                //  'background-image': `url(${serviceImages[index() % serviceImages.length]})`
                }}
              >
                <div class="service-card-overlay" />
                <div class="service-content">
                  <div class="service-icon">
                    {iconComponents[index() % iconComponents.length]}
                  </div>
                  <h3 class="service-title">{service.title}</h3>
                  <p class="service-description">{service.description}</p>
                  <ul class="service-features">
                    <For each={service.features}>
                      {(feature) => <li>{feature}</li>}
                    </For>
                  </ul>
                </div>
              </div>
            )}
          </For>
        </div>

        <div class="services-cta">
          <p>{t().services.cta.text}</p>
          <button class="btn btn-primary" onClick={scrollToContact}>
            {t().services.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
