import React from 'react';
import {Movies} from './components/movies';
import {View} from 'react-native';

function MoviesScreen() {
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: 'black'}}>
      <Movies name="Movies" />
    </View>
  );
}

export default MoviesScreen;
