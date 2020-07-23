import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDetailsModal } from 'ducks/actions/cardDetailsActions';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  z-index: 99999999999;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const StyledImage = styled.img`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.darkBrown};
  text-align: center;
  border-radius: 15px;
`;

const Header = styled.h3`
  margin: 20px;
  color: ${({ theme }) => theme.yellow};
`;

const Paragraph = styled.p`
  margin: 10px;
  color: ${({ theme }) => theme.blue};
`;

const StyledBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 10px;
  color: ${({ theme }) => theme.darkModeTxt};
  background-color: ${({ theme }) => theme.darkModeBgc};
  border-radius: 50%;
  border: none;
  text-align: center;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 12px 16px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 16px 20px;
  }
`;

const CardDetails = ({ cardBacks }) => {
  const dispatch = useDispatch();

  const detailsData = useSelector(
    (state) => state.fetchExpansionsSet.cardDetails
  );

  const cardBacksDetails = useSelector(
    (state) => state.fetchCardBacksReducer.backDetails
  );

  return (
    <Modal onClick={() => dispatch(closeCardDetailsModal())}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <StyledBtn onClick={() => dispatch(closeCardDetailsModal())}>
          x
        </StyledBtn>
        {cardBacks
          ? cardBacksDetails.map((item) => (
              <Fragment key={item.cardBackId}>
                <ImageWrapper>
                  <StyledImage src={item.img} alt='tutaj jestem' />
                </ImageWrapper>
                <DescWrapper>
                  <Header>Źródło :</Header>
                  <Paragraph>{item.source}</Paragraph>
                  <Header>Jak zdobyć :</Header>
                  <Paragraph>{item.howToGet}</Paragraph>
                </DescWrapper>
              </Fragment>
            ))
          : detailsData.map((item) => (
              <Fragment key={item.cardId}>
                <ImageWrapper>
                  <StyledImage
                    src={`https://art.hearthstonejson.com/v1/render/latest/plPL/512x/${item.cardId}.png`}
                    alt='tutaj jestem'
                  />
                </ImageWrapper>
                <DescWrapper>
                  <Header>Opis karty :</Header>
                  <Paragraph>{item.flavor}</Paragraph>
                  <Header>Artysta :</Header>
                  <Paragraph>{item.artist}</Paragraph>
                </DescWrapper>
              </Fragment>
            ))}
      </Wrapper>
    </Modal>
  );
};

export default CardDetails;
