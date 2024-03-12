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
    <div>
      {input} {from.currency} is {result} {to.currency}
    </div>
  );
};

export default Result;
