import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserDisplay from './UserDisplay';
import { Provider } from 'react-redux';
import store from '../../store';

describe('UserDisplay component', () => {
  afterEach(() => cleanup());
  it('renders UserDisplay', () => {
    const { asFragment } = render(<Provider store={store}>
      <UserDisplay />
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
