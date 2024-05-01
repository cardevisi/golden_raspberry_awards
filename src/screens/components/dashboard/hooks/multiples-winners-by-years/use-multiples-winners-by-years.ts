import {useQuery} from '@tanstack/react-query';

const getMultiplesWinnersByYear = async () => {
  const fetchResult = await fetch(
    'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners',
  );

  return fetchResult.json();
};

const useMultiplesWinnersByYears = () => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['winnersByYear'],
    queryFn: getMultiplesWinnersByYear,
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

export default useMultiplesWinnersByYears;
