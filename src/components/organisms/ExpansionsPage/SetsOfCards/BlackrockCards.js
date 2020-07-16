import React from 'react';
import { useSelector } from 'react-redux';
import BlackrockCardsLogic from '../SetsOfCardsLogic/BlackrockLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const Blackrock = () => {
  const isLoading = useSelector((state) => state.fetchBlackrockSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <BlackrockCardsLogic cardPlayerClass='Druid' />
          <BlackrockCardsLogic cardPlayerClass='Hunter' />
          <BlackrockCardsLogic cardPlayerClass='Mage' />
          <BlackrockCardsLogic cardPlayerClass='Paladin' />
          <BlackrockCardsLogic cardPlayerClass='Priest' />
          <BlackrockCardsLogic cardPlayerClass='Rogue' />
          <BlackrockCardsLogic cardPlayerClass='Shaman' />
          <BlackrockCardsLogic cardPlayerClass='Warlock' />
          <BlackrockCardsLogic cardPlayerClass='Warrior' />
          <BlackrockCardsLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default Blackrock;
