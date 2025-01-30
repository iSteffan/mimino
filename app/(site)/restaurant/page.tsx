import { Metadata } from 'next';

import { DescriptionSection } from '@/sections/CommonSections/DescriptionSection';
import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { MenuSection } from '@/sections/RestaurantSection/MenuSection';

import { pageMetadata } from '@/utils/pageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('restaurant');
}

export default function Page() {
  return (
    <>
      <HeroSection isRestaurant />
      <DescriptionSection isRestaurant />
      <MenuSection />
    </>
  );
}
