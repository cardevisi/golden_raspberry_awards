import React from 'react';
import {Movies} from './movies';
import {render, screen} from '@testing-library/react-native';
import {useGetMovies} from './hooks/get-movies';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

jest.mock('./hooks/get-movies', () => {
  const {actual} = jest.requireActual('./hooks/get-movies');
  return {
    ...actual,
    useGetMovies: jest.fn().mockReturnValue({
      data: [],
      refetch: jest.fn(),
      year: 2018,
      winnerStatus: 'Yes',
    }),
  };
});

describe('Movies', () => {
  it('should render a title', () => {
    render(<Movies name="Movies" />);
    expect(screen.getByText('Movies')).toBeTruthy();
  });

  it('should render a lable for table list', () => {
    render(<Movies name="Movies" />);
    expect(screen.getByText('Filter by Year and Winner Status')).toBeTruthy();
  });

  it('should render a table list', () => {
    (useGetMovies as jest.Mock).mockReturnValue({
      data: [
        {
          id: 56,
          year: 1990,
          title: 'The Adventures of Ford Fairlane',
          studios: ['20th Century Fox'],
          producers: ['Joel Silver', 'Steven Perry'],
          winner: true,
        },
        {
          id: 57,
          year: 1990,
          title: "Ghosts Can't Do It",
          studios: ['Triumph Releasing'],
          producers: ['Bo Derek'],
          winner: true,
        },
      ],
      refetch: jest.fn(),
      year: 2018,
      winnerStatus: 'Yes',
    });
    render(<Movies name="Movies" />);
    expect(screen.getAllByText('Year:').length).toBe(2);
  });
});
