import SEO from '../components/Seo/SEO';
import { For } from 'solid-js';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Privacy = () => {
  const { language } = useAppContext();
  const t = () => translations[language()].legal.privacy;

  return (
    <main class="legal-page">
      <SEO title={t().metaTitle} />
      
      <div class="container" style={{ padding: '120px 20px 60px' }}>
        <h1>{t().title}</h1>
        
        <section>
          <h2>{t().sections.responsible.title}</h2>
          <p>{t().sections.responsible.content}</p>
          <p>
            <strong>{t().sections.responsible.details.name}</strong> {t().sections.responsible.details.nameValue}<br />
            <strong>{t().sections.responsible.details.address}</strong> {t().sections.responsible.details.addressValue}<br />
            <strong>{t().sections.responsible.details.email}</strong> {t().sections.responsible.details.emailValue}<br />
            <strong>{t().sections.responsible.details.phone}</strong> {t().sections.responsible.details.phoneValue}
          </p>
        </section>

        <section>
          <h2>{t().sections.purpose.title}</h2>
          <p>{t().sections.purpose.intro}</p>
          <ul>
            <For each={t().sections.purpose.items}>
              {(item) => <li>{item}</li>}
            </For>
          </ul>
        </section>

        <section>
          <h2>{t().sections.legal.title}</h2>
          <p>{t().sections.legal.content}</p>
        </section>

        <section>
          <h2>{t().sections.recipients.title}</h2>
          <p>{t().sections.recipients.content}</p>
        </section>

        <section>
          <h2>{t().sections.rights.title}</h2>
          <p>{t().sections.rights.content}</p>
        </section>
        
        <section>
          <h2>{t().sections.security.title}</h2>
          <p>{t().sections.security.content}</p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
