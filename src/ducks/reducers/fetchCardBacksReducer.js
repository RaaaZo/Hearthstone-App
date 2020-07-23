const initialState = {
  loading: true,
  AllCardBacksData: [],
  backDetails: [],
  error: '',
};

const fetchCardBacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARD_BACKS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CARD_BACKS_SUCCESS':
      return {
        loading: false,
        AllCardBacksData: action.payload.data,
        error: '',
      };
    case 'FETCH_CARD_BACKS_FAILURE':
      return {
        loading: false,
        AllCardsData: [],
        error: action.payload,
      };

    case 'GET_BACK_CARD_DATA':
      return {
        ...state,
        backDetails: state.AllCardBacksData.filter(
          (item) => item.cardBackId === action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default fetchCardBacksReducer;
