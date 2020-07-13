import {
  FETCH_ALL_CARDS_REQUEST,
  FETCH_ALL_CARDS_SUCCESS,
  FETCH_ALL_CARDS_FAILURE,
} from "ducks/constants/FetchConstants";

const initialState = {
  loading: false,
  AllCardsData: [],
  error: "",
};

const fetchAllCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_CARDS_SUCCESS:
      return {
        loading: false,
        AllCardsData: action.payload,
        error: "",
      };
    case FETCH_ALL_CARDS_FAILURE:
      return {
        loading: false,
        AllCardsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchAllCardsReducer;
