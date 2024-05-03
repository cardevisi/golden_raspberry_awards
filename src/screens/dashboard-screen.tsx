import React from 'react';
import {Dashboard} from './components/dashboard';
import {Box} from '../shared/box';

function DashboardScreen() {
  return (
    <Box flex={1} bg="black">
      <Dashboard name="Dashboard" />
    </Box>
  );
}

export default DashboardScreen;
