import {
  FETCH_EXPANSIONS_CARDS_REQUEST,
  FETCH_EXPANSIONS_CARDS_SUCCESS,
  FETCH_EXPANSIONS_CARDS_FAILURE,
} from "ducks/constants/FetchConstants";

const initialState = {
  loading: true,
  ExpansionsCardsData: [],
  error: "",
};

const fetchExpansionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPANSIONS_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EXPANSIONS_CARDS_SUCCESS:
      return {
        loading: false,
        ExpansionsCardsData: action.payload,
        error: "",
      };
    case FETCH_EXPANSIONS_CARDS_FAILURE:
      return {
        loading: false,
        ExpansionsCardsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchExpansionsReducer;
