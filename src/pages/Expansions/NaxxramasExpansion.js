import React, { useEffect } from "react";
import HeroImg from "components/organisms/ExpansionsPage/HeroImg";
import BasicCards from "components/organisms/ExpansionsPage/SetsOfCards/BasicCards";
import { useDispatch } from "react-redux";
import { fetchExpansionsSet } from "ducks/actions/fetchExpansionsSet";
import Filters from "components/organisms/ExpansionsPage/Filters";
import CardTemplate from "templates/CardTemplate";

const NaxxramasExpansion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsSet("Naxxramas", "naxxramas"));
  }, [dispatch]);

  return (
    <CardTemplate>
      <HeroImg />
      <Filters />
      <BasicCards />
    </CardTemplate>
  );
};

export default NaxxramasExpansion;
