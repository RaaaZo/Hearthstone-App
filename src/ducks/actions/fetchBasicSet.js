import axios from 'axios';
import {
  FETCH_BASIC_SET_REQUEST,
  FETCH_BASIC_SET_SUCCESS,
  FETCH_BASIC_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchBasicSetRequest = () => {
  return {
    type: FETCH_BASIC_SET_REQUEST,
  };
};

export const fetchBasicSetSuccess = (data) => {
  return {
    type: FETCH_BASIC_SET_SUCCESS,
    payload: data,
  };
};

export const fetchBasicSetFailure = (error) => {
  return {
    type: FETCH_BASIC_SET_FAILURE,
    payload: error,
  };
};

export const fetchBasicSet = () => {
  return (dispatch) => {
    dispatch(fetchBasicSetRequest());
    axios({
      method: 'GET',
      url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Basic',
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
        dispatch(fetchBasicSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchBasicSetFailure(error.message));
      });
  };
};
