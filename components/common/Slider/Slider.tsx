'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { ISlider } from './type';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { SliderBtn } from '@/components/ui/SliderBtn';

export const Slider = ({ section, data, classnameProps }: ISlider) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const [viewportWidth, setViewportWidth] = useState(0);

  const lastSlide = data.length;

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageStyle = () => {
    switch (section) {
      case 'mainRestaurant':
      case 'mainHotel':
        return { width: '270px', height: '270px' };
      case 'mainComplex':
      case 'mainApartment':
      case 'restaurant':
        if (viewportWidth >= 1024 && viewportWidth <= 1279) {
          return { width: '194px', height: '194px' };
        }
        return { width: '245px', height: '245px' };
      default:
        return { width: '270px', height: '270px' };
    }
  };

  const imageStyle = getImageStyle();

  const swiperParams = {
    centeredSlides: false,
    modules: [Navigation],
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
    <div className={`${classnameProps}`}>
      <Swiper {...swiperParams}>
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
