import React from 'react';

const HeroPage = () => {
  return (
    <div className='hero bg-base-100 '>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there</h1>
          <p className='py-6'>Welcome to the awsome currency converter page</p>
          <a className='btn btn-primary' href={'/pages/converter'}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
