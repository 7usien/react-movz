import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopListItem from '../TopListItem/TopListItem';

const TopList = () => {
  const [movieList, setMovieList] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );
      return setMovieList(res.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className=''>
      {movieList.map((movie) => (
        <TopListItem key={movie.id} data={{ ...movie }} />
      ))}
    </div>
  );
};

export default TopList;
