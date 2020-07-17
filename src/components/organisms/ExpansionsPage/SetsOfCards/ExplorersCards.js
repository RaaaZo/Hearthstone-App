import React from 'react';
import { useSelector } from 'react-redux';
import LeagueOfExplorersLogic from '../SetsOfCardsLogic/LeagueOfExplorersLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const ExplorersCards = () => {
  const isLoading = useSelector((state) => state.fetchExplorersSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <LeagueOfExplorersLogic cardPlayerClass='Druid' />
          <LeagueOfExplorersLogic cardPlayerClass='Hunter' />
          <LeagueOfExplorersLogic cardPlayerClass='Mage' />
          <LeagueOfExplorersLogic cardPlayerClass='Paladin' />
          <LeagueOfExplorersLogic cardPlayerClass='Priest' />
          <LeagueOfExplorersLogic cardPlayerClass='Rogue' />
          <LeagueOfExplorersLogic cardPlayerClass='Shaman' />
          <LeagueOfExplorersLogic cardPlayerClass='Warlock' />
          <LeagueOfExplorersLogic cardPlayerClass='Warrior' />
          <LeagueOfExplorersLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default ExplorersCards;
