import {useQuery} from '@tanstack/react-query';
import {UseStudiosWithWinnersProps} from './use-studios-with-winners.types';

const useStudiosWithWinners = ({
  topWinners = 3,
  gateway,
}: UseStudiosWithWinnersProps) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['studiosWithWinners'],
    queryFn: () => gateway.getStudiosWithWinCount(topWinners),
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
