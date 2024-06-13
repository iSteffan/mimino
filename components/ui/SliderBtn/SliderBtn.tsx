import classNames from 'classnames';

import ArrowLeft from '@/public/icons/arrow-left.svg';
import ArrowRight from '@/public/icons/arrow-right.svg';

import data from '@/data/common.json';

import css from './SliderBtn.module.css';

import { ISliderBtn } from './type';

export const SliderBtn = ({ section, isNextSlide, isPrevSlide }: ISliderBtn) => {
  const ariaLabel = data.sliderBtn;

  let arrowLeftClass;
  let arrowRightClass;

  if (section === 'mainRestaurant' || section === 'mainHotel') {
    arrowLeftClass = classNames('h-[32px] w-[32px]', {
      [css['slider-inactive-arrow']]: isPrevSlide,
      [css['slider-arrow']]: !isPrevSlide,
    });

    arrowRightClass = classNames('h-[32px] w-[32px]', {
      [css['slider-inactive-arrow']]: isNextSlide,
      [css['slider-arrow']]: !isNextSlide,
    });
  } else {
    arrowLeftClass = classNames('h-[32px] w-[32px]', {
      [css['slider-inactive-arrow']]: isPrevSlide,
      [css['slider-black-arrow']]: !isPrevSlide,
    });

    arrowRightClass = classNames('h-[32px] w-[32px]', {
      [css['slider-inactive-arrow']]: isNextSlide,
      [css['slider-black-arrow']]: !isNextSlide,
    });
  }

  const containerClass = classNames('flex mt-[16px] h-[32px]', {
    'justify-end': section === 'mainHotel' || section === 'mainComplex' || section === 'restaurant',
    'justify-start': section === 'mainRestaurant' || section === 'mainApartment',
  });

  return (
    <div className={containerClass}>
      <button
        aria-label={ariaLabel.rightArrow}
        type="button"
        className={`button-prev-${section} mr-[32px] cursor-pointer`}
      >
        <ArrowLeft className={arrowLeftClass} />
      </button>
      <button
        aria-label={ariaLabel.leftArrow}
        type="button"
        className={`button-next-${section} cursor-pointer`}
      >
        <ArrowRight className={arrowRightClass} />
      </button>
    </div>
  );
};
