import {IGoldenRaspberryAwardsGateway} from '@golden-raspberry-awards/core/gateways';
import {WinnerStatus} from '../../../../types/winner-status';

export type UseGetMoviesProps = {
  year: string;
  winnerStatus: WinnerStatus;
  page: number;
  size: number;
  gateway: IGoldenRaspberryAwardsGateway;
};
