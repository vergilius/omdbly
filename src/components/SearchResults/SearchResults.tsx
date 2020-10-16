import React from 'react';
import { SearchResultType } from '../../hooks/useSearch';
import {Flex} from '../Layout';
import Text from '../Text';
import SearchResult from './SearchResult';

type SearchResultsPropsType = {
  results: Array<SearchResultType>
};

const SearchResults = ({results}: SearchResultsPropsType) => (
  <Flex fullWidth grow row wrap="wrap" marginBottom="xxxlarge">
    {!results.length && (
      <Flex fullWidth marginTop="xxxlarge" justifyContent="center">
        <Text weight="bold">
          Unfortunately, there are no results for your phrase.
        </Text>
      </Flex>
    )}
    {results.map((result, index) => (
      <SearchResult key={index} {...result} />
    ))}
  </Flex>
);

export default SearchResults;
