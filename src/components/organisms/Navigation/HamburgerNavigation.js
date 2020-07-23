import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  z-index: 9999;

  @media (min-width: 1240px) {
    display: flex;
  }
`;

const StyledNavLinks = styled(NavLink)`
  position: relative;
  color: ${({ theme }) => theme.darkModeTxt};
  padding: 25px;
  text-decoration: none;
  cursor: pointer;
  z-index: 9999;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.blue};
  }

  &.active {
    color: ${({ theme }) => theme.blue};
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLinks to='/home'>Home</StyledNavLinks>
      <StyledNavLinks modal to='/expansions'>
        Dodatki
      </StyledNavLinks>
      <StyledNavLinks activeClassName='active' to='/cardBacks'>
        Rewersy kart
      </StyledNavLinks>
      <StyledNavLinks activeClassName='active' to='/typesOfCards'>
        Typy kart
      </StyledNavLinks>
      <StyledNavLinks activeClassName='active' to='/qualityOfCards'>
        Jakość kart
      </StyledNavLinks>
    </Wrapper>
  );
};

export default Navigation;
