import { IRate } from '../models/IRate';
import { useGetCurrency } from './useGetCurrency';

export const useGetCurrencyList = () => {
  const { currency } = useGetCurrency();

  const groupedCurrencies: { [key: string]: IRate[] } = {};

  currency.forEach((currency: IRate) => {
    const firstLetter: string = currency.currency.charAt(0).toUpperCase();
    if (!groupedCurrencies[firstLetter]) {
      groupedCurrencies[firstLetter] = [];
    }
    groupedCurrencies[firstLetter].push(currency);
  });

  const sortedGroups: string[] = Object.keys(groupedCurrencies).sort();

  const dropdownOptions: {
    label: string;
    value?: string;
    disabled?: boolean;
  }[] = [];
  sortedGroups.forEach((letter: string) => {
    dropdownOptions.push({ label: letter, disabled: true });
    groupedCurrencies[letter].forEach((currency: IRate) => {
      dropdownOptions.push({
        label: `(${currency.currency})`,
        value: currency.currency,
      });
    });
  });

  return { sortedGroups, groupedCurrencies } as const;
};
