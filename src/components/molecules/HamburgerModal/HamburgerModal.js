import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin-bottom: 50px;
  align-items: center;
  width: 250px;
  height: 100%;
  /* background-color: red; */
`;

const StyledNavLinks = styled(NavLink)`
  color: ${({ theme }) => theme.darkModeTxt};
  text-decoration: none;
`;

const HamburgerModal = () => {
  return (
    <Wrapper>
      <StyledNavLinks to='/classes'>Klasy kart</StyledNavLinks>
      <StyledNavLinks to='/expansions'>Ekspansje</StyledNavLinks>
      <StyledNavLinks to='/championSkins'>Skórki Bohaterów</StyledNavLinks>
      <StyledNavLinks to='/typesOfCards'>Typy kart</StyledNavLinks>
      <StyledNavLinks to='/races'>Rasy</StyledNavLinks>
      <StyledNavLinks to='/qualityOfCards'>Jakość kart</StyledNavLinks>
    </Wrapper>
  );
};

export default HamburgerModal;
