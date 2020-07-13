import {
  FETCH_ONE_CARD_REQUEST,
  FETCH_ONE_CARD_SUCCESS,
  FETCH_ONE_CARD_FAILURE,
} from "ducks/constants/FetchConstants";

const initialState = {
  loading: false,
  OneCardData: [],
  error: "",
};

const fetchOneCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ONE_CARD_SUCCESS:
      return {
        loading: false,
        OneCardData: action.payload,
        error: "",
      };
    case FETCH_ONE_CARD_FAILURE:
      return {
        loading: false,
        OneCardData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchOneCardReducer;
