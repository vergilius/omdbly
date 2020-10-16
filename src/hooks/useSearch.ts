import { useEffect, useState } from 'react';
import { normalizeSearchResults } from '../utils/normalizeSearchResults';
import {searchMovie} from '../utils/request';

export interface Pagination {
  currentPage: number,
  totalPages: number,
  setPage: (page: number) => void,
};
export type SearchResultType = {
  title: string,
  year: string,
  id: string,
  type: 'movie' | 'series' | 'episode',
  poster: string,
};

export type APISearchResult = {

};

type ResponseType = {
  Search: Array<APISearchResult>,
  totalResults: string,
};

const useSearch = (query: string): {
  error: boolean,
  loading: boolean,
  results: Array<SearchResultType>,
  pagination: Pagination,
} => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await searchMovie({query, page: currentPage});
        const {Search, totalResults}: ResponseType = await response.json();

        setResults(normalizeSearchResults(Search));
        setTotalPages(parseInt(totalResults, 10));
      } catch(error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [query, currentPage, setLoading, setResults, setTotalPages]);

  return {
    error,
    loading,
    results,
    pagination: {
      currentPage,
      totalPages,
      setPage: setCurrentPage,
    }
  };
};

export default useSearch;
