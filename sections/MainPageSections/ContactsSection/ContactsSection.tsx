import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';

import { ContactPhone } from '@/components/common/ContactPhone';
import { Map } from '@/components/common/Map';
import { ContactAddress } from '@/components/common/ContactAddress';

import data from '@/data/mainPageData.json';
import phoneData from '@/data/common.json';

export const ContactsSection = () => {
  const { complex } = data;
  const { headerLink } = phoneData;

  return (
    <section className="bg-lemonBg pt-[36px] pb-[32px] two-vertical-lines">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-[32px] md:mb-0">
            <SectionTitleMimino classnameProps="mb-[12px]" />

            <p className="mb-[16px] font-mont text-[16px] text-textGray02 font-600 leading-normal tracking-[0.32px]">
              {complex}
            </p>

            <div className="grid grid-cols-[86px,1fr,260px] grid-rows-[40px,16px,40px,16px,76px] items-center md:grid-cols-1 md:grid-rows-[24px,8px,40px,24px,24px,8px,40px,48px,56px] md:w-[260px]">
              <p
                className="row-start-1 row-end-2 col-start-1 col-span-1 font-mont text-[16px] leading-normal tracking-[0.32px] font-500 text-accentYellow01 
            md:text-[20px] md:tracking-[0.4px] md:row-start-1 md:row-span-1]"
              >
                {headerLink[0].text}
              </p>

              <ContactPhone
                data={headerLink[0].phone}
                classnameProps="row-start-1 row-end-2 col-start-3 col-span-1 w-[148px] gap-[8px] md:row-start-3 md:row-span-1"
                isContactSection
              />

              <p
                className="row-start-3 row-end-4 col-start-1 col-span-1 font-mont text-[16px] leading-normal tracking-[0.32px] font-500 text-accentYellow01 
            md:text-[20px] md:tracking-[0.4px] md:row-start-5 md:row-span-1"
              >
                {headerLink[1].text}
              </p>

              <ContactPhone
                data={headerLink[1].phone}
                classnameProps="row-start-3 row-end-4 col-start-3 col-span-1 gap-[8px] md:row-start-7 md:row-span-1"
                isContactSection
              />

              <ContactAddress
                classnameProps="row-start-5 row-end-6 col-start-3 col-span-1 md:row-start-9 md:row-span-1"
                isContactSection
              />
            </div>
          </div>

          {/* <Map /> */}
        </div>
      </div>
    </section>
  );
};
