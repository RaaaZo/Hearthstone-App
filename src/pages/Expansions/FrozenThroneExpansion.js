import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BasicCards from 'components/organisms/ExpansionsPage/SetsOfCards/BasicCards';
import { useDispatch } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';

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
    dispatch(
      fetchExpansionsSet('Knights of the Frozen Throne', 'frozenThrone')
    );
  }, [dispatch]);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <BasicCards />
    </Wrapper>
  );
};

export default FrozenThroneExpansion;
