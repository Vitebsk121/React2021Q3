/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Backdrop.scss';

import React from 'react';

type IBackdrop = {
  onClick: () => void;
};

const Backdrop = ({ onClick }: IBackdrop) => (
  <div className="Backdrop" onClick={onClick} />
);

export default Backdrop;
