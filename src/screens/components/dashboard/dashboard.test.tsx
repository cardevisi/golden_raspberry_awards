import React from 'react';
import {Dashboard} from './dashboard';
import {render, screen} from '@testing-library/react-native';
import {useWinnersByYear} from './hooks/winners-by-years';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

jest.mock('./hooks/winners-by-years', () => {
  const actual = jest.requireActual('./hooks/winners-by-years');
  return {
    ...actual,
    useWinnersByYear: jest.fn().mockReturnValue({isLoading: true, data: []}),
  };
});

describe('Dashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sould render a title text', () => {
    render(<Dashboard name="Dashboard Screen" />);
    expect(screen.getByText('Dashboard Screen')).toBeTruthy();
  });

  it('sould render an activity indicator', () => {
    render(<Dashboard name="Dashboard Screen" />);
    expect(screen.getByLabelText('activity-indicator')).toBeTruthy();
  });

  it('sould render a table list label', () => {
    (useWinnersByYear as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        years: [{year: 2021, winnerCount: 2}],
      },
    });

    render(<Dashboard name="Dashboard Screen" />);
    expect(screen.getByText('List years with multiple winners')).toBeTruthy();
    expect(screen.getByText('Year:')).toBeTruthy();
    expect(screen.getByText('Number of winners:')).toBeTruthy();
  });
});
