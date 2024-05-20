import classNames from 'classnames';

import PhoneIcon from '@/public/icons/phone.svg';

import { IContactPhone } from './type';

export const ContactPhone = ({ data, className = '' }: IContactPhone) => {
  const contactPhoneStyles = classNames(
    'font-mont text-[14px] leading-normal tracking-[0.28px] font-400 text-white',
    className
  );

  return (
    <div className="flex gap-[16px] items-center p-[8px] border-[1px] border-accentYellow01 border-solid rounded-[2px]">
      <PhoneIcon className="w-[24px] h-[24px]" />
      {Array.isArray(data) ? (
        <>
          {data.map((phone, index) => (
            <a key={index} href={`tel:${phone}`} className={contactPhoneStyles}>
              {phone}
            </a>
          ))}
        </>
      ) : (
        <a href={`tel:${data}`} className={contactPhoneStyles}>
          {data}
        </a>
      )}
    </div>
  );
};
