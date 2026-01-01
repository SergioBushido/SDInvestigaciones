import { render }       from 'solid-js/web';
import { Router }       from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import { AppProvider }  from './context/AppContext';
import Layout           from './components/Layout/Layout';
import App              from './App';
import './index.css';

const Root = (props) => (
  <AppProvider>
    <Layout>
      {props.children}
    </Layout>
  </AppProvider>
);

render(
  () => (
    <MetaProvider>
      <Router root={Root}>
        <App />
      </Router>
    </MetaProvider>
  ),
  document.getElementById('root')
);
