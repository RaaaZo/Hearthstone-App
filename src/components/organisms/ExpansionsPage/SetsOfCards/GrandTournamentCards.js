import React from 'react';
import { useSelector } from 'react-redux';
import GrandTournamentLogic from '../SetsOfCardsLogic/GrandTournamentLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const GrandTournamentCards = () => {
  const isLoading = useSelector((state) => state.fetchBlackrockSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <GrandTournamentLogic cardPlayerClass='Druid' />
          <GrandTournamentLogic cardPlayerClass='Hunter' />
          <GrandTournamentLogic cardPlayerClass='Mage' />
          <GrandTournamentLogic cardPlayerClass='Paladin' />
          <GrandTournamentLogic cardPlayerClass='Priest' />
          <GrandTournamentLogic cardPlayerClass='Rogue' />
          <GrandTournamentLogic cardPlayerClass='Shaman' />
          <GrandTournamentLogic cardPlayerClass='Warlock' />
          <GrandTournamentLogic cardPlayerClass='Warrior' />
          <GrandTournamentLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default GrandTournamentCards;
