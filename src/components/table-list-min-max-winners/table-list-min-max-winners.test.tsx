import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TableListMinMaxWinnersBase from './table-list-min-max-winners';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

const mockMinMaxWinners = {
  min: [
    {
      producer: 'Joel Silver',
      interval: 1,
      previousWin: 1990,
      followingWin: 1991,
    },
  ],
  max: [
    {
      producer: 'Matthew Vaughn',
      interval: 13,
      previousWin: 2002,
      followingWin: 2015,
    },
  ],
};

describe('TableListMinMaxWinnersBase', () => {
  it('should render a table list with min and max 4 different values', () => {
    render(
      <TableListMinMaxWinnersBase
        isLoading={false}
        label="test"
        data={mockMinMaxWinners.min}
        onPress={() => {}}
      />,
    );
    expect(screen.getAllByText('Producer:').length).toBe(1);
    expect(screen.getAllByText('Interval:').length).toBe(1);
    expect(screen.getAllByText('Previous Year:').length).toBe(1);
    expect(screen.getAllByText('Following Year:').length).toBe(1);
  });

  it('should on press the first row', () => {
    const onPress = jest.fn();
    render(
      <TableListMinMaxWinnersBase
        isLoading={false}
        label="test"
        data={mockMinMaxWinners.min}
        onPress={onPress}
      />,
    );
    screen.getAllByLabelText('table-list-item')[0].props.onClick();
    expect(onPress).toHaveBeenCalledWith({
      followingWin: 1991,
      interval: 1,
      previousWin: 1990,
      producer: 'Joel Silver',
    });
  });

  it('should render a label', () => {
    render(
      <TableListMinMaxWinnersBase
        isLoading={false}
        label="test"
        data={mockMinMaxWinners.min}
        onPress={() => {}}
      />,
    );
    expect(screen.getByText('test')).toBeTruthy();
  });
});
