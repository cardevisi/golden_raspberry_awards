import React, {useEffect} from 'react';
import {DashboardProps} from './dashboard.types';
import {createText} from '@shopify/restyle';
import {
  TableListMinMaxWinnersBase,
  TableListTopWinnersBase,
  TableListMultipleWinnersBase,
  TableListWinnersByYearBase,
} from '../../components';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {
  useMultipleWinnersByYears,
  useStudiosWithWinners,
  useWinnersByYear,
  useMaxMinWinInterval,
} from './hooks';

import {Box} from '@golden-raspberry-awards/shared/box';
import {SearchBar, Title} from '@golden-raspberry-awards/shared';
import {ThemeProps} from '../../theme';

const Text = createText<ThemeProps>();

const DashboardBase = ({name}: DashboardProps) => {
  const TOP_WINNERS = 3;
  const DEFAULT_WINNER_YEAR = '2018';
  const [selectedWinnersByYear, setSelectedWinnersByYear] =
    React.useState<string>(DEFAULT_WINNER_YEAR);

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
    setSelectedWinnersByYear(DEFAULT_WINNER_YEAR);
  }, []);

  useEffect(() => {
    if (selectedWinnersByYear !== '') {
      refetchWinnersByYear();
    }
  }, [refetchWinnersByYear, selectedWinnersByYear]);

  return (
    <KeyboardAvoidingView behavior="position">
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
            <Box flexDirection="column" marginBottom="s" borderRadius={5}>
              <Text variant="body" color="white" fontWeight={'bold'}>
                List years with multiple winners
              </Text>
            </Box>
            <TableListMultipleWinnersBase
              isLoading={false}
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
            <Box flexDirection="column" marginBottom="s" borderRadius={5}>
              <Text variant="body" color="white" fontWeight={'bold'}>
                {`Top ${TOP_WINNERS} studios with winners`}
              </Text>
            </Box>
            <TableListTopWinnersBase
              isLoading={false}
              data={queryResultStudiosWithWinners}
              onPress={(item: any) => {
                Alert.alert(
                  item.name,
                  `Win count: ${item.winCount.toString()}`,
                );
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
              <Box flexDirection="column" marginBottom="s" borderRadius={5}>
                <Text variant="body" color="white" fontWeight={'bold'}>
                  List movie winners by year
                </Text>
              </Box>
              <SearchBar
                searchPhrase={selectedWinnersByYear.toString()}
                setSearchPhrase={yearValue => {
                  setSelectedWinnersByYear(yearValue);
                }}
                maxLength={4}
                inputMode="numeric"
              />
              <TableListWinnersByYearBase
                isLoading={false}
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
    </KeyboardAvoidingView>
  );
};

export default DashboardBase;
