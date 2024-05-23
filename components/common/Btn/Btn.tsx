'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';

import { IBtn } from './type';

export const Btn = ({ type, classname, children, isBtn, isLink, isScroll }: IBtn) => {
  const btnStyles = classNames(
    'border-around-white py-[15px] px-[24px] font-mont text-accentYellow01 text-[16px] leading-normal tracking-[0.32px] font-700 hover:bg-white focus:bg-white hover:border-accentYellow01 focus:border-accentYellow01 transition-colors',
    classname
  );

  return (
    <>
      {isBtn && (
        <button type={type} className={btnStyles}>
          {children}
        </button>
      )}
      {isLink && (
        <Link href="./" className={btnStyles}>
          {children}
        </Link>
      )}
      {isScroll && (
        <ScrollLink
          to="menu"
          href="/"
          smooth={true}
          spy={true}
          offset={50}
          duration={500}
          className={btnStyles}
        >
          {children}
        </ScrollLink>
      )}
    </>
  );
};
