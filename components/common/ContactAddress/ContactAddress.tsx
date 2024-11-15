import classNames from 'classnames';

import PinIcon from '@/public/icons/location-pin.svg';

import data from '@/data/common.json';

import { IContactAdress } from './type';

export const ContactAddress = ({
  isContactSection,
  isHero,
  classnameDivProps = '',
  classnameLinkProps = '',
  isRoomHero,
}: IContactAdress) => {
  const { address } = data;

  const addressDivStyles = classNames(
    'border-around-yellow py-[8px]',
    {
      'pl-[10px] pr-[33px] w-full': isContactSection,
      'px-[6px] w-[210px]': isHero,
    },
    classnameDivProps
  );

  const addressLinkStyles = classNames(
    'flex items-center gap-[8px] font-mont text-[12px] tracking-[0.12px] font-400 text-adressHero hover:text-accentYellow01 focus:text-accentYellow01 transition',
    {
      'text-[16px] tracking-[0.16px] text-textGray05': isContactSection,
    },
    classnameLinkProps
  );

  const iconStyles = classNames('w-[20px] h-[20px] shrink-0 text-accentYellow01', {
    'w-[24px] h-[24px]': isRoomHero,
  });

  return (
    <div className={addressDivStyles}>
      <a
        href="https://maps.app.goo.gl/8EfgAUe7yWcouzZ37"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={addressLinkStyles}
      >
        <PinIcon className={iconStyles} />
        {address}
      </a>
    </div>
  );
};
