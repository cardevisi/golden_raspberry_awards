import {memo} from 'react';
import React from 'react';

import {MoviesProps} from './movies.types';
import {Text, View} from 'react-native';
import styles from './movies.styles';

const MoviesBase = ({name}: MoviesProps) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export const Movies = memo(MoviesBase);
