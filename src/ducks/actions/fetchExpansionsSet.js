import axios from 'axios';
import {
  FETCH_BASIC_SET_REQUEST,
  FETCH_BASIC_SET_SUCCESS,
  FETCH_BASIC_SET_FAILURE,
  FILTER_CARDS_BY_CLASS,
} from 'ducks/constants/FetchConstants';

export const filterCardsByClass = (className) => {
  return {
    type: FILTER_CARDS_BY_CLASS,
    payload: {
      className,
    },
  };
};

export const fetchExpansionsSetRequest = () => {
  return {
    type: FETCH_BASIC_SET_REQUEST,
  };
};

export const fetchExpansionsSetSuccess = (data, setOfCards) => {
  return {
    type: FETCH_BASIC_SET_SUCCESS,
    payload: {
      data,
      setOfCards,
    },
  };
};

export const fetchExpansionsSetFailure = (error, setOfCards) => {
  return {
    type: FETCH_BASIC_SET_FAILURE,
    payload: {
      error,
      setOfCards,
    },
  };
};

export const fetchExpansionsSet = (expansion, setOfCards) => {
  return (dispatch) => {
    dispatch(fetchExpansionsSetRequest());
    axios({
      method: 'GET',
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${expansion}`,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        locale: 'plPL',
        collectible: '1',
      },
    })
      .then((response) => {
        // response.data is the OneCard
        const cardData = response.data;
        dispatch(fetchExpansionsSetSuccess(cardData, setOfCards));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchExpansionsSetFailure(error.message, setOfCards));
      });
  };
};
