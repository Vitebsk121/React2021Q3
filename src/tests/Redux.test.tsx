import React from 'react';
import store from '../store/store';
import '@testing-library/jest-dom'
import {initialState} from '../store/redusers/newsCardsReducer';
import fetchNewsCards from '../store/actions/newsCards';
import { INewsCardsTypes } from '../types/interfaces';

const {
  newsCards,
  currentPage,
  countOfPages,
  langFilter,
  sortBy,
  searchValue,
} = initialState;

describe('Redux test', function () {
  it('check initial state ', function () {
    expect(initialState).toBe(store.getState().newsCards);
  });
});

describe('Redux set state test', function () {

  it('set filter state (en) ', function () {
    expect(store.getState().newsCards.langFilter).toBe('ru');
    store.dispatch(
      {
        type: INewsCardsTypes.FETCH_NEWSCARDS_SUCCES,
        payload: {
          cards: newsCards!,
          totalPages: countOfPages!,
          sortBy: sortBy!,
          langFilter: 'en',
          searchValue: searchValue!,
          currentPage: currentPage!,
        },
      }
    );
    expect(store.getState().newsCards.langFilter).toBe('en');
  });

  it('set loading', function () {
    expect(store.getState().newsCards.isLoading).toBeFalsy();
    store.dispatch(
      {
        type: INewsCardsTypes.FETCH_NEWSCARDS,
        payload: { isLoading: true, error: null, newsCards: [] },
      }
    );
    expect(store.getState().newsCards.isLoading).toBeTruthy();
  });

  it('reduce with search error', function () {
    expect(store.getState().newsCards.error).toBeNull();
    store.dispatch(
      {
        type: INewsCardsTypes.FETCH_NEWSCARDS_ERROR,
        payload: 'Error',
      }
    );
    expect(store.getState().newsCards.error).toBe('Error');
  });

});
