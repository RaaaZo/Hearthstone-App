import React from 'react';
import { useSelector } from 'react-redux';
import KharazanLogic from '../SetsOfCardsLogic/KharazanLogic';
import loadingIndicator from 'Assets/images/loadingIndicator.svg';
import Header from 'components/atoms/Header/Header';

const KharazanCards = () => {
  const isLoading = useSelector((state) => state.fetchKharazanSet.loading);

  return (
    <>
      {isLoading ? (
        <img src={loadingIndicator} alt='spinner' />
      ) : (
        <>
          <Header>Goblins vs Gnomes cards :</Header>
          <KharazanLogic cardPlayerClass='Druid' />
          <KharazanLogic cardPlayerClass='Hunter' />
          <KharazanLogic cardPlayerClass='Mage' />
          <KharazanLogic cardPlayerClass='Paladin' />
          <KharazanLogic cardPlayerClass='Priest' />
          <KharazanLogic cardPlayerClass='Rogue' />
          <KharazanLogic cardPlayerClass='Shaman' />
          <KharazanLogic cardPlayerClass='Warlock' />
          <KharazanLogic cardPlayerClass='Warrior' />
          <KharazanLogic cardPlayerClass='Neutral' />
        </>
      )}
    </>
  );
};

export default KharazanCards;
