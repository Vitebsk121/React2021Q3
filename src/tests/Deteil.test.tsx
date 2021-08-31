import {jest} from '@jest/globals'
import React from 'react';
import {render} from '@testing-library/react'
import NewsDetail from '../containers/Detail/NewsDetail';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    state: {
      id: 0
    }
  }),
}));


describe('Details page', () => {
  it('Should render Details Card (example id:)', () => {
    const { getByText } = render(<NewsDetail/>);
    const label = getByText(/id:/i);
    expect(label.textContent).toBe("id:0");
  });
});
