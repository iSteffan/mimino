import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ContactsSection } from '@/sections/MainPageSections/ContactsSection';
import { RestaurantOrHotelSection } from '@/sections/MainPageSections/RestaurantOrHotelSection';

export default function Home() {
  return (
    <>
      <HeroSection isMain />
      <RestaurantOrHotelSection isRestaurant />
      <RestaurantOrHotelSection isHotel />
      <ContactsSection />
    </>
  );
}
