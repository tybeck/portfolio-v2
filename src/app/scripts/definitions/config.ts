'use strict';

let title: String = <String>'Tyler+Beck -';

export const ASSETS: any = <any>{
  '/home': [
    '/images/sprite.png',
    '/images/logos.png',
    '/images/bg-showcase.png',
    '/images/laptop-outline.png',
    '/images/phone-layout.png',
    '/images/tablet-outline.png',
    '/images/bg-contact.png',
    '/images/bg-carousel.png',
    '/images/bg-clients.png'
  ],
  '/about': [
    '/images/sprite.png',
    '/images/logos.png',
    '/images/bg-aboutme.png',
    '/images/bg-map.png'
  ],
  '/clients': [
    '/images/sprite.png',
    '/images/logos.png',
    '/images/bg-clients-page.png'
  ],
  '/contact': [
    '/images/sprite.png',
    '/images/bg-contacts-page.png'
  ],
  '/portfolio': [
    '/images/sprite.png',
    '/images/bg-portfolio.png'
  ]
};

export const TITLES: any = <any>{
  '/home': `${title} Home`,
  '/about': `${title} About`,
  '/clients': `${title} Clients`,
  '/contact': `${title} Contact`,
  '/portfolio': `${title} Portfolio`
};