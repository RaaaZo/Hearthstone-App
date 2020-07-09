import styled from "styled-components";

const Logo = styled.h3`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export default Logo;
