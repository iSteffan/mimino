'use client';
import { useState } from 'react';
import classNames from 'classnames';

import { Modal } from '@/components/ui/Modal';
import { Form } from '@/components/common/Form';
import { ContactAddress } from '@/components/common/ContactAddress';
import { Socials } from '@/components/common/Socials';

import data from '@/data/common.json';

import { IHeroSection } from './type';
import { Btn } from '@/components/common/Btn';

export const HeroSection = ({ isMain, isRestaurant, isHotel }: IHeroSection) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formTypeName, setFormTypeName] = useState<'table' | 'room' | 'roomPrice'>('table');

  const { logo, heroText, tasteLife, heroBtn } = data;

  const heroMainDescription = heroText[0];
  const heroRestaurantDescription = heroText[1];
  const heroHotelDescription = heroText[2];

  let BtnData;

  if (isMain) {
    BtnData = heroBtn.heroMainBtns;
  } else if (isRestaurant) {
    BtnData = heroBtn.heroRestaurantBtns;
  } else {
    BtnData = heroBtn.heroHotelBtns;
  }

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBtnClick = (type: string) => {
    if (type === 'table' || type === 'room' || type === 'roomPrice') {
      setFormTypeName(type);
      handleToggleModal();
    } else {
      console.error(`Invalid type: ${type}`);
    }
  };

  const sectionStyles = classNames(
    'bg-cover bg-center mt-[-64px] pb-[20px] pt-[64px] md:mt-[-104px] md:pt-[100px] xl:pb-[64px]',
    {
      'hero-main-bg': isMain,
      'hero-restaurant-bg': isRestaurant,
      'hero-hotel-bg': isHotel,
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
      <div className="container relative z-10">
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
            classnameDivProps="absolute top-[-64px] right-0 flex md:relative md:h-[56px] md:top-0"
          />

          <div className="flex flex-col gap-[24px] md:flex-row md:gap-[40px] smOnly:mx-auto">
            <Btn
              {...(BtnData[0].type === 'btn'
                ? { type: 'button', isBtn: true }
                : { isScroll: true })}
              classnameProps="border-white rounded-[25px] border-[2px]"
              {...(BtnData[0].formType !== 'none'
                ? { onClick: () => handleBtnClick(BtnData[0].formType) }
                : {})}
            >
              {BtnData[0].text}
            </Btn>
            <Btn
              {...(BtnData[1].type === 'btn'
                ? { type: 'button', isBtn: true }
                : { isScroll: true })}
              classnameProps="border-white rounded-[25px] border-[2px]"
              {...(BtnData[1].formType !== 'none'
                ? { onClick: () => handleBtnClick(BtnData[1].formType) }
                : {})}
            >
              {BtnData[1].text}
            </Btn>
          </div>
        </div>

        <Socials classnameProps="xl:hidden" />
      </div>

      <Modal open={isModalOpen} onClose={handleToggleModal}>
        <Form
          formTypeName={formTypeName}
          onClose={handleToggleModal}
          setFormTypeName={setFormTypeName}
        />
      </Modal>
    </section>
  );
};
