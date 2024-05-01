// import {AxiosResponse} from 'axios';

import {useQuery} from '@tanstack/react-query';

const getWinnersByYear = async () => {
  const fetchResult = await fetch(
    'https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners',
  );

  return fetchResult.json();
};

const useWinnersByYears = () => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({queryKey: ['winnersByYear'], queryFn: getWinnersByYear});

  return {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useWinnersByYears;
