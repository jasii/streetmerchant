import {Store} from './store';

export const Target: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '[data-test="preorderButton"]',
        text: ['Preorder now'],
      },
      {
        container: '[data-test="shipItButton"]',
        text: ['Ship it'],
      },
    ],
    maxPrice: {
      container: '[data-test="product-price"]',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.target.com/p/playstation-5-console/-/A-81114595',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596',
    },
    {
      brand: 'panini',
      model: 'nbaprizm',
      series: 'fatpack',
      url: 'https://www.target.com/p/-/A-81588850',
    },
    {
      brand: 'panini',
      model: 'nbaprizm',
      series: 'blaster',
      url: 'https://www.target.com/p/-/A-81588897',
    },
    {
      brand: 'panini',
      model: 'nbaprizm',
      series: 'mega',
      url: 'https://www.target.com/p/-/A-81588851',
    },
    {
      brand: 'panini',
      model: 'nflselect',
      series: 'fatpack',
      url: 'https://www.target.com/p/-/A-81911165',
    },
    {
      brand: 'panini',
      model: 'nflselect',
      series: 'hanger',
      url: 'https://www.target.com/p/-/A-81911163',
    },
    {
      brand: 'panini',
      model: 'nflselect',
      series: 'blaster',
      url: 'https://www.target.com/p/-/A-81551362',
    },
    {
      brand: 'panini',
      model: 'nflselect',
      series: 'blaster',
      url: 'https://www.target.com/p/tempo/-/A-81551362',
    },
    {
      brand: 'panini',
      model: 'nflselect',
      series: 'mega',
      url: 'https://www.target.com/p/-/A-81911164',
    },
    {
      brand: 'panini',
      model: 'soccerprizm',
      series: 'blaster',
      url: 'https://www.target.com/p/-/A-81405495',
    },
    {
      brand: 'panini',
      model: 'soccerprizm',
      series: 'mega',
      url: 'https://www.target.com/p/-/A-81588840',
    },
    {
      brand: 'donruss',
      model: 'nfloptic',
      series: 'fatpack',
      url: 'https://www.target.com/p/-/A-81405509',
    },
    {
      brand: 'donruss',
      model: 'nfloptic',
      series: 'blaster',
      url: 'https://www.target.com/p/-/A-81405523',
    },
    {
      brand: 'donruss',
      model: 'nfloptic',
      series: 'mega',
      url: 'https://www.target.com/p/-/A-81405510',
    },
    {
      brand: 'donruss',
      model: 'nba',
      series: 'blaster',
      url: 'https://www.target.com/p/-/A-81869173',
    },
    {
      brand: 'donruss',
      model: 'nba',
      series: 'fatpack',
      url: 'https://www.target.com/p/-/A-81869174',
    },
    {
      brand: 'pokemon',
      model: 'charizard',
      series: 'tin',
      url: 'https://www.target.com/p/-/A-76625975',
    },
    {
      brand: 'pokemon',
      model: 'shiningfates',
      series: 'etb',
      url: 'https://www.target.com/p/-/A-82291630',
    },
  ],
  name: 'target',
};
