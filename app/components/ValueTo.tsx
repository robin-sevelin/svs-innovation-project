'use client';

import React, { ChangeEvent } from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { toAtom } from '../store/atoms';

const ValueTo = () => {
  const { currency } = useGetCurrency();
  const [, setTo] = useAtom(toAtom);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    const filteredCurrency = currency.filter(
      (value) => value.currency === selectedCurrency
    );
    filteredCurrency[0].value;
    setTo({
      currency: filteredCurrency[0].currency,
      value: Math.round(filteredCurrency[0].value * 100) / 100,
    });
  };

  return (
    <>
      <label htmlFor='to'>To</label>
      <select name='to' id='to' onChange={handleSelectChange}>
        <option></option>
        {currency.map((item) => (
          <option key={item.currency} value={item.currency}>
            {item.currency}
          </option>
        ))}
      </select>
    </>
  );
};

export default ValueTo;
