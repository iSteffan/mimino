import classNames from 'classnames';

import { ISectionTitle } from './type';

export const SectionTitleMimino = ({ classname }: ISectionTitle) => {
  const addressStyles = classNames('border-around-yellow py-[8px]', classname);

  return <div>SectionTitleMimino</div>;
};
