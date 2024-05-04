import React from 'react';
import {
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from 'react-native';
import {ThemeProps} from '../../theme';
import {createText} from '@shopify/restyle';
import {TableListProps} from './table-list-movies.types';
import {Box} from '@golden-raspberry-awards/shared/box';

const Text = createText<ThemeProps>();

const TableListMoviesBase = ({
  label,
  data,
  onPress,
  isLoading,
  onChangeYearTextInput,
  onChangeWinnerTextInput,
}: TableListProps) => {
  const getBackgroundColor = (index: number) => {
    if (index % 2 === 0) {
      return 'primary_001';
    }
    return 'primary_005';
  };

  const getConditionalLastBorder = (index: number) => {
    return index === data.length - 1 ? 0 : 1;
  };

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
          <Box
            marginBottom="s"
            borderRadius={5}
            flexDirection="row"
            justifyContent="space-between">
            <Box width={'48%'} height={40} marginRight="s">
              <TextInput
                maxLength={4}
                onChangeText={onChangeYearTextInput}
                keyboardType="numeric"
                placeholder="Filter by Year"
                style={styles.input}
              />
            </Box>
            <Box width={'50%'} height={40}>
              <TextInput
                onChangeText={onChangeWinnerTextInput}
                placeholder="Filter by Winner?"
                style={styles.input}
              />
            </Box>
          </Box>
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
                  bg={`${getBackgroundColor(index)}`}
                  padding="s"
                  flexDirection="column"
                  justifyContent="space-between"
                  borderBottomColor="primary_005"
                  borderRadius={5}
                  borderBottomWidth={getConditionalLastBorder(index)}>
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
                      Winner:
                    </Text>
                    {` ${item.winner}`}
                  </Text>
                </Box>
              </TouchableHighlight>
            )}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default TableListMoviesBase;
