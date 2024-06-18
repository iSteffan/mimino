import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ApartmentSection } from '@/sections/HotelSections/ApartmentSection';

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
