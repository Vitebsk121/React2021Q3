import React from 'react';
import {render} from '@testing-library/react'
import HomePage from '../containers/HomePage/HomePage';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/store';


describe('Home page', () => {
  it('Should render Header', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );
    const header = getByTestId("Header");
    expect(header).toBeTruthy();
  });
});
