import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TableListTopWinnersBase from './table-list-top-winners';

jest.mock('@shopify/restyle', () => {
  const {View, Text} = jest.requireActual('react-native');
  return {
    createBox: () => View,
    createText: () => Text,
  };
});

const mockListWinnersTop = [
  {name: 'Columbia Pictures', winCount: 5},
  {name: 'MGM', winCount: 7},
  {name: 'Warner Bros.', winCount: 10},
  {name: 'Universal Studios', winCount: 30},
];

describe('TableList', () => {
  it('should render a table list with 4 rows', () => {
    render(
      <TableListTopWinnersBase
        isLoading={false}
        data={mockListWinnersTop}
        onPress={() => {}}
      />,
    );
    expect(screen.getAllByText('Name:').length).toBe(4);
  });

  it('should on press the first row', () => {
    const onPress = jest.fn();
    render(
      <TableListTopWinnersBase
        isLoading={false}
        data={mockListWinnersTop}
        onPress={onPress}
      />,
    );
    screen.getAllByLabelText('table-list-item')[0].props.onClick();
    expect(onPress).toHaveBeenCalledWith({
      winCount: 5,
      name: 'Columbia Pictures',
    });
  });
});
