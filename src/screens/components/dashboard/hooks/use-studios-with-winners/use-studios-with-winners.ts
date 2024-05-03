import {useQuery} from '@tanstack/react-query';
import {
  BASE_URL,
  FetchAdapter,
  GoldenRaspberryAwardsHttpGateway,
} from '../../../../../core';

const fetchAdapter = new FetchAdapter();
const goldenRaspberryAwardsHttpGateway = new GoldenRaspberryAwardsHttpGateway(
  fetchAdapter,
  BASE_URL,
);

const useStudiosWithWinners = (topWinners = 3) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['studiosWithWinners'],
    queryFn: () =>
      goldenRaspberryAwardsHttpGateway.getStudiosWithWinCount(topWinners), //getStudiosWithWinner(topWinners),
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

export default useStudiosWithWinners;
