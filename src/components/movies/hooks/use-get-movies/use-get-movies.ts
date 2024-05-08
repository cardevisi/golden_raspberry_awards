import {useQuery} from '@tanstack/react-query';
import {
  BASE_URL,
  FetchAdapter,
  GoldenRaspberryAwardsHttpGateway,
} from '@golden-raspberry-awards/core';
import {GetMovieProps} from '@golden-raspberry-awards/core/gateways/GoldenRaspberryAwardsGateway.types';

const fetchAdapter = new FetchAdapter();
const goldenRaspberryAwardsHttpGateway = new GoldenRaspberryAwardsHttpGateway(
  fetchAdapter,
  BASE_URL,
);

const useGetMovies = ({
  year,
  winnerStatus,
  page = 0,
  size = 10,
}: GetMovieProps) => {
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
