import classNames from 'classnames';

import commonData from '@/data/common.json';

import { IDescSection } from './type';
import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import Image from 'next/image';

export const DescriptionSection = ({ isHotel, isComplex, isRestaurant }: IDescSection) => {
  const { descrSectionData } = commonData;

  const { hotelData, complexData, restaurantData } = descrSectionData;

  let data;

  if (isHotel) {
    data = hotelData;
  } else if (isComplex) {
    data = complexData;
  } else {
    data = restaurantData;
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
    'w-[244px] h-[322px] md:w-[400px] md:h-[524px] md:mt-[-152px] xl:w-[460px] xl:h-[574px]',
    {
      'smOnly:mr-auto': isHotel,
      'smOnly:ml-auto': isRestaurant || isComplex,
    }
  );

  const secondContainerStyles = classNames('flex items-center gap-[20px] md:gap-[48px]', {
    'flex-row-reverse': isHotel,
    'flex-row': isRestaurant || isComplex,
  });

  // console.log(data?.image1);
  return (
    <section className="pt-[16px] pb-[20px] bg-lemonBg md:pt-[120px] md:pb-[32px] xl:pb-[50px]">
      <div className="container">
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
            className="smOnly:ml-auto w-[200px] h-[278px] 
            md:mt-[-16px] md:w-[350px] md:h-[500px] 
            xl:w-[460px] xl:h-[574px]"
          />
          <p className="mt-[12px] mb-[28px] text-[12px] text-accentYellow02 font-600 tracking-[0.24px] md:mt-[24px] md:max-w-[312px] md:text-[16px] md:tracking-[0.32px]">
            {data.additionalText}
          </p>
        </div>
      </div>
    </section>
  );
};
