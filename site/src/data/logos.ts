export interface Logo {
  name: string;
  image: string;
  cls: string;
}

export const logos: Logo[] = [
  { name: 'BP', image: '/logo-bp.png', cls: 'h-14 md:h-16' },
  { name: 'Amazon', image: '/logo-amazon.png', cls: 'h-10 md:h-12' },
  { name: 'Apple', image: '/logo-apple.png', cls: 'h-12 md:h-14' },
  { name: 'Tesla', image: '/logo-tesla.png', cls: 'h-12 md:h-14' },
  { name: 'ASU', image: '/logo-asu.png', cls: 'h-12 md:h-14' },
  { name: 'Emirates', image: '/logo-emirates.png', cls: 'h-10 md:h-12' },
  { name: 'Dubai Airports', image: '/logo-dubai-airports.png', cls: 'h-10 md:h-12' },
  { name: 'Google', image: '/logo-google.png', cls: 'h-10 md:h-12' },
  { name: 'General Electric', image: '/logo-ge.png', cls: 'h-12 md:h-14' },
  { name: 'Deloitte', image: '/logo-deloitte.png', cls: 'h-10 md:h-12' },
  { name: 'Ford', image: '/logo-ford.png', cls: 'h-10 md:h-12' },
  { name: 'Fiskars', image: '/logo-fiskars.png', cls: 'h-8 md:h-10' },
  { name: 'Meta', image: '/logo-meta.png', cls: 'h-10 md:h-12' },
  { name: 'Coca Cola', image: '/logo-coca-cola.png', cls: 'h-10 md:h-12' },
  { name: 'Spotify', image: '/logo-spotify.png', cls: 'h-10 md:h-12' },
  { name: 'Salesforce', image: '/logo-salesforce.png', cls: 'h-12 md:h-14' },
  { name: "McDonald's", image: '/logo-mcdonalds.png', cls: 'h-12 md:h-14' },
  { name: 'IBM', image: '/logo-ibm.png', cls: 'h-10 md:h-12' },
  { name: 'HSBC', image: '/logo-hsbc.png', cls: 'h-10 md:h-12' },
  { name: 'Microsoft', image: '/logo-microsoft.png', cls: 'h-10 md:h-12' },
];

export const LOGOS_PER_PAGE = 5;
