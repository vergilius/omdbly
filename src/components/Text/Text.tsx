import styled from 'styled-components';

const Text = styled.p`
  color: ${({color = 'dark', theme}) => theme.colors[color]};
  font-family: ${({theme}) => theme.fontFamily.body};
  font-size: ${({size = 'body', theme}) => theme.fontSizes[size]};
  font-weight: ${({weight = 'normal'}) => `${weight}`};
`;

export default Text;
