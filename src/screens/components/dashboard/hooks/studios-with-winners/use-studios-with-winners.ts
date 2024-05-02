import {useQuery} from '@tanstack/react-query';
import {quickSortTopWinners} from '../../utils';

const getStudiosWithWinner = async (topWinners: number) => {
  const fetchResult = await fetch(
    'https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count',
  );

  const sortedStudios = (await fetchResult.json()).studios;
  const topStudios = sortedStudios.slice(0, topWinners);
  return quickSortTopWinners(topStudios);
};

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
    queryFn: () => getStudiosWithWinner(topWinners),
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
