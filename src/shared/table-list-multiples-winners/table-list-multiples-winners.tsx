import React from 'react';
import {TouchableHighlight, FlatList, ActivityIndicator} from 'react-native';
import {ThemeProps} from '../../theme';
import {createBox, createText} from '@shopify/restyle';
import {TableListProps} from './table-list-multiples-winners.types';

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const TableListMultipleWinnersBase = ({
  label,
  data,
  onPress,
  isLoading,
}: TableListProps) => {
  return (
    <>
      <Box flexDirection="column" marginBottom="s" borderRadius={5}>
        <Text variant="body" color="white">
          {label}
        </Text>
      </Box>

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
                borderBottomWidth={index === data.length - 1 ? 0 : 1}>
                <Text variant="body" color="white">
                  <Text variant="body" color="white" fontWeight={'bold'}>
                    Year:
                  </Text>
                  {` ${item.year}`}
                </Text>
                <Text variant="body" color="white">
                  <Text variant="body" color="white" fontWeight={'bold'}>
                    Number of winners:
                  </Text>
                  {` ${item.winnerCount}`}
                </Text>
              </Box>
            </TouchableHighlight>
          )}
        />
      )}
    </>
  );
};

export default TableListMultipleWinnersBase;
