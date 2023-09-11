import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import TopList from './components/TopList/TopList';
import MostPupularContainer from './components/MostPupularContainer/MostPupularContainer';
import BlockItem from './components/BlockItem/BlockItem';
import Slider from 'react-slick';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />

      <Container>
        <TopList />

        <div className='content'>
          <MostPupularContainer
            count={8}
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
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
