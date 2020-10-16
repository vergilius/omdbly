import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  width: ${({theme}) => `${theme.size.medium}`};
  height: ${({theme}) => `${theme.size.medium}`};
`;

const SVG = styled.svg`
  fill: ${({theme, fill}) => `${fill ? fill : theme.colors.light}`};
`;

const SearchIcon = ({fill}: {fill?: string}) => (
  <Icon>
    <SVG fill={fill} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M420.48 390.19l-87.68-87.47c46.94-62.72 37.43-151.05-21.77-202.34-59.2-51.3-147.99-48.13-203.38 7.27-55.4 55.39-58.57 144.17-7.27 203.38 51.3 59.2 139.62 68.7 202.34 21.77l87.47 87.68a21.42 21.42 0 0 0 30.29-30.3zM213.33 320c-58.9 0-106.66-47.76-106.66-106.67 0-58.9 47.75-106.66 106.66-106.66S320 154.42 320 213.33A106.67 106.67 0 0 1 213.33 320z"></path>
    </SVG>
  </Icon>
);

export default SearchIcon;
