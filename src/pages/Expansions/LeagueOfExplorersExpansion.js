import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import { useDispatch } from 'react-redux';
import { fetchLeagueOfExplorersSet } from 'ducks/actions/fetchLeagueOfExplorersSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import ExplorersCards from 'components/organisms/ExpansionsPage/SetsOfCards/ExplorersCards';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const LeagueOfExplorersExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagueOfExplorersSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <ExplorersCards />
    </Wrapper>
  );
};

export default LeagueOfExplorersExpansion;
