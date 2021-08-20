import './SearchForm.scss';

import React from 'react';

import { IHeaderProps } from '../../shared/interfaces';

export default function SearchForm({ isLoading, onSubmit }: IHeaderProps) {
  return (
    <form className="SearchForm" onSubmit={(e) => onSubmit(e)}>
      <input name="search" type="text" placeholder="Search something..." required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}
