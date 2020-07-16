import React, { useEffect } from 'react';
import PageDescription from 'components/organisms/LandingPage/PageDescription/PageDescription';
import CardImage from 'components/organisms/LandingPage/CardImage/CardImage';
import { useDispatch } from 'react-redux';
import { fetchOneCard } from 'ducks/actions/fetchOneCardDataActions';
import CardDesc from 'components/organisms/LandingPage/CardDesc/CardDesc';
import CardBtn from 'components/organisms/LandingPage/CardBtn/CardBtn';
import Wrapper from 'components/atoms/Wrapper/Wrapper';

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCard());
  }, []);

  return (
    <Wrapper>
      <PageDescription />
      <CardImage />
      <CardDesc />
      <CardBtn />
    </Wrapper>
  );
};

export default LandingPage;
