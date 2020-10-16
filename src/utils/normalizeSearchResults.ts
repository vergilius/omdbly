export const normalizeSearchResults = (searchResults) =>
  searchResults.map(result => ({
    id: result.imdbID,
    poster: result.Poster,
    title: result.Title,
    type: result.Type,
    year: result.Year,
  }));
