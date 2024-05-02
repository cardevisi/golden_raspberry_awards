import React from 'react';
import {
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {ThemeProps} from '../../theme';
import {createText} from '@shopify/restyle';
import {TableListProps} from './table-list-winners-by-year.types';
import {Box} from '../box';

const Text = createText<ThemeProps>();

const TableListWinnersByYearBase = ({
  label,
  data,
  onPress,
  isLoading,
  onPressSearchButton,
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

  const [textInput, onChangeTextInput] = React.useState<string>('');
  return (
    <>
      <Box flexDirection="column" marginBottom="s" borderRadius={5}>
        <Text variant="body" color="white" fontWeight={'bold'}>
          {label}
        </Text>
      </Box>
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
            <TextInput
              maxLength={4}
              value={textInput.toString()}
              onChangeText={onChangeTextInput}
              keyboardType="numeric"
              placeholder="Year"
              style={styles.input}
            />
            <Button
              onPress={() => onPressSearchButton(textInput)}
              title="Search"
            />
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

export default TableListWinnersByYearBase;
