import Image from 'next/image';
import classNames from 'classnames';

import commonData from '@/data/common.json';

import { IDescSection } from './type';
import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import { Slider } from '@/components/common/Slider';

export const DescriptionSection = ({ isHotel, isComplex, isRestaurant }: IDescSection) => {
  const { descrSectionData } = commonData;

  const { hotelData, complexData, restaurantData } = descrSectionData;

  let data;
  let section: 'mainComplex' | 'mainApartment' | 'restaurant';

  if (isHotel) {
    data = hotelData;
    section = 'mainApartment';
  } else if (isComplex) {
    data = complexData;
    section = 'mainComplex';
  } else {
    data = restaurantData;
    section = 'restaurant';
  }

  const firstContainerStyles = classNames(
    'flex flex-col gap-[26px] smOnly:mb-[32px] xl:gap-[37px]',
    {
      'md:flex-row-reverse': isHotel,
      'md:flex-row': isRestaurant || isComplex,
    }
  );

  const textStyles = classNames(
    'mb-[12px] font-times text-[20px] font-400 text-textGray04 md:mb-[4px] md:text-[32px]',
    {
      'text-right': isHotel,
    }
  );

  const wrapperStyles = classNames({ 'smOnly:ml-auto': isHotel });
  const titleStyles = classNames({ 'text-right': isHotel });

  const firstImgStyles = classNames(
    'shadow w-[244px] h-[322px] md:w-[400px] md:h-[524px] md:mt-[-152px] xl:w-[460px] xl:h-[574px]',
    {
      'smOnly:mr-auto': isHotel,
      'smOnly:ml-auto': isRestaurant || isComplex,
    }
  );

  const secondContainerStyles = classNames('flex items-center gap-[20px] md:gap-[48px]', {
    'flex-row-reverse': isHotel,
    'flex-row': isRestaurant || isComplex,
  });

  const sliderContainerStyles = classNames(
    'mt-[32px] md:w-[428px] md:mt-[-28px] xl:w-[530px] xl:mt-[-167px]',
    {
      'mr-[70px] md:mr-auto': isHotel,
      'ml-[70px] md:ml-auto': isRestaurant || isComplex,
    }
  );

  // console.log(data?.image1);
  return (
    <section className="pt-[16px] pb-[20px] bg-lemonBg gradient-bg md:pt-[120px] md:pb-[32px] xl:pb-[50px]">
      <div className="container relative z-10">
        <div className={firstContainerStyles}>
          <div className={wrapperStyles}>
            <p className={textStyles}>{data.title}</p>

            <SectionTitleMimino classnameProps={titleStyles} />

            <p
              className="mt-[12px] max-w-[258px] text-[12px] text-textGray02 font-600 tracking-[0.24px] 
            md:mt-[24px] md:max-w-[439px] md:text-[16px] md:tracking-[0.32px]
            xl:max-w-[518px]"
            >
              {data?.text}
            </p>
          </div>
          <Image
            src={data.image1.src}
            alt={data.image1.alt}
            width={244}
            height={322}
            className={firstImgStyles}
          />
        </div>

        <div className={secondContainerStyles}>
          <Image
            src={data.image2.src}
            alt={data.image2.alt}
            width={200}
            height={278}
            className="shadow smOnly:ml-auto w-[200px] h-[278px] 
            md:mt-[-16px] md:w-[350px] md:h-[500px] 
            xl:w-[460px] xl:h-[574px]"
          />
          <p className="text-[12px] text-accentYellow02 font-600 tracking-[0.24px] md:max-w-[312px] md:text-[16px] md:tracking-[0.32px] xl:mb-[115px]">
            {data.additionalText}
          </p>
        </div>

        <Slider data={data.slider} section={section} classnameProps={sliderContainerStyles} />
      </div>
    </section>
  );
};
