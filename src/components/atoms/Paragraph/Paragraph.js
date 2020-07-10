import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};

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
