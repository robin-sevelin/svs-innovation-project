'use client';

import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';
import { useGetCurrency } from '../hooks/useGetCurrency';
import { ChangeEvent } from 'react';
import Loading from './Loading';

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

  if (!currency) {
    return <Loading />;
  }

  return (
    <label htmlFor='dropdown-from'>
      From
      <select
        className='select select-bordered w-full max-w-xs'
        id='dropdown-from'
        onChange={(e) => handleChange(e)}
      >
        {currency.map((currency) => (
          <option key={currency.currency} value={currency.currency}>
            {currency.currency}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ValueFrom;
