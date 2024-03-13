'use client';

import { useAtom } from 'jotai';
import { toAtom } from '../store/atoms';
import { IRate } from '../models/IRate';
import Loading from './Loading';
import { useGetCurrencyList } from '../hooks/useGetCurrencyList';

const ValueTo = () => {
  const { sortedGroups, groupedCurrencies } = useGetCurrencyList();
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

  if (!sortedGroups) {
    return <Loading />;
  }

  return (
    <details className='dropdown' id='dropdown'>
      <summary className='m-1 btn w-20'>To</summary>
      <ul className='menu bg-base-200 w-56 rounded-box'>
        {sortedGroups.map((letter) => (
          <li key={letter}>
            <details className='menu-item'>
              <summary className='group-header'>{letter}</summary>
              <ul>
                {groupedCurrencies[letter].map((currency) => (
                  <li
                    key={currency.currency}
                    value={currency.currency}
                    onClick={() => handleClick(currency)}
                  >
                    <a className='menu-item'>{currency.currency}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ValueTo;
