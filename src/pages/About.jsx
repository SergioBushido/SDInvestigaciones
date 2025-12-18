import { Title, Meta } from '@solidjs/meta';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <main>
      <Title>Sobre Nosotros - SD INVESTIGACIONES</Title>
      <Meta name="description" content="Conoce a SD INVESTIGACIONES, tu agencia de confianza en Tenerife. Licencia oficial y equipo experto en investigación." />
      <section class="page-header">
        <div class="container">
          <h1 tabindex="0">Sobre Nosotros</h1>
          <p>Experiencia y Profesionalismo en Investigación Privada</p>
        </div>
      </section>
      <About />
    </main>
  );
};

export default AboutPage;
