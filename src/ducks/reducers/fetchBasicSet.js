import {
  FETCH_BASIC_SET_FAILURE,
  FETCH_BASIC_SET_SUCCESS,
  FETCH_BASIC_SET_REQUEST,
} from 'ducks/constants/FetchConstants';

const initialState = {
  loading: true,
  BasicCardsData: [],
  error: '',
};

const fetchBasicSet = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BASIC_SET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BASIC_SET_SUCCESS:
      return {
        loading: false,
        BasicCardsData: action.payload,
        error: '',
      };
    case FETCH_BASIC_SET_FAILURE:
      return {
        loading: false,
        BasicCardsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchBasicSet;
