import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
    <div className='bg-white text-darkest shadow-md relative rounded-md'>
      <div className='relative group hover:scale-110 duration-300 ease-in-out '>
        {poster_path ? (
          <img
            loading='lazy'
            className='w-full h-[330px] rounded-md '
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
          />
        ) : (
          <AiOutlineLoading3Quarters className='animate-spin text-medium text-5xl text-center block m-auto' />
        )}

        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-darkest h-[330px]'></div>
      </div>
      <div className='p-2 pl-3'>
        <h3 className='text-lg text-darkest font-bold'>
          {title ? title : name}
        </h3>

        <span className='text-medium text-sm'>{release_date}</span>
      </div>
      <span className='absolute top-3 right-3 bg-primary text-white p-1 rounded-sm shadow-lg'>
        {vote_average}
      </span>
    </div>
  );
};

export default BlockItem;
