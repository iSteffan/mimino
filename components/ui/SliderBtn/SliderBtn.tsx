import classNames from 'classnames';

import ArrowLeft from '@/public/icons/arrow-left.svg';
import ArrowRight from '@/public/icons/arrow-right.svg';

import data from '@/data/common.json';

import css from './SliderBtn.module.css';

import { ISliderBtn } from './type';

export const SliderBtn = ({ section, isNextSlide, isPrevSlide }: ISliderBtn) => {
  const ariaLabel = data.sliderBtn;

  const arrowLeftClass = classNames('h-[32px] w-[32px]', {
    [css['slider-inactive-arrow']]: isPrevSlide,
    [css['slider-arrow']]: !isPrevSlide,
  });

  const arrowRightClass = classNames('h-[32px] w-[32px]', {
    [css['slider-inactive-arrow']]: isNextSlide,
    [css['slider-arrow']]: !isNextSlide,
  });

  const containerClass = classNames('mt-[16px] h-[32px]', {
    '': section === '',
  });

  return (
    <div className={containerClass}>
      <button
        aria-label={ariaLabel.rightArrow}
        type="button"
        className={`button-prev-${section} mr-[32px] cursor-pointer md:mr-16`}
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