import React from 'react';
import { useSelector } from 'react-redux';
import GadzetanLogic from '../SetsOfCardsLogic/GadzetanLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const GadzetanCards = () => {
  const isLoading = useSelector((state) => state.fetchGadzetanSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <GadzetanLogic cardPlayerClass='Druid' />
          <GadzetanLogic cardPlayerClass='Hunter' />
          <GadzetanLogic cardPlayerClass='Mage' />
          <GadzetanLogic cardPlayerClass='Paladin' />
          <GadzetanLogic cardPlayerClass='Priest' />
          <GadzetanLogic cardPlayerClass='Rogue' />
          <GadzetanLogic cardPlayerClass='Shaman' />
          <GadzetanLogic cardPlayerClass='Warlock' />
          <GadzetanLogic cardPlayerClass='Warrior' />
          <GadzetanLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default GadzetanCards;
