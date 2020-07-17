import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from 'components/atoms/ExpansionAtoms/Wrapper';
import InnerWrapper from 'components/atoms/ExpansionAtoms/InnerWrapper';
import StyledParagraph from 'components/atoms/ExpansionAtoms/StyledParagraph';
import StyledHeader from 'components/atoms/ExpansionAtoms/StyledHeader';

const CardsLogic = ({ cardPlayerClass }) => {
  const dataLogic = useSelector((state) => state.fetchExpansionsSet.cardsLogic);
  const data = useSelector(
    (state) => state.fetchExpansionsSet[`${dataLogic}CardsData`]
  );

  return (
    <>
      <StyledHeader cardPlayerClass={cardPlayerClass}>
        {cardPlayerClass}
      </StyledHeader>

      {dataLogic === 'basic' ? (
        <Wrapper>
          {data
            .filter((card) => card.playerClass === cardPlayerClass)
            .slice(1)
            .map((item) => (
              <InnerWrapper key={item.cardId}>
                <StyledParagraph>{item.name}</StyledParagraph>
                <StyledParagraph>{item.type}</StyledParagraph>
                <img
                  src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
                  alt='tutaj jestem'
                />
              </InnerWrapper>
            ))}
        </Wrapper>
      ) : (
        <Wrapper>
          {data
            .filter((card) => card.playerClass === cardPlayerClass)
            .map((item) => (
              <InnerWrapper key={item.cardId}>
                <StyledParagraph>{item.name}</StyledParagraph>
                <StyledParagraph>{item.type}</StyledParagraph>
                <img
                  src={`https://art.hearthstonejson.com/v1/render/latest/plPL/256x/${item.cardId}.png`}
                  alt='tutaj jestem'
                />
              </InnerWrapper>
            ))}
        </Wrapper>
      )}
    </>
  );
};

export default CardsLogic;
