import { Title, Meta } from '@solidjs/meta';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main>
      <Title>{t().seo.contact.title}</Title>
      <Meta name="description" content={t().seo.contact.description} />
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
