'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import ValueFrom from './ValueFrom';
import ValueTo from './ValueTo';
import { useAtom } from 'jotai';
import { fromAtom, resultAtom, toAtom } from '../store/atoms';

const Form = () => {
  const [to] = useAtom(toAtom);
  const [from] = useAtom(fromAtom);
  const [input, setInput] = useAtom(resultAtom);
  const [, setResult] = useAtom(resultAtom);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currencyResult = (from / to) * input;
    setResult(currencyResult);
    setInput(0);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(+event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='input'>Select amount</label>
      <input type='number' min={0} value={input} onChange={handleInputChange} />
      <label htmlFor=''>From</label>
      <ValueFrom />
      <label htmlFor=''>To</label>
      <ValueTo />
      <button>Submit</button>
    </form>
  );
};

export default Form;
