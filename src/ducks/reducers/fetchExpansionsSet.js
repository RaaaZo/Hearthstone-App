import {
  FETCH_BASIC_SET_FAILURE,
  FETCH_BASIC_SET_SUCCESS,
  FETCH_BASIC_SET_REQUEST,
} from 'ducks/constants/FetchConstants';

const initialState = {
  loading: true,
  basicCardsData: [],
  naxxramasCardsData: [],
  goblinsCardsData: [],
  blackrockCardsData: [],
  tournamentCardsData: [],
  explorersCardsData: [],
  oldGodsCardsData: [],
  kharazanCardsData: [],
  gadzetonCardsData: [],
  ungoroCardsData: [],
  frozenThroneCardsData: [],
  cardsLogic: '',
  error: '',
};

const fetchExpansionsSet = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BASIC_SET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BASIC_SET_SUCCESS:
      return {
        ...state,
        loading: false,
        [`${action.payload.setOfCards}CardsData`]: action.payload.data,
        cardsLogic: action.payload.setOfCards,
      };
    case FETCH_BASIC_SET_FAILURE:
      return {
        ...state,
        loading: false,
        [`${action.payload.setOfCards}CardsData`]: [],
        error: action.payload,
        cardsLogic: '',
      };
    default:
      return state;
  }
};

export default fetchExpansionsSet;
