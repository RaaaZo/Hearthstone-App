import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  ${({ normal }) =>
    normal &&
    css`
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
    `}
`;

export default Paragraph;
