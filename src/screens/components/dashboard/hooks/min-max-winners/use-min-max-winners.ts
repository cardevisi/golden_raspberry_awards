import {useQuery} from '@tanstack/react-query';

const getMinMaxWins = async () => {
  const fetchResult = await fetch(
    'https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers',
  );
  const minMaxWins = await fetchResult.json();
  return minMaxWins;
};

const useMinMaxWinners = () => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['minMaxWinners'],
    queryFn: () => getMinMaxWins(),
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

export default useMinMaxWinners;
