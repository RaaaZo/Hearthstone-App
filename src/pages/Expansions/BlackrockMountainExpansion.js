import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import BlackrockCards from 'components/organisms/ExpansionsPage/SetsOfCards/BlackrockCards';
import { useDispatch } from 'react-redux';
import { fetchBlackrockSet } from 'ducks/actions/fetchBlackrockSet';

import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const BlackrockMountainExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlackrockSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <BlackrockCards />
    </Wrapper>
  );
};

export default BlackrockMountainExpansion;
