import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import fetchAllCardsReducer from "./fetchAllCardsReducer";
import fetchOneCardReducer from "./fetchOneCardReducer";
import fetchExpansionsSet from "./fetchExpansionsSet";
import fetchCardBacksReducer from "./fetchCardBacksReducer";

const rootReducer = combineReducers({
  modalReducer,
  fetchAllCardsReducer,
  fetchOneCardReducer,
  fetchExpansionsSet,
  fetchCardBacksReducer,
});

export default rootReducer;
