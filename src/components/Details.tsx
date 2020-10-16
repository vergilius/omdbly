import React from 'react';

import {Flex} from './Layout';
import Header from './Header';
import SearchInput from './SearchInput';
import {HomeLogo} from './Logo';
import Text from './Text';

export type OnSearchSubmit = (value: string) => void;

const Details = ({onSubmit}: {onSubmit: OnSearchSubmit}) => {
  return (
    <Flex column fullWidth>
      <Header>
        <Flex>
          <HomeLogo inHeader />
        </Flex>
        <Flex grow fullWidth><SearchInput fullWidth onSubmit={onSubmit} /></Flex>
      </Header>
      <Flex fullWidth marginTop="xxxlarge">
        <Flex fullWidth marginTop="xxxlarge" justifyContent="center">
          <Text weight="bold">Not implemented :|</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Details;
