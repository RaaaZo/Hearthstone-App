import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import StyledHeader from 'components/atoms/ExpansionAtoms/StyledHeader';
import StyledParagraph from 'components/atoms/ExpansionAtoms/StyledParagraph';
import InnerWrapper from 'components/atoms/ExpansionAtoms/InnerWrapper';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import { useHistory } from 'react-router-dom';
import {
  getCardData,
  toggleCardDetailsModal,
} from 'ducks/actions/cardDetailsActions';
import CardTemplate from 'templates/CardTemplate';
import Wrapper from 'components/atoms/ExpansionAtoms/Wrapper';

const StyledGoBack = styled.h3`
  padding: 10px 25px;
  margin: 20px;
  border-radius: 25px;
  color: #6c757d;
  background-color: #ced4da;
  text-align: center;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 15px 30px;
  }
`;

const StyledInnerWrapper = styled(InnerWrapper)`
  margin: 20px 0;
`;

const StyledHeaderByClass = styled(StyledHeader)`
  background-color: ${({ theme, cardClass }) => theme.classColors[cardClass]};
`;

const FilteredExpansionByClassPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state) => state.fetchExpansionsSet.oneClassCards);
  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);
  const cardsClass = useSelector((state) => state.fetchExpansionsSet.class);

  const goBack = () => history.goBack();

  return (
    <CardTemplate>
      <Wrapper>
        <HeroImg />
        <StyledGoBack onClick={goBack}>Zobacz wszystkie karty</StyledGoBack>
        <StyledHeaderByClass cardClass={cardsClass}>
          {cardsClass}
        </StyledHeaderByClass>
        {isLoading ? (
          <img src={loadingIndicator} alt='ładowanie' />
        ) : (
          data.map((item) => (
            <StyledInnerWrapper
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
                alt='cardImage'
              />
            </StyledInnerWrapper>
          ))
        )}
      </Wrapper>
    </CardTemplate>
  );
};

export default FilteredExpansionByClassPage;
