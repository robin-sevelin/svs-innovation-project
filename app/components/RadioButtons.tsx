'use client';

import { useAtom } from 'jotai';
import React from 'react';
import { viewAtom } from '../store/atoms';

const RadioButtons = () => {
  const [view, setView] = useAtom(viewAtom);
  return (
    <div className='join flex w-[900px]  justify-center py-5'>
      <input
        defaultChecked
        onClick={() => setView('table')}
        className='join-item btn w-[100px] p-2'
        type='radio'
        name='options'
        aria-label='Table'
      />
      <input
        onClick={() => setView('calculate')}
        className='join-item btn w-[100px]'
        type='radio'
        name='options'
        aria-label='Calculate'
      />
    </div>
  );
};

export default RadioButtons;
