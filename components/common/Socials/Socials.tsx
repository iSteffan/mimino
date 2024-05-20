import Image from 'next/image';
import { ISocials } from './type';

import data from '@/data/common.json';

export const Socials = ({}: ISocials) => {
  const { socials } = data;

  return (
    <ul className="flex gap-[20px]">
      {socials.map(link => (
        <li key={link.text}>
          <a href="./" target="_blank" rel="noopener noreferrer nofollow" aria-label={link.text}>
            <Image
              src={link.logo}
              alt={link.text}
              width={24}
              height={24}
              className="stroke-red-500 fill-green-500"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
