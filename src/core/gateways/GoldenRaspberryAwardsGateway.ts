import {WinnerStatus} from '../../types/winner-status';

export default interface GoldenRaspberryAwardsGateway {
  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: {
    page: number;
    size: number;
    year: number;
    winnerStatus: WinnerStatus;
  }): Promise<any>;
  getMultipleWinnersByYear(): Promise<any>;
  getStudiosWithWinCount(year: number): Promise<any>;
  getMaxMinWinIntervalForProducers(): Promise<any>;
  getMoviesByYear(winner: boolean, year: number): Promise<any>;
}
