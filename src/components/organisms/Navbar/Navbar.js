import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import styled, { css } from 'styled-components';
import HamburgerMenu from 'components/molecules/HamburgerMenu/HamburgerMenu';
import Navigation from 'components/organisms/Navigation/HamburgerNavigation';
import { NavLink } from 'react-router-dom';
import HamburgerModal from 'components/molecules/HamburgerModal/HamburgerModal';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.darkBrown};
  box-shadow: 0px 3px 20px 0px ${({ theme }) => theme.darkBrown};
  overflow: hidden;
  z-index: 99999999999;

  @media (min-width: 1240px) {
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
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
  const isOpen = useSelector((state) => state.modalReducer.isOpen);

  return (
    <>
      <Wrapper>
        <StyledLogo isOpen={isOpen} as={NavLink} to='/home'>
          HearthStoneDB
        </StyledLogo>
        <HamburgerMenu />
        <Navigation />
        <HamburgerModal />
      </Wrapper>
    </>
  );
};

export default Navbar;
