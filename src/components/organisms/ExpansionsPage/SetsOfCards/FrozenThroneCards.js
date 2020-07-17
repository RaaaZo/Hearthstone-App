import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import FrozenThroneLogic from '../SetsOfCardsLogic/FrozenThroneLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const FrozenThroneCards = () => {
  const isLoading = useSelector((state) => state.fetchFrozenThroneSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <FrozenThroneLogic cardPlayerClass='Druid' />
          <FrozenThroneLogic cardPlayerClass='Hunter' />
          <FrozenThroneLogic cardPlayerClass='Mage' />
          <FrozenThroneLogic cardPlayerClass='Paladin' />
          <FrozenThroneLogic cardPlayerClass='Priest' />
          <FrozenThroneLogic cardPlayerClass='Rogue' />
          <FrozenThroneLogic cardPlayerClass='Shaman' />
          <FrozenThroneLogic cardPlayerClass='Warlock' />
          <FrozenThroneLogic cardPlayerClass='Warrior' />
          <FrozenThroneLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default FrozenThroneCards;
