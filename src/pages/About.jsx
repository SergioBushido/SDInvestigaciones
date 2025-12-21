import { Title, Meta } from '@solidjs/meta';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import About from '../components/About/About';

const AboutPage = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main>
      <Title>{t().seo.about.title}</Title>
      <Meta name="description" content={t().seo.about.description} />
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
