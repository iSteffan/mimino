import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';

import data from '@/data/mainPageData.json';

export const RestaurantSection = () => {
  const { restaurant, restaurantDesc } = data;

  return (
    <section className="pt-[24px] pb-[40px] bg-restaurant-main bg-cover bg-center">
      <div className="container">
        <SectionTitleMimino classnameProps="text-white mb-[12px]" />
        <p className="mb-[20px] font-mont text-white font-700 text-[20px] leading-normal tracking-[0.4px]">
          {restaurant}
        </p>
        <p className="mb-[48px] font-mont font-600 text-textGray04 text-[12px] tracking-[0.24px] leading-normal">
          {restaurantDesc}
        </p>
      </div>
    </section>
  );
};
