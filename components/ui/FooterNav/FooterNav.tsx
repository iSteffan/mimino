import Link from 'next/link';

import data from '@/data/common.json';

export const FooterNav = () => {
  const { footerNav } = data;

  return (
    <ul className="flex flex-col gap-[16px]">
      {footerNav.map(link => (
        <li key={link.text}>
          <Link
            href={`./${link.href}`}
            className="font-mont text-[20px] font-500 leading-normal tracking-[0.4px] text-accentYellow01 hover:text-white focus:text-white transition-colors"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
