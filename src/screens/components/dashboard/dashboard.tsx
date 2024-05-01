import React from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {Text} from 'react-native';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import TableListBase from '../../../shared/table-list/table-list';

const Box = createBox<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  return (
    <Box bg="black" flex={1}>
      <TableListBase
        label="List years with multiple winners"
        data={[
          {year: 2018, winnerCount: 5},
          {year: 2022, winnerCount: 50},
          {year: 2022, winnerCount: 5},
          {year: 1998, winnerCount: 100},
        ]}
        onPress={(item: any) => {
          console.log(item);
        }}
      />
      <Text>{name}</Text>
    </Box>
  );
};

export const Dashboard = memo(DashboardBase);
