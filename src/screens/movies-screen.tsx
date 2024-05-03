import React from 'react';
import {Movies} from './components/movies';
import {Box} from '../shared/box';

function MoviesScreen() {
  return (
    <Box flex={1} bg="black">
      <Movies name="Movies" />
    </Box>
  );
}

export default MoviesScreen;
