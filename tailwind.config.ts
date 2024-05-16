import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['var(--font-timesNewRoman)'],
        mont: ['var(--font-montserrat)'],
        film: ['var(--font-filmP3)'],
      },
    },
  },
  plugins: [],
};
export default config;
