import React from 'react';
import { useSelector } from 'react-redux';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import StyledHeader from 'components/atoms/ExpansionAtoms/StyledHeader';
import StyledParagraph from 'components/atoms/ExpansionAtoms/StyledParagraph';
import InnerWrapper from 'components/atoms/ExpansionAtoms/InnerWrapper';
import Wrapper from 'components/atoms/ExpansionAtoms/Wrapper';

import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';

const FilteredExpansionByClassPage = () => {
  const data = useSelector((state) => state.fetchExpansionsSet.oneClassCards);
  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);

  return (
    <Wrapper>
      <HeroImg />
      <StyledHeader>Hunter</StyledHeader>
      {isLoading ? (
        <img src={loadingIndicator} alt='ładowanie' />
      ) : (
        data.map((item) => (
          <InnerWrapper key={item.cardId}>
            <StyledParagraph>{item.name}</StyledParagraph>
            <StyledParagraph>{item.type}</StyledParagraph>
            <img
              src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
              alt='tutaj jestem'
            />
          </InnerWrapper>
        ))
      )}
    </Wrapper>
  );
};

export default FilteredExpansionByClassPage;
