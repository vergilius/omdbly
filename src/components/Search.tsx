import React from 'react';

import {HomeLogo} from './Logo';
import {Flex} from './Layout';
import SearchInput from './SearchInput';

export type OnSearchSubmit = (value: string) => void;

const Search = ({onSubmit}: {onSubmit: OnSearchSubmit}) => (
  <Flex column fullWidth alignItems="center" justifyContent="center">
    <HomeLogo />
    <SearchInput onSubmit={onSubmit} />
  </Flex>
);

export default Search;
