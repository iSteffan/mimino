import { Socials } from '@/components/common/Socials';
import { FooterNav } from '@/components/ui/FooterNav';

export const Footer = () => {
  return (
    <footer
      className="py-[40px] pr-[59px] pl-[30px] bg-footerBg 
    md:py-[80px] md:pr-[154px] md:pl-[122px] xl:pr-[216px] xl:pl-[187px]"
    >
      <FooterNav />
      <Socials />
    </footer>
  );
};
