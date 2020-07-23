import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BasicCards from 'components/organisms/ExpansionsPage/SetsOfCards/BasicCards';
import { useDispatch } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import CardTemplate from 'templates/CardTemplate';
import Header from 'components/atoms/Header/Header';

const NaxxramasExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsSet('Naxxramas', 'naxxramas'));
  }, [dispatch]);

  return (
    <CardTemplate>
      <HeroImg />
      <Filters />
      <Header>KLĄTWA NAXXRAMAS KARTY :</Header>
      <BasicCards />
    </CardTemplate>
  );
};

export default NaxxramasExpansion;
