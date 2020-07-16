import {
  FETCH_THE_UNGORO_SET_REQUEST,
  FETCH_THE_UNGORO_SET_SUCCESS,
  FETCH_THE_UNGORO_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

const initialState = {
  loading: true,
  CardsData: [],
  error: '',
};

const fetchUngoroSet = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THE_UNGORO_SET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_THE_UNGORO_SET_SUCCESS:
      return {
        loading: false,
        CardsData: action.payload,
        error: '',
      };
    case FETCH_THE_UNGORO_SET_FAILURE:
      return {
        loading: false,
        CardsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUngoroSet;
