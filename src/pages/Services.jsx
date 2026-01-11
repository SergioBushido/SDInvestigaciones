import SEO from '../components/Seo/SEO';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main>
      <SEO 
        title={t().seo.services.title}
        description={t().seo.services.description}
      />
      <section class="page-header">
        <div class="container">
          <h1>{t().services.pageHeader.title}</h1>
          <p>{t().services.pageHeader.subtitle}</p>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default ServicesPage;
