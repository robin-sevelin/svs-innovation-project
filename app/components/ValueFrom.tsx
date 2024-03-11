'use client';

import React, { ChangeEvent } from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';

const ValueFrom = () => {
  const { currency } = useGetCurrency();
  const [, setFrom] = useAtom(fromAtom);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    const filteredCurrency = currency.filter(
      (value) => value.currency === selectedCurrency
    );

    filteredCurrency[0].value;
    setFrom({
      currency: filteredCurrency[0].currency,
      value: Math.round(filteredCurrency[0].value * 100) / 100,
    });
  };

  return (
    <>
      <label htmlFor='from'>From</label>
      <select name='from' id='from' onChange={handleSelectChange}>
        <option value={''}></option>
        {currency.map((item) => (
          <option key={item.currency}>{item.currency}</option>
        ))}
      </select>
    </>
  );
};

export default ValueFrom;
