import { IRate } from '../models/IRate';

export const API = 'https://open.er-api.com/v6/latest/EUR';

export const RATE_BASE_VALUE = {
  currency: '',
  value: 0,
};

export const RATES_BASE_VALUE: IRate[] = [];

export const FOOTER_NAV_IMGS = [
  {
    id: 0,
    src: '/github-mark.png',
    alt: 'github logo',
    url: 'https://github.com/robin-sevelin',
  },
  {
    id: 1,
    src: '/linkedIn.png',
    alt: 'linkedIn logo',
    url: 'https://www.linkedin.com/in/robin-sevelin-336b20168/',
  },
  {
    id: 2,
    src: '/email.png',
    alt: 'email',
    url: 'mailto:robin.sevelin@medieinstitutet.se',
  },
];
