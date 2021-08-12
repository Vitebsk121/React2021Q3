import './Header.scss';

import React from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import { IHeaderProps } from '../../shared/interfaces';

export default function Header({ isLoading, onSubmit }: IHeaderProps) {
  return (
    <div className="Header">
      <a href="/">
        <h1>React API</h1>
      </a>
      <SearchForm isLoading={isLoading} onSubmit={onSubmit} />
      <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
        <b>News API</b>
      </a>
    </div>
  );
}
