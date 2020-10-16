import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';

const fadeInTime = '1s';
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const handleBackground = (redSlice, blueSlice) => ({isHomeLayout, theme}) => {
  if (!isHomeLayout) {
    return `${theme.colors.light}`;
  }
  
  return `linear-gradient(0, ${theme.colors.red} ${redSlice}, ${theme.colors.blue} ${blueSlice})`;
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${handleBackground('25%', '75%')};
  overflow: hidden;
`;
const Background = styled(Wrapper)`
  background: ${handleBackground('50%', '50%')};
  opacity: 0;
  animation: ${fadeInTime} ${fadeIn} ease-out forwards;
  padding: ${({theme}) => `${theme.size.none} ${theme.size.xsmall}`};
`;
const Container = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeInTime} ${fadeIn} ease-out forwards;
`;

type LayoutPropsType = {
  isHomeLayout: boolean,
  children: React.ReactNode
};

const Layout = ({isHomeLayout, children}: LayoutPropsType) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleAnimationEnd = () => setShowChildren(true);

  return (
    <Wrapper onAnimationEnd={handleAnimationEnd} isHomeLayout={isHomeLayout}>
      <Background isHomeLayout={isHomeLayout}>
        {showChildren ? (
          <Container>
            {children}
          </Container>
        ) : null}
      </Background>
    </Wrapper>
  );
};

export default Layout;
