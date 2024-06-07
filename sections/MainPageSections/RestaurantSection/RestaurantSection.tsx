import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import { Slider } from '@/components/common/Slider';

import mainPageData from '@/data/mainPageData.json';
import commonData from '@/data/common.json';
import { BtnList } from '@/components/common/BtnList';

export const RestaurantSection = () => {
  const { restaurant, restaurantDesc, restaurantSlider, btnData } = mainPageData;
  const BtnData = btnData.restaurantSection;

  return (
    <section className="pt-[24px] pb-[40px] bg-restaurant-main bg-cover bg-center">
      <div className="container">
        <div className="ml-[125px] md:ml-[236px]">
          <SectionTitleMimino classnameProps="text-white mb-[12px] md:mb-[16px]" />

          <p className="mb-[20px] font-mont text-white font-700 text-[20px] leading-normal tracking-[0.4px] md:text-[24px] md:tracking-[0.48px]">
            {restaurant}
          </p>

          <p className="mb-[48px] font-mont font-600 text-textGray04 text-[12px] tracking-[0.24px] leading-normal md:mb-[40px] md:w-[610px] md:text-[16px] md:tracking-[0.32px]">
            {restaurantDesc}
          </p>
        </div>

        <div className="flex flex-col gap-[32px] md:flex-row-reverse">
          <Slider section="mainRestaurant" data={restaurantSlider} />
          <BtnList BtnData={BtnData} listClassnameProps="gap-[16px] md:mt-[151px]" />
        </div>
      </div>
    </section>
  );
};
