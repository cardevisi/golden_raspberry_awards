import {WinnerStatus} from '../../../types/winner-status';

export const getWinnerStatus = (winnerStatus: WinnerStatus) => {
  if (winnerStatus === WinnerStatus.YES) {
    return 'true';
  }
  if (winnerStatus === WinnerStatus.NO) {
    return 'false';
  }

  return WinnerStatus.EMPTY;
};
