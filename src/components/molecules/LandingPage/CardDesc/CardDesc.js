import React, { Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import loadingIndicator from "Assets/images/loadingIndicator.svg";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 40px 0;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.darkBrown};
`;

const StyledHeader = styled.h3`
  margin: 10px 17%;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin: 10px 17%;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
`;

const CardDesc = () => {
  const cardData = useSelector(
    (state) => state.fetchOneCardReducer.OneCardData[1]
  );
  const isLoading = useSelector((state) => state.fetchOneCardReducer.loading);

  return (
    <Wrapper>
      <StyledHeader>Opis przykładowej karty :</StyledHeader>
      {isLoading ? (
        <img src={loadingIndicator} alt='' />
      ) : (
        [cardData].map((item) => {
          return (
            <Fragment key={item.cardId}>
              <StyledParagraph>
                Nazwa: <StyledSpan>{item.name}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Koszt many: <StyledSpan>{item.cost}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Atak: <StyledSpan>{item.attack}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Życie: <StyledSpan>{item.health}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Dodatek: <StyledSpan>{item.cardSet}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Moc specjalna: <StyledSpan>{item.text}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Rzadkość karty: <StyledSpan>{item.rarity}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Frakcja: <StyledSpan>{item.faction}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Rasa: <StyledSpan>{item.race}</StyledSpan>
              </StyledParagraph>
              <StyledParagraph>
                Opis: <StyledSpan>{item.flavor}</StyledSpan>
              </StyledParagraph>
            </Fragment>
          );
        })
      )}
    </Wrapper>
  );
};

export default CardDesc;
