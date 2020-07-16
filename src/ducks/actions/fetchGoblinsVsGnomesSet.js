import axios from 'axios';
import {
  FETCH_CURSE_OF_NAXXRAMAS_SET_REQUEST,
  FETCH_CURSE_OF_NAXXRAMAS_SET_SUCCESS,
  FETCH_CURSE_OF_NAXXRAMAS_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchNaxxramasSetRequest = () => {
  return {
    type: FETCH_CURSE_OF_NAXXRAMAS_SET_REQUEST,
  };
};

export const fetchNaxxramasSetSuccess = (data) => {
  return {
    type: FETCH_CURSE_OF_NAXXRAMAS_SET_SUCCESS,
    payload: data,
  };
};

export const fetchNaxxramasSetFailure = (error) => {
  return {
    type: FETCH_CURSE_OF_NAXXRAMAS_SET_FAILURE,
    payload: error,
  };
};

export const fetchNaxxramasSet = () => {
  return (dispatch) => {
    dispatch(fetchNaxxramasSetRequest());
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
        dispatch(fetchNaxxramasSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchNaxxramasSetFailure(error.message));
      });
  };
};
