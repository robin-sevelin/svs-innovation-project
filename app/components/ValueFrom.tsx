'use client';

import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { ChangeEvent } from 'react';

const ValueFrom = () => {
  const { currency } = useGetCurrency();
  const [, setFrom] = useAtom(fromAtom);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const foundCurrency = currency.find(
      (rate) => rate.currency === e.target.value
    );

    if (foundCurrency) {
      setFrom({
        currency: foundCurrency.currency,
        value: Math.round(foundCurrency.value * 100) / 100,
      });
    }
  };

  return (
    <select
      className='dropdown'
      id='dropdown-to'
      onChange={(e) => handleChange(e)}
    >
      <option className='m-1 btn w-20' disabled>
        From
      </option>
      {currency.map((currency) => (
        <option key={currency.currency} value={currency.currency}>
          {currency.currency}
        </option>
      ))}
    </select>
  );
};

export default ValueFrom;
