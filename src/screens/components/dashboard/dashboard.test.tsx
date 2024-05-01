import React from 'react';
import {Dashboard} from './dashboard';
import {render, screen} from '@testing-library/react-native';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

describe('Dashboard', () => {
  it('sould render a title text', () => {
    render(<Dashboard name="Dashboard Screen" />);
    expect(screen.getByText('Dashboard Screen')).toBeTruthy();
  });
});
