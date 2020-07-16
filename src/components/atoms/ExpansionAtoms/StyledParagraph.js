import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const StyledParagraph = styled(Paragraph)`
  margin: 10px auto 0 auto;
  width: 100%;
  text-align: center;

  &:nth-child(odd) {
    color: ${({ theme }) => theme.yellow};
  }
  &:nth-child(even) {
    color: ${({ theme }) => theme.blue};
  }
`;

export default StyledParagraph;
