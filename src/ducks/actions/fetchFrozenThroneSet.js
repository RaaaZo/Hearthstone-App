import axios from 'axios';
import {
  FETCH_THE_FROZEN_THRONE_SET_REQUEST,
  FETCH_THE_FROZEN_THRONE_SET_SUCCESS,
  FETCH_THE_FROZEN_THRONE_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchFrozenThroneRequest = () => {
  return {
    type: FETCH_THE_FROZEN_THRONE_SET_REQUEST,
  };
};

export const fetchFrozenThroneSuccess = (data) => {
  return {
    type: FETCH_THE_FROZEN_THRONE_SET_SUCCESS,
    payload: data,
  };
};

export const fetchFrozenThroneFailure = (error) => {
  return {
    type: FETCH_THE_FROZEN_THRONE_SET_FAILURE,
    payload: error,
  };
};

export const fetchFrozenThrone = () => {
  return (dispatch) => {
    dispatch(fetchFrozenThroneRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Goblins vs Gnomes',
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
        dispatch(fetchFrozenThroneSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchFrozenThroneFailure(error.message));
      });
  };
};
