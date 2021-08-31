import React from 'react';
import store from '../store/store';
import '@testing-library/jest-dom'
import Sort from '../components/Sort/Sort';
import {render} from '@testing-library/react'
import {Provider} from 'react-redux';

describe('Sort', function () {

  it('should correctly render Sort', function () {
    const handleSort = jest.fn()
    const { getByLabelText } = render(
      <Provider store={store}>
        <Sort handleSort={handleSort} options={['newest', 'popularity', 'relevancy']} />
      </Provider>
    )
    expect(getByLabelText('Sort by:')).toBeInTheDocument()
  });

});
