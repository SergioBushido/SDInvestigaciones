/* src/components/Layout/Layout.jsx */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Layout;
