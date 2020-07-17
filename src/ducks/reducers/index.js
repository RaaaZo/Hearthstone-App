import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import fetchAllCardsReducer from './fetchAllCardsReducer';
import fetchOneCardReducer from './fetchOneCardReducer';
import fetchBasicSet from './fetchBasicSet';
import fetchGoblinsVsGnomesSet from './fetchGoblinsVsGnomesSet';
import fetchFrozenThroneSet from './fetchFrozenThroneSet';
import fetchUngoroSet from './fetchUngoroSet';
import fetchOldGodsSet from './fetchOldGodsSet';
import fetchExplorersSet from './fetchExplorersSet';
import fetchKharazanSet from './fetchKharazanSet';
import fetchGrandTournamentSet from './fetchGrandTournamentSet';
import fetchGadzetanSet from './fetchGadzetanSet';
import fetchBlackrockSet from './fetchBlackrockSet';

const rootReducer = combineReducers({
  modalReducer,
  fetchAllCardsReducer,
  fetchOneCardReducer,
  fetchBasicSet,
  fetchGoblinsVsGnomesSet,
  fetchFrozenThroneSet,
  fetchUngoroSet,
  fetchOldGodsSet,
  fetchExplorersSet,
  fetchKharazanSet,
  fetchGrandTournamentSet,
  fetchGadzetanSet,
  fetchBlackrockSet,
});

export default rootReducer;
