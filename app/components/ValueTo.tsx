'use client';

import { useGetCurrency } from '../hooks/useGetCurrency';
import { useAtom } from 'jotai';
import { toAtom } from '../store/atoms';
import { IRate } from '../models/IRate';
import Loading from './Loading';

const ValueTo = () => {
  const { currency } = useGetCurrency();
  const [, setTo] = useAtom(toAtom);

  const handleClick = (item: IRate) => {
    setTo({
      currency: item.currency,
      value: Math.round(item.value * 100) / 100,
    });

    const dropdown = document.getElementById('dropdown-to');
    if (dropdown) {
      dropdown.removeAttribute('open');
    }
  };

  if (!currency) {
    return <Loading />;
  }

  return (
    <details className='dropdown' id='dropdown-to'>
      <summary className='m-1 btn'>To</summary>
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

export default ValueTo;
