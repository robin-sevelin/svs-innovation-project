'use client';

import React from 'react';
import { fromAtom, inputAtom, resultAtom, toAtom } from '../store/atoms';
import { useAtom } from 'jotai';

const Result = () => {
  const [result] = useAtom(resultAtom);
  const [from] = useAtom(fromAtom);
  const [to] = useAtom(toAtom);
  const [input] = useAtom(inputAtom);

  return (
    <section className='flex flex-col justify-center items-center py-5'>
      <h3 className='mb-5'>Result</h3>
      <p>
        {input} {from.currency} is {result} {to.currency}
      </p>
    </section>
  );
};

export default Result;
