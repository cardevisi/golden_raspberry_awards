import {quickSortTopWinners} from '../../screens/components/dashboard/utils';
import {WinnerStatus} from '../../screens/components/movies/types/winner-status';
import HttpClient from '../infra/httpClient';
import GoldenRaspberryAwardsGateway from './GoldenRaspberryAwardsGateway';

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

  async getMoviesByYear(winner: boolean, year: number): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}?winner=${winner}&year=${year}`,
    );
    return await response.json();
  }

  async getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: {
    page: number;
    size: number;
    year: number;
    winnerStatus: WinnerStatus;
  }): Promise<any> {
    const winnerStatusText =
      winnerStatus === WinnerStatus.YES ? 'true' : 'false';

    const response = await fetch(
      `${this.baseUrl}?page=${page}&size=${size}&winner=${winnerStatusText}&year=${year}`,
    );
    return await response.json();
  }
}

export default GoldenRaspberryAwardsHttpGateway;
