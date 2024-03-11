'use client';

import React from 'react';
import { fromAtom, resultAtom, toAtom } from '../store/atoms';
import { useAtom } from 'jotai';

const Result = () => {
  const [result] = useAtom(resultAtom);
  const [from] = useAtom(fromAtom);
  const [to] = useAtom(toAtom);
  return (
    <div>
      <p> from: {from}</p>
      <p> to: {to}</p>
      <p>result: {result}</p>
    </div>
  );
};

export default Result;
