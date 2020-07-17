import axios from 'axios';
import {
  FETCH_THE_KHARAZAN_SET_REQUEST,
  FETCH_THE_KHARAZAN_SET_SUCCESS,
  FETCH_THE_KHARAZAN_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchKharazanSetRequest = () => {
  return {
    type: FETCH_THE_KHARAZAN_SET_REQUEST,
  };
};

export const fetchKharazanSetSuccess = (data) => {
  return {
    type: FETCH_THE_KHARAZAN_SET_SUCCESS,
    payload: data,
  };
};

export const fetchKharazanSetFailure = (error) => {
  return {
    type: FETCH_THE_KHARAZAN_SET_FAILURE,
    payload: error,
  };
};

export const fetchKharazanSet = () => {
  return (dispatch) => {
    dispatch(fetchKharazanSetRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/One Night in Karazhan',
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
        dispatch(fetchKharazanSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchKharazanSetFailure(error.message));
      });
  };
};
