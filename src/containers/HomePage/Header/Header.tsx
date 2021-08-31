import './Header.scss';

import React from 'react';

import SearchForm from '../../../components/SearchForm/SearchForm';

const Header = () => (
  <div className="Header">
    <a className="Logo" href="./">
      <h1>React Routing</h1>
    </a>
    <SearchForm />
    <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
      <b>News API</b>
    </a>
  </div>
);

export default Header;
