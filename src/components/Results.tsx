import React from 'react';

import {Flex} from './Layout';
import useQuery from '../hooks/useQuery';
import useSearch from '../hooks/useSearch';
import Header from './Header';
import SearchInput from './SearchInput';
import {HomeLogo} from './Logo';
import {SEARCH_QUERY} from '../const/queryParams';
import Loading from './Loading';
import SearchResults from './SearchResults';

export type OnSearchSubmit = (value: string) => void;

const Results = ({onSubmit}: {onSubmit: OnSearchSubmit}) => {
  const query = useQuery(SEARCH_QUERY);
  const {loading, error, results} = useSearch(query);

  return (
    <Flex column fullWidth>
      <Header>
        <Flex>
          <HomeLogo inHeader />
        </Flex>
        <Flex grow fullWidth><SearchInput fullWidth onSubmit={onSubmit} /></Flex>
      </Header>
      <Flex fullWidth marginTop="xxxlarge">
        {loading ? (
          <Flex fullWidth marginTop="xxxlarge" justifyContent="center">
            <Loading />
          </Flex>
        ) : <SearchResults results={results} />}
      </Flex>
    </Flex>
  );
}

export default Results;
