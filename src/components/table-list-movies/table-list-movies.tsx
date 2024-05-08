import React from 'react';
import {TouchableHighlight, ActivityIndicator, TextInput} from 'react-native';
import {TableListProps} from './table-list-movies.types';
import {Box, Text} from '@golden-raspberry-awards/shared';
import styles from './table-list-movies.style';
import {
  getConditionalBackgroundColor,
  getConditionalLastBorder,
} from '../utils';

const TableListMoviesBase = ({
  data: tableListData,
  onPress,
  isLoading,
  onChangeYearTextInput,
  onChangeWinnerTextInput,
}: TableListProps) => {
  return (
    <>
      {isLoading ? (
        <Box justifyContent="center" alignItems="center">
          <ActivityIndicator size="small" aria-label="activity-indicator" />
        </Box>
      ) : (
        <>
          <Box
            marginBottom="s"
            borderRadius={5}
            flexDirection="row"
            justifyContent="space-between">
            <Box width={'48%'} height={40} marginRight="s">
              {/**
               * TODO - Implement debounce for this field
               * TODO - And a init and limit for year
               */}
              <TextInput
                maxLength={4}
                onChangeText={onChangeYearTextInput}
                keyboardType="numeric"
                placeholderTextColor="black"
                placeholder="Filter by Year"
                style={styles.input}
              />
            </Box>
            {/**
             * TODO - Change this component to a select or a mask for values yes or no
             * TODO - Implement debounce for this field
             * TODO -
             */}
            <Box width={'50%'} height={40}>
              <TextInput
                onChangeText={onChangeWinnerTextInput}
                placeholder="Filter by Yes/No"
                placeholderTextColor="black"
                style={styles.input}
              />
            </Box>
          </Box>
          {tableListData &&
            tableListData.map((item: any, index: any) => {
              return (
                <TouchableHighlight
                  key={`table_list_movies_item_${index}`}
                  onPress={() => onPress(item)}
                  aria-label="table-list-item">
                  <Box
                    bg={`${getConditionalBackgroundColor(index)}`}
                    padding="s"
                    flexDirection="column"
                    justifyContent="space-between"
                    borderBottomColor="primary_005"
                    borderRadius={5}
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
                    <Text variant="body" color="white">
                      <Text variant="body" color="white" fontWeight={'bold'}>
                        Winner?:
                      </Text>
                      {` ${item.winner}`}
                    </Text>
                  </Box>
                </TouchableHighlight>
              );
            })}
        </>
      )}
    </>
  );
};

export default TableListMoviesBase;
