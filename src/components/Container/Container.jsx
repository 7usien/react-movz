import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='grid grid-cols-[25%_75%] py-4 gap-10 max-w-7xl m-auto '>
      {children}
    </div>
  );
};

export default Container;
