import type { Config } from 'tailwindcss';

const doubleGradient =
  'linear-gradient(90deg, rgba(0, 0, 0, 0) 33%, rgba(186, 186, 186, 0.4) 33.2%, rgba(0, 0, 0, 0) 33.3%, rgba(0, 0, 0, 0) 66%, rgba(186, 186, 186, 0.4) 66.2%, rgba(0, 0, 0, 0) 66.3%)';
const tripleGradient =
  'linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 25%, rgba(186, 186, 186, 0.4) 25.1%, rgba(186, 186, 186, 0.4) 25.2%, rgba(0, 0, 0, 0) 25.3%, rgba(0, 0, 0, 0) 50%, rgba(186, 186, 186, 0.4) 50.1%, rgba(186, 186, 186, 0.4) 50.2%, rgba(0, 0, 0, 0) 50.3%, rgba(0, 0, 0, 0) 75%, rgba(186, 186, 186, 0.4) 75.1%, rgba(186, 186, 186, 0.4) 75.2%, rgba(0, 0, 0, 0) 75.3%, rgba(0, 0, 0, 0))';
const darkTransparentBackground = 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './layout/**/*.{ts,tsx,mdx}',
    './sections/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '1024px',
      xl: '1280px',

      smOnly: { max: '1023.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          sm: '15px',
          md: '48px',
          xl: '85px',
        },
      },
      fontFamily: {
        times: ['var(--font-timesNewRoman)'],
        mont: ['var(--font-montserrat)'],
        film: ['var(--font-filmP3)'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        accentYellow01: '#F3C653',
        accentYellow02: '#C79002',

        textGray01: '#B4B4B4',
        textGray02: '#5F5F5F',
        textGray03: '#828282',
        textGray04: '#BABABA',
        textGray05: '#494848',

        adressHero: '#E5E5E5',
        heroWhite: '#FDFBEC',

        footerBg: '#0E0C07',
        lemonBg: '#FFFDEE',
      },
      backgroundImage: {
        'hero-main-mobile': `${darkTransparentBackground}, ${doubleGradient}, url('/images/main/mainHero.webp')`,
        'hero-main-tablet': `${darkTransparentBackground}, ${tripleGradient}, url('/images/main/mainHero.webp')`,
        'hero-restaurant-mobile': `${darkTransparentBackground}, ${doubleGradient}, url('/images/restaurant/restaurantHero.webp')`,
        'hero-restaurant-tablet': `${darkTransparentBackground}, ${tripleGradient}, url('/images/restaurant/restaurantHero.webp')`,
        'hero-hotel-mobile': `${darkTransparentBackground}, ${doubleGradient}, url('/images/hotel/hotelHero.webp')`,
        'hero-hotel-tablet': `${darkTransparentBackground}, ${tripleGradient}, url('/images/hotel/hotelHero.webp')`,
        'restaurant-main-mobile': `${darkTransparentBackground}, ${doubleGradient}, url('/images/main/main-restaurant-slider-bg.webp')`,
        'restaurant-main-tablet': `${darkTransparentBackground}, ${tripleGradient}, url('/images/main/main-restaurant-slider-bg.webp')`,
        'hotel-main-mobile': `${darkTransparentBackground}, ${doubleGradient}, url('/images/main/main-hotel-slider-bg.webp')`,
        'hotel-main-tablet': `${darkTransparentBackground}, ${tripleGradient}, url('/images/main/main-hotel-slider-bg.webp')`,
        'double-gradient': ` ${doubleGradient}`,
        'triple-gradient': ` ${tripleGradient}`,
      },
      boxShadow: {
        xs: '2px 2px 60px 2px rgba(0, 0, 0, 0.25)',
        md: '5px 5px 70px 17px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
