import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import KharazanCards from 'components/organisms/ExpansionsPage/SetsOfCards/KharazanCards';
import { useDispatch } from 'react-redux';
import { fetchKharazanSet } from 'ducks/actions/fetchKharazanSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const KharazanExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKharazanSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <KharazanCards />
    </Wrapper>
  );
};

export default KharazanExpansion;
