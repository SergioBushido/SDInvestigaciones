import SEO from '../components/Seo/SEO';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const Terms = () => {
  const { language } = useAppContext();
  const t = () => translations[language()].legal.terms;

  return (
    <main class="legal-page">
      <SEO title={t().metaTitle} />
      
      <div class="container" style={{ padding: '120px 20px 60px' }}>
        <h1>{t().title}</h1>
        
        <section>
          <h2>{t().sections.intro.title}</h2>
          <p>{t().sections.intro.content}</p>
        </section>

        <section>
          <h2>{t().sections.services.title}</h2>
          <p>{t().sections.services.content}</p>
        </section>

        <section>
          <h2>{t().sections.intellectual.title}</h2>
          <p>{t().sections.intellectual.content}</p>
        </section>

        <section>
          <h2>{t().sections.liability.title}</h2>
          <p>{t().sections.liability.content}</p>
        </section>

        <section>
          <h2>{t().sections.legislation.title}</h2>
          <p>{t().sections.legislation.content}</p>
        </section>
      </div>
    </main>
  );
};

export default Terms;
