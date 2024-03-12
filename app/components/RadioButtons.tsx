'use client';

import { useAtom } from 'jotai';
import React from 'react';
import { viewAtom } from '../store/atoms';

const RadioButtons = () => {
  const [, setView] = useAtom(viewAtom);
  return (
    <section className='flex flex-row gap-3'>
      <input
        defaultChecked
        onClick={() => setView('table')}
        className='join-item btn w-20'
        type='radio'
        name='options'
        aria-label='Table'
      />
      <input
        onClick={() => setView('calculate')}
        className='join-item btn w-20'
        type='radio'
        name='options'
        aria-label='Calculate'
      />
    </section>
  );
};

export default RadioButtons;
