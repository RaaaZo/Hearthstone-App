import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLinks modal to='/expansions'>
        Dodatki
      </StyledNavLinks>
      <StyledNavLinks to='/cardBacks'>Rewersy kart</StyledNavLinks>
      <StyledNavLinks to='/typesOfCards'>Typy kart</StyledNavLinks>
      <StyledNavLinks to='/qualityOfCards'>Jakość kart</StyledNavLinks>
    </Wrapper>
  );
};

export default Navigation;
