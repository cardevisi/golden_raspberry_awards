import {useQuery} from '@tanstack/react-query';
import {WinnerStatus} from '../../../../types/winner-status';
import {
  BASE_URL,
  FetchAdapter,
  GoldenRaspberryAwardsHttpGateway,
} from '@golden-raspberry-awards/core';

const fetchAdapter = new FetchAdapter();
const goldenRaspberryAwardsHttpGateway = new GoldenRaspberryAwardsHttpGateway(
  fetchAdapter,
  BASE_URL,
);

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
    queryFn: () =>
      goldenRaspberryAwardsHttpGateway.getMovies({
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
