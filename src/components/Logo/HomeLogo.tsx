import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Flex} from '../Layout';
import Logo from './Logo';

const Container = styled(Flex)`
  ${({inHeader, theme}) => {
    if (inHeader) {
      return `
        margin-right: ${theme.size.medium};
        margin-top: ${theme.size.xsmall};
      `;
    }

    return `
      position: absolute;
      top: calc(50% - 256px);
    `;
  }}
`;

const LogoWrapper = styled.div`
  margin-top: ${({inHeader, theme}) => inHeader ? theme.size.xxxsmall : theme.size.default};
`;

const HomeLogo = ({inHeader}: {inHeader?: boolean}) => (
  <Container column justifyContent="center" alignItems="center" inHeader={inHeader}>
    {/* handpicked height to reserve size */}
    <Link to="/">
      <img src="/img/logo-final.png" title="OMDBLY logo" style={{height: inHeader ? '24px' : '90px'}} />
    </Link>
    <Link to="/">
      <LogoWrapper inHeader={inHeader}>
        <Logo small={inHeader}>OMDBLY</Logo>
      </LogoWrapper>
    </Link>
  </Container>
);

export default HomeLogo;
