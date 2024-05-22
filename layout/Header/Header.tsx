import { HeaderContacts } from '@/components/ui/HeaderContacts';
import { Logo } from '@/components/common/Logo';
import { Socials } from '@/components/common/Socials';

export const Header = () => {
  return (
    <header className="pt-[16px] pb-[8px] md:py-[30px] relative z-10 max-w-full">
      <div className="container  flex items-center justify-between">
        <Logo isHeader />
        <HeaderContacts />
        <Socials isHeader />
      </div>
    </header>
  );
};
