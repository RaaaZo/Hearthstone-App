import axios from 'axios';
import {
  FETCH_THE_UNGORO_SET_REQUEST,
  FETCH_THE_UNGORO_SET_SUCCESS,
  FETCH_THE_UNGORO_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchUngoroSetRequest = () => {
  return {
    type: FETCH_THE_UNGORO_SET_REQUEST,
  };
};

export const fetchUngoroSetSuccess = (data) => {
  return {
    type: FETCH_THE_UNGORO_SET_SUCCESS,
    payload: data,
  };
};

export const fetchUngoroSetFailure = (error) => {
  return {
    type: FETCH_THE_UNGORO_SET_FAILURE,
    payload: error,
  };
};

export const fetchUngoroSet = () => {
  return (dispatch) => {
    dispatch(fetchUngoroSetRequest());
    axios({
      method: 'GET',
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Journey to Un'Goro`,
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
        dispatch(fetchUngoroSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUngoroSetFailure(error.message));
      });
  };
};
