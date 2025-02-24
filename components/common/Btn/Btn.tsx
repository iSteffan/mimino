'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';

import { IBtn } from './type';

export const Btn = ({
  type,
  classnameProps = '',
  children,
  isBtn,
  isLink,
  isScroll,
  linkTo,
  onClick,
}: IBtn) => {
  const btnStyles = classNames(
    'block border-white rounded-[25px] py-[15px] w-[236px] font-mont text-center text-accentYellow01 text-[16px] leading-normal tracking-[0.32px] font-700 hover:bg-white hover:border-accentYellow01 transition-colors',
    classnameProps
  );

  return (
    <>
      {isBtn && (
        <button type={type} className={btnStyles} onClick={onClick}>
          {children}
        </button>
      )}
      {isLink && (
        <Link href={`./${linkTo}`} className={btnStyles}>
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
