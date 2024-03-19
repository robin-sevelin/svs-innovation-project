'use client';

import React from 'react';
import Form from './Form';
import Result from './Result';
import { submitAtom } from '../store/atoms';
import { useAtom } from 'jotai';

const MainPage = () => {
  const [isSubmitted] = useAtom(submitAtom);

  return (
    <>
      <Form />
      <section className='flex flex-col relative top-6 '>
        {isSubmitted && <Result />}
      </section>
    </>
  );
};

export default MainPage;
