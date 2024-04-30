import React from 'react';
import {Movies} from './movies';
import {render, screen} from '@testing-library/react-native';

describe('Movies', () => {
  it('should render a title', () => {
    render(<Movies name="Movies" />);
    expect(screen.getByText('Movies')).toBeTruthy();
  });
});
