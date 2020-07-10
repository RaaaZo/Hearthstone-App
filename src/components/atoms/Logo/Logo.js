import styled from "styled-components";

const Logo = styled.h3`
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};

  @media (min-width: 425px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl};
  }
`;

export default Logo;
