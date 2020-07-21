import React from "react";
import styled from "styled-components";
import { fetchCardBacks } from "ducks/actions/fetchCardBacks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import StyledParagraph from "components/atoms/ExpansionAtoms/StyledParagraph";
import TypesOfCardsHeader from "components/organisms/TypesOfCards/Header";

import loadingIndicator from "Assets/images/loadingIndicator.svg";
import CardTemplate from "templates/CardTemplate";

const InnerWrapper = styled.div`
  height: 700px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
  margin: 20px auto;
  padding: 12px 20px;
  cursor: pointer;

  @media (min-width: 750px) {
    max-width: 45%;
  }
  @media (min-width: 1040px) {
    max-width: 30%;
  }
`;

const OuterWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;

const CardBacks = () => {
  const dispatch = useDispatch();
  const cardBacks = useSelector(
    (state) => state.fetchCardBacksReducer.AllCardBacksData
  );
  const isLoading = useSelector((state) => state.fetchCardBacksReducer.loading);

  useEffect(() => {
    dispatch(fetchCardBacks());
  }, [dispatch]);

  return (
    <CardTemplate>
      <TypesOfCardsHeader ReversesOfCards />
      <OuterWrapper>
        {isLoading ? (
          <img src={loadingIndicator} alt='Loading' />
        ) : (
          cardBacks.slice(0, 50).map((item) => (
            <InnerWrapper key={item.cardBackId}>
              <StyledParagraph>{item.name}</StyledParagraph>
              <StyledParagraph>{item.description}</StyledParagraph>
              <img src={item.img} alt='Card Back' />
            </InnerWrapper>
          ))
        )}
      </OuterWrapper>
    </CardTemplate>
  );
};

export default CardBacks;
