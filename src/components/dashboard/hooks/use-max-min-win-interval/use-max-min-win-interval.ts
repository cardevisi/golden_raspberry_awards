import {useQuery} from '@tanstack/react-query';
import {UseMaxMinWinIntervalProps} from './use-max-min-win-interval.types';

const useMaxMinWinInterval = ({gateway}: UseMaxMinWinIntervalProps) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['minMaxWinners'],
    queryFn: () => gateway.getMaxMinWinIntervalForProducers(),
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
