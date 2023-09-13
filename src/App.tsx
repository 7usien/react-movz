import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import TopList from './components/TopList/TopList';
import MostPupularContainer from './components/MostPupularContainer/MostPupularContainer';
import BlockItem from './components/BlockItem/BlockItem';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <>
      <Header />

      <Container>
        <TopList />

        <div className='content'>
          <MostPupularContainer
            count={12}
            title='most popular movies'
            type='movie'
          >
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
          </MostPupularContainer>

          <MostPupularContainer
            count={12}
            title='most popular tv shows'
            type='tv'
          >
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
          </MostPupularContainer>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
