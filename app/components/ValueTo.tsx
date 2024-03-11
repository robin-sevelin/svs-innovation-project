'use client';

import React, { ChangeEvent } from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { toAtom } from '../store/atoms';
import { IRate } from '../models/IRate';

const ValueTo = () => {
  const { currency } = useGetCurrency();
  const [, setTo] = useAtom(toAtom);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    const filteredCurrency = currency.filter(
      (value) => value.currency === selectedCurrency
    );
    setTo(filteredCurrency[0].value);
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
