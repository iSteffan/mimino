import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ContactsSection } from '@/sections/MainPageSections/ContactsSection';
import { RestaurantSection } from '@/sections/MainPageSections/RestaurantSection';

export default function Home() {
  return (
    <>
      <HeroSection isMain />
      <RestaurantSection />
      <ContactsSection />
    </>
  );
}
