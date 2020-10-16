import React, { useState } from 'react';
import styled from 'styled-components';

import {Flex} from '../Layout';
import RoundButton from './RoundButton';
import {OnSearchSubmit} from '../Search';
import SearchIcon from './SearchIcon';
import useQuery from '../../hooks/useQuery';
import {SEARCH_QUERY} from '../../const/queryParams';

const ENTER_KEY_CODE = 13;

const InputWrapper = styled(Flex)`
  width: 100%;

  ${({fullWidth, theme}) => !fullWidth && `
    ${theme.mediaQueries.large} {
      width: 50%;
    }
  `}

  ${RoundButton} {
    position: absolute;
    right: ${({theme}) => theme.size.xsmall};
    top: 6px; // handpicked for best match
  }
`;

const Input = styled.input`
  width: 100%;
  padding: ${({theme: {size}}) => `${size.default} ${size.xxlarge} ${size.default} ${size.medium}`};
  border-radius: ${({theme}) => theme.size.large};
  font-size: ${({theme}) => theme.fontSizes.body}px;
  line-height: ${({theme}) => theme.fontSizes.body * 1.56}px;
  background-color: ${({theme}) => theme.colors.dark};
  border: none;
  font-family: ${({theme}) => theme.fontFamily.body};
  color: ${({theme}) => theme.colors.light};
  box-shadow: ${({theme}) => `0 0 4px ${theme.colors.dark}`};
  word-wrap: break-word;
  outline: none;

  &::placeholder {
    color: ${({theme}) => theme.colors.light};
  }
`;

type SearchInputPropsType = {
  fullWidth?: boolean,
  onSubmit: OnSearchSubmit
};

const SearchInput = ({fullWidth, onSubmit}: SearchInputPropsType) => {
  const [value, setValue] = useState<string>(useQuery(SEARCH_QUERY));
  const handleInputChange = (event) => setValue(event.target.value);
  const handleKeyDown = (event) => event.keyCode === ENTER_KEY_CODE && handleSubmit();
  const handleSubmit = () => onSubmit(value);

  return (
    <InputWrapper fullWidth={fullWidth} justifyContent="center" alignItems="center">
      <Flex fullWidth style={{position: 'relative'}}> {/* troublesome, let's think about that later */}
        <Input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={value}
          placeholder="Type movie or tv series title"
        />
        <RoundButton onClick={handleSubmit}>
          <SearchIcon />
        </RoundButton>
      </Flex>
    </InputWrapper>
  );
};

export default SearchInput;
