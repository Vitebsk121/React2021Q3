import './Header.scss';

import React from 'react';
import { NavLink } from "react-router-dom";

import SearchForm from '../../../components/SearchForm/SearchForm';

export default function Header() {
  return (
    <div className="Header" data-testid="Header">
      <NavLink className="Logo" to="/home">
        <h1>React Routing</h1>
      </NavLink>
      <SearchForm />
      <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
        <b>News API</b>
      </a>
    </div>
  );
}
