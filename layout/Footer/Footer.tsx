import { Logo } from '@/components/common/Logo';
import { Socials } from '@/components/common/Socials';
import { FooterNav } from '@/components/ui/FooterNav';

export const Footer = () => {
  return (
    <footer className="bg-footerBg ">
      <div className="container flex justify-between items-center py-[40px] pr-[59px] pl-[30px] md:py-[80px] md:pr-[154px] md:pl-[122px] xl:pr-[216px] xl:pl-[187px]">
        <Logo isFooter />
        <div className="flex flex-col gap-[32px] md:flex-row md:gap-[137px]">
          <FooterNav />
          <Socials isFooter />
        </div>
      </div>
    </footer>
  );
};
