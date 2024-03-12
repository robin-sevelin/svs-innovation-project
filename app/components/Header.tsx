import React from 'react';
import Navigation from './Navigation';
import ThemeController from './ThemeController';

const Header = () => {
  return (
    <header className='navbar bg-base-100 flex justify-between'>
      <h1>
        <a className='btn btn-ghost text-xl' href={'/'}>
          Currency Converter
        </a>
      </h1>
      <ThemeController />
      <Navigation />
    </header>
  );
};

export default Header;
