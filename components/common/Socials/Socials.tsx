import classNames from 'classnames';

import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import Telegram from '@/public/icons/telegram.svg';

import { ISocials } from './type';

import data from '@/data/common.json';

export const Socials = ({ isFooter, isHeader }: ISocials) => {
  const { socials } = data;

  const listClassName = classNames('flex gap-[20px]', {
    'md:flex-col md:gap-[12px]': isFooter,
    'hidden xl:flex': isHeader,
  });

  const listItemClassName = classNames(
    'text-accentYellow01 transition-colors hover:text-white focus:text-white',
    {
      'md:py-[8px] md:px-[12px] md:border-around-yellow md:border-[0.5px] hover:border-white focus:border-white':
        isFooter,
    }
  );

  const linkClassName = classNames({
    'md:flex md:gap-[17px]': isFooter,
  });

  return (
    <ul className={listClassName}>
      {socials.map(link => (
        <li key={link.text} className={listItemClassName}>
          <a
            href="./"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={link.text}
            className={linkClassName}
          >
            {isFooter && <p className="hidden md:block">{link.name}</p>}
            {link.name === 'Instagram' && <Instagram className="h-[24px] w-[24px]" />}
            {link.name === 'Facebook' && <Facebook className="h-[24px] w-[24px]" />}
            {link.name === 'Telegram' && <Telegram className="h-[24px] w-[24px]" />}
          </a>
        </li>
      ))}
    </ul>
  );
};
