import React, { useEffect, Fragment } from 'react';
import TypesOfCardsHeader from 'components/organisms/TypesOfCards/Header';
import Header from 'components/atoms/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';
import CardTemplate from 'templates/CardTemplate';
import StyledParagraphForTypesAndQuality from 'components/atoms/StyledParagraphForTypesAndQuality/StyledParagraphForTypesAndQuality';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';

const QualityOfCards = () => {
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
      <TypesOfCardsHeader qualityOfCards />
      <Header legendary>Legendarna</Header>
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
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header epic>Epicka</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter((item) => item.type === 'Minion' && item.rarity === 'Epic')
          .slice(1, 2)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header rare>Rzadka</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter((item) => item.type === 'Minion' && item.rarity === 'Rare')
          .slice(1, 2)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header common>Zwykła</Header>
      {isLoading ? (
        <img src={loadingIndicator} alt='loading...' />
      ) : (
        cards
          .filter((item) => item.type === 'Minion' && item.rarity === 'Common')
          .slice(1, 2)
          .map((item) => (
            <Fragment key={item.cardId}>
              <img src={item.img} alt='tutaj jestem' />
            </Fragment>
          ))
      )}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
    </CardTemplate>
  );
};

export default QualityOfCards;
