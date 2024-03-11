import React, { ChangeEvent, useState } from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';

const ValueFrom = () => {
  const { currency } = useGetCurrency();
  const [from, setFrom] = useAtom(fromAtom);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value;
    const filteredCurrency = currency.filter(
      (value) => value.currency === selectedCurrency
    );

    setFrom(filteredCurrency[0].value);
  };

  return (
    <select
      name='currency'
      id='currency'
      onChange={handleSelectChange}
      value={from}
    >
      {currency.map((item) => (
        <option key={item.currency} value={item.currency}>
          {item.currency}
        </option>
      ))}
    </select>
  );
};

export default ValueFrom;
