import Link from 'next/link';

import { ContactPhone } from '../../common/ContactPhone';

import data from '@/data/common.json';

export const HeaderContacts = () => {
  const { headerLink } = data;

  return (
    <div>
      <ul className="flex gap-[20px] md:gap-[72px]">
        {headerLink.map(link => (
          <li key={link.text} className="flex items-center">
            <Link
              href={`./${link.href}`}
              className="font-mont text-[16px] leading-normal tracking-[0.32px] font-500 text-accentYellow01 
            md:text-[20px] md:tracking-[0.4px] md:mr-[32px] hover:text-white focus:text-white transition-colors"
            >
              {link.text}
            </Link>
            <div className="hidden md:block">
              <ContactPhone data={link.phone} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
