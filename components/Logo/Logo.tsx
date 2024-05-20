import Link from 'next/link';

import data from '@/data/common.json';

export const Logo = () => {
  const { logo } = data;

  return (
    <Link
      href="/"
      className="font-film text-[36px] font-700 tracking-[10.8px] leading-normal text-white
      md:text-[40px] md:tracking-[12px] hover:text-accentYellow01 focus:text-accentYellow01 transition-colors"
    >
      {logo}
    </Link>
  );
};
