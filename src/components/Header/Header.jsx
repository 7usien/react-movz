import React from 'react';

import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className=' w-full bg-white drop-shadow-md h-20 '>
      <div className='max-w-7xl m-auto flex justify-between items-center content-center; align-middle h-20 '>
        <div className='text-primary flex place-items-center gap-1 text-lg'>
          <img src={logo} alt='' />
          <h1>React movz DB</h1>
        </div>

        <div className='text-darkest flex align-middle text-lg'>
          <ul className='flex capitalize gap-4 align-middle'>
            <li>
              <a href='#'>top</a>
            </li>
            <li>
              <a href='#'>now playing</a>
            </li>

            <li>
              <a href='#'>popular</a>
            </li>
            <li>
              <a href='#'>trending</a>
            </li>
          </ul>
        </div>

        <div className='group geners bg-dark text-white rounded-md p-1 capitalize text-lg relative'>
          <h3 className='p-2 flex align-middle border-none relative hover:bg-primary cursor-pointer'>
            <a href='#'>choose your generes</a>
          </h3>
          <ul className='absolute bg-dark left-0 top-12 w-full rounded-md  opacity-0  group-hover:opacity-100'>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>comedy</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>family</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>darma</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>horor</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>tech</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>faction</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>sci-tech</a>
            </li>
            <li className='border-b border-slate-500/95 p-2'>
              <a href='#'>futureistic</a>
            </li>
          </ul>
        </div>

        <div className='search'>
          <form action='#'>
            <input
              type='text'
              placeholder='search for a movie'
              className='border-dark-2 bg-white border-2 rounded-md p-2 capitalize'
            />
            <input
              type='submit'
              value='search'
              className='bg-dark p-2 rounded-md'
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
