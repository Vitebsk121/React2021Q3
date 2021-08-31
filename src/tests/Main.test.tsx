import React from 'react';
import {render} from '@testing-library/react'
import {Provider} from 'react-redux';
import store from '../store/store';
import Main from '../containers/HomePage/Main/Main';
import '@testing-library/jest-dom'
import SearchForm from '../components/SearchForm/SearchForm';
import userEvent from '@testing-library/user-event'
import axios from 'axios';


describe('Main from Home Page', () => {
  it('Should render News Cards', async () => {
    const { getByTestId, queryByTestId, getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchForm />
        <Main />
      </Provider>
    );
    const card = queryByTestId("NewsCard");
    const searchInput = getByPlaceholderText(/Search something/i) as HTMLInputElement;
    const submitBtn = getByText('Search');

    expect(card).toBeNull();
    userEvent.type(searchInput, 'apple');
    userEvent.click(submitBtn);
    setTimeout(() => {
      expect(card).toBeInTheDocument()
    }, 2000)
  });
});
