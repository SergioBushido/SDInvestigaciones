import { render }       from 'solid-js/web';
import { Router }       from '@solidjs/router';
import { AppProvider }  from './context/AppContext';
import Layout           from './components/Layout/Layout';
import App              from './App';
import './index.css';

render(
  () => (
    <AppProvider>
      {/* Router único de la app, usando Layout como root (Header + Footer) */}
      <Router root={Layout}>
        <App />
      </Router>
    </AppProvider>
  ),
  document.getElementById('root')
);
