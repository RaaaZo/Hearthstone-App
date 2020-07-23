import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BasicCards from 'components/organisms/ExpansionsPage/SetsOfCards/BasicCards';
import { useDispatch } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import CardTemplate from 'templates/CardTemplate';
import Header from 'components/atoms/Header/Header';

const FrozenThroneExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchExpansionsSet('Knights of the Frozen Throne', 'frozenThrone')
    );
  }, [dispatch]);

  return (
    <CardTemplate>
      <HeroImg />
      <Filters />
      <Header>RYCERZE MROŹNEGO TRONU KARTY :</Header>
      <BasicCards />
    </CardTemplate>
  );
};

export default FrozenThroneExpansion;
