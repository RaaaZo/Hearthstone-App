import axios from 'axios';
import {
  FETCH_THE_OLD_GODS_SET_REQUEST,
  FETCH_THE_OLD_GODS_SET_SUCCESS,
  FETCH_THE_OLD_GODS_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchOldGodsSetRequest = () => {
  return {
    type: FETCH_THE_OLD_GODS_SET_REQUEST,
  };
};

export const fetchOldGodsSetSuccess = (data) => {
  return {
    type: FETCH_THE_OLD_GODS_SET_SUCCESS,
    payload: data,
  };
};

export const fetchOldGodsSetFailure = (error) => {
  return {
    type: FETCH_THE_OLD_GODS_SET_FAILURE,
    payload: error,
  };
};

export const fetchOldGodsSet = () => {
  return (dispatch) => {
    dispatch(fetchOldGodsSetRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Whispers of the Old Gods',
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
        dispatch(fetchOldGodsSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchOldGodsSetFailure(error.message));
      });
  };
};
