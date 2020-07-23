import React from 'react';
import styled from 'styled-components';
import { fetchCardBacks } from 'ducks/actions/fetchCardBacks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import StyledParagraph from 'components/atoms/ExpansionAtoms/StyledParagraph';
import TypesOfCardsHeader from 'components/organisms/TypesOfCards/Header';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import CardTemplate from 'templates/CardTemplate';
import Header from 'components/atoms/Header/Header';
import {
  getBackCardData,
  toggleCardDetailsModal,
} from 'ducks/actions/cardDetailsActions';

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
  margin: 20px 0;
  padding: 12px 0;
  cursor: pointer;

  @media (min-width: 750px) {
    width: 45%;
    height: 700px;
  }
  @media (min-width: 1040px) {
    width: 30%;
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

const ModifiedStyledParagraph = styled(StyledParagraph)`
  padding: 0 40px;
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
    <CardTemplate cardBacks>
      <TypesOfCardsHeader ReversesOfCards />
      <Header>REWERSY KART :</Header>
      <OuterWrapper>
        {isLoading ? (
          <img src={loadingIndicator} alt='Loading' />
        ) : (
          cardBacks.slice(0, 50).map((item) => (
            <InnerWrapper
              onClick={() => {
                dispatch(toggleCardDetailsModal());
                dispatch(getBackCardData(item.cardBackId));
              }}
              key={item.cardBackId}
            >
              <ModifiedStyledParagraph>{item.name}</ModifiedStyledParagraph>
              <ModifiedStyledParagraph>
                {item.description}
              </ModifiedStyledParagraph>
              <img src={item.img} alt='Card Back' />
            </InnerWrapper>
          ))
        )}
      </OuterWrapper>
    </CardTemplate>
  );
};

export default CardBacks;
