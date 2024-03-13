import React from 'react';
import Navigation from './Navigation';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  return (
    <header className='navbar flex justify-between'>
      <div>
        <h1>
          <a className='btn btn-ghost text-xl' href={'/'}>
            Currency Converter
          </a>
        </h1>
        <ThemeSelector />
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
