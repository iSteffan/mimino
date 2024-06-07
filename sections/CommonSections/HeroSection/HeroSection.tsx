'use client';

import classNames from 'classnames';

import { ContactAddress } from '@/components/common/ContactAddress';

import data from '@/data/common.json';

import { IHeroSection } from './type';
import { BtnList } from '@/components/common/BtnList';
import { Socials } from '@/components/common/Socials';

export const HeroSection = ({ isMain, isRestaurant, isHotel }: IHeroSection) => {
  const { logo, heroText, tasteLife, heroBtn } = data;

  const heroMainDescription = heroText[0];
  const heroRestaurantDescription = heroText[1];
  const heroHotelDescription = heroText[2];

  let BtnData;

  if (isMain) {
    BtnData = heroBtn.heroMainBtns;
  } else if (isRestaurant) {
    BtnData = heroBtn.heroRestaurantBtns;
  } else if (isHotel) {
    BtnData = heroBtn.heroHotelBtns;
  }

  const sectionStyles = classNames(
    'bg-cover bg-center mt-[-64px] pb-[20px] pt-[64px] md:mt-[-104px] md:pt-[100px] xl:pb-[64px]',
    {
      'bg-hero-main': isMain,
      'bg-hero-restaurant': isRestaurant,
      'bg-hero-hotel': isHotel,
    }
  );

  const descriptionStyles = classNames(
    'font-mont text-[16px] font-600 leading-normal tracking-[0.32px] text-heroWhite text-center md:text-[20px] md:tracking-[0.4px]',
    {
      'mb-[40px]': isMain || isRestaurant,
      'mb-[178px]': isHotel,
    }
  );

  return (
    <section className={sectionStyles}>
      <div className="container relative">
        <h1 className="heroTitleMimino mt-[70px] mb-[24px]">{logo}</h1>
        <p className={descriptionStyles}>
          {isMain && heroMainDescription}
          {isRestaurant && heroRestaurantDescription}
          {isHotel && heroHotelDescription}
        </p>
        {(isMain || isRestaurant) && (
          <p
            className="mb-[101px] font-times text-heroWhite text-[32px] font-700 leading-normal tracking-[1.6px] text-center 
          md:text-[32px] md:tracking-[1.8px]"
          >
            {tasteLife}
          </p>
        )}
        <div className="flex justify-between mb-[58px] md:mb-[25px] xl:mb-0">
          <ContactAddress
            isHero
            classnameProps="absolute top-[-64px] right-0 flex md:relative md:h-[56px] md:top-0"
          />
          <BtnList
            BtnData={BtnData}
            listClassnameProps="gap-[24px] md:flex-row md:gap-[40px] smOnly:mx-auto"
          />
        </div>
        <Socials classnameProps="xl:hidden" />
      </div>
    </section>
  );
};
