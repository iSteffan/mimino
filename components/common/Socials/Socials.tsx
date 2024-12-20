import classNames from 'classnames';

import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import Telegram from '@/public/icons/telegram.svg';

import { ISocials } from './type';

import data from '@/data/common.json';

import css from './Socials.module.css';

export const Socials = ({ isFooter, isHeader, classnameProps = '' }: ISocials) => {
  const { socials } = data;

  const listClassName = classNames(
    'flex gap-[20px]',
    {
      'md:flex-col md:gap-[12px]': isFooter,
      'hidden xl:flex': isHeader,
    },
    classnameProps
  );

  const listItemClassName = classNames(
    'text-accentYellow01 transition-colors hover:text-white focus:text-white',
    {
      'md:py-[8px] md:px-[12px] md:border-around-yellow md:border-[0.5px] hover:border-white focus:border-white':
        isFooter,
    }
  );

  const linkClassName = classNames(css.link, {
    'md:flex md:gap-[17px]': isFooter,
  });

  const IconClassName = classNames('h-[24px] w-[24px]', css.icon);

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
            {link.name === 'Instagram' && <Instagram className={IconClassName} />}
            {link.name === 'Facebook' && <Facebook className={IconClassName} />}
            {link.name === 'Telegram' && <Telegram className={IconClassName} />}
          </a>
        </li>
      ))}
    </ul>
  );
};
