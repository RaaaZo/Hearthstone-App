import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import fetchAllCardsReducer from "./fetchAllCardsReducer";
import fetchOneCardReducer from "./fetchOneCardReducer";

const rootReducer = combineReducers({
  modalReducer,
  fetchAllCardsReducer,
  fetchOneCardReducer,
});

export default rootReducer;
