import React from 'react';
import {TouchableHighlight, FlatList, ActivityIndicator} from 'react-native';
import {TableListProps} from './table-list-top-winners.types';
import {Box, Text} from '@golden-raspberry-awards/shared';

const TableListTopWinnersBase = ({
  data,
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
        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              key={item.id}
              onPress={() => onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              aria-label="table-list-item">
              <Box
                bg={index % 2 === 0 ? 'primary_001' : 'primary_005'}
                padding="s"
                flexDirection="column"
                justifyContent="space-between"
                borderBottomColor="primary_005"
                borderRadius={10}
                borderBottomWidth={index === data.length - 1 ? 0 : 1}>
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
          )}
        />
      )}
    </>
  );
};

export default TableListTopWinnersBase;
