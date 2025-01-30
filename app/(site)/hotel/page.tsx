import { Metadata } from 'next';

import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ApartmentSection } from '@/sections/HotelSections/ApartmentSection';

import { pageMetadata } from '@/utils/pageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('hotel');
}

export default function Page() {
  return (
    <>
      <HeroSection isHotel />
      <ApartmentSection isDoubleLux />
      <ApartmentSection isTriple />
      <ApartmentSection isDouble />
    </>
  );
}
