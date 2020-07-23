import React from 'react';
import { useSelector } from 'react-redux';
import CardsLogic from '../SetsOfCardsLogic/BasicCardsLogic';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';

const Cards = () => {
  const isLoading = useSelector((state) => state.fetchExpansionsSet.loading);

  const classes = [
    'Druid',
    'Hunter',
    'Mage',
    'Paladin',
    'Priest',
    'Rogue',
    'Shaman',
    'Warlock',
    'Warrior',
    'Neutral',
  ];

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <CardsLogic
            cardPlayerClass={
              classes[Math.floor(Math.random() * classes.length)]
            }
          />
        </>
      )}
    </>
  );
};

export default Cards;
