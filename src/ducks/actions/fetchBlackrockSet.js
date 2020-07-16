import axios from 'axios';
import {
  FETCH_BLACKROCK_MOUNTAIN_SET_REQUEST,
  FETCH_BLACKROCK_MOUNTAIN_SET_SUCCESS,
  FETCH_BLACKROCK_MOUNTAIN_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchBlackrockSetRequest = () => {
  return {
    type: FETCH_BLACKROCK_MOUNTAIN_SET_REQUEST,
  };
};

export const fetchBlackrockSetSuccess = (data) => {
  return {
    type: FETCH_BLACKROCK_MOUNTAIN_SET_SUCCESS,
    payload: data,
  };
};

export const fetchBlackrockSetFailure = (error) => {
  return {
    type: FETCH_BLACKROCK_MOUNTAIN_SET_FAILURE,
    payload: error,
  };
};

export const fetchBlackrockSet = () => {
  return (dispatch) => {
    dispatch(fetchBlackrockSetRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Blackrock Mountain',
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
        dispatch(fetchBlackrockSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchBlackrockSetFailure(error.message));
      });
  };
};
