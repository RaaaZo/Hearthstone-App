import React from 'react';
import { useSelector } from 'react-redux';
import OldGodsLogic from '../SetsOfCardsLogic/OldGodsLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const OldGodsCards = () => {
  const isLoading = useSelector((state) => state.fetchOldGodsSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <OldGodsLogic cardPlayerClass='Druid' />
          <OldGodsLogic cardPlayerClass='Hunter' />
          <OldGodsLogic cardPlayerClass='Mage' />
          <OldGodsLogic cardPlayerClass='Paladin' />
          <OldGodsLogic cardPlayerClass='Priest' />
          <OldGodsLogic cardPlayerClass='Rogue' />
          <OldGodsLogic cardPlayerClass='Shaman' />
          <OldGodsLogic cardPlayerClass='Warlock' />
          <OldGodsLogic cardPlayerClass='Warrior' />
          <OldGodsLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default OldGodsCards;
