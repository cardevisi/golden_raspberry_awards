import React from 'react';
import {Button, TextInput} from 'react-native';
import {Box} from '../box';
import {SearchBarProps, keyboardTypes} from './search-bar.type';
import styles from './search-bar.styles';

function SearchBar({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  maxLength,
  keyboardType = keyboardTypes.default,
  placeholder = 'Search',
}: SearchBarProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between" borderRadius={5}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
      {clicked && (
        <Box>
          <Button title="Cancel" onPress={() => setClicked(false)} />
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
