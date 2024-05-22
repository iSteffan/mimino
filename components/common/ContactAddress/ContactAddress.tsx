import classNames from 'classnames';

import PinIcon from '@/public/icons/location-pin.svg';

import data from '@/data/common.json';

import { IContactAdress } from './type';

export const ContactAddress = ({ isContactSection, isHero, className }: IContactAdress) => {
  const { address } = data;

  const addressStyles = classNames(
    'border-around-yellow py-[8px]',
    {
      'pr-[10px] pl-[33px] w-full': isContactSection,
      'px-[6px] w-[210px]': isHero,
    },
    className
  );

  return (
    <div className={addressStyles}>
      <a
        href="https://goo.gl/maps/XrxTVzeBdrzJqLxW6"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="flex items-center gap-[8px] font-mont text-[12px] leading-normal tracking-[0.12px] font-400 text-adressHero hover:text-accentYellow01 focus:text-accentYellow01 transitiontransition"
      >
        <PinIcon className="w-[20px] h-[20px] shrink-0 text-accentYellow01" />
        {address}
      </a>
    </div>
  );
};
