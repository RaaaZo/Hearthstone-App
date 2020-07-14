import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import loadingIndicator from "Assets/images/loadingIndicator.svg";

const ImgWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 40px 0;
  margin: 30px 20px 0 20px;
  background-color: ${({ theme }) => theme.darkBrown};
  border-radius: 15px;
`;

const StyledHeader = styled.h3`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const CardImage = () => {
  const cardData = useSelector(
    (state) => state.fetchOneCardReducer.OneCardData
  );
  const isLoading = useSelector((state) => state.fetchOneCardReducer.loading);

  return (
    <ImgWrapper>
      {isLoading ? (
        <img src={loadingIndicator} alt='' />
      ) : (
        <>
          <StyledHeader>{cardData[1].name}</StyledHeader>
          <img
            src={cardData[1].imgGold}
            alt='CARD IMG TURN OFF ADDBLOCK TO SEE'
          />
        </>
      )}
    </ImgWrapper>
  );
};

export default CardImage;
