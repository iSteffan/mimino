'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { IRoomSlider } from './type';

export const RoomSlider = ({ data, classnameProps }: IRoomSlider) => {
  const swiperParams = {
    centeredSlides: true,

    modules: [Navigation],
    //   navigation: {
    //     nextEl: `.button-next-${section}`,
    //     prevEl: `.button-prev-${section}`,
    //   },
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
      <Swiper {...swiperParams}>
        {data.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={card.img}
                alt={card.alt}
                width={417}
                height={740}
                // style={{ ...imageStyle }}
                style={{ height: '740px', width: '100%' }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <SliderBtn section={section} isPrevSlide={isPrevSlide} isNextSlide={isNextSlide} /> */}
    </div>
  );
};
