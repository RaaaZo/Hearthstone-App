import {
  FETCH_BASIC_SET_FAILURE,
  FETCH_BASIC_SET_SUCCESS,
  FETCH_BASIC_SET_REQUEST,
  FILTER_CARDS_BY_CLASS,
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
  oneClassCards: [],
  class: '',
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

    case FILTER_CARDS_BY_CLASS:
      return {
        ...state,
        class: action.payload.className,
        oneClassCards: state[`${state.cardsLogic}CardsData`].filter(
          (item) => item.playerClass === action.payload.className
        ),
      };
    default:
      return state;
  }
};

export default fetchExpansionsSet;
