import React from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {Title} from '../../../shared';
import {ActivityIndicator, ScrollView} from 'react-native';
import TableListMultipleWinnersBase from '../../../shared/table-list-multiples-winners/table-list-multiples-winners';
import TableListTopWinnersBase from '../../../shared/table-list-top-winners/table-list-top-winners';
import {useMultiplesWinnersByYear} from './hooks/multiples-winners-by-years';
import {useStudiosWithWinners} from './hooks/studios-with-winners';

const Box = createBox<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  const TOP_WINNERS = 5;
  const {
    data: queryResultMultiplesWinnersByYear,
    isLoading: isLoadingMultiplesWinners,
  } = useMultiplesWinnersByYear();
  const {
    data: queryResultStudiosWithWinners,
    isLoading: isLoadingStudiosWithWinners,
  } = useStudiosWithWinners(TOP_WINNERS);

  return (
    <ScrollView>
      <Box bg="black" flex={1} paddingHorizontal="s">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="black"
          alignContent="center"
          alignItems="center"
          paddingHorizontal="s">
          <Title name={name} />
          {isLoadingMultiplesWinners && isLoadingStudiosWithWinners ? (
            <ActivityIndicator size="small" aria-label="activity-indicator" />
          ) : null}
        </Box>
        <Box marginBottom="l" paddingHorizontal="s">
          <TableListMultipleWinnersBase
            isLoading={false}
            label="List years with multiple winners"
            data={queryResultMultiplesWinnersByYear?.years}
            onPress={(item: any) => {
              console.log(item);
            }}
          />
        </Box>
        <Box marginBottom="l" paddingHorizontal="s">
          <TableListTopWinnersBase
            isLoading={false}
            label={`Top ${TOP_WINNERS} studios with winners`}
            data={queryResultStudiosWithWinners}
            onPress={(item: any) => {
              console.log(item);
            }}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Dashboard = memo(DashboardBase);
