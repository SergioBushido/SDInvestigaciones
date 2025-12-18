import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  return (
    <main>
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
