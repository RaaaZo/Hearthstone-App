import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFilterModal,
  toggleClassModal,
  closeFilterModal,
} from 'ducks/actions/ModalActions';
import { filterCardsByClass } from 'ducks/actions/fetchExpansionsSet';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  padding: 30px;
  background-color: #054a29;
  border-radius: 15px;

  @media (min-width: 560px) {
    flex-flow: row;
    justify-content: space-around;
    align-items: flex-start;
  }
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
  margin-top: 15px;
  padding: 10px;
  text-align: center;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  border-radius: 15px;
  list-style: none;
  cursor: pointer;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const StyledHeader = styled.h3`
  padding: 20px 40px;
  margin-top: 30px;
  border-radius: 15px;
  text-align: center;
  background-color: #ff0054;
  background-image: linear-gradient(326deg, #ffcad4 0%, #ff0054 74%);
  cursor: pointer;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media (min-width: 560px) {
    margin-top: 0;
  }

  ${({ filter }) =>
    filter &&
    css`
      background-image: none;
      background-color: transparent;
      margin-top: 0;
      cursor: default;
    `}

  @media(min-width: 768px) {
    padding: 20px 50px;
  }

  @media (min-width: 1024px) {
    padding: 20px 60px;
  }

  @media (min-width: 1440px) {
    padding: 20px 70px;
  }
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

  const match = useRouteMatch();

  return (
    <Wrapper>
      <StyledHeader filter>Filtry :</StyledHeader>
      <div>
        <StyledHeader onClick={() => dispatch(toggleClassModal())}>
          Klasy
        </StyledHeader>
        <StyledClassUl isOpenClass={isOpenClassFilter}>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Druid'));
              push(`${match.url}/druid`);
              dispatch(closeFilterModal());
            }}
          >
            Druid
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Hunter'));
              push(`${match.url}/hunter`);
              dispatch(closeFilterModal());
            }}
          >
            Hunter
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Mage'));
              push(`${match.url}/mage`);
              dispatch(closeFilterModal());
            }}
          >
            Mage
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Paladin'));
              push(`${match.url}/paladin`);
              dispatch(closeFilterModal());
            }}
          >
            Paladin
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Priest'));
              push(`${match.url}/priest`);
              dispatch(closeFilterModal());
            }}
          >
            Priest
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Rogue'));
              push(`${match.url}/rogue`);
              dispatch(closeFilterModal());
            }}
          >
            Rogue
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Shaman'));
              push(`${match.url}/shaman`);
              dispatch(closeFilterModal());
            }}
          >
            Shaman
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Warlock'));
              push(`${match.url}/warlock`);
              dispatch(closeFilterModal());
            }}
          >
            Warlock
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Warrior'));
              push(`${match.url}/warrior`);
              dispatch(closeFilterModal());
            }}
          >
            Warrior
          </StyledListItems>
          <StyledListItems
            onClick={() => {
              dispatch(filterCardsByClass('Neutral'));
              push(`${match.url}/neutral`);
              dispatch(closeFilterModal());
            }}
          >
            Neutralne
          </StyledListItems>
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
            onClick={() => handleCloseDispatchAndPushRoute('classic')}
          >
            Klasyczne
          </StyledListItems>
          <StyledListItems
            onClick={() => handleCloseDispatchAndPushRoute('naxxramas')}
          >
            Naxxramas
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
