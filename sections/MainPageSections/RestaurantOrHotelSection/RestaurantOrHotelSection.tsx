import classNames from 'classnames';

import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import { Slider } from '@/components/common/Slider';
import { BtnList } from '@/components/common/BtnList';

import mainPageData from '@/data/mainPageData.json';

import { IRestaurantOrHotelSection } from './type';

export const RestaurantOrHotelSection = ({ isHotel, isRestaurant }: IRestaurantOrHotelSection) => {
  const { restaurant, restaurantDesc, restaurantSlider, btnData, hotel, hotelDesc, hotelSlider } =
    mainPageData;

  const BtnData = isRestaurant ? btnData.restaurantSection : btnData.hotelSection;
  const SliderData = isRestaurant ? restaurantSlider : hotelSlider;

  const sectionStyles = classNames('pt-[24px] pb-[40px] bg-cover bg-center', {
    'restaurant-main-bg': isRestaurant,
    'hotel-main-bg': isHotel,
  });

  const textContainerStyles = classNames('', {
    'ml-[125px] md:ml-[236px]': isRestaurant,
    'mr-[129px] text-end md:mr-[230px]': isHotel,
  });

  const flexContainerStyles = classNames('flex flex-col gap-[32px]', {
    'md:flex-row-reverse': isRestaurant,
    'md:flex-row': isHotel,
  });

  const descriptionStyles = classNames(
    'mb-[48px] font-mont font-600 text-textGray04 text-[12px] tracking-[0.24px] leading-normal md:mb-[40px] md:text-[16px] md:tracking-[0.32px]',
    {
      'text-left': isHotel,
    }
  );

  return (
    <section className={sectionStyles}>
      <div className="container relative z-10">
        <div className={textContainerStyles}>
          <SectionTitleMimino classnameProps="text-white mb-[12px] md:mb-[16px]" />

          <p className="mb-[20px] font-mont text-white font-700 text-[20px] leading-normal tracking-[0.4px] md:text-[24px] md:tracking-[0.48px]">
            {isRestaurant ? restaurant : hotel}
          </p>

          <p className={descriptionStyles}>{isRestaurant ? restaurantDesc : hotelDesc}</p>
        </div>

        <div className={flexContainerStyles}>
          <Slider section={isRestaurant ? 'mainRestaurant' : 'mainHotel'} data={SliderData} />
          <BtnList
            BtnData={BtnData}
            listClassnameProps="gap-[16px] md:mt-[151px]"
            btnClassnameProps="border-white rounded-[25px] border-[2px]"
          />
        </div>
      </div>
    </section>
  );
};
