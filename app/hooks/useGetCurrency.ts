import { useEffect, useState } from 'react';
import { API, RATES_BASE_VALUE } from '../constants/constants';
import axios from 'axios';
import { IRate } from '../models/IRate';
import { IResponse } from '../models/IResponse';
import { fromAtom, toAtom } from '../store/atoms';
import { useAtom } from 'jotai';

export const useGetCurrency = () => {
  const [currency, setCurrency] = useState<IRate[]>(RATES_BASE_VALUE);
  const [from, setFrom] = useAtom(fromAtom);
  const [to, setTo] = useAtom(toAtom);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<IResponse>(API);
        const ratesArray: IRate[] = Object.entries(response.data.rates).map(
          ([currency, value]) => ({
            currency,
            value: Number(value),
          })
        );

        setCurrency(ratesArray);
      } catch (error) {
        console.error(error, 'error fetching data');
      }
    };
    getData();
  }, [from, to, setTo, setFrom]);

  return { currency } as const;
};
