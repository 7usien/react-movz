import React, { useEffect, useState } from 'react';
import { FaStar, FaYoutube } from 'react-icons/fa';
import useTrailer from '../../hooks/useTrailer';

const TopListItem = ({ data, index }) => {
  const { title, overview, vote_average, poster_path, release_date, id } = data;
  const { videoID, chosenOne } = useTrailer(id);

  return (
    <div className='bg-white text-darkest flex gap-2 col-span-3 mb-3 shadow-md relative p-2  '>
      <img
        className='w-20 rounded-r-lg'
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=''
      />

      <div className='flex flex-col gap-1'>
        <a
          target='_blank'
          href={`https://www.youtube.com/watch?v=${chosenOne[0]?.key}`}
          className='block bg-darkest text-white text-center p-2 w-fit  text-sm rounded-md absolute bottom-2 left-2 shadow-lg '
        >
          <FaYoutube className='inline align-middle mr-2' />
          trailer
        </a>

        <span className='text-light text-4xl absolute top-1/2 -translate-y-2/4 right-2'>
          {index + 1}
        </span>
        <h2 className='text-lg text-darkest capitalize'>{title}</h2>
        <span className='block text-medium text-sm'>{release_date}</span>
        <span className='flex items-center gap-1 text-dark'>
          <FaStar /> {vote_average}
        </span>
      </div>
    </div>
  );
};

export default TopListItem;
