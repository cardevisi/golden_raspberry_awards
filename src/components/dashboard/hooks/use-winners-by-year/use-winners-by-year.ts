import {useQuery} from '@tanstack/react-query';
import {UseWinnersByYearProps} from './use-winners-by-year.types';

const useWinnersByYear = ({year, gateway}: UseWinnersByYearProps) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['winnersByYear'],
    queryFn: () =>
      year ? gateway.getMoviesByYear(true, year) : Promise.resolve([]),
  });

  return {
    data: raw || null,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useWinnersByYear;
