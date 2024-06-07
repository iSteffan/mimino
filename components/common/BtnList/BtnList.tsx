import classNames from 'classnames';

import { Btn } from '@/components/common/Btn';

import { IBtnList } from './type';

export const BtnList = ({ BtnData, listClassnameProps = '', btnClassnameProps = '' }: IBtnList) => {
  const listStyles = classNames('flex flex-col', listClassnameProps);

  return (
    <ul className={listStyles}>
      {BtnData?.map(data => (
        <li key={data.text} className="self-center">
          <Btn
            {...(data.type !== 'none' && { type: data.type as 'button' | 'submit' })}
            isBtn={data.type === 'btn'}
            isLink={data.type === 'link'}
            isScroll={data.type === 'scroll'}
            classnameProps={btnClassnameProps}
            linkTo={data.linkTo}
          >
            {data.text}
          </Btn>
        </li>
      ))}
    </ul>
  );
};
