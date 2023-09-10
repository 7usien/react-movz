import React from 'react';

const Container = ({ children }) => {
  return <div className='grid grid-cols-[30%, 70%] '>{children}</div>;
};

export default Container;
