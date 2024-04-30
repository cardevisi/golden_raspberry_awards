import React from 'react';
import {Dashboard} from './dashboard';
import {render, screen} from '@testing-library/react-native';

describe('Dashboard', () => {
  it('sould render a title text', () => {
    render(<Dashboard name="Dashboard Screen" />);
    expect(screen.getByText('Dashboard Screen')).toBeTruthy();
  });
});
