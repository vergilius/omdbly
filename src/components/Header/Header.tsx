import React from 'react';
import styled from 'styled-components';
import {Flex} from '../Layout';

const HeaderWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({theme}) => `${theme.size.xxxlarge}`};
  background: ${({theme}) => `${theme.colors.red}`};
  padding: ${({theme}) => `${theme.size.default}`};
`;
const HeaderContainer = styled(Flex)`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

const Header = ({children}) => (
  <HeaderWrapper justifyContent="center">
    <HeaderContainer>
      {children}
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header;
