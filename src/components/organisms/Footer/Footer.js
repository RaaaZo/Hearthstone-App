import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4%;
  background-color: ${({ theme }) => theme.darkModeBgc};
  z-index: 99999;
`;

const StyledLink = styled.a`
  font-size: 10px;
  margin-top: 5px;
  margin-right: 5px;
  color: ${({ theme }) => theme.darkModeTxt};

  @media (min-width: 500px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink
        href='https://blizzard.gamespress.com/pl/Hearthstone'
        target='_blank'
      >
        All Photos from
      </StyledLink>
      <StyledLink
        href='https://github.com/RaaaZo?tab=repositories'
        target='_blank'
      >
        Mateusz RaaZo
      </StyledLink>
      <StyledLink href='https://rapidapi.com/user/omgvamp' target='_blank'>
        Cards DataBase
      </StyledLink>
    </Wrapper>
  );
};

export default Footer;
