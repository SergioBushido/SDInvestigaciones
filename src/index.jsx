import { render }       from 'solid-js/web';
import { Router }       from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import { AppProvider }  from './context/AppContext';
import Layout           from './components/Layout/Layout';
import App              from './App';
import './index.css';

render(
  () => (
    <MetaProvider>
      <AppProvider>
        {/* Router único de la app, usando Layout como root (Header + Footer) */}
        <Router root={Layout}>
          <App />
        </Router>
      </AppProvider>
    </MetaProvider>
  ),
  document.getElementById('root')
);
