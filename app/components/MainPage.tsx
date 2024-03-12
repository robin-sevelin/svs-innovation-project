'use client';

import React from 'react';
import Form from './Form';
import Table from './Table';
import RadioButtons from './RadioButtons';
import Result from './Result';
import { submitAtom, viewAtom } from '../store/atoms';
import { useAtom } from 'jotai';

const MainPage = () => {
  const [view] = useAtom(viewAtom);
  const [isSubmitted] = useAtom(submitAtom);

  return (
    <>
      <Form />
      {isSubmitted && <RadioButtons />}
      <section className='flex w-[900px]  flex-col relative top-6 '>
        {isSubmitted && view === 'table' ? (
          <Table />
        ) : (
          isSubmitted && <Result />
        )}
      </section>
    </>
  );
};

export default MainPage;
