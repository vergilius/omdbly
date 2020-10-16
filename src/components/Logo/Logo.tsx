import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  color: ${({theme}) => theme.colors.darkAlt};
  font-family: ${({theme}) => theme.fontFamily.logo};
  font-size: ${({small, theme}) => small ? theme.fontSizes.body : theme.fontSizes.logo}px;
`;

export default Logo;
