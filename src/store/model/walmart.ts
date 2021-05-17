import {Store} from './store';

export const Walmart: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.button.spin-button.prod-ProductCTA--primary.button--primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span[class*="price-characteristic"]',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.walmart.com/ip/Keurig-K-compact-Brewer-Black-Coffee-Maker/806217614',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.walmart.com/ip/PlayStation5-Console/363472942',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815',
    },
    {
      brand: 'panini',
      model: 'nbaprizm',
      series: 'blaster',
      url:
        'https://www.walmart.com/product/tempo/500335814',
    },
    {
      brand: 'panini',
      model: 'nbaprizm',
      series: 'hanger',
      url:
        'https://www.walmart.com/product/tempo/674730375',
    },
    {
      brand: 'panini',
      model: 'ufcprizm',
      series: 'blaster',
      url:
        'https://www.walmart.com/product/tempo/990571884',
    },
  ],
  name: 'walmart',
};
