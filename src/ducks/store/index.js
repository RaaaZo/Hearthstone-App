import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchReducer from "ducks/reducers/fetchReducer";

const store = createStore(
  fetchReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
