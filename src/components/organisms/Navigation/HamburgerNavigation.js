import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 60%;

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
`;

const Navigation = () => {
  return (
    <Wrapper>
      <StyledNavLinks to='/classes'>Klasy kart</StyledNavLinks>
      <StyledNavLinks modal to='/expansions'>
        Ekspansje
      </StyledNavLinks>
      <StyledNavLinks to='/championSkins'>Skórki Bohaterów</StyledNavLinks>
      <StyledNavLinks to='/typesOfCards'>Typy kart</StyledNavLinks>
      <StyledNavLinks to='/races'>Rasy</StyledNavLinks>
      <StyledNavLinks to='/qualityOfCards'>Jakość kart</StyledNavLinks>
    </Wrapper>
  );
};

export default Navigation;
