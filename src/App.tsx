//react
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//compo
import MasterLayout from './pages/Layout/MasterLayout';

//style
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//pages
import Home from './pages/Home/Home';
import TopPage from './pages/TopPage/TopPage';
import NowPlayingPage from './pages/NowPlaying/NowPlayingPage';
import PopularPage from './pages/Popular/PopularPage';
import TrendingPage from './pages/Trending/TrendingPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import GenreDetails from './pages/GenreDetails/GenreDetails';
import SearchResults from './pages/SearchResults/SearchResults';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'top',
          element: <TopPage />,
        },

        {
          path: 'now-playing',
          element: <NowPlayingPage />,
        },

        {
          path: 'popular',
          element: <PopularPage />,
        },

        {
          path: 'trending',
          element: <TrendingPage />,
        },
        {
          path: 'movie/:id',
          element: <MovieDetails />,
        },
        {
          path: 'genre/:id',
          element: <GenreDetails />,
        },

        {
          path: 'search/:term',
          element: <SearchResults />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
