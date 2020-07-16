import styled from 'styled-components';
import Header from '../Header/Header';

const StyledHeader = styled(Header)`
  background-color: ${({ theme: { classColors }, cardPlayerClass }) =>
    classColors[cardPlayerClass]};
`;

export default StyledHeader;
