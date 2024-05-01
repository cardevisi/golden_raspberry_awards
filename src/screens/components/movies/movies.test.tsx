import React from 'react';
import {Movies} from './movies';
import {render, screen} from '@testing-library/react-native';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

describe('Movies', () => {
  it('should render a title', () => {
    render(<Movies name="Movies" />);
    expect(screen.getByText('Movies')).toBeTruthy();
  });
});
