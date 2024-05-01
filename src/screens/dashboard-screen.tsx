import React from 'react';
import {Dashboard} from './components/dashboard';
import {View} from 'react-native';

function DashboardScreen() {
  return (
    <View style={{flex: 1, paddingTop: 20, backgroundColor: 'black'}}>
      <Dashboard name="Dashboard" />
    </View>
  );
}

export default DashboardScreen;
