import {useEffect} from 'react';
import React from 'react';
import {MoviesProps} from './movies.types';
import {Text, Title} from '@golden-raspberry-awards/shared';
import {TableListMoviesBase} from '../../components/table-list-movies';
import {useGetMovies} from './hooks/use-get-movies';
import {ActivityIndicator, Alert, ScrollView} from 'react-native';
import Pagination from '@golden-raspberry-awards/shared/pagination/pagination';
import {WinnerStatus} from '../../types/winner-status';
import {Box} from '@golden-raspberry-awards/shared/box';
import {PAGES} from '@golden-raspberry-awards/core';

const MoviesBase = ({name}: MoviesProps) => {
  const INIT_YEAR = PAGES.MOVIES.initiYear;
  const CURRENT_PAGE = 1;

  const [currentPage, setCurrentPage] = React.useState<number>(CURRENT_PAGE);
  const [selectedYear, setSelectedYear] = React.useState<string>(INIT_YEAR);
  const [selectedWinnerStatus, setSelectedWinnerStatus] =
    React.useState<WinnerStatus>(WinnerStatus.YES);

  const {
    data: movies,
    refetch: refetchWinnersByYear,
    isLoading,
    totalPages,
  } = useGetMovies({
    year: selectedYear,
    winnerStatus: selectedWinnerStatus,
    page: currentPage - 1,
    size: PAGES.MOVIES.sizeOfPagination,
  });

  useEffect(() => {
    setSelectedYear(INIT_YEAR);
  }, [INIT_YEAR]);

  useEffect(() => {
    refetchWinnersByYear();
  }, [refetchWinnersByYear, selectedYear, selectedWinnerStatus]);

  const handleOnChangeWinnerTextInput = (value: string) => {
    let winnerStatus = WinnerStatus.EMPTY;

    if (value.toLocaleUpperCase() === WinnerStatus.YES) {
      winnerStatus = WinnerStatus.YES;
    }

    if (value.toLocaleUpperCase() === WinnerStatus.NO) {
      winnerStatus = WinnerStatus.NO;
    }

    setSelectedWinnerStatus(winnerStatus);
  };

  const handleOnChangeYearTextInput = (yearValue: string) => {
    setSelectedYear(yearValue);
  };

  return (
    <ScrollView>
      <Box bg="black" flex={1} paddingHorizontal="m">
        <Title name={name} />
        <Box flexDirection="column" marginBottom="s" borderRadius={5}>
          <Text variant="subheader" color="white" fontWeight={'bold'}>
            Filter by Year and Winner Status
          </Text>
        </Box>
        {/**
         * TODO - Implement error handling
         */}
        {isLoading ? (
          <ActivityIndicator size="small" aria-label="activity-indicator" />
        ) : (
          <>
            <Box marginBottom="m">
              <Pagination
                totalPages={totalPages || 1}
                onPageChange={(value: number) => {
                  setCurrentPage(value);
                }}
                currentPage={currentPage}
              />
            </Box>
            <TableListMoviesBase
              onChangeWinnerTextInput={(value: string) => {
                handleOnChangeWinnerTextInput(value);
              }}
              onChangeYearTextInput={(value: string) => {
                handleOnChangeYearTextInput(value);
              }}
              isLoading={false}
              data={movies}
              onPress={(item: any) => {
                Alert.alert(item.title, item.year.toString());
              }}
            />
          </>
        )}
      </Box>
    </ScrollView>
  );
};

export default MoviesBase;
