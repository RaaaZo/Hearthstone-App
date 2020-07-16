import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import NaxxramasCards from 'components/organisms/ExpansionsPage/SetsOfCards/GoblinsCards';
import { useDispatch } from 'react-redux';
import { fetchNaxxramasSet } from 'ducks/actions/fetchGoblinsVsGnomesSet';
import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const Expansions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNaxxramasSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <NaxxramasCards />
    </Wrapper>
  );
};

export default Expansions;
