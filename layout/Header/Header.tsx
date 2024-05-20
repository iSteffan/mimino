import { HeaderContacts } from '@/components/ui/HeaderContacts';
import { Logo } from '@/components/common/Logo';

export const Header = () => {
  return (
    <header className="pt-[16px] pb-[8px] md:py-[30px]">
      <div className="container max-w-full flex bg-black items-center justify-between">
        <Logo isHeader />
        <HeaderContacts />
      </div>
    </header>
  );
};
