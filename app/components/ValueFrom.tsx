'use client';

import { useAtom } from 'jotai';
import { fromAtom } from '../store/atoms';
import { IRate } from '../models/IRate';
import Loading from './Loading';
import { useGetCurrencyList } from '../hooks/useGetCurrencyList';

const ValueFrom = () => {
  const { sortedGroups, groupedCurrencies } = useGetCurrencyList();
  const [, setFrom] = useAtom(fromAtom);

  const handleClick = (item: IRate) => {
    setFrom({
      currency: item.currency,
      value: Math.round(item.value * 100) / 100,
    });

    if (!sortedGroups) {
      return <Loading />;
    }

    const dropdown = document.getElementById('dropdown');
    if (dropdown) {
      dropdown.removeAttribute('open');
    }
  };

  return (
    <details className='dropdown' id='dropdown'>
      <summary className='m-1 btn w-20'>From</summary>
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

export default ValueFrom;
