import { Title, Meta } from '@solidjs/meta';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <main>
      <Title>Contacto - SD INVESTIGACIONES</Title>
      <Meta name="description" content="Contacta con SD INVESTIGACIONES. Consulta gratuita y confidencial para tu caso en Tenerife. Llámanos o escríbenos." />
      <section class="page-header">
        <div class="container">
          <h1 tabindex="0">Contacto</h1>
          <p>Estamos aquí para ayudarte. Consulta gratuita y confidencial.</p>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default ContactPage;
