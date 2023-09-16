import TopList from './../../components/TopList/TopList';
import MostPupularContainer from './../../components/MostPupularContainer/MostPupularContainer';
import BlockItem from './../../components/BlockItem/BlockItem';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
