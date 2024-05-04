import {useQuery} from '@tanstack/react-query';
import {
  BASE_URL,
  FetchAdapter,
  GoldenRaspberryAwardsHttpGateway,
} from '@golden-raspberry-awards/core';

const fetchAdapter = new FetchAdapter();
const goldenRaspberryAwardsGateway = new GoldenRaspberryAwardsHttpGateway(
  fetchAdapter,
  BASE_URL,
);

const useWinnersByYear = ({year}: {year: number}) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['winnersByYear'],
    queryFn: () => goldenRaspberryAwardsGateway.getMoviesByYear(true, year), //getWinnersByYear(year),
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

export default useWinnersByYear;
