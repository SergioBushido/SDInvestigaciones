import { Title, Meta } from '@solidjs/meta';
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
      <Contact />
    </main>
  );
};

export default Home;
