import React from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';

const Currencies = () => {
  const { currency } = useGetCurrency();
  return (
    <div>
      <select name='currecy' id='currecy'>
        {currency.map((item) => (
          <option key={item.currency}>{item.currency}</option>
        ))}
      </select>
    </div>
  );
};

export default Currencies;
