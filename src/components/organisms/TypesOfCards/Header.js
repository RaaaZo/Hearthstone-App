import React from 'react';
import styled, { css } from 'styled-components';
import heroImgQuality from 'Assets/images/QualityOfCardsHero.jpg';
import heroImgTypes from 'Assets/images/typesOfCardsHero.jpg';
import heroImgReverses from 'Assets/images/CardReversesHero.jpg';
import homeCards from 'Assets/images/HomeCards.jpg';
import homeBacks from 'Assets/images/HomeBacks.jpg';
import heroHome from 'Assets/images/HomeHero.jpg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 30px 20px;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  background-image: url(${heroImgTypes});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 1px solid ${({ theme }) => theme.darkBrown};
  border-radius: 15px;

  ${({ qualityOfCards }) =>
    qualityOfCards &&
    css`
      background-image: url(${heroImgQuality});
    `}

  ${({ ReversesOfCards }) =>
    ReversesOfCards &&
    css`
      background-image: url(${heroImgReverses});
    `}

  ${({ decks }) =>
    decks &&
    css`
      background-image: url(${homeCards});
    `}

  ${({ backs }) =>
    backs &&
    css`
      background-image: url(${homeBacks});
    `}

  ${({ home }) =>
    home &&
    css`
      background-image: url(${heroHome});
    `}

  @media (min-width: 632px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
  @media (min-width: 1360px) {
    height: 700px;
  }
  @media (min-width: 1600px) {
    height: 830px;
  }
`;

const TypesOfCardsHeader = ({
  qualityOfCards,
  ReversesOfCards,
  decks,
  backs,
  home,
}) => {
  return (
    <Wrapper>
      <HeroWrapper
        qualityOfCards={qualityOfCards}
        ReversesOfCards={ReversesOfCards}
        decks={decks}
        backs={backs}
        home={home}
      />
    </Wrapper>
  );
};

export default TypesOfCardsHeader;
