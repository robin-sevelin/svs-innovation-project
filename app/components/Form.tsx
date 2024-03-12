'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import ValueFrom from './ValueFrom';
import ValueTo from './ValueTo';
import { useAtom } from 'jotai';
import {
  fromAtom,
  inputAtom,
  resultAtom,
  submitAtom,
  toAtom,
} from '../store/atoms';

const Form = () => {
  const [to] = useAtom(toAtom);
  const [from] = useAtom(fromAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [, setResult] = useAtom(resultAtom);
  const [, setIsSubmitted] = useAtom(submitAtom);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currencyResult = (to.value / from.value) * input;
    setResult(Math.round(currencyResult * 100) / 100);
    setIsSubmitted(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(+event.target.value);
    setIsSubmitted(false);
  };

  return (
    <section className='py-5 flex flex-col justify-center items-center w-[900px] '>
      <h2>
        From: {from.currency} to {to.currency}
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset>Select amount</fieldset>
        <input
          className='input input-bordered w-full max-w-xs'
          type='number'
          min={0}
          value={input}
          onChange={handleInputChange}
        />
        <div className='flex justify-between'>
          <fieldset>
            Select national currency
            <ValueFrom />
            <ValueTo />
          </fieldset>
        </div>
        <button disabled={!to.value || !from.value} className='btn btn-primary'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
