import './Drawer.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
];

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
              <NavLink to={link.url} onClick={onClose} exact>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen ? <Backdrop onClick={onClose} /> : null}
    </>
  );
};

export default Drawer;
