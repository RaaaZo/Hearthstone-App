import styled, { css } from 'styled-components';

const Header = styled.h3`
  width: 100%;
  max-width: 1280px;
  padding: 30px;
  margin: 30px;
  background-color: ${({ theme }) => theme.darkBrown};
  text-align: center;
  border-radius: 15px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  ${({ legendary }) =>
    legendary &&
    css`
      background-color: #fca311;
    `}
  ${({ epic }) =>
    epic &&
    css`
      background-color: #7b2cbf;
    `}
  ${({ rare }) =>
    rare &&
    css`
      background-color: #5390d9;
    `}
  ${({ common }) =>
    common &&
    css`
      background-color: #ced4da;
    `}
`;

export default Header;
