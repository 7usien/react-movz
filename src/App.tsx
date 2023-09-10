import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import TopList from './components/TopList/TopList';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <Container>
        <TopList />
      </Container>

      <Footer />
    </>
  );
}

export default App;
