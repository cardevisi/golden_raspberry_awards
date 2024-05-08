import {useQuery} from '@tanstack/react-query';
import {UseMultipleWinnersByYearsProps} from './use-multiples-winners-by-years.types';

const useMultipleWinnersByYears = ({
  gateway,
}: UseMultipleWinnersByYearsProps) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['multiplesWinnersByYear'],
    queryFn: () => gateway.getMultipleWinnersByYear(), //getMultiplesWinnersByYear,
  });

  return {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useMultipleWinnersByYears;
