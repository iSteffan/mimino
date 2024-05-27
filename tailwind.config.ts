import type { Config } from 'tailwindcss';

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
        'hero-main':
          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/main/mainHero.webp')",
        'hero-restaurant':
          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/restaurant/restaurantHero.webp')",
        'hero-hotel':
          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/hotel/hotelHero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
