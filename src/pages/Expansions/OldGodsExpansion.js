import React, { useEffect } from 'react';
import HeroImg from 'components/organisms/ExpansionsPage/HeroImg';
import { useDispatch } from 'react-redux';
import { fetchOldGodsSet } from 'ducks/actions/fetchOldGodsSet';
import styled from 'styled-components';
import Filters from 'components/organisms/ExpansionsPage/Filters';
import OldGodsCards from 'components/organisms/ExpansionsPage/SetsOfCards/OldGodsCards';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const OldGodsExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOldGodsSet());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <Filters />
      <OldGodsCards />
    </Wrapper>
  );
};

export default OldGodsExpansion;
