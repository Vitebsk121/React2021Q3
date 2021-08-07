import './header.scss';

import React from 'react';

const Header = (props: { activateForm: React.MouseEventHandler<HTMLButtonElement> }) => (
  <div className="app__header">
    <button className="header__button" type="button" onClick={props.activateForm}>
      Create new card
    </button>
  </div>
);

export default Header;
