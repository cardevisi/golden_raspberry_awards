import React, {useEffect} from 'react';
import {memo} from 'react';
import {DashboardProps} from './dashboard.types';
import {createText} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {
  TableListMinMaxWinnersBase,
  Title,
  TableListTopWinnersBase,
  TableListMultipleWinnersBase,
  TableListWinnersByYearBase,
} from '../../../shared';
import {ActivityIndicator, Alert, ScrollView} from 'react-native';
import {
  useMultipleWinnersByYears,
  useStudiosWithWinners,
  useWinnersByYear,
  useMaxMinWinInterval,
} from './hooks';

import {Box} from '../../../shared/box';

const Text = createText<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  const TOP_WINNERS = 5;
  const [selectedWinnersByYear, setSelectedWinnersByYear] =
    React.useState<number>(2018);

  const {
    data: queryResultMultiplesWinnersByYear,
    isLoading: isLoadingMultiplesWinnersByYear,
  } = useMultipleWinnersByYears();

  const {
    data: queryResultStudiosWithWinners,
    isLoading: isLoadingStudiosWithWinners,
  } = useStudiosWithWinners(TOP_WINNERS);

  const {
    dataMin: queryResultMinWins,
    dataMax: queryResultMaxWins,
    isLoading: isLoadingMinMaxWins,
  } = useMaxMinWinInterval();

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
          isLoadingMultiplesWinnersByYear &&
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
              Alert.alert(
                item.year.toString(),
                `Number of winners: ${item.winnerCount.toString()}`,
              );
            }}
          />
        </Box>
        <Box marginBottom="l" paddingHorizontal="s">
          <TableListTopWinnersBase
            isLoading={false}
            label={`Top ${TOP_WINNERS} studios with winners`}
            data={queryResultStudiosWithWinners}
            onPress={(item: any) => {
              Alert.alert(item.name, `Win count: ${item.winCount.toString()}`);
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
              Alert.alert(
                item.producer,
                `Interval: ${item.interval.toString()}`,
              );
            }}
          />
          <Box marginTop="s">
            <TableListMinMaxWinnersBase
              isLoading={false}
              label={'Minimum'}
              data={queryResultMinWins}
              onPress={(item: any) => {
                Alert.alert(
                  item.producer,
                  `Interval: ${item.interval.toString()}`,
                );
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
                Alert.alert(
                  item.title,
                  `Producers: ${item.producers.join(', ')}`,
                );
              }}
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Dashboard = memo(DashboardBase);
