import classNames from 'classnames';

import { ContactAddress } from '@/components/common/ContactAddress';

import data from '@/data/common.json';

import { IHeroSection } from './type';
import { Btn } from '@/components/common/Btn';

export const HeroSection = ({ isMain, isRestaurant, isHotel }: IHeroSection) => {
  const { logo, heroText, tasteLife, heroHotelBtns, heroMainBtns, heroRestaurantBtns } = data;

  const heroMainDescription = heroText[0];
  const heroRestaurantDescription = heroText[1];
  const heroHotelDescription = heroText[2];

  // console.log(heroHotelBtns);
  // let BtnData = [];

  // if (isMain) {
  //   BtnData = heroMainBtns;
  // } else if (isRestaurant) {
  //   BtnData = heroRestaurantBtns;
  // } else if (isHotel) {
  //   BtnData = heroHotelBtns;
  // }

  const sectionStyles = classNames('bg-cover bg-center mt-[-64px] h-[1000px] pb-[20px] pt-[64px]', {
    'bg-hero-main': isMain,
    'bg-hero-restaurant': isRestaurant,
    'bg-hero-hotel': isHotel,
  });

  const descriptionStyles = classNames(
    'font-mont text-[16px] font-600 leading-normal tracking-[0.32px] text-heroWhite text-center md:text-[20px] md:tracking-[0.4px]',
    {
      'mb-[40px]': isMain || isRestaurant,
      'mb-[178px]': isHotel,
    }
  );

  return (
    <section className={sectionStyles}>
      <div className="container">
        <ContactAddress isHero className="ml-auto" />
        <h1 className="heroTitleMimino mt-[70px] mb-[24px]">{logo}</h1>
        <p className={descriptionStyles}>
          {isMain && heroMainDescription}
          {isRestaurant && heroRestaurantDescription}
          {isHotel && heroHotelDescription}
        </p>
        {(isMain || isRestaurant) && (
          <p className="mb-[113px] font-times text-heroWhite text-[32px] font-700 leading-normal tracking-[1.6px] text-center">
            {tasteLife}
          </p>
        )}
        {/* <ul>
          {BtnData.map(data => (
            <li key={data.text}>
              <Btn type={data.type}>{data.text}</Btn>
            </li>
          ))}
        </ul> */}

        {/* <Btn type="button" isBtn>
          button
        </Btn> */}
      </div>
    </section>
  );
};
