import React, { useEffect, Fragment } from "react";
import Wrapper from "components/atoms/Wrapper/Wrapper";
import TypesOfCardsHeader from "components/organisms/TypesOfCards/Header";
import Header from "components/atoms/Header/Header";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpansionsSet } from "ducks/actions/fetchExpansionsSet";

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  max-width: 1280px;
  margin: 30px auto;

  @media (min-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
  @media (min-width: 900px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`;

const QualityOfCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state) => state.fetchExpansionsSet.classicCardsData
  );

  useEffect(() => {
    dispatch(fetchExpansionsSet("Classic", "classic"));
  }, [dispatch]);

  return (
    <Wrapper>
      <TypesOfCardsHeader qualityOfCards />
      <Header>Legendarna</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Legendary")
        .slice(4, 5)
        .map((item) => (
          <Fragment key={item.id}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
      <Header>Epicka</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Epic")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.id}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
      <Header>Rzadka</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Rare")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.id}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
      <Header>Zwykła</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Common")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.id}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraph>
    </Wrapper>
  );
};

export default QualityOfCards;
