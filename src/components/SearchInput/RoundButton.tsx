import React from 'react';
import styled from 'styled-components';

const RoundButton = styled.button`
  border-radius: 50%;
  padding: ${({theme}) => `${theme.size.small}`};
  background: ${({theme}) => `${theme.colors.blue}`};
  border: none;
  outline: none;
  transition: 100ms background linear;
  cursor: pointer;
  
  &:focus, &:hover, &:active {
    background: ${({theme}) => `${theme.colors.red}`};
  }
`;

export default RoundButton;
