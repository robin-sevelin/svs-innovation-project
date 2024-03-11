'use client';

import React from 'react';
import { useGetCurrency } from '../hooks/useGetCurrency';

const MainPage = () => {
  const { currency } = useGetCurrency();
  return (
    <div>
      Main
      {currency.from}
      {currency.to}
    </div>
  );
};

export default MainPage;
