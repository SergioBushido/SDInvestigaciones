import { Title, Meta } from '@solidjs/meta';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <main>
      <Title>SD INVESTIGACIONES - Detectives Privados en Tenerife</Title>
      <Meta name="description" content="Agencia de detectives privados en Tenerife. Servicios de investigación profesional para particulares y empresas. Confidencialidad garantizada." />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
