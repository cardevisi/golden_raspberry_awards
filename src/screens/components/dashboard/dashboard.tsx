import React, {useEffect} from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {createBox, createText} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {Title} from '../../../shared';
import {ActivityIndicator, ScrollView} from 'react-native';
import TableListMultipleWinnersBase from '../../../shared/table-list-multiples-winners/table-list-multiples-winners';
import TableListTopWinnersBase from '../../../shared/table-list-top-winners/table-list-top-winners';
import {useMultiplesWinnersByYear} from './hooks/multiples-winners-by-years';
import {useStudiosWithWinners} from './hooks/studios-with-winners';
import TableListMinMaxWinnersBase from '../../../shared/table-list-min-max-winners/table-list-min-max-winners';
import {useMinMaxWinners} from './hooks/min-max-winners';
import {useWinnersByYear} from './hooks/winners-by-year';
import {TableListWinnersByYearBase} from '../../../shared/table-list-winners-by-year';

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  const TOP_WINNERS = 5;
  const [selectedWinnersByYear, setSelectedWinnersByYear] =
    React.useState<number>(2018);

  const {
    data: queryResultMultiplesWinnersByYear,
    isLoading: isLoadingMultiplesWinners,
  } = useMultiplesWinnersByYear();
  const {
    data: queryResultStudiosWithWinners,
    isLoading: isLoadingStudiosWithWinners,
  } = useStudiosWithWinners(TOP_WINNERS);
  const {
    dataMin: queryResultMinWins,
    dataMax: queryResultMaxWins,
    isLoading: isLoadingMinMaxWins,
  } = useMinMaxWinners();
  const {
    data: queryResultWinnersByYear,
    isLoading: isLoadingWinnersByYear,
    refetch: refetchWinnersByYear,
  } = useWinnersByYear({year: selectedWinnersByYear});

  useEffect(() => {
    setSelectedWinnersByYear(2018);
  }, []);

  useEffect(() => {
    refetchWinnersByYear();
  }, [refetchWinnersByYear, selectedWinnersByYear]);

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
          {isLoadingWinnersByYear &&
          isLoadingMinMaxWins &&
          isLoadingMultiplesWinners &&
          isLoadingStudiosWithWinners ? (
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
        <Box marginBottom="l" paddingHorizontal="s">
          <Box flexDirection="column" marginBottom="s" borderRadius={5}>
            <Text variant="body" color="white" fontWeight={'bold'}>
              Producers with longest and
            </Text>
            <Text variant="body" color="white" fontWeight={'bold'}>
              shortest intervals
            </Text>
          </Box>
          <TableListMinMaxWinnersBase
            isLoading={false}
            label={'Maximum'}
            data={queryResultMaxWins}
            onPress={(item: any) => {
              console.log(item);
            }}
          />
          <Box marginTop="s">
            <TableListMinMaxWinnersBase
              isLoading={false}
              label={'Minimum'}
              data={queryResultMinWins}
              onPress={(item: any) => {
                console.log(item);
              }}
            />
          </Box>
          <Box marginTop="l">
            <TableListWinnersByYearBase
              onPressSearchButton={value => {
                const yearValue = parseInt(value, 10);
                setSelectedWinnersByYear(yearValue);
              }}
              isLoading={false}
              label={'List movie winners by year'}
              data={queryResultWinnersByYear}
              onPress={(item: any) => {
                console.log(item);
              }}
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Dashboard = memo(DashboardBase);
