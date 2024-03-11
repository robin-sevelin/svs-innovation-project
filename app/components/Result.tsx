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
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>{from.currency}</th>
            <th>{to.currency}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{from.value}</td>
            <td>{to.value}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>
        {input} {from.currency} is {result} {to.currency}
      </h2>
    </div>
  );
};

export default Result;
