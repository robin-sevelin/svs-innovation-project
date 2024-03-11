import { useEffect, useState } from 'react';
import { API } from '../constants/constants';
import axios from 'axios';
import { IRate } from '../models/IRate';
import { IResponse } from '../models/IResonse';

export const useGetCurrency = () => {
  const [currency, setCurrency] = useState<IRate[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<IResponse>(API);

        const ratesArray = Object.entries(response.data.rates).map(
          ([currency, value]) => ({
            currency,
            value,
          })
        );
        setCurrency(ratesArray);
      } catch (error) {
        console.error(error, 'error fetching data');
      }
    };
    getData();
  }, []);

  return { currency } as const;
};
