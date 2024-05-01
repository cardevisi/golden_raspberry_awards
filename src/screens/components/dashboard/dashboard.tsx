import React from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import TableListBase from '../../../shared/table-list/table-list';
import {Title} from '../../../shared';
import {ActivityIndicator} from 'react-native';
import {useWinnersByYear} from './hooks/winners-by-years';

const Box = createBox<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  const {data: queryResult, isLoading} = useWinnersByYear();

  return (
    <Box bg="black" flex={1} paddingHorizontal="s">
      <Title name={name} />
      {isLoading ? (
        <Box justifyContent="center" alignItems="center">
          <ActivityIndicator size="small" aria-label="activity-indicator" />
        </Box>
      ) : (
        <TableListBase
          label="List years with multiple winners"
          data={queryResult?.years}
          onPress={(item: any) => {
            console.log(item);
          }}
        />
      )}
    </Box>
  );
};

export const Dashboard = memo(DashboardBase);
