import React from 'react';
import {render} from '@testing-library/react'
import About from '../containers/About/About';

describe('About page', () => {
  it('Should render title', () => {
    const { getByText } = render(<About />);
    const title = getByText(/About Page/gi);
    expect(title).toBeTruthy();
  });
});
