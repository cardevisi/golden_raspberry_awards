import selectionSortTopWinners from './selection-sort-top-winners';

describe('selectionSortTopWinners', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should sort top winners correctly', () => {
    const studiosWinnersList = [
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 3', winCount: 2},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 1', winCount: 5},
    ];
    const sortedWinnersList = [
      {name: 'Studio 4', winCount: 9},
      {name: 'Studio 1', winCount: 5},
      {name: 'Studio 2', winCount: 3},
      {name: 'Studio 3', winCount: 2},
    ];
    const sortedList = selectionSortTopWinners(studiosWinnersList);
    expect(sortedList).toEqual(sortedWinnersList);
  });
});
