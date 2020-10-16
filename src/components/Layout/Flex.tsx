import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
  flex-direction: ${({column}) => column ? 'column' : 'row'};
  justify-content: ${({justifyContent = 'normal'}) => justifyContent};
  align-items: ${({alignItems = 'normal'}) => alignItems};
  flex-wrap: ${({wrap = 'nowrap'}) => wrap};
  margin-top: ${({marginTop = 'none', theme}) => theme.size[marginTop]};
  margin-bottom: ${({marginBottom = 'none', theme}) => theme.size[marginBottom]};
  margin-left: ${({marginLeft = 'none', theme}) => theme.size[marginLeft]};
  margin-right: ${({marginRight = 'none', theme}) => theme.size[marginRight]};
`;

export default Flex;
