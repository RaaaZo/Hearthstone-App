import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import GrandTournamentCards from 'components/organisms/ExpansionsPage/SetsOfCards/GrandTournamentCards';
import { useDispatch } from 'react-redux';
import { fetchGrandTournamentSet } from 'ducks/actions/fetchGrandTournamentSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const GrandTournamentExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGrandTournamentSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <GrandTournamentCards />
    </Wrapper>
  );
};

export default GrandTournamentExpansion;
