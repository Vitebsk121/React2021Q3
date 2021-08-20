/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MenuToggle.scss';

import React from 'react';

type IMenuToggle = {
  isOpen: boolean | undefined;
  onToggle: () => void;
};

const MenuToggle = ({ isOpen, onToggle }: IMenuToggle) => {
  const cls = ['MenuToggle', 'fa'];

  if (isOpen) {
    cls.push('fa-times', 'open');
  } else {
    cls.push('fa-bars');
  }

  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <i className={cls.join(' ')} onClick={onToggle} role="navigation" />;
};

export default MenuToggle;
