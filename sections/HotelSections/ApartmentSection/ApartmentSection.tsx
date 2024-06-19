import classNames from 'classnames';

import { SectionTitleMimino } from '@/components/common/SectionTitleMimino';

import hotelData from '@/data/hotelPageData.json';

import { IApartmentSection } from './type';

export const ApartmentSection = ({ isDouble, isDoubleLux, isTriple }: IApartmentSection) => {
  const { double, triple, doubleLux } = hotelData;

  let data;

  if (isDouble) {
    data = hotelData.double;
  } else if (isDoubleLux) {
    data = hotelData.doubleLux;
  } else {
    data = hotelData.triple;
  }

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

  return (
    <section className="pt-[16px] pb-[20px] bg-lemonBg gradient-bg md:pt-[120px] md:pb-[32px] xl:pb-[50px]">
      <div className="container relative z-10">
        <div>
          <p className={textStyles}>{data.desc}</p>

          <SectionTitleMimino classnameProps={titleStyles} />

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
    </section>
  );
};
