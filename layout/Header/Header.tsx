import { HeaderContacts } from '@/components/HeaderContacts';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <header className="pt-[16px] pb-[8px] md:py-[30px]">
      <div className="container max-w-full flex bg-black items-center justify-between">
        <Logo />
        <HeaderContacts />
      </div>
    </header>
  );
};
