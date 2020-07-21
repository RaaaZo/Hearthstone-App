import React, { useEffect, Fragment } from "react";
import TypesOfCardsHeader from "components/organisms/TypesOfCards/Header";
import Header from "components/atoms/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpansionsSet } from "ducks/actions/fetchExpansionsSet";
import CardTemplate from "templates/CardTemplate";
import StyledParagraphForTypesAndQuality from "components/atoms/StyledParagraphForTypesAndQuality/StyledParagraphForTypesAndQuality";

const QualityOfCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state) => state.fetchExpansionsSet.classicCardsData
  );

  useEffect(() => {
    dispatch(fetchExpansionsSet("Classic", "classic"));
  }, [dispatch]);

  return (
    <CardTemplate>
      <TypesOfCardsHeader qualityOfCards />
      <Header>Legendarna</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Legendary")
        .slice(4, 5)
        .map((item) => (
          <Fragment key={item.cardId}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header>Epicka</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Epic")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.cardId}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header>Rzadka</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Rare")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.cardId}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
      <Header>Zwykła</Header>
      {cards
        .filter((item) => item.type === "Minion" && item.rarity === "Common")
        .slice(1, 2)
        .map((item) => (
          <Fragment key={item.cardId}>
            <img src={item.img} alt='tutaj jestem' />
          </Fragment>
        ))}
      <StyledParagraphForTypesAndQuality>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dicta
        architecto pariatur nihil maiores sint a soluta iure iusto illum
        expedita eveniet qui dolores sunt exercitationem. Animi quisquam vitae
        sit!
      </StyledParagraphForTypesAndQuality>
    </CardTemplate>
  );
};

export default QualityOfCards;
