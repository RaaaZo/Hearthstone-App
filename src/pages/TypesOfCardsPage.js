import React, { useEffect, Fragment } from 'react';
import TypesOfCardsHeader from 'components/organisms/TypesOfCards/Header';
import Header from 'components/atoms/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';
import CardTemplate from 'templates/CardTemplate';
import StyledParagraph from 'components/atoms/StyledParagraphForTypesAndQuality/StyledParagraphForTypesAndQuality';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';

const TypesOfCardsPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state) => state.fetchExpansionsSet.classicCardsData
  );

  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);

  useEffect(() => {
    dispatch(fetchExpansionsSet('Classic', 'classic'));
  }, [dispatch]);

  return (
    <CardTemplate>
      <TypesOfCardsHeader />
      <Header>Stronnik</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter(
            (item) => item.type === 'Minion' && item.rarity === 'Legendary'
          )
          .slice(4, 5)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
      <Header>Czar</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter((item) => item.type === 'Spell' && item.rarity === 'Epic')
          .slice(1, 2)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
      <Header>Broń</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter((item) => item.type === 'Weapon' && item.rarity === 'Epic')
          .slice(1, 2)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
    </CardTemplate>
  );
};

export default TypesOfCardsPage;
