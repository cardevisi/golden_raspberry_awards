import {quickSortTopWinners} from '../../components/dashboard/utils';
import {WinnerStatus} from '../../types/winner-status';
import HttpClient from '../infra/httpClient';
import GoldenRaspberryAwardsGateway from './GoldenRaspberryAwardsGateway';
import {GetMovieProps} from './GoldenRaspberryAwardsGateway.types';

class GoldenRaspberryAwardsHttpGateway implements GoldenRaspberryAwardsGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async getMultipleWinnersByYear(): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}?projection=years-with-multiple-winners`,
    );
    return await response.json();
  }

  async getStudiosWithWinCount(topWinners: number): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}?projection=studios-with-win-count`,
    );
    const sortedStudios = (await response.json()).studios;
    const topStudios = sortedStudios.slice(0, topWinners);
    return quickSortTopWinners(topStudios);
  }

  async getMaxMinWinIntervalForProducers(): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}?projection=max-min-win-interval-for-producers`,
    );
    return await response.json();
  }

  async getMoviesByYear(winner: boolean, year: string): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}?winner=${winner}&year=${year}`,
    );
    return await response.json();
  }

  getWinnerValue = (winnerStatus: WinnerStatus) => {
    if (winnerStatus === WinnerStatus.YES) {
      return 'true';
    }
    if (winnerStatus === WinnerStatus.NO) {
      return 'false';
    }

    return WinnerStatus.EMPTY;
  };

  async getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Promise<any> {
    const winnerStatusText = this.getWinnerValue(winnerStatus);

    const response = await fetch(
      `${this.baseUrl}?page=${page}&size=${size}&winner=${winnerStatusText}&year=${year}`,
    );
    return await response.json();
  }
}

export default GoldenRaspberryAwardsHttpGateway;
