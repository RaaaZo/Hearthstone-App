import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import StyledHeader from 'components/atoms/ExpansionAtoms/StyledHeader';
import StyledParagraph from 'components/atoms/ExpansionAtoms/StyledParagraph';
import InnerWrapper from 'components/atoms/ExpansionAtoms/InnerWrapper';
import Wrapper from 'components/atoms/ExpansionAtoms/Wrapper';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import { useHistory } from 'react-router-dom';
import {
  getCardData,
  toggleCardDetailsModal,
} from 'ducks/actions/cardDetailsActions';
import CardTemplate from 'templates/CardTemplate';

const StyledGoBack = styled.h3`
  padding: 10px 25px;
  margin: 20px;
  border-radius: 25px;
  background-color: grey;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 15px 30px;
  }
`;

const StyledWrapper = styled(Wrapper)`
  margin: 0 auto;
`;

const FilteredExpansionByClassPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchExpansionsSet.oneClassCards);
  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <CardTemplate>
      <StyledWrapper>
        <HeroImg />
        <StyledGoBack onClick={goBack}>Zobacz wszystkie karty</StyledGoBack>
        <StyledHeader>Hunter</StyledHeader>
        {isLoading ? (
          <img src={loadingIndicator} alt='ładowanie' />
        ) : (
          data.map((item) => (
            <InnerWrapper
              key={item.cardId}
              onClick={() => {
                dispatch(getCardData(item.cardId));
                dispatch(toggleCardDetailsModal());
              }}
            >
              <StyledParagraph>{item.name}</StyledParagraph>
              <StyledParagraph>{item.type}</StyledParagraph>
              <img
                src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
                alt='tutaj jestem'
              />
            </InnerWrapper>
          ))
        )}
      </StyledWrapper>
    </CardTemplate>
  );
};

export default FilteredExpansionByClassPage;
