'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { ISlider } from './type';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export const Slider = ({ section, data, className }: ISlider) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const swiperParams = {
    centeredSlides: false,
    modules: [Navigation],
    navigation: {
      nextEl: `.button-next-${section}`,
      prevEl: `.button-prev-${section}`,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    onSlideChange: (swiper: SwiperType) => {
      setIsPrevSlide(swiper.isBeginning);
      setIsNextSlide(swiper.isEnd);
    },
    breakpoints: {
      1024: {
        slidesPerView: section === 'mainRestaurant' || section === 'mainHotel' ? 3 : 2,
        spaceBetween: section === 'mainRestaurant' || section === 'mainHotel' ? 34 : 40,
      },

      1280: {
        spaceBetween: section === 'mainRestaurant' || section === 'mainHotel' ? 86 : 40,
      },
    },
  };
  return (
    <div className="">
      <Swiper {...swiperParams} className={`w-full ${className}`}>
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={card.img}
                alt={card.alt}
                width={415}
                height={294}
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <SliderBtn section={section} isPrevSlide={isPrevSlide} isNextSlide={isNextSlide} /> */}
    </div>
  );
};
