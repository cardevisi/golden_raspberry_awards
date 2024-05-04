import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TableListMoviesBase from './table-list-movies';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

const mockWinnersByYear = [
  {
    id: 197,
    year: 2018,
    title: 'Holmes & Watson',
    studios: ['Columbia Pictures'],
    producers: [
      'Adam McKay',
      'Clayton Townsend',
      'Jimmy Miller',
      'Will Ferrell',
    ],
    winner: true,
  },
];

describe('TableList', () => {
  it('should render a table list with year and title values', () => {
    render(
      <TableListMoviesBase
        onPressSearchButton={() => {}}
        isLoading={false}
        label="test"
        data={mockWinnersByYear}
        onPress={() => {}}
      />,
    );
    expect(screen.getAllByText('Year:').length).toBe(1);
    expect(screen.getAllByText('Title:').length).toBe(1);
  });

  it('should on press the first row', () => {
    const onPress = jest.fn();
    render(
      <TableListMoviesBase
        onPressSearchButton={() => {}}
        isLoading={false}
        label="test"
        data={mockWinnersByYear}
        onPress={onPress}
      />,
    );
    screen.getAllByLabelText('table-list-item')[0].props.onClick();
    expect(onPress).toHaveBeenCalledWith({
      id: 197,
      producers: [
        'Adam McKay',
        'Clayton Townsend',
        'Jimmy Miller',
        'Will Ferrell',
      ],
      studios: ['Columbia Pictures'],
      title: 'Holmes & Watson',
      winner: true,
      year: 2018,
    });
  });

  it('should render a label', () => {
    render(
      <TableListMoviesBase
        onPressSearchButton={() => {}}
        isLoading={false}
        label="test"
        data={mockWinnersByYear}
        onPress={() => {}}
      />,
    );
    expect(screen.getByText('test')).toBeTruthy();
  });
});
