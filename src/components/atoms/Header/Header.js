import styled from 'styled-components';

const Header = styled.h3`
  width: 100%;
  max-width: 1280px;
  padding: 30px;
  margin: 30px;
  text-align: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.darkBrown};
`;

export default Header;
