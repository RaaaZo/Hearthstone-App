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

const NaxxramasExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsSet('Naxxramas', 'naxxramas'));
  }, [dispatch]);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <BasicCards />
    </Wrapper>
  );
};

export default NaxxramasExpansion;
