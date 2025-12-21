import { Route } from '@solidjs/router';
import Home      from './pages/Home';
import Services  from './pages/Services';
import About     from './pages/About';
import Contact   from './pages/Contact';
import Privacy   from './pages/Privacy';
import Terms     from './pages/Terms';
import Legal     from './pages/Legal';

/**
 * Definición de rutas de la aplicación.
 * El layout común (Header + Footer) se aplica desde `Router root={Layout}` en `index.jsx`.
 */
const App = () => (
  <>
    <Route path="/"               component={Home}     />
    <Route path="/servicios"      component={Services} />
    <Route path="/sobre-nosotros" component={About}    />
    <Route path="/contacto"       component={Contact}  />
    <Route path="/privacy"        component={Privacy}  />
    <Route path="/terms"          component={Terms}    />
    <Route path="/legal"          component={Legal}    />
  </>
);

export default App;
