import {memo} from 'react';
import React from 'react';
import {MoviesProps} from './movies.types';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {Title} from '../../../shared';

const Box = createBox<ThemeProps>();

const MoviesBase = ({name}: MoviesProps) => {
  return (
    <Box bg="black" flex={1} paddingHorizontal="s">
      <Title name={name} />
    </Box>
  );
};

export const Movies = memo(MoviesBase);
