'use client';

import React, { ChangeEvent, useState } from 'react';
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
    setFrom(filteredCurrency[0].value);
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
