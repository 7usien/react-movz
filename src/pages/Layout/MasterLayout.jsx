import { Outlet } from 'react-router';

import Header from '../../components/Header/Header';
import Container from './../../components/Container/Container';
import Footer from './../../components/Footer/Footer';

const MasterLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MasterLayout;
