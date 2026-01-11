import SEO from '../components/Seo/SEO';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Legal = () => {
  const { language } = useAppContext();
  const t = () => translations[language()].legal.legalNotice;

  return (
    <main class="legal-page">
      <SEO title={t().metaTitle} />
      
      <div class="container" style={{ padding: '120px 20px 60px' }}>
        <h1>{t().title}</h1>
        
        <section>
          <h2>{t().sections.identification.title}</h2>
          <p>{t().sections.identification.intro}</p>
          <ul>
            <li><strong>{t().sections.identification.items.owner}</strong> {t().sections.identification.items.ownerValue}</li>
            <li><strong>{t().sections.identification.items.address}</strong> {t().sections.identification.items.addressValue}</li>
            <li><strong>{t().sections.identification.items.tip}</strong> {t().sections.identification.items.tipValue}</li>
            <li><strong>{t().sections.identification.items.rnsp}</strong> {t().sections.identification.items.rnspValue}</li>
            <li><strong>{t().sections.identification.items.email}</strong> {t().sections.identification.items.emailValue}</li>
            <li><strong>{t().sections.identification.items.phone}</strong> {t().sections.identification.items.phoneValue}</li>
          </ul>
        </section>

        <section>
          <h2>{t().sections.authorization.title}</h2>
          <p>{t().sections.authorization.content}</p>
        </section>
      </div>
    </main>
  );
};

export default Legal;
