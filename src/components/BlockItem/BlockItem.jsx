import React from 'react';

const BlockItem = ({ data }) => {
  const {
    title,
    name,
    release_date,
    vote_count,
    vote_average,
    overview,
    poster_path,
  } = { ...data };

  return (
    <div className='bg-white text-darkest shadow-md relative'>
      <div className='relative group hover:scale-110 duration-300 ease-in-out'>
        <img
          className='w-full h-auto rounded-sm '
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-primary'></div>
      </div>
      <div className='p-2 pl-3'>
        <h3 className='text-lg text-darkest font-bold'>
          {title ? title : name}
        </h3>

        <span className='text-medium text-sm'>{release_date}</span>
      </div>
      <span className='absolute top-3 right-3 bg-dark text-white p-1 rounded-sm shadow-lg'>
        {vote_count}
      </span>
    </div>
  );
};

export default BlockItem;
