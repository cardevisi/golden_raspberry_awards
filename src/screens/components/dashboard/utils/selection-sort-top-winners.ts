const selectionSortTopWinners = (studiosWinnersList: any[]): any[] => {
  for (let i = 0; i < studiosWinnersList.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < studiosWinnersList.length; j++) {
      if (
        studiosWinnersList[j].winCount > studiosWinnersList[minIndex].winCount
      ) {
        minIndex = j;
      }
    }
    let aux = studiosWinnersList[i];
    studiosWinnersList[i] = studiosWinnersList[minIndex];
    studiosWinnersList[minIndex] = aux;
  }

  return studiosWinnersList;
};

export default selectionSortTopWinners;
