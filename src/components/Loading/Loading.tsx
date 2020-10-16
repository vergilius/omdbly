import React from 'react';
import styled, {keyframes} from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px) scale(1.1);
  }
  to {
    transform: translateY(0);
  }
`;

const Loading = styled.div`
  top: 25%;
  margin-left: -calc(${({theme}) => `${theme.size.xxxlarge} / 2`});
  width: ${({theme}) => `${theme.size.xxxlarge}`};
  height: ${({theme}) => `${theme.size.xxxlarge}`};
  background-image: url('/img/loading.png');
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${loading} 2s ease-in-out infinite;
  will-change: transform;
`;

export default Loading;
