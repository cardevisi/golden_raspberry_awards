import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle={'light-content'} />
      <Text>App</Text>
    </SafeAreaView>
  );
}

export default App;
