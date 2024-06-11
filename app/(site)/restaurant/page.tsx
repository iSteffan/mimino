import { DescriptionSection } from '@/sections/CommonSections/DescriptionSection';
import { HeroSection } from '@/sections/CommonSections/HeroSection';

export default function Page() {
  return (
    <>
      <HeroSection isRestaurant />
      <DescriptionSection isRestaurant />
    </>
  );
}
