import {useQuery} from '@tanstack/react-query';
import {UseGetMoviesProps} from './use-get-movies.types';

const useGetMovies = ({
  year,
  winnerStatus,
  page = 0,
  size = 10,
  gateway,
}: UseGetMoviesProps) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['getMovies', page],
    queryFn: () =>
      gateway.getMovies({
        year,
        page,
        winnerStatus,
        size,
      }),
  });

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
