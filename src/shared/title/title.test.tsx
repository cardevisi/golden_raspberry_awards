import React from 'react';
import {Title} from './title';
import {render, screen} from '@testing-library/react-native';

jest.mock('@shopify/restyle', () => {
  const {Text} = jest.requireActual('react-native');
  return {
    createText: () => Text,
  };
});

describe('Title', () => {
  it('should render a title', () => {
    render(<Title name="Title" />);
    expect(screen.getByText('Title')).toBeTruthy();
  });
});
