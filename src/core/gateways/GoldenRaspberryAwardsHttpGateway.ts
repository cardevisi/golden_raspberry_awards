import {quickSortTopWinners} from '../../components/dashboard/utils';
import IHttpClient from '../infra/IHttpClient';
import IGoldenRaspberryAwardsGateway from './IGoldenRaspberryAwardsGateway';
import {GetMovieProps} from './GoldenRaspberryAwardsGateway.types';
import {getWinnerStatus} from './utils/getWinnerStatus';

class GoldenRaspberryAwardsHttpGateway
  implements IGoldenRaspberryAwardsGateway
{
  constructor(readonly httpClient: IHttpClient, readonly baseUrl: string) {}

  async getMultipleWinnersByYear(): Promise<any> {
    const response = await this.httpClient.get(
      `${this.baseUrl}?projection=years-with-multiple-winners`,
    );
    return response;
  }

  async getStudiosWithWinCount(topWinners: number): Promise<any> {
    const response = await this.httpClient.get(
      `${this.baseUrl}?projection=studios-with-win-count`,
    );
    const sortedStudios = response.studios;
    const topStudios = sortedStudios.slice(0, topWinners);
    return quickSortTopWinners(topStudios);
  }

  async getMaxMinWinIntervalForProducers(): Promise<any> {
    const response = await this.httpClient.get(
      `${this.baseUrl}?projection=max-min-win-interval-for-producers`,
    );
    return response;
  }

  async getMoviesByYear(winner: boolean, year: string): Promise<any> {
    const response = await this.httpClient.get(
      `${this.baseUrl}?winner=${winner}&year=${year}`,
    );
    return response;
  }

  async getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Promise<any> {
    const winnerStatusAsBooleanText = getWinnerStatus(winnerStatus);
    const response = await this.httpClient.get(
      `${this.baseUrl}?page=${page}&size=${size}&winner=${winnerStatusAsBooleanText}&year=${year}`,
    );
    return response;
  }
}

export default GoldenRaspberryAwardsHttpGateway;
