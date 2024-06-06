import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import { Slider } from '@/components/common/Slider';

import data from '@/data/mainPageData.json';
import { mainModule } from 'process';

export const RestaurantSection = () => {
  const { restaurant, restaurantDesc, restaurantSlider } = data;

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
        <Slider section="mainRestaurant" data={restaurantSlider} />
      </div>
    </section>
  );
};
