import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopListItem from '../TopListItem/TopListItem';

const TopList = () => {
  const [movieList, setMovieList] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
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
      <h3 className='text-darkest capitalize text-3xl b-4 border-b-2 border-light'>
        top all the time
      </h3>

      {movieList.map((movie, idx) => (
        <TopListItem key={movie.id} index={idx} data={{ ...movie }} />
      ))}
    </div>
  );
};

export default TopList;
