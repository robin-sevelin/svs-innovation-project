import { useEffect, useState } from 'react';
import { CONVERTER_BASE_VALUES, OPTIONS } from '../constants/constants';
import axios from 'axios';

export const useGetCurrency = () => {
  const [currency, setCurrency] = useState(CONVERTER_BASE_VALUES);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(OPTIONS);
        setCurrency(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error, 'error fetching data');
      }
    };
    getData();
  }, []);

  return { currency } as const;
};
