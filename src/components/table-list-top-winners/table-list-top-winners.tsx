import React from 'react';
import {TouchableHighlight, ActivityIndicator} from 'react-native';
import {TableListProps} from './table-list-top-winners.types';
import {Box, Text} from '@golden-raspberry-awards/shared';
import {
  getConditionalBackgroundColor,
  getConditionalLastBorder,
} from '../utils';

const TableListTopWinnersBase = ({
  data: tableListData,
  onPress,
  isLoading,
}: TableListProps) => {
  return (
    <>
      {isLoading ? (
        <Box justifyContent="center" alignItems="center">
          <ActivityIndicator size="small" aria-label="activity-indicator" />
        </Box>
      ) : (
        <>
          {tableListData &&
            tableListData.map((item: any, index: any) => (
              <TouchableHighlight
                key={`table_list_top_winners_item_${index}`}
                onPress={() => onPress(item)}
                aria-label="table-list-item">
                <Box
                  bg={getConditionalBackgroundColor(index)}
                  padding="s"
                  flexDirection="column"
                  justifyContent="space-between"
                  borderBottomColor="primary_005"
                  borderRadius={10}
                  borderBottomWidth={getConditionalLastBorder(
                    index,
                    tableListData.length,
                  )}>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Name:
                    </Text>
                    {` ${item.name}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Win count:
                    </Text>
                    {` ${item.winCount}`}
                  </Text>
                </Box>
              </TouchableHighlight>
            ))}
        </>
      )}
    </>
  );
};

export default TableListTopWinnersBase;
