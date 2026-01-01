import { Title, Meta } from '@solidjs/meta';
import { A } from '@solidjs/router';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
const Home = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main>
      <Title>{t().seo.home.title}</Title>
      <Meta name="description" content={t().seo.home.description} />
      <Hero />
      <Services />
      <About />
      
      {/* SEO Internal Linking */}
      <section class="container section seo-links-section">
        <h3 class="text-xl font-semibold text-gray-400">{t().seoLinks?.title || "¿Buscas información específica?"}</h3>
        <div class="seo-links-grid">
          <A href={`/${language()}/detectives-privados-tenerife`} class="seo-link-item">
            {t().seoLinks?.detectives || "Detectives privados en Tenerife"}
          </A>
          <A href={`/${language()}/precio-detective-privado-tenerife`} class="seo-link-item">
            {t().seoLinks?.price || "Precio de un detective privado"}
          </A>
          <A href={`/${language()}/agencia-investigacion-privada-tenerife`} class="seo-link-item">
            {t().seoLinks?.agency || "Agencia de investigación privada"}
          </A>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;
