const quickSortTopWinners = (winnersList: any[]): any[] => {
  if (winnersList.length <= 1) {
    return winnersList;
  }

  const pivot = winnersList[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < winnersList.length; i++) {
    if (winnersList[i].winCount <= pivot.winCount) {
      lesser.push(winnersList[i]);
    } else {
      greater.push(winnersList[i]);
    }
  }

  return [
    ...quickSortTopWinners(greater),
    pivot,
    ...quickSortTopWinners(lesser),
  ];
};

export default quickSortTopWinners;
