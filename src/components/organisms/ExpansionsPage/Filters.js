import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Modal from 'components/atoms/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFilterModal,
  closeFilterModal,
} from 'ducks/actions/ModalActions';

const Wrapper = styled.div`
  max-width: 1280px;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  position: absolute;
  display: none;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  padding: 30px 0;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.darkBrown};
  z-index: 99999;
  border-radius: 15px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  padding: 30px 50px;
  background-color: ${({ theme }) => theme.darkBrown};
  cursor: pointer;
  border-radius: 15px;
  transition: color 0.2s linear;
  z-index: 9999;

  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;

const StyledBtn = styled(Button)`
  width: 80%;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  margin: 20px;
  padding: 30px;
  cursor: pointer;

  @media (min-width: 425px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
    padding: 15px 25px;
  }
`;

const StyledModal = styled(Modal)`
  display: none;
  background-color: hsla(0, 0%, 0%, 0.4);

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `}
`;

const Filters = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const isOpen = useSelector((state) => state.modalReducer.isOpenFilter);

  const handleCloseDispatchAndPushRoute = (url) => {
    dispatch(closeFilterModal());
    push(`/${url}`);
  };

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onClick={() => dispatch(closeFilterModal())}
      />
      <Wrapper>
        <div style={{ position: 'relative' }}>
          <StyledParagraph onClick={() => dispatch(toggleFilterModal())}>
            Wybierz dodatek
          </StyledParagraph>
          <InnerWrapper isOpen={isOpen}>
            <StyledBtn
              onClick={() => handleCloseDispatchAndPushRoute('expansions')}
            >
              Podstawowe
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('goblins_vs_gnomes_expansion')
              }
            >
              Gobliny vs Gnomy
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('blackrock_mountain')
              }
            >
              Czarna Góra
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('grand_tournament')
              }
            >
              Wielki Turniej
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('league_of_explorers')
              }
            >
              Liga Odkrywców
            </StyledBtn>
            <StyledBtn
              onClick={() => handleCloseDispatchAndPushRoute('old_gods')}
            >
              Przedwieczni Bogowie
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('one_night_in_kharazan')
              }
            >
              Pewnej nocy w Karazhanie
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('mean_streets_of_gadzetan')
              }
            >
              Ciemne zaułki Gadżetonu
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('journey_to_ungoro')
              }
            >
              Podróż do wnętrza Un'Goro
            </StyledBtn>
            <StyledBtn
              onClick={() =>
                handleCloseDispatchAndPushRoute('knights_of_the_frozen_throne')
              }
            >
              Rycerze Mroźnego Tronu
            </StyledBtn>
          </InnerWrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Filters;
