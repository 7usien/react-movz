//react
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//compo
import MasterLayout from './pages/Layout/MasterLayout';

//style
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './pages/Home/Home';
import TopPage from './pages/TopPage/TopPage';
import NowPlayingPage from './pages/NowPlaying/NowPlayingPage';
import PopularPage from './pages/Popular/PopularPage';
import TrendingPage from './pages/Trending/TrendingPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';

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
