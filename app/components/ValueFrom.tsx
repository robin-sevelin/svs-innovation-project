'use client';

import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';
import { IRate } from '../models/IRate';

const ValueFrom = () => {
  const { currency } = useGetCurrency();
  const [, setFrom] = useAtom(fromAtom);

  const handleClick = (item: IRate) => {
    setFrom({
      currency: item.currency,
      value: Math.round(item.value * 100) / 100,
    });

    const dropdown = document.getElementById('dropdown');
    if (dropdown) {
      dropdown.removeAttribute('open');
    }
  };

  return (
    <details className='dropdown' id='dropdown'>
      <summary className='m-1 btn'>From</summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 h-[900px]'>
        {currency.map((item) => (
          <li
            key={item.currency}
            value={item.currency}
            onClick={() => handleClick(item)}
          >
            <a> {item.currency}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ValueFrom;
