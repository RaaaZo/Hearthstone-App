import React, { useEffect } from "react";
import HeroImg from "components/organisms/ExpansionsPage/HeroImg";
import { useDispatch } from "react-redux";
import { fetchExpansionsCards } from "ducks/actions/FetchExpansionsActions";
import Cards from "components/organisms/ExpansionsPage/Cards";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const Expansions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpansionsCards());
  }, []);

  return (
    <Wrapper>
      <HeroImg />
      <p>filtry dodatków po nazwie</p>
      <Cards />
      <p>Nazwa dodatku</p>
      <p>Karty z dodatku</p>
      <p>Kolejny dodatek</p>
      <p>Karty z dodatku</p>
    </Wrapper>
  );
};

export default Expansions;
