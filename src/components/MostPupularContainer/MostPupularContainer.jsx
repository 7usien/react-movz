import React from 'react';
import { useId } from 'react';

import useMostPopular from '../../hooks/useMostPopular';

const MostPupularContainer = ({ type, title, count, children }) => {
  const { loading, data } = useMostPopular(type);
  const slicesChildren = children.slice(0, count);

  return (
    <>
      <h3 className='text-darkest text-xl pb-4 capitalize'>{title}</h3>
      <div className='grid grid-cols-4 gap-6'>
        {slicesChildren?.map((child, idx) => {
          return React.cloneElement(
            child,
            { data: data[idx], key: useId() },
            null
          );
        })}
      </div>
    </>
  );
};

export default MostPupularContainer;
