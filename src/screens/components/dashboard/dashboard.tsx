import React from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import styles from './dashboard.styles';
import {Text, View} from 'react-native';

const DashboardBase = ({name}: DashboardProps) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export const Dashboard = memo(DashboardBase);
