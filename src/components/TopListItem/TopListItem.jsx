import React from 'react';
import { FaStar } from 'react-icons/fa';
let count = 0;
const TopListItem = ({ data }) => {
  const { title, overview, vote_average, poster_path, release_date } = data;

  count++;
  return (
    <div className='bg-white text-darkest flex gap-2 col-span-3 mb-3 shadow-md relative p-2  '>
      <img
        className='w-16 rounded-r-lg'
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=''
      />

      <div className='flex flex-col'>
        <span className='text-medium text-5xl absolute top-0 right-1'>
          {count}
        </span>
        <h2 className='text-lg text-darkest capitalize'>{title}</h2>
        <span className='block text-dark text-sm'>{release_date}</span>
        <span className='flex items-center gap-1 text-dark'>
          <FaStar /> {vote_average}
        </span>
      </div>
    </div>
  );
};

export default TopListItem;
