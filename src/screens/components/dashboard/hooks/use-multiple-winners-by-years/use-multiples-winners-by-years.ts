import {useQuery} from '@tanstack/react-query';
import {BASE_URL, GoldenRaspberryAwardsHttpGateway} from '../../../../../core';
import {FetchAdapter} from '../../../../../core/infra';

const fetchAdapter = new FetchAdapter();
const goldenRaspberryAwardsHttpGateway = new GoldenRaspberryAwardsHttpGateway(
  fetchAdapter,
  BASE_URL,
);

const useMultipleWinnersByYears = () => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['multiplesWinnersByYear'],
    queryFn: () => goldenRaspberryAwardsHttpGateway.getMultipleWinnersByYear(), //getMultiplesWinnersByYear,
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
