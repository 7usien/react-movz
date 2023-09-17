import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );
      return setMovieData(response.data) && setLoading(false);
    };

    fetchDetails();
  }, [id]);

  const { backdrop_path, genres, overview, title, vote_average } = movieData;

  return (
    <div className=' w-full m-auto  col-span-4 text-darkest'>
      <div className='w-full relative '>
        {title ? (
          <h2 className='text-center text-7xl my-2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white font-bold z-50  drop-shadow-lg'>
            {title}
          </h2>
        ) : (
          <AiOutlineLoading3Quarters className='animate-spin text-medium text-5xl text-center block m-auto' />
        )}

        {backdrop_path ? (
          <img
            className='w-full rounded-md'
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt=''
          />
        ) : (
          <AiOutlineLoading3Quarters className='animate-spin text-medium text-5xl text-center block m-auto' />
        )}

        <div className='absolute inset-0 bg-gradient-to-br from-transparent to-darkest'></div>
      </div>

      {overview ? (
        <>
          <p className='text-2xl py-4'>{overview}</p>
          <ul className='flex gap-2 my-2'>
            {genres &&
              genres.map((genre) => (
                <li
                  className='bg-darkest text-white p-1 rounded-sm'
                  key={genre.id}
                >
                  {genre?.name}
                </li>
              ))}
          </ul>
        </>
      ) : (
        <AiOutlineLoading3Quarters className='animate-spin text-medium text-5xl text-center block m-auto' />
      )}
    </div>
  );
};

export default MovieDetails;
