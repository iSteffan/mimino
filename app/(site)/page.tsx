import { HeroSection } from '@/sections/CommonSections/HeroSection';
import { ContactsSection } from '@/sections/MainPageSections/ContactsSection';

export default function Home() {
  return (
    <>
      <HeroSection isMain />
      <ContactsSection />
    </>
  );
}
