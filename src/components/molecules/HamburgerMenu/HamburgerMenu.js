import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "ducks/actions/ModalActions";

const Wrapper = styled.div`
  padding: 10px;
  display: inline-block;
  background: transparent;
  border: 0;
  margin: 0;
  position: fixed;
  bottom: 5%;
  right: 3%;
  border: 2px solid ${({ theme }) => theme.darkModeTxt};
  z-index: 9999;
  transition: border 0.3s 0.1s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      border: 2px solid ${({ theme }) => theme.darkModeTxt};
    `}

  @media (min-width: 1240px) {
    display: none;
  }
`;

const HamburgerBox = styled.button`
  width: 40px;
  height: 24px;
  padding: 15px;
  display: inline-block;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 9999;
`;

const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.darkModeTxt};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s 0.1s ease-in-out;
  overflow: visible;
  z-index: 9999;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    left: 0;
    background-color: ${({ theme }) => theme.darkModeTxt};
    position: absolute;
    transition: transform 0.3s 0.1s ease-in-out;
    z-index: 9999;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: transparent;

      &::before {
        transform: translateY(10px) rotate(-45deg);
      }

      &::after {
        transform: translateY(-10px) rotate(45deg);
      }
    `}
`;

const HamburgerMenu = () => {
  const isOpen = useSelector((state) => state.modalReducer.isOpen);
  const dispatch = useDispatch();

  const handleIsOpen = (e) => {
    e.stopPropagation();
    dispatch(toggleModal());
  };

  return (
    <Wrapper isOpen={isOpen} onClick={handleIsOpen}>
      <HamburgerBox>
        <HamburgerLine isOpen={isOpen} />
      </HamburgerBox>
    </Wrapper>
  );
};

export default HamburgerMenu;
