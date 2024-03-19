'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import ValueFrom from './ValueFrom';
import { useAtom } from 'jotai';
import {
  fromAtom,
  inputAtom,
  resultAtom,
  submitAtom,
  toAtom,
} from '../store/atoms';
import ValueTo from './ValueTo';

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
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>Select amount</fieldset>
        <input
          className='input input-bordered w-full max-w-xs'
          type='number'
          min={0}
          value={input}
          onChange={handleInputChange}
        />
        <div className='flex justify-between py-5'>
          <fieldset>
            Select national currency
            <div className='flex justify-between'>
              <ValueFrom />
              <ValueTo />
            </div>
          </fieldset>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </section>
  );
};

export default Form;
