'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { IRoomSlider } from './type';

export const RoomSlider = ({ data, classnameProps }: IRoomSlider) => {
  const swiperBtn = useSwiper();

  const swiperParams = {
    centeredSlides: true,

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
      <button
        type="button"
        onClick={() => swiperBtn.slidePrev()}
        className="text-[33px] font-100 hover-underline"
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => swiperBtn.slideNext()}
        className="text-[33px] font-100 hover-underline"
      >
        NEXT
      </button>
      {/* <SliderBtn section={section} isPrevSlide={isPrevSlide} isNextSlide={isNextSlide} /> */}
    </div>
  );
};
