import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.darkBrown};
  box-shadow: 0px 5px 30px 0px black;
  transform: translateX(500px);
  transition: transform 0.3s 0.1s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}

  @media(min-width: 950px) {
    width: 350px;
  }

  @media (min-width: 1240px) {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 90%;
  padding: 40px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  @media (min-height: 1024px) {
    padding: 120px 0;
  }
`;

const StyledNavLinks = styled(NavLink)`
  color: ${({ theme }) => theme.darkModeTxt};
  text-decoration: none;

  @media (min-width: 950px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const HamburgerModal = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <InnerWrapper>
        <StyledNavLinks to='/classes'>Klasy kart</StyledNavLinks>
        <StyledNavLinks to='/expansions'>Ekspansje</StyledNavLinks>
        <StyledNavLinks to='/championSkins'>Skórki Bohaterów</StyledNavLinks>
        <StyledNavLinks to='/typesOfCards'>Typy kart</StyledNavLinks>
        <StyledNavLinks to='/races'>Rasy</StyledNavLinks>
        <StyledNavLinks to='/qualityOfCards'>Jakość kart</StyledNavLinks>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HamburgerModal;