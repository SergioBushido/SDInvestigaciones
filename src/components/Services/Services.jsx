import { For } from 'solid-js';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../translations/translations';
import './Services.css';

const Services = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  const scrollToContact = () => {
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Elemento con ID 'contacto' no encontrado.");
    }
  };

  const icons = ['🔍', '👥', '🏢', '💰', '📱', '🛡️'];

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
              <div class="service-card">
                <div class="service-icon">
                  {icons[index() % icons.length]}
                </div>
                <h3 class="service-title">{service.title}</h3>
                <p class="service-description">{service.description}</p>
                <ul class="service-features">
                  <For each={service.features}>
                    {(feature) => <li>{feature}</li>}
                  </For>
                </ul>
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
