import {
  FETCH_BLACKROCK_MOUNTAIN_SET_REQUEST,
  FETCH_BLACKROCK_MOUNTAIN_SET_SUCCESS,
  FETCH_BLACKROCK_MOUNTAIN_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

const initialState = {
  loading: true,
  CardsData: [],
  error: '',
};

const fetchBlackrockSet = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLACKROCK_MOUNTAIN_SET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLACKROCK_MOUNTAIN_SET_SUCCESS:
      return {
        loading: false,
        CardsData: action.payload,
        error: '',
      };
    case FETCH_BLACKROCK_MOUNTAIN_SET_FAILURE:
      return {
        loading: false,
        CardsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchBlackrockSet;
