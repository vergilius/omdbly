import {normalizeSearchResults} from './normalizeSearchResults';

describe('normalizeSearchResults()', () => {
  it('returns empty list on empty input', () => {
    expect(normalizeSearchResults([])).toEqual([]);
  });

  it('properly normalized list with valid input', () => {
    expect(normalizeSearchResults([{
      imdbID: 'test-id',
      Poster: 'test-poster',
      Title: 'test-title',
      Type: 'test-type',
      Year: 'test-year',
    }])).toEqual([{
      id: 'test-id',
      poster: 'test-poster',
      title: 'test-title',
      type: 'test-type',
      year: 'test-year',
    }]);
  });
});
