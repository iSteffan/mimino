import { DescriptionSection } from '@/sections/CommonSections/DescriptionSection';
import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { MenuSection } from '@/sections/RestaurantSection/MenuSection';

export default function Page() {
  return (
    <>
      <HeroSection isRestaurant />
      <DescriptionSection isRestaurant />
      <MenuSection />
    </>
  );
}
