import { DescriptionSection } from '@/sections/CommonSections/DescriptionSection';
import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ContactsSection } from '@/sections/MainPageSections/ContactsSection';
import { RestaurantOrHotelSection } from '@/sections/MainPageSections/RestaurantOrHotelSection';

export default function Home() {
  return (
    <>
      <HeroSection isMain />
      <DescriptionSection isComplex />
      <RestaurantOrHotelSection isRestaurant />
      <DescriptionSection isHotel />
      <RestaurantOrHotelSection isHotel />
      <ContactsSection />
    </>
  );
}
