'use client';

import React from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';

const MainPage = () => {
  const { currency } = useGetCurrency();
  return (
    <div>
      Main
      {currency.map((item) => (
        <ul key={item.currency}>{item.currency}</ul>
      ))}
    </div>
  );
};

export default MainPage;
