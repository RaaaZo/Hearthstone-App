import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import fetchAllCardsReducer from './fetchAllCardsReducer';
import fetchOneCardReducer from './fetchOneCardReducer';
import fetchExpansionsSet from './fetchExpansionsSet';

const rootReducer = combineReducers({
  modalReducer,
  fetchAllCardsReducer,
  fetchOneCardReducer,
  fetchExpansionsSet,
});

export default rootReducer;
