import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFilterModal,
  toggleClassModal,
  closeFilterModal,
} from 'ducks/actions/ModalActions';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1280px;
  padding: 30px;
  background-color: ${({ theme: { classColors } }) => classColors.Hunter};
  border-radius: 15px;
`;

const StyledCardSetUl = styled.ul`
  display: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
    `}
`;
const StyledClassUl = styled.ul`
  display: none;

  ${({ isOpenClass }) =>
    isOpenClass &&
    css`
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
    `}
`;

const StyledListItems = styled.li`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  border-radius: 15px;
  list-style: none;
  cursor: pointer;
`;

const StyledHeader = styled.h3`
  padding: 20px 40px;
  border-radius: 15px;
  text-align: center;
  background-color: ${({ theme }) => theme.darkBrown};
  cursor: pointer;
`;

const Filters = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const isOpenCardSetFilter = useSelector(
    (state) => state.modalReducer.isOpenCardSetFilter
  );
  const isOpenClassFilter = useSelector(
    (state) => state.modalReducer.isOpenClassFilter
  );

  const handleCloseDispatchAndPushRoute = (url) => {
    dispatch(closeFilterModal());
    push(`/${url}`);
  };

  return (
    <Wrapper>
      <h3>Filtry :</h3>
      <div>
        <StyledHeader onClick={() => dispatch(toggleClassModal())}>
          Klasy
        </StyledHeader>
        <StyledClassUl isOpenClass={isOpenClassFilter}>
          <StyledListItems>Druid</StyledListItems>
          <StyledListItems>Hunter</StyledListItems>
          <StyledListItems>Mage</StyledListItems>
          <StyledListItems>Paladin</StyledListItems>
          <StyledListItems>Priest</StyledListItems>
          <StyledListItems>Rogue</StyledListItems>
          <StyledListItems>Shaman</StyledListItems>
          <StyledListItems>Warlock</StyledListItems>
          <StyledListItems>Warrior</StyledListItems>
        </StyledClassUl>
      </div>

      <div>
        <StyledHeader onClick={() => dispatch(toggleFilterModal())}>
          Dodatki
        </StyledHeader>
        <StyledCardSetUl isOpen={isOpenCardSetFilter}>
          <StyledListItems
            onClick={() => handleCloseDispatchAndPushRoute('expansions')}
          >
            Podstawowe
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('goblins_vs_gnomes_expansion')
            }
          >
            Gobliny vs Gnomy
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('blackrock_mountain')
            }
          >
            Czarna Góra
          </StyledListItems>
          <StyledListItems
            onClick={() => handleCloseDispatchAndPushRoute('grand_tournament')}
          >
            Wielki Turniej
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('league_of_explorers')
            }
          >
            Liga Odkrywców
          </StyledListItems>
          <StyledListItems
            onClick={() => handleCloseDispatchAndPushRoute('old_gods')}
          >
            Przedwieczni Bogowie
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('one_night_in_kharazan')
            }
          >
            Pewnej nocy w Karazhanie
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('mean_streets_of_gadzetan')
            }
          >
            Ciemne zaułki Gadżetonu
          </StyledListItems>
          <StyledListItems
            onClick={() => handleCloseDispatchAndPushRoute('journey_to_ungoro')}
          >
            Podróż do wnętrza Un'Goro
          </StyledListItems>
          <StyledListItems
            onClick={() =>
              handleCloseDispatchAndPushRoute('knights_of_the_frozen_throne')
            }
          >
            Rycerze Mroźnego Tronu
          </StyledListItems>
        </StyledCardSetUl>
      </div>
    </Wrapper>
  );
};

export default Filters;
