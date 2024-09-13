'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import ArrowLeft from '@/public/icons/room-arrow-left.svg';
import ArrowRight from '@/public/icons/room-arrow-right.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import { IRoomSlider } from './type';

export const RoomSlider = ({ data, classnameProps }: IRoomSlider) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.update();
    }
  }, [swiperRef]);

  const swiperParams = {
    centeredSlides: true,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: `.button-next`,
      prevEl: `.button-prev`,
    },
    slidesPerView: 1,
    spaceBetween: 20,

    // breakpoints: {
    //   1024: {
    //

    //   1280: {
    //   },
    // },
  };

  return (
    <div className={`${classnameProps}`}>
      <Swiper {...swiperParams} onSwiper={swiper => (swiperRef.current = swiper)}>
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <Image
              src={card.img}
              alt={card.alt}
              width={417}
              height={740}
              style={{ height: '740px', width: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container flex justify-between w-full absolute top-[50%] z-30 left-1/2 transform -translate-x-1/2 xl:top-[412px]">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="button-prev w-[40px] h-[40px]"
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="button-next w-[40px] h-[40px]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
