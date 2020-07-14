import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
  margin: 20px;
  padding: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px auto;

  &:nth-child(odd) {
    color: ${({ theme }) => theme.yellow};
  }
  &:nth-child(even) {
    color: ${({ theme }) => theme.blue};
  }
`;

const Cards = () => {
  const data = useSelector(
    (state) => state.fetchExpansionsReducer.ExpansionsCardsData
  );

  return (
    <>
      <h3>Classic</h3>
      <h3>Priest</h3>
      <Wrapper>
        {data.map((item) => {
          if (item.playerClass === "Priest") {
            return (
              <InnerWrapper key={item.cardId}>
                <StyledParagraph>{item.name}</StyledParagraph>
                <StyledParagraph>{item.type}</StyledParagraph>
                <img
                  src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
                  alt='tutaj jestem'
                />
              </InnerWrapper>
            );
          }
        })}
      </Wrapper>
      <h3>Shaman</h3>
      <Wrapper>
        {data.map((item) => {
          if (item.playerClass === "Shaman") {
            return (
              <InnerWrapper key={item.cardId}>
                <StyledParagraph>{item.name}</StyledParagraph>
                <StyledParagraph>{item.type}</StyledParagraph>
                <img
                  src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
                  alt='tutaj jestem'
                />
              </InnerWrapper>
            );
          }
        })}
      </Wrapper>
    </>
  );
};

export default Cards;
