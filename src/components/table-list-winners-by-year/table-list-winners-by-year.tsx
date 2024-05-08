import React from 'react';
import {TouchableHighlight, ActivityIndicator} from 'react-native';
import {TableListProps} from './table-list-winners-by-year.types';
import {Box, Text} from '@golden-raspberry-awards/shared';
import {
  getConditionalBackgroundColor,
  getConditionalLastBorder,
} from '../utils';

const TableListWinnersByYearBase = ({
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
          <Box flexDirection="column" marginBottom="s" borderRadius={5} />
          {tableListData &&
            tableListData.map((item: any, index: any) => (
              <TouchableHighlight
                key={`table_list_winners_by_year_item_${index}`}
                onPress={() => onPress(item)}
                aria-label="table-list-item">
                <Box
                  bg={`${getConditionalBackgroundColor(index)}`}
                  padding="s"
                  flexDirection="column"
                  justifyContent="space-between"
                  borderRadius={5}
                  borderBottomColor="primary_005"
                  borderBottomWidth={getConditionalLastBorder(
                    index,
                    tableListData.length,
                  )}>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Id:
                    </Text>
                    {` ${item.id}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Year:
                    </Text>
                    {` ${item.year}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Title:
                    </Text>
                    {` ${item.title}`}
                  </Text>
                </Box>
              </TouchableHighlight>
            ))}
        </>
      )}
    </>
  );
};

export default TableListWinnersByYearBase;
