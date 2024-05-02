import {useQuery} from '@tanstack/react-query';

const getMovies = async (year: number, winnerStatus: 'Yes' | 'No') => {
  const fetchResult = await fetch(
    `https://tools.texoit.com/backend-java/api/movies?page=0&size=99&winner=${winnerStatus}&year=${year}`,
  );

  return fetchResult.json();
};

const useGetMovies = ({
  year,
  winnerStatus,
}: {
  year: number;
  winnerStatus: 'Yes' | 'No';
}) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['getMovies'],
    queryFn: () => getMovies(year, winnerStatus),
  });

  console.log('raw', JSON.stringify(raw, null, 2));

  return {
    data: raw?.content,
    pageable: raw?.pageable,
    totalPages: raw?.totalPages,
    totalElements: raw?.totalElements,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useGetMovies;
