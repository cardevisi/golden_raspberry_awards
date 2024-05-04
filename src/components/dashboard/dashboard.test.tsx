import React from 'react';
import {DashboardBase} from './index';
import {render, screen} from '@testing-library/react-native';
import {useMultipleWinnersByYears, useStudiosWithWinners} from './hooks';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

jest.mock('./hooks/use-multiple-winners-by-years', () => {
  const actual = jest.requireActual('./hooks/use-multiple-winners-by-years');
  return {
    ...actual,
    useMultipleWinnersByYears: jest
      .fn()
      .mockReturnValue({isLoading: true, data: []}),
  };
});

jest.mock('./hooks/use-studios-with-winners', () => {
  const actual = jest.requireActual('./hooks/use-studios-with-winners');
  return {
    ...actual,
    useStudiosWithWinners: jest
      .fn()
      .mockReturnValue({isLoading: true, data: []}),
  };
});

jest.mock('./hooks/use-max-min-win-interval', () => {
  const actual = jest.requireActual('./hooks/use-max-min-win-interval');
  return {
    ...actual,
    useMaxMinWinInterval: jest
      .fn()
      .mockReturnValue({isLoading: true, dataMin: [], dataMax: []}),
  };
});

jest.mock('./hooks/use-winners-by-year', () => {
  const actual = jest.requireActual('./hooks/use-winners-by-year');
  return {
    ...actual,
    useWinnersByYear: jest
      .fn()
      .mockReturnValue({isLoading: true, data: [], refetch: jest.fn()}),
  };
});

const mockStudiosWithWinners = [
  {
    id: 1,
    name: 'Studio 1',
    winCount: 5,
  },
  {
    id: 2,
    name: 'Studio 2',
    winCount: 3,
  },
  {
    id: 3,
    name: 'Studio 3',
    winCount: 2,
  },
  {
    id: 4,
    name: 'Studio 4',
    winCount: 1,
  },
];

describe('Dashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sould render a title text', () => {
    render(<DashboardBase name="Dashboard Screen" />);
    expect(screen.getByText('Dashboard Screen')).toBeTruthy();
  });

  it('sould render an activity indicator', () => {
    render(<DashboardBase name="Dashboard Screen" />);
    expect(screen.getByLabelText('activity-indicator')).toBeTruthy();
  });

  it('sould render a table list label for multiple winners', () => {
    (useMultipleWinnersByYears as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        years: [{year: 2021, winnerCount: 2}],
      },
    });

    render(<DashboardBase name="Dashboard Screen" />);
    expect(screen.getByText('List years with multiple winners')).toBeTruthy();
    expect(screen.getByText('Year:')).toBeTruthy();
    expect(screen.getByText('Number of winners:')).toBeTruthy();
  });

  it('sould render a table list label for studios with winners', () => {
    (useStudiosWithWinners as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockStudiosWithWinners,
    });

    render(<DashboardBase name="Dashboard Screen" />);
    expect(screen.getByText('Top 5 studios with winners')).toBeTruthy();
    expect(screen.getAllByText('Name:').length).toBe(4);
    expect(screen.getAllByText('Win count:').length).toBe(4);
  });
});
