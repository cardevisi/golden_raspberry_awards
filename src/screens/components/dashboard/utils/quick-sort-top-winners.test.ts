import quickSortTopWinners from './quick-sort-top-winners';

describe('quickSortTopWinners', () => {
  it('should sort top winners correctly', () => {
    const studiosTopWinnersList = [
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 3', winCount: 2},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 1', winCount: 5},
      {name: 'Studio 5', winCount: 20},
      {name: 'Studio 6', winCount: 20},
    ];
    const sortedTopWinnersList = [
      {name: 'Studio 5', winCount: 20},
      {name: 'Studio 6', winCount: 20},
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 1', winCount: 5},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 3', winCount: 2},
    ];
    const sortedList = quickSortTopWinners(studiosTopWinnersList);
    expect(sortedList).toEqual(sortedTopWinnersList);
  });

  it('should sort top winners correctly with duplicates', () => {
    const studiosTopWinnersList = [
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 3', winCount: 2},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 1', winCount: 5},
      {name: 'Studio 5', winCount: 5},
      {name: 'Studio 6', winCount: 3},
    ];
    const sortedTopWinnersList = [
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 1', winCount: 5},
      {name: 'Studio 5', winCount: 5},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 6', winCount: 3},
      {name: 'Studio 3', winCount: 2},
    ];
    const sortedList = quickSortTopWinners(studiosTopWinnersList);
    expect(sortedList).toEqual(sortedTopWinnersList);
  });
});
