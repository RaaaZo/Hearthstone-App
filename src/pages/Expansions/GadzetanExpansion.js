import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BasicCards from 'components/organisms/ExpansionsPage/SetsOfCards/BasicCards';
import { useDispatch } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import CardTemplate from 'templates/CardTemplate';
import Header from 'components/atoms/Header/Header';

const GadzetanExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsSet('Mean Streets of Gadgetzan', 'gadzetan'));
  }, [dispatch]);

  return (
    <CardTemplate>
      <HeroImg />
      <Filters />
      <Header>CIEMNE ZAUŁKI GADŻETONU KARTY :</Header>
      <BasicCards />
    </CardTemplate>
  );
};

export default GadzetanExpansion;
