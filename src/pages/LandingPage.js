import React, { useEffect } from "react";
import PageDescription from "components/molecules/LandingPage/PageDescription/PageDescription";
import CardImage from "components/molecules/LandingPage/CardImage/CardImage";
import { useDispatch } from "react-redux";
import { fetchOneCard } from "ducks/actions/fetchOneCardDataActions";
import CardDesc from "components/molecules/LandingPage/CardDesc/CardDesc";
import CardBtn from "components/molecules/LandingPage/CardBtn/CardBtn";
import Wrapper from "components/molecules/LandingPage/Wrapper/Wrapper";

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
