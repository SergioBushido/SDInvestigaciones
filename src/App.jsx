import { Route, Navigate } from '@solidjs/router';

import Home      from './pages/Home';
import Services  from './pages/Services';
import About     from './pages/About';
import Contact   from './pages/Contact';
import Privacy   from './pages/Privacy';
import Terms     from './pages/Terms';
import Legal     from './pages/Legal';
import DetectivesTenerife from './pages/DetectivesTenerife';
import PrecioDetectives from './pages/PrecioDetectives';
import AgenciaInvestigacion from './pages/AgenciaInvestigacion';
import NotFound from './pages/NotFound';
import { useAppContext } from './context/AppContext';


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
  return (
    <>
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
    {/* SEO Landing Pages (Root level) */}


    {/* Redirección automática de la raíz a /es, /en, etc. */}
    <Route path="/" component={RootRedirect} />

    {/* Rutas con idioma */}
    {/* Rutas con idioma */}
    <Route path="/:lang" component={LangWrapper}>
      <Route path="/"               component={Home}     />
      <Route path="/servicios"      component={Services} />
      <Route path="/sobre-nosotros" component={About}    />
      <Route path="/contacto"       component={Contact}  />
      <Route path="/privacy"        component={Privacy}  />
      <Route path="/terms"          component={Terms}    />
      <Route path="/legal"          component={Legal}    />
      
      {/* SEO Landing Pages (Localized) */}
      <Route path="detectives-privados-tenerife"           component={DetectivesTenerife} />
      <Route path="precio-detective-privado-tenerife"      component={PrecioDetectives} />
      <Route path="agencia-investigacion-privada-tenerife" component={AgenciaInvestigacion} />
      
      {/* Catch-all dentro de idioma */}
      <Route path="*404" component={NotFound} /> 
    </Route>

    {/* Redirects for legacy/root SEO paths to default language (or detection logic if RootRedirect handles it) */}
    {/* Re-using RootRedirect logic for these specific paths might requires a wrapper or just simple redirect to /es for now as safe default */}
    <Route path="/detectives-privados-tenerife"           component={() => <Navigate href="/es/detectives-privados-tenerife" />} />
    <Route path="/precio-detective-privado-tenerife"      component={() => <Navigate href="/es/precio-detective-privado-tenerife" />} />
    <Route path="/agencia-investigacion-privada-tenerife" component={() => <Navigate href="/es/agencia-investigacion-privada-tenerife" />} />
  </>
);

export default App;
