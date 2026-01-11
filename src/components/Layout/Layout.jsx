import { createSignal } from 'solid-js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen()} setIsMenuOpen={setIsMenuOpen} />
      <main>{props.children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
