import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { SearchResultType } from '../../hooks/useSearch';
import {Flex} from '../Layout';
import Text from '../Text';

const Wrapper = styled(Link)`
  width: 100%;
  margin-top: ${({theme}) => `${theme.size.medium}`};
  border: ${({theme}) => `2px solid ${theme.colors.blue}`};
  padding: ${({theme}) => `${theme.size.medium}`};

  ${({theme}) => `
    ${theme.mediaQueries.large} {
      width: 32%;
      margin-left: 2%;
    }
  `}

  &:hover {
    border: ${({theme}) => `3px solid ${theme.colors.blue}`};
  }

  &:nth-child(3n + 1) {
    margin-left: 0;
  }
`;
const Poster = styled.img`
  width: 100%;
`;

type SearchResultPropsType = SearchResultType;

const SearchResult = ({title, year, id, type, poster}: SearchResultPropsType) => (
  <Wrapper to={`/details/${id}`}>
    <Flex fullWidth column>
      <Flex>
        <Poster src={poster} title={`${title} poster`} />
      </Flex>
      <Flex column marginTop="medium">
        <Flex marginRight="small">
          <Text weight="bold" size="headline">{title}</Text>
        </Flex>
        <Flex marginRight="small" marginTop="small"><Text>Year: {year}</Text></Flex>
        <Flex marginRight="small"><Text>Type: {type}</Text></Flex>
      </Flex>
    </Flex>
  </Wrapper>
);

export default SearchResult;
