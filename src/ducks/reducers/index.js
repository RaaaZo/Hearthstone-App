import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({ modalReducer, fetchReducer });

export default rootReducer;
