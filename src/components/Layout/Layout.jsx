import { createSignal } from 'solid-js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

import Head from '../Seo/Head';

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <>
      <Head />
      <Header isMenuOpen={isMenuOpen()} setIsMenuOpen={setIsMenuOpen} />
      <main>{props.children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
