import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TableListMultipleWinnersBase from './table-list-multiples-winners';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

describe('TableList', () => {
  it('should render a table list with 4 rows', () => {
    render(
      <TableListMultipleWinnersBase
        label="test"
        data={[
          {year: 2022, winnerCount: 5},
          {year: 2018, winnerCount: 100},
          {year: 2022, winnerCount: 10},
          {year: 1998, winnerCount: 30},
        ]}
        onPress={() => {}}
      />,
    );
    expect(screen.getAllByText('Year:').length).toBe(4);
  });

  it('should on press the first row', () => {
    const onPress = jest.fn();
    render(
      <TableListMultipleWinnersBase
        label="test"
        data={[
          {year: 2022, winnerCount: 5},
          {year: 2018, winnerCount: 100},
          {year: 2022, winnerCount: 10},
          {year: 1998, winnerCount: 30},
        ]}
        onPress={onPress}
      />,
    );
    screen.getAllByLabelText('table-list-item')[0].props.onClick();
    expect(onPress).toHaveBeenCalledWith({winnerCount: 5, year: 2022});
  });

  it('should render a label', () => {
    render(
      <TableListMultipleWinnersBase
        label="test"
        data={[
          {year: 2022, winnerCount: 5},
          {year: 2018, winnerCount: 100},
          {year: 2022, winnerCount: 10},
          {year: 1998, winnerCount: 30},
        ]}
        onPress={() => {}}
      />,
    );
    expect(screen.getByText('test')).toBeTruthy();
  });
});
