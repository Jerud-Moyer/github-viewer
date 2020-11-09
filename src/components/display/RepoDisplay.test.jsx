import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RepoDisplay from './RepoDisplay';
import { Provider } from 'react-redux';
import store from '../../store';

describe('RepoDisplay component', () => {
  afterEach(() => cleanup());
  it('renders RepoDisplay', () => {
    const { asFragment } = render(<Provider store={store}>
      <RepoDisplay />
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
