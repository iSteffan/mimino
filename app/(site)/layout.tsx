import type { Metadata } from 'next';

import classNames from 'classnames';

import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import '../globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const timesNewRoman = localFont({
  src: [
    {
      path: '../../public/fonts/times-new-roman-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/times-new-roman.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-timesNewRoman',
});

const filmP3 = localFont({
  src: [
    {
      path: '../../public/fonts/filmp3-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-filmP3',
});

export const metadata: Metadata = {
  title: 'Mimino',
  description: 'Hotel website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          timesNewRoman.variable,
          montserrat.variable,
          filmP3.variable,
          'flex h-full min-h-screen flex-col bg-white'
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
