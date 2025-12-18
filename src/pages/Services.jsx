import { Title, Meta } from '@solidjs/meta';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  return (
    <main>
      <Title>Servicios de Detectives - SD INVESTIGACIONES</Title>
      <Meta name="description" content="Ofrecemos servicios de investigación privada en Tenerife: infidelidades, fraudes laborales, localización de personas y más." />
      <section class="page-header">
        <div class="container">
          <h1>Nuestros Servicios de Detective Privado</h1>
          <p>Servicios profesionales y confidenciales en Tenerife</p>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default ServicesPage;
