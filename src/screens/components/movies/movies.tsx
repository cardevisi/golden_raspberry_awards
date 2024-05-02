import {memo, useEffect} from 'react';
import React from 'react';
import {MoviesProps} from './movies.types';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {Title} from '../../../shared';
import {TableListMoviesBase} from '../../../shared/table-list-movies';
import {useGetMovies} from './hooks/get-movies';
import {ActivityIndicator, ScrollView} from 'react-native';
import Pagination from '../../../shared/pagination/pagination';
import {WinnerStatus} from './types/winner-status';

const Box = createBox<ThemeProps>();

const MoviesBase = ({name}: MoviesProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [selectedYear, setSelectedYear] = React.useState<number>(2018);
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
    size: 99,
  });

  useEffect(() => {
    setSelectedYear(2018);
  }, []);

  useEffect(() => {
    refetchWinnersByYear();
  }, [refetchWinnersByYear, selectedYear, selectedWinnerStatus]);

  return (
    <ScrollView>
      <Box bg="black" flex={1} paddingHorizontal="s">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="black"
          alignContent="center"
          alignItems="center">
          <Title name={name} />
          {isLoading ? (
            <ActivityIndicator size="small" aria-label="activity-indicator" />
          ) : null}
        </Box>
        <Box marginBottom="l">
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
            const status =
              value.toLocaleLowerCase() === 'yes'
                ? WinnerStatus.YES
                : WinnerStatus.NO;
            setSelectedWinnerStatus(status);
          }}
          onChangeYearTextInput={(value: string) => {
            const yearValue = parseInt(value, 10);
            setSelectedYear(yearValue);
          }}
          isLoading={false}
          label="Filter by Year and Winner Status"
          data={movies}
          onPress={() => {}}
        />
      </Box>
    </ScrollView>
  );
};

export const Movies = memo(MoviesBase);
