import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {Box} from '../box';
import {SearchBarProps} from './search-bar.type';
import {getStyle} from './search-bar.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SearchBar({
  showSearchButtonClick = false,
  searchPhrase,
  setSearchPhrase,
  maxLength,
  inputMode,
  placeholder = 'Search',
}: SearchBarProps) {
  const styleElements = getStyle(showSearchButtonClick);
  return (
    <Box flexDirection="row" justifyContent="space-between" borderRadius={5}>
      <TextInput
        style={styleElements.input}
        placeholder={placeholder}
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        maxLength={maxLength}
        inputMode={inputMode}
      />
      {showSearchButtonClick && (
        <TouchableOpacity
          style={styleElements.button}
          onPress={() => {
            setSearchPhrase(searchPhrase);
          }}>
          <MaterialIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      )}
    </Box>
  );
}

export default SearchBar;
