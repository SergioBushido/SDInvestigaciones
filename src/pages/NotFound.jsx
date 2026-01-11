import SEO from '../components/Seo/SEO';
import { A } from '@solidjs/router';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations/translations';

const NotFound = () => {
  const { language } = useAppContext();
  const t = () => translations[language()];

  return (
    <main style={{ padding: '150px 20px', 'text-align': 'center' }}>
      <SEO 
        title="404 - Página no encontrada" 
        description="Esta página no existe." 
        noindex={true}
      />
      
      <h1 style={{ 'font-size': '3rem', 'margin-bottom': '1rem' }}>404</h1>
      <p style={{ 'font-size': '1.2rem', 'margin-bottom': '2rem', color: '#666' }}>
        {t().notFoundMessage || "Lo sentimos, la página que buscas no existe."}
      </p>
      
      <A href={`/${language()}`} class="btn-primary" style={{ display: 'inline-block', padding: '10px 20px', 'background-color': '#AA151B', color: '#fff', 'text-decoration': 'none', 'border-radius': '5px' }}>
        {t().nav.inicio}
      </A>
    </main>
  );
};

export default NotFound;
