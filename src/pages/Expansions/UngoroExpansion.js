import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BasicCards from 'components/organisms/ExpansionsPage/SetsOfCards/BasicCards';
import { useDispatch } from 'react-redux';
import { fetchExpansionsSet } from 'ducks/actions/fetchExpansionsSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import CardTemplate from 'templates/CardTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const UngoroExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsSet(`Journey to Un'Goro`, 'ungoro'));
  }, [dispatch]);

  return (
    <CardTemplate>
      <Wrapper>
        <HeroImg />
        <Filters />
        <BasicCards />
      </Wrapper>
    </CardTemplate>
  );
};

export default UngoroExpansion;
