import {useQuery} from '@tanstack/react-query';
import {
  BASE_URL,
  GoldenRaspberryAwardsHttpGateway,
} from '@golden-raspberry-awards/core';
import {FetchAdapter} from '@golden-raspberry-awards/core/infra';

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
