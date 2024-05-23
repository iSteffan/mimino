import classNames from 'classnames';

import { ISectionTitle } from './type';

export const SectionTitleMimino = ({ classnameProps }: ISectionTitle) => {
  const addressStyles = classNames('border-around-yellow py-[8px]', classnameProps);

  return <div>SectionTitleMimino</div>;
};
