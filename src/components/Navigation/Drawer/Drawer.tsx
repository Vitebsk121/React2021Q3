import './Drawer.scss';

import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';

const links = ['Home', 'About', 'Page404'];

type IDrawer = {
  isOpen: boolean | undefined;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: IDrawer) => {
  const cls = ['Drawer'];

  if (!isOpen) {
    cls.push('close');
  }
  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {links.map((link) => (
            <li key={Math.random() * 1000}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen ? <Backdrop onClick={onClose} /> : null}
    </>
  );
};

export default Drawer;
