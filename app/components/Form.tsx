'use client';

import React, { FormEvent } from 'react';
import Currencies from './Currencies';

const Form = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('hi');
    printResult();
  };

  const printResult = () => {
    const input = 1;
    const from = 1;
    const to = 1;
    const result = (from / to) * input;
    console.log(result);
  };
  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <label htmlFor='input'>Select amount</label>
        <input type='number' min={0} />
        <label htmlFor=''>From</label>
        <Currencies />
        <label htmlFor=''>To</label>
        <Currencies />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
