import React from 'react';
import {TouchableHighlight, ActivityIndicator} from 'react-native';
import {TableListProps} from './table-list-min-max-winners.types';
import {Box, Text} from '@golden-raspberry-awards/shared';
import {
  getConditionalBackgroundColor,
  getConditionalLastBorder,
} from '../utils';

const TableListMinMaxWinnersBase = ({
  label,
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
          <Box flexDirection="column" marginBottom="s" borderRadius={5}>
            <Text variant="body" color="white" fontWeight={'bold'}>
              {label}
            </Text>
          </Box>
          {tableListData &&
            tableListData.map((item: any, index: any) => (
              <TouchableHighlight
                key={`table_list_min_max_winners_item_${index}`}
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
                      Producer:
                    </Text>
                    {` ${item.producer}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Interval:
                    </Text>
                    {` ${item.interval}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Previous Year:
                    </Text>
                    {` ${item.previousWin}`}
                  </Text>
                  <Text variant="body" color="white">
                    <Text variant="body" color="white" fontWeight={'bold'}>
                      Following Year:
                    </Text>
                    {` ${item.followingWin}`}
                  </Text>
                </Box>
              </TouchableHighlight>
            ))}
        </>
      )}
    </>
  );
};

export default TableListMinMaxWinnersBase;
