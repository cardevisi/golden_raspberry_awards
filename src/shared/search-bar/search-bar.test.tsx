import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react-native';
import SearchBar from './search-bar';

describe('SearchBar', () => {
  it('should render correctly with placeholder', () => {
    render(
      <SearchBar
        searchPhrase="2018"
        setSearchPhrase={() => {}}
        clicked={false}
        setClicked={() => {}}
        maxLength={4}
        placeholder="Search by Year"
      />,
    );

    expect(screen.getByPlaceholderText('Search by Year')).toBeTruthy();
  });

  it('should render correctly default placeholder', () => {
    render(
      <SearchBar
        searchPhrase="2018"
        setSearchPhrase={() => {}}
        clicked={false}
        setClicked={() => {}}
        maxLength={4}
      />,
    );
    expect(screen.getByPlaceholderText('Search')).toBeTruthy();
  });
});
