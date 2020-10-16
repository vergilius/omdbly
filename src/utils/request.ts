const API_PATH = 'https://www.omdbapi.com/';
const API_KEY = 'e3b51f14';

type RequestParams = {
  endpoint: 's' | 'i',
  query: string,
  type?: 'movie' | 'series' | 'episode'
  year?: number,
  page?: number,
};
type SearchRequestParams = Pick<RequestParams, 'query' | 'type' | 'year' | 'page'>;

const buildSearchParams = ({endpoint, query, type, year, page}: RequestParams) => {
  const searchParams = new URLSearchParams();

  searchParams.append('apiKey', API_KEY);
  searchParams.append(endpoint, query);

  if (type) {
    searchParams.append('type', type);
  }
  if (year) {
    searchParams.append('y', year.toString());
  }
  if (page) {
    searchParams.append('page', page.toString());
  }

  return searchParams;
};

export const request = async ({endpoint = 's', query, type, year, page} : RequestParams) => {
  const searchParams = buildSearchParams({endpoint, query, type, year, page});

  return await fetch(`${API_PATH}?${searchParams}`);
};

export const searchMovie = async ({query, type, year, page} : SearchRequestParams) =>
  request({endpoint: 's', query, type, year, page});

export const getMovie = async (movieId: string) =>
  request({endpoint: 'i', query: movieId});
