import React from "react";
import styled, { css } from "styled-components";
import heroImgQuality from "Assets/images/QualityOfCardsHero.jpg";
import heroImgTypes from "Assets/images/typesOfCardsHero.jpg";

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
      background-position: ;
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

const TypesOfCardsHeader = ({ qualityOfCards }) => {
  return (
    <Wrapper>
      <HeroWrapper qualityOfCards={qualityOfCards} />
    </Wrapper>
  );
};

export default TypesOfCardsHeader;
