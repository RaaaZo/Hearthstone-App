import React from 'react';
import CardTemplate from 'templates/CardTemplate';
import TypesOfCardsHeader from 'components/organisms/TypesOfCards/Header';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';

const StyledParagraph = styled(Paragraph)`
  padding: 15px;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBrown};
  color: ${({ theme }) => theme.darkModeTxt};
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;
`;

const StyledHeader = styled(Header)`
  margin: 10px;
`;

const StyledButton = styled(Button)`
  margin: 15px;
  padding: 20px 50px;
  cursor: pointer;
`;

const HomePage = () => {
  return (
    <CardTemplate>
      <TypesOfCardsHeader home />
      <Header>O stronie</Header>
      <StyledParagraph>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </StyledParagraph>
      <TypesOfCardsHeader decks />
      <InnerWrapper as={Link} to='/expansions'>
        <StyledHeader>Wszystkie karty</StyledHeader>
        <StyledParagraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </StyledParagraph>
        <StyledButton>Zobacz</StyledButton>
      </InnerWrapper>
      <TypesOfCardsHeader backs />
      <InnerWrapper as={Link} to='/cardBacks'>
        <StyledHeader>Wszystkie rewersy kart</StyledHeader>
        <StyledParagraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </StyledParagraph>
        <StyledButton>Zobacz</StyledButton>
      </InnerWrapper>
    </CardTemplate>
  );
};

export default HomePage;
