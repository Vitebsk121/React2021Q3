import './SearchForm.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import useTypedSelector from '../../hooks/useTypedSelector';
import fetchNewsCards from '../../store/actions/newsCards';

const SearchForm = () => {
  const { isLoading } = useTypedSelector((state) => state.newsCards);
  const dispatch = useDispatch();
  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue: string = (event.target as HTMLFormElement).search.value;
    dispatch(fetchNewsCards(1, 'ru', 'newest', searchValue));
  };
  return (
    <form className="SearchForm" onSubmit={(e) => formSubmit(e)}>
      <input name="search" type="text" placeholder="Search something..." required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchForm;
