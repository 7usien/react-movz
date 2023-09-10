import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='grid grid-cols-5 max-w-7xl m-auto py-4 '>{children}</div>
  );
};

export default Container;
