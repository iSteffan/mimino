import Link from 'next/link';

import classNames from 'classnames';

import data from '@/data/common.json';

import { ILogo } from './type';

export const Logo = ({ isHeader, isFooter }: ILogo) => {
  const { logo } = data;

  const logoStyles = classNames('font-film font-700 leading-normal transition-colors', {
    'text-[36px] tracking-[10.8px] text-white md:text-[40px] md:tracking-[12px] hover:text-accentYellow01 focus:text-accentYellow01':
      isHeader === true,
    'text-[40px] tracking-[12px] text-accentYellow01 md:text-[64px] md:tracking-[19.2px] hover:text-white focus:text-white':
      isFooter == true,
  });

  return (
    <Link href="/" className={logoStyles}>
      {logo}
    </Link>
  );
};
