import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import UngoroCards from 'components/organisms/ExpansionsPage/SetsOfCards/UngoroCards';
import { useDispatch } from 'react-redux';
import { fetchUngoroSet } from 'ducks/actions/fetchUngoroSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

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
    dispatch(fetchUngoroSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <UngoroCards />
    </Wrapper>
  );
};

export default UngoroExpansion;
