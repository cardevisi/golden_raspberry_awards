import {useQuery} from '@tanstack/react-query';
import {WinnerStatus} from '../../types/winner-status';

const getMovies = async (
  year: number,
  winnerStatus: WinnerStatus,
  page = 0,
  size = 99,
) => {
  const fetchResult = await fetch(
    `https://tools.texoit.com/backend-java/api/movies?page=${page}&size=${size}&winner=${winnerStatus}&year=${year}`,
  );

  return fetchResult.json();
};

const useGetMovies = ({
  year,
  winnerStatus,
  page = 0,
  size = 99,
}: {
  year: number;
  winnerStatus: WinnerStatus;
  page?: number;
  size?: number;
}) => {
  const {
    data: raw,
    error,
    isError,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['getMovies', page],
    queryFn: () => getMovies(year, winnerStatus, page, size),
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
