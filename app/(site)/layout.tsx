import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';

import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import meta from '@/data/meta/base.json';

import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';

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

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_URL as string;

  const { title, description, manifest, keywords, twitter, openGraph, icons, robots } = meta;

  return {
    title: title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: baseUrl },
    icons,
    robots,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={classNames(
          timesNewRoman.variable,
          montserrat.variable,
          filmP3.variable,
          'flex h-full min-h-screen flex-col bg-white relative'
        )}
      >
        <ToastContainer />
        <Header />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
