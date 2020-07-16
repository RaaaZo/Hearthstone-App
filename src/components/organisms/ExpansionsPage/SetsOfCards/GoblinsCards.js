import React from 'react';
import { useSelector } from 'react-redux';
import NaxxramasCardsLogic from '../SetsOfCardsLogic/GoblinsCardsLogic';

import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const Naxxramas = () => {
  const isLoading = useSelector(
    (state) => state.fetchGoblinsVsGnomesSet.loading
  );

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <NaxxramasCardsLogic cardPlayerClass='Druid' />
          <NaxxramasCardsLogic cardPlayerClass='Hunter' />
          <NaxxramasCardsLogic cardPlayerClass='Mage' />
          <NaxxramasCardsLogic cardPlayerClass='Paladin' />
          <NaxxramasCardsLogic cardPlayerClass='Priest' />
          <NaxxramasCardsLogic cardPlayerClass='Rogue' />
          <NaxxramasCardsLogic cardPlayerClass='Shaman' />
          <NaxxramasCardsLogic cardPlayerClass='Warlock' />
          <NaxxramasCardsLogic cardPlayerClass='Warrior' />
          <NaxxramasCardsLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default Naxxramas;
