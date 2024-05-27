import classNames from 'classnames';

import data from '@/data/common.json';

import { ISectionTitle } from './type';

export const SectionTitleMimino = ({ classnameProps = '' }: ISectionTitle) => {
  const { logo } = data;

  const titleStyles = classNames('sectionTitleMimino', classnameProps);

  return <h2 className={titleStyles}>{logo}</h2>;
};
