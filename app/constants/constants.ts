export const OPTIONS = {
  method: 'GET',
  url: 'https://currencyconverter.p.rapidapi.com/',
  params: {
    from_amount: '1',
    from: 'USD',
    to: 'SEK',
  },
  headers: {
    'X-RapidAPI-Key': '51fdff7ce2msh9c22a6f13f7b13dp103994jsnfa2058c3a853',
    'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com',
  },
};

export const CONVERTER_BASE_VALUES = {
  from: '',
  to: '',
};
