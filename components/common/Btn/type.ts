import React from 'react';

export interface IBtn {
  type?: 'button' | 'submit';
  isBtn?: boolean;
  isLink?: boolean;
  isScroll?: boolean;
  classname?: string;
  children: React.ReactNode;
}
