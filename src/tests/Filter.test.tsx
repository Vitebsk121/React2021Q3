import React from 'react';
import {render} from '@testing-library/react'
import {Provider} from 'react-redux';
import store from '../store/store';
import Filter from '../components/Filter/Filter';
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
  it('Should render Filter label', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Filter handleLangFilter={()=> null} options={['ru', 'en', 'fr', 'it']}/>
      </Provider>
    );
    const element = getByLabelText(/Filter by language:/i);
    const ruOption = getByText('ru') as HTMLOptionElement;
    userEvent.selectOptions(element, '1')
    expect(ruOption.selected).toBeTruthy();
  });
});
