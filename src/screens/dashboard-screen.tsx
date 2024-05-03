import React from 'react';
import {Dashboard} from './components/dashboard';
import {Box} from '@golden-raspberry-awards/shared/box';

function DashboardScreen() {
  return (
    <Box flex={1} bg="black">
      <Dashboard name="Dashboard" />
    </Box>
  );
}

export default DashboardScreen;
