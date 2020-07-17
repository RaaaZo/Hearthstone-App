import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import GadzetanCards from 'components/organisms/ExpansionsPage/SetsOfCards/GadzetanCards';
import { useDispatch } from 'react-redux';
import { fetchGadzetanSet } from 'ducks/actions/fetchGadzetanSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const GadzetanExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGadzetanSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <GadzetanCards />
    </Wrapper>
  );
};

export default GadzetanExpansion;
