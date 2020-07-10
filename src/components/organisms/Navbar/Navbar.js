import React, { useState } from "react";
import Logo from "components/atoms/Logo/Logo";
import styled, { css } from "styled-components";
import HamburgerMenu from "components/molecules/HamburgerMenu/HamburgerMenu";
import Navigation from "components/molecules/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import HamburgerModal from "components/molecules/HamburgerModal/HamburgerModal";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.darkBrown};
  box-shadow: 0px 3px 20px 0px ${({ theme }) => theme.darkBrown};

  @media (min-width: 1240px) {
    justify-content: space-between;
    padding: 0 30px;
  }
`;

const StyledLogo = styled(Logo)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s 0.1s ease-in-out;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      @media (min-width: 700px) {
        transform: translateX(-20%);
      }
    `}
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <StyledLogo isOpen={isOpen} as={NavLink} to='/home'>
          HearthStoneDB
        </StyledLogo>
        <HamburgerMenu handleSetIsOpen={handleSetIsOpen} isOpen={isOpen} />
        <Navigation />
      </Wrapper>
      <HamburgerModal isOpen={isOpen} />
    </>
  );
};

export default Navbar;
