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

const useMaxMinWinInterval = () => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['minMaxWinners'],
    queryFn: () =>
      goldenRaspberryAwardsHttpGateway.getMaxMinWinIntervalForProducers(), //getMinMaxWins(),
  });

  return {
    dataMin: raw?.min || [],
    dataMax: raw?.max || [],
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useMaxMinWinInterval;
