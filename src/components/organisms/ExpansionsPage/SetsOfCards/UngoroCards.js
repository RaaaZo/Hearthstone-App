import React from 'react';
import { useSelector } from 'react-redux';
import UngoroLogic from '../SetsOfCardsLogic/UngoroLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const UngoroCards = () => {
  const isLoading = useSelector((state) => state.fetchUngoroSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <UngoroLogic cardPlayerClass='Druid' />
          <UngoroLogic cardPlayerClass='Hunter' />
          <UngoroLogic cardPlayerClass='Mage' />
          <UngoroLogic cardPlayerClass='Paladin' />
          <UngoroLogic cardPlayerClass='Priest' />
          <UngoroLogic cardPlayerClass='Rogue' />
          <UngoroLogic cardPlayerClass='Shaman' />
          <UngoroLogic cardPlayerClass='Warlock' />
          <UngoroLogic cardPlayerClass='Warrior' />
          <UngoroLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default UngoroCards;
