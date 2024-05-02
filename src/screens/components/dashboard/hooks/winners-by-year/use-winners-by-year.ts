import {useQuery} from '@tanstack/react-query';

const getWinnersByYear = async (year: number) => {
  const fetchResult = await fetch(
    `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`,
  );
  return fetchResult.json();
};

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
    queryFn: () => getWinnersByYear(year),
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
