import Image from 'next/image';
import classNames from 'classnames';

import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';
import { Slider } from '@/components/common/Slider';
import { BtnList } from '@/components/common/BtnList';

import hotelData from '@/data/hotelPageData.json';

import { IApartmentSection } from './type';

export const ApartmentSection = ({ isDouble, isDoubleLux, isTriple }: IApartmentSection) => {
  const { double, triple, doubleLux } = hotelData;

  let data;
  let section: 'hotelDouble' | 'hotelDoubleLux' | 'hotelTriple';

  if (isDouble) {
    data = double;
    section = 'hotelDouble';
  } else if (isDoubleLux) {
    data = doubleLux;
    section = 'hotelDoubleLux';
  } else {
    data = triple;
    section = 'hotelTriple';
  }

  const sectionStyles = classNames(
    'pt-[32px] pb-[32px] gradient-bg md:pt-[62px] md:pb-[40px] xl:pb-[50px]',
    {
      'bg-darkLemonBg': isTriple,
      'bg-lemonBg': isDouble || isDoubleLux,
    }
  );

  const firstContainerStyles = classNames(
    'flex flex-col gap-[26px] mb-[32px] md:mb-[48px] xl:gap-[37px]',
    {
      'md:flex-row-reverse': isTriple,
      'md:flex-row': isDouble || isDoubleLux,
    }
  );

  const secondContainerStyles = classNames('flex flex-col', {
    'md:flex-row-reverse': isTriple,
    'md:flex-row': isDouble || isDoubleLux,
  });

  const textStyles = classNames(
    'mb-[12px] font-times text-[20px] font-400 text-textGray04 md:mb-[4px] md:text-[32px]',
    {
      'text-right': isTriple,
    }
  );
  const titleStyles = classNames({ 'text-right': isTriple });
  const roomTextStyles = classNames(
    'mt-[32px] mb-[12px] font-times text-[24px] font-700 tracking-[1.2px]',
    {
      'text-right': isTriple,
    }
  );

  const textWrapperStyles = classNames({ 'text-start w-fit ml-auto': isTriple });

  const imgStyles = classNames(
    'shadow w-[244px] h-[322px] md:w-[400px] md:h-[524px] md:mt-[-98px] xl:w-[460px] xl:h-[574px]',
    {
      'smOnly:mr-auto': isTriple,
      'smOnly:ml-auto': isDouble || isDoubleLux,
    }
  );

  const sliderContainerStyles = classNames('md:w-[428px] md:mt-[0px] xl:w-[548px] xl:mt-[0px]', {
    'mr-[70px] md:mr-auto': isDouble || isDoubleLux,
    'ml-[70px] md:ml-auto': isTriple,
  });

  return (
    <section className={sectionStyles}>
      <div className="container relative z-10">
        <div className={firstContainerStyles}>
          <div>
            <p className={textStyles}>{data.desc}</p>

            <SectionTitleMimino classnameProps={titleStyles} />

            <div className={textWrapperStyles}>
              <p className={roomTextStyles}>{data.room}</p>

              <p
                className="max-w-[258px] text-[12px] text-textGray02 font-600 tracking-[0.24px] 
            md:mt-[24px] md:max-w-[439px] md:text-[16px] md:tracking-[0.32px]
            xl:max-w-[518px]"
              >
                {data.roomDesc}
              </p>
            </div>
          </div>

          <Image
            src={data.image.src}
            alt={data.image.alt}
            priority
            width={244}
            height={322}
            className={imgStyles}
          />
        </div>

        <div className={secondContainerStyles}>
          <Slider data={data.roomSlider} section={section} classnameProps={sliderContainerStyles} />

          <BtnList
            BtnData={data.btnData}
            listClassnameProps="gap-[16px] mt-[20px] md:mt-[41px] xl:mt-[72px]"
            btnClassnameProps="bg-black"
          />
        </div>
      </div>
    </section>
  );
};
