import React from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {Text} from 'react-native';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';

const Box = createBox<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  return (
    <Box bg="primary_001" flex={1} justifyContent="center" alignItems="center">
      <Text>{name}</Text>
    </Box>
  );
};

export const Dashboard = memo(DashboardBase);
