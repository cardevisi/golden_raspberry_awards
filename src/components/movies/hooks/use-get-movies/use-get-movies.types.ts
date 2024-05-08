import GoldenRaspberryAwardsGateway from '@golden-raspberry-awards/core/gateways/GoldenRaspberryAwardsGateway';
import {WinnerStatus} from '../../../../types/winner-status';

export type UseGetMoviesProps = {
  year: string;
  winnerStatus: WinnerStatus;
  page: number;
  size: number;
  gateway: GoldenRaspberryAwardsGateway;
};
