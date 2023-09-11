import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='grid grid-cols-[35%_65%] py-4 gap-8 max-w-7xl m-auto py-4 '>
      {children}
    </div>
  );
};

export default Container;
