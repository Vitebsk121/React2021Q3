import React from 'react';
import {render} from '@testing-library/react'
import App from '../containers/App/App';
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter } from 'react-router-dom';


describe('App', function () {
  it('should render App component (shoul be header)', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    );
    const header = getByTestId('Header');
  });
});
