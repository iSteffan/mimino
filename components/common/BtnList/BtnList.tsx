import classNames from 'classnames';

import { Btn } from '@/components/common/Btn';

import { IBtnList } from './type';

export const BtnList = ({ BtnData, listClassname, btnClassname }: IBtnList) => {
  const listStyles = classNames('flex flex-col gap-[24px]', listClassname);

  return (
    <ul className={listStyles}>
      {BtnData?.map(data => (
        <li key={data.text}>
          <Btn
            {...(data.type !== 'none' && { type: data.type as 'button' | 'submit' })}
            isBtn={data.type === 'btn'}
            isLink={data.type === 'link'}
            isScroll={data.type === 'scroll'}
            classname={btnClassname}
          >
            {data.text}
          </Btn>
        </li>
      ))}
    </ul>
  );
};
