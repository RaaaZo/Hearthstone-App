import React from 'react';
import { useSelector } from 'react-redux';
import CardsLogic from '../SetsOfCardsLogic/BasicCardsLogic';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const Cards = () => {
  const isLoading = useSelector((state) => state.fetchBasicSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Basic cards :</Header>
          <CardsLogic cardPlayerClass='Druid' />
          <CardsLogic cardPlayerClass='Hunter' />
          <CardsLogic cardPlayerClass='Mage' />
          <CardsLogic cardPlayerClass='Paladin' />
          <CardsLogic cardPlayerClass='Priest' />
          <CardsLogic cardPlayerClass='Rogue' />
          <CardsLogic cardPlayerClass='Shaman' />
          <CardsLogic cardPlayerClass='Warlock' />
          <CardsLogic cardPlayerClass='Warrior' />
          <CardsLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default Cards;
