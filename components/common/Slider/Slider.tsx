'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { ISlider } from './type';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { SliderBtn } from '@/components/ui/SliderBtn';

export const Slider = ({ section, data, className }: ISlider) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const lastSlide = data.length;

  const getImageStyle = () => {
    switch (section) {
      case 'mainRestaurant':
      case 'mainHotel':
        return { width: '270', height: '270px' };
      case 'mainComplex':
      case 'mainApartment':
      case 'restaurant':
        return {
          width: '245px',
          height: '245px',
          '@media screen and (min-width: 1024px) and (max-width: 1279px)': {
            width: '194px',
            height: '194px',
          },
        };
        break;
      default:
        return { width: '270px', height: '270px' };
    }
  };

  const imageStyle = getImageStyle();

  const swiperParams = {
    centeredSlides: false,
    modules: [Navigation],
    // loop: true,
    navigation: {
      nextEl: `.button-next-${section}`,
      prevEl: `.button-prev-${section}`,
    },
    slidesPerView: 'auto' as 'auto',
    spaceBetween: 20,
    onReachEnd: () => {
      setIsNextSlide(true);
    },
    onFromEdge: () => {
      setIsNextSlide(false);
    },
    onSlideChange: (swiper: SwiperType) => {
      // console.log('isBeginning:', swiper.isBeginning, 'isEnd:', swiper.isEnd);

      setIsPrevSlide(swiper.isBeginning);
      setIsNextSlide(swiper.isEnd);
    },
    initialSlide: section === 'mainHotel' || section === 'mainApartment' ? lastSlide : 0,
    breakpoints: {
      1024: {
        slidesPerView:
          section === 'mainRestaurant' || section === 'mainHotel' ? ('auto' as 'auto') : 2,
        spaceBetween: section === 'mainRestaurant' || section === 'mainHotel' ? 34 : 40,
      },

      1280: {
        spaceBetween: section === 'mainRestaurant' || section === 'mainHotel' ? 86 : 40,
      },
    },
  };
  return (
    <div className="">
      <Swiper {...swiperParams} className={`${className}`}>
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={card.img}
                alt={card.alt}
                width={270}
                height={270}
                // className="w-[270px] h-[270px]"
                // style={{ width: '270px', height: '270px' }}
                style={{ ...imageStyle }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderBtn section={section} isPrevSlide={isPrevSlide} isNextSlide={isNextSlide} />
    </div>
  );
};
