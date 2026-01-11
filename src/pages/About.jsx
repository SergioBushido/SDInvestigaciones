import SEO from '../components/Seo/SEO';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import About from '../components/About/About';

const AboutPage = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main>
      <SEO 
        title={t().seo.about.title}
        description={t().seo.about.description}
      />
      <section class="page-header">
        <div class="container">
          <h1 tabindex="0">{t().about.pageHeader.title}</h1>
          <p>{t().about.pageHeader.subtitle}</p>
        </div>
      </section>
      <About />
    </main>
  );
};

export default AboutPage;
