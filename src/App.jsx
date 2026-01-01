import { Route, Navigate } from '@solidjs/router';

import Home      from './pages/Home';
import Services  from './pages/Services';
import About     from './pages/About';
import Contact   from './pages/Contact';
import Privacy   from './pages/Privacy';
import Terms     from './pages/Terms';
import Legal     from './pages/Legal';
import { useAppContext } from './context/AppContext';
import Head from './components/Seo/Head';

/*
 * Root Redirector
 * Checks localStorage or browser preference and redirects to the appropriate language path.
 */
const RootRedirect = () => {
  const supportedLangs = ['es', 'en', 'de'];
  let targetLang = 'es'; // Default

  // Check localStorage
  const saved = localStorage.getItem('lang');
  if (saved && supportedLangs.includes(saved)) {
    targetLang = saved;
  } else {
    // Check browser
    const browserLang = navigator.language.split('-')[0];
    if (supportedLangs.includes(browserLang)) {
      targetLang = browserLang;
    }
  }

  return <Navigate href={`/${targetLang}`} />;
};

/**
 * Route Wrapper
 * Validates the language param. If invalid, could redirect to default.
 * Also renders Head here to ensure it has context.
 */
const LangWrapper = (props) => {
  // We can add validation logic here if needed
  // For now, it just renders the children (the page)
  // Head is included here so it updates with route changes
  return (
    <>
      <Head />
      {props.children}
    </>
  );
};

/**
 * Definición de rutas de la aplicación.
 * Estructura: /:lang/...
 */
const App = () => (
  <>
    {/* Redirección automática de la raíz a /es, /en, etc. */}
    <Route path="/" component={RootRedirect} />

    {/* Rutas con idioma */}
    <Route path="/:lang" component={LangWrapper}>
      <Route path="/"               component={Home}     />
      <Route path="/servicios"      component={Services} />
      <Route path="/sobre-nosotros" component={About}    />
      <Route path="/contacto"       component={Contact}  />
      <Route path="/privacy"        component={Privacy}  />
      <Route path="/terms"          component={Terms}    />
      <Route path="/legal"          component={Legal}    />
      
      {/* Catch-all dentro de idioma? Ojo con duplicados */}
      {/* <Route path="*404" component={NotFound} /> */} 
    </Route>
  </>
);

export default App;
