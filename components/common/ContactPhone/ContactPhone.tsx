import classNames from 'classnames';

import PhoneIcon from '@/public/icons/phone.svg';

import { IContactPhone } from './type';

export const ContactPhone = ({ data, isContactSection, classnameProps = '' }: IContactPhone) => {
  const contactPhoneStyles = classNames(
    'font-mont text-[14px] leading-normal tracking-[0.28px] font-400 hover:text-accentYellow01 focus:text-accentYellow01 transition-colors',
    {
      'text-textGray05': isContactSection,
      'text-white': !isContactSection,
    }
  );

  const contactDivStyles = classNames(
    'flex gap-[16px] items-center p-[8px] border-around-yellow',
    classnameProps
  );

  return (
    <div className={contactDivStyles}>
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
