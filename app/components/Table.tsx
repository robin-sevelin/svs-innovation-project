'use client';

import { useAtom } from 'jotai';
import React from 'react';
import { fromAtom, submitAtom, toAtom } from '../store/atoms';
import Result from './Result';

const Table = () => {
  const [from] = useAtom(fromAtom);
  const [to] = useAtom(toAtom);

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
    </div>
  );
};

export default Table;
