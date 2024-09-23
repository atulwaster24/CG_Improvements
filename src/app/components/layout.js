
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <div className='mx-auto'>
      <Navbar />
            <main className='container mx-auto min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
