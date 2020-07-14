import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import fetchAllCardsReducer from "./fetchAllCardsReducer";
import fetchOneCardReducer from "./fetchOneCardReducer";
import fetchExpansionsReducer from "./FetchExpansionsReducer";

const rootReducer = combineReducers({
  modalReducer,
  fetchAllCardsReducer,
  fetchOneCardReducer,
  fetchExpansionsReducer,
});

export default rootReducer;
