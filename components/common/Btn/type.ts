import React from 'react';

export interface IBtn {
  type?: 'button' | 'submit';
  isBtn?: boolean;
  isLink?: boolean;
  isScroll?: boolean;
  classnameProps?: string;
  children: React.ReactNode;
}
