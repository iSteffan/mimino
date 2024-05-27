import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';

import data from '@/data/mainPageData.json';
import phoneData from '@/data/common.json';
import { ContactPhone } from '@/components/common/ContactPhone';
import { HeaderContacts } from '@/components/ui/HeaderContacts';

export const ContactsSection = () => {
  const { complex } = data;
  const { headerLink } = phoneData;

  return (
    <section className="bg-lemonBg pt-[36px] pb-[32px]">
      <div className="container">
        <SectionTitleMimino classnameProps="mb-[12px]" />
        <p className="mb-[16px] font-mont text-[16px] text-textGray02 font-600 leading-normal tracking-[0.32px]">
          {complex}
        </p>
        {/* <HeaderContacts /> */}
        <div>
          <ContactPhone data={headerLink[0].phone} classnameProps="text-textGray05" />
        </div>
        <div>
          <ContactPhone data={headerLink[1].phone} classnameProps="text-textGray05" />
        </div>
      </div>
    </section>
  );
};
