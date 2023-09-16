import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TopListItem from '../TopListItem/TopListItem';
import { BiMoviePlay } from 'react-icons/bi';
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
    <div className='font-Inria+Sans'>
      <h3 className='text-darkest capitalize text-xl b-4 pb-2 flex items-center gap-2'>
        <BiMoviePlay />
        top all the time
      </h3>

      {movieList.map((movie, idx) => (
        <TopListItem key={movie.id} index={idx} data={{ ...movie }} />
      ))}
    </div>
  );
};

export default TopList;
