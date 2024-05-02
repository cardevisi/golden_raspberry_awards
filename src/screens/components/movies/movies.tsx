import {memo, useEffect} from 'react';
import React from 'react';
import {MoviesProps} from './movies.types';
import {createBox} from '@shopify/restyle';
import {ThemeProps} from '../../../theme';
import {Title} from '../../../shared';
import {TableListMoviesBase} from '../../../shared/table-list-movies';
import {useGetMovies} from './hooks/get-movies';
import {ActivityIndicator, ScrollView} from 'react-native';

const Box = createBox<ThemeProps>();

const MoviesBase = ({name}: MoviesProps) => {
  const [selectedYear, setSelectedYear] = React.useState<number>(2018);
  const [selectedWinnerStatus, setSelectedWinnerStatus] = React.useState<
    'Yes' | 'No'
  >('Yes');

  const {
    data: movies,
    refetch: refetchWinnersByYear,
    isLoading,
  } = useGetMovies({
    year: selectedYear,
    winnerStatus: selectedWinnerStatus,
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

        <TableListMoviesBase
          onChangeWinnerTextInput={(value: string) => {
            const status = value.toLocaleLowerCase() === 'yes' ? 'Yes' : 'No';
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
