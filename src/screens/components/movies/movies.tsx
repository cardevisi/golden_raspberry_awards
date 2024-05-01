import {memo} from 'react';
import React from 'react';

import {MoviesProps} from './movies.types';
import {Text} from 'react-native';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';

const Box = createBox<ThemeProps>();

const MoviesBase = ({name}: MoviesProps) => {
  return (
    <Box bg="primary_001" flex={1} justifyContent="center" alignItems="center">
      <Text>{name}</Text>
    </Box>
  );
};

export const Movies = memo(MoviesBase);
