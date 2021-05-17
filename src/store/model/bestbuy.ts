import {Store} from './store';

export const BestBuy: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '[data-sticky-media-gallery] .fulfillment-add-to-cart-button',
      text: ['add to cart'],
    },
    maxPrice: {
      container:
        '[data-sticky-media-gallery] .priceView-price .priceView-hero-price span',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://api.bestbuy.com/click/-/6258941/pdp',
    },
    {
      brand: 'sony',
      cartUrl: 'https://api.bestbuy.com/click/-/6426149/cart',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://api.bestbuy.com/click/-/6426149/pdp',
    },
    {
      brand: 'sony',
      cartUrl: 'https://api.bestbuy.com/click/-/6430161/cart',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://api.bestbuy.com/click/-/6430161/pdp',
    },
  ],
  name: 'bestbuy',
};
