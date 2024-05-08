import {GetMovieProps} from './GoldenRaspberryAwardsGateway.types';

export default interface GoldenRaspberryAwardsGateway {
  getMovies({page, size, year, winnerStatus}: GetMovieProps): Promise<any>;
  getMultipleWinnersByYear(): Promise<any>;
  getStudiosWithWinCount(year: number): Promise<any>;
  getMaxMinWinIntervalForProducers(): Promise<any>;
  getMoviesByYear(winner: boolean, year: string): Promise<any>;
}
