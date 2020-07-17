import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import FrozenThroneCards from 'components/organisms/ExpansionsPage/SetsOfCards/FrozenThroneCards';
import { useDispatch } from 'react-redux';
import { fetchFrozenThrone } from 'ducks/actions/fetchFrozenThroneSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const FrozenThroneExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFrozenThrone());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <FrozenThroneCards />
    </Wrapper>
  );
};

export default FrozenThroneExpansion;
